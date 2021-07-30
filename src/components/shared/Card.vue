<template>
  <div class="card">
    <slot></slot>
  </div>
</template>
<script>
import Avatar from '@components/shared/Avatar.vue'

export default {
  name: 'CardKota',
  components: {
    Avatar,
  },
  props: {
    src: String,
    title: String,
    showName: {
      type: Boolean,
      default: () => true,
    },
    shadow: {
      type: Boolean,
      default: () => false,
    },
    size: {
      type: String,
      default: () => '',
    },
  },
}
</script>
<style lang="scss" scoped>
.card {
  padding: 8px;
  background-color: #fff;
  padding: 8px 16px;
  box-shadow: 0px 4px 20px rgba(225, 225, 225, 0.5);
  flex: 0 1 33%;
  @include sm {
    border-radius: 8px;
  }
}
</style>
