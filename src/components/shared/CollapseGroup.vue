<template>
  <div class="collapse-group">
    <slot></slot>
  </div>
</template>
<script>
import IconPlus from '@assets/svgs/icon-plus.svg'
import IconMinus from '@assets/svgs/icon-minus.svg'
import { ref, toRefs } from 'vue'
import { hashCode } from '@/utils/'
import handleCollapse from '@/utils/collapse'

export default {
  components: { IconPlus, IconMinus },
  /* props: {
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
  }, */
}
</script>
<style lang="scss" scoped>
.collapse-group {
  ::v-deep(.collapse) {
    padding: 0 8px;
  }
  ::v-deep(.collapse:not(:first-child)) {
    border-top: 1px solid #f1f1f1;
  }
  ::v-deep(.collapse__header) {
    border-bottom: 1px solid transparent !important;
    padding: 11px 0px;
  }
  ::v-deep(.collapse__title) {
    justify-content: flex-start;
  }
}
</style>
