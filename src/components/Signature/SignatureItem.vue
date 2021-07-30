<template>
  <li class="signature__item" :class="{ 'no-label': !label && !$slots.title }">
    <div class="signature__item-inner">
      <div class="signature__item-label" v-if="label || $slots.title">
        <slot name="title">{{ label }}</slot>
      </div>
      <div class="signature__item-content">
        <slot>{{ content }}</slot>
      </div>
    </div>
  </li>
</template>
<script>
export default {
  props: {
    label: String,
    content: String,
  },
}
</script>
<style lang="scss" scoped>
.signature__item {
  font-family: $fontFamily;
  &-inner {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    gap: 16px;
    font-size: 14px;
    line-height: 110%;
  }

  &-label {
    flex-grow: 1;
    color: $color-gray;
    font-size: 14px;
    line-height: 110%;
    text-align: left;
    display: flex;
    align-items: center;
    gap: 5px;
  }
  &-content {
    color: #000;
    width: 100%;
  }

  &-label ~ &-content {
    text-align: right;
    width: auto;
  }
}
</style>
