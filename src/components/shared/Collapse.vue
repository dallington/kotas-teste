<template>
  <div class="collapse" :class="{ 'is-expanded': isExpanded }" ref="collapse">
    <div
      class="collapse__header"
      :aria-disabled="disabled"
      :aria-expanded="isExpanded"
      :aria-controls="`el-collapse-content-${name}`"
      tabindex="0"
      role="tab"
      @click="handleClick"
    >
      <div class="collapse__title">
        <h3>{{ title }}</h3>
      </div>
      <div class="collapse__icon" :class="{ 'is-expanded': isExpanded }">
        <slot name="icon">
          <span :class="{ 'is-expanded': isExpanded }"></span>
        </slot>
      </div>
    </div>
    <div
      role="tabpanel"
      class="collapse__content"
      aria-hidden="true"
      :aria-labelledby="`el-collapse-head-${name}`"
      :id="`el-collapse-content-${name}`"
    >
      <slot></slot>
    </div>
  </div>
</template>
<script>
import { ref, toRefs } from 'vue'
import { hashCode } from '@/utils/'
import handleCollapse from '@/utils/collapse'

export default {
  props: {
    title: String,
    name: {
      type: String,
      default: () => `${hashCode('refname')}`,
    },
    disabled: {
      type: Boolean,
      default: () => false,
    },
    expanded: {
      type: Boolean,
      default: () => false,
    },
  },
  setup(props) {
    const collapse = ref(null)

    const { expanded } = toRefs(props)
    const isExpanded = ref(expanded.value)
    const handleClick = () => {
      const contentCollapse = collapse.value.querySelector('.collapse__content')
      handleCollapse(contentCollapse, isExpanded.value)
      isExpanded.value = !isExpanded.value
    }
    return {
      collapse,
      handleClick,
      isExpanded,
    }
  },
}
</script>
<style lang="scss" scoped>
.collapse {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  &__header {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 8px 0px;
    border-bottom: 1px solid transparent;
  }
  &__title {
    display: flex;
    justify-content: center;
    flex-grow: 1;
    transition: margin 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    cursor: pointer;

    h3 {
      font-family: 'Mulish', sans-serif;
      font-weight: bold;
      font-size: 14px;
      color: #000000;
    }
  }
  &__icon {
    position: relative;
    color: #000;
    span {
      width: 12px;
      height: 12px;
      display: block;
      &:before,
      &:after {
        content: '';
        position: absolute;
        background-color: currentColor;
        transition: transform 0.25s ease-out;
      }

      /* Vertical line */
      &:before {
        top: 0;
        left: 50%;
        width: 2px;
        height: 100%;
        margin-left: -1px;
      }

      /* horizontal line */
      &:after {
        top: 50%;
        left: 0;
        width: 100%;
        height: 2px;
        margin-top: -1px;
      }
    }
  }
  &__content {
    height: 0;
    overflow: hidden;
    font-family: $fontFamily;
    font-weight: 400;
    font-size: 13px;
    text-align: left;
  }
  &.is-expanded {
    .collapse__header {
      border-color: #f1f4f5;
    }
    .collapse__icon {
      span {
        &:before {
          transform: rotate(90deg);
        }
        &:after {
          transform: rotate(180deg);
        }
      }
    }
    .collapse__content {
      padding: 10px 0;
    }
  }
}
</style>
