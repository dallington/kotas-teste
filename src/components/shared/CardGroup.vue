<template>
  <div class="card-group">
    <div class="inner">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Card Group',
}
</script>
<style lang="scss" scoped>
.card-group {
  margin: 20px 0;
  .inner {
    display: flex;
    overflow-x: scroll;
    gap: 12px;
    scrollbar-width: thin;
    scrollbar-color: #d3d3d3 transparent;
    padding-bottom: 20px;
    padding: 10px;
  }
  ::v-deep(.card) {
    flex: 0 1 auto;
    min-width: 150px;
  }
  ::v-deep(.card .title) {
    font-size: 14px;
  }
  .inner::-webkit-scrollbar {
    height: 10px;
  }
  .inner::-webkit-scrollbar-thumb {
    background-color: #d3d3d3;
    border-radius: 20px;
    border: 1px solid transparent;
  }
  .inner::-webkit-scrollbar-track {
    background: transparent;
  }
}
</style>
