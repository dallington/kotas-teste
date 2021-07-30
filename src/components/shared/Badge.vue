<template>
  <div
    class="badge"
    :class="[state ? `badge--${state}` : '']"
    v-if="!!number.length"
  >
    <span class="circle">{{ number }}</span>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'Badge',
  props: {
    number: String,
    label: String,
    state: {
      type: String,
      default: () => '',
    },
  },
}
</script>
<style lang="scss" scoped>
.badge {
  display: inline-flex;
  position: relative;
  flex-shrink: 0;
  vertical-align: middle;
  .circle {
    min-width: 20px;
    height: 20px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    align-content: center;
    z-index: 1;
    position: absolute;
    top: 0;
    right: 0;
    padding: 0 6px;
    font-size: 11px;
    font-family: $fontFamily;
    border-radius: 10px;
    transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    transform: scale(1) translate(0%, -50%);
    color: #fff;
    background-color: $color-primary;
  }
  &--error {
    &:hover {
      color: $color-error;
    }
    .circle {
      color: #fff;
      background-color: $color-error;
    }
  }
}
</style>
