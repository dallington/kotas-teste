<template>
  <component
    :is="isType"
    :type="buttonType"
    :href="href"
    class="ui-button"
    :class="ClassColor"
  >
    <slot />
  </component>
</template>
<script>
import { computed } from 'vue'

export default {
  props: {
    href: {
      type: String,
      default: null,
    },
    styled: String,
    size: {
      type: String,
      default: null,
    },
    color: String,
    rounded: String,
    type: String,
  },
  setup(props) {
    const isType = computed(() => {
      if (props.href) {
        return 'a'
      }
      return 'button'
    })

    const buttonType = computed(() =>
      isType.value === 'button' ? props.type || 'button' : null
    )

    const colors = {
      success: 'ui-button--success',
      danger: 'ui-button--danger',
      primary: 'ui-button--warning',
    }

    const ClassColor = computed(() => colors[props.color] || colors.primary)

    return {
      isType,
      buttonType,
      ClassColor,
    }
  },
}
</script>
<style lang="scss" scoped>
.ui-button {
  width: 100%;
  background: $color-primary;
  border-radius: 5px;
  transition: background 0.35s ease-in-out;
  color: #fff;
  padding: 16px;
  font-family: $fontFamily;
  font-weight: bold;
  font-size: 14px;
  line-height: 110%;
  &:hover {
    background: darken($color-primary, 10%);
  }
  &--error {
    background: $color-error;
    &:hover {
      background: darken($color-error, 5%);
    }
  }
  &--success {
    background: $color-success;
    &:hover {
      background: darken($color-success, 5%);
    }
  }
}
</style>
