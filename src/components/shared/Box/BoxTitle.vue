<template>
  <h2 class="box__title">
    <slot></slot>
  </h2>
</template>
<style lang="scss">
.box__title {
  font-family: $fontFamily;
  font-weight: bold;
  font-size: 14px;
  line-height: 110%;
  padding: 8px 16px;
  border-bottom: 1px solid #f1f4f5;
}
</style>
