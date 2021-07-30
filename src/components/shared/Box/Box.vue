<template>
  <BoxBase
    :class="{ 'box--no-padding': noPadding, 'box--no-shadow': noShadow }"
  >
    <template #title v-if="title">
      {{ title }}
    </template>
    <slot></slot>
  </BoxBase>
</template>
<script>
import BoxBase from '@components/shared/Box/BoxBase.vue'

export default {
  components: {
    BoxBase,
  },
  props: {
    title: String,
    noPadding: Boolean,
    noShadow: Boolean,
  },
  setup() {
    return {}
  },
}
</script>
<style lang="scss">
.box--no-padding {
  padding: 0;
}
.box--no-shadow {
  box-shadow: unset;
}
</style>
