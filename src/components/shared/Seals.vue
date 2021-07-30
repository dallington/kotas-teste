<template>
  <div class="seals" v-if="total > 0">
    <div class="seals__item">
      <span v-for="(item, index) in total" :key="index">
        <ThophyIcon />
      </span>
    </div>
    <span class="seals__desc" v-if="label">{{ label }}</span>
  </div>
</template>
<script>
import ThophyIcon from '@assets/svgs/trophy.svg'

export default {
  name: 'Seals',
  components: { ThophyIcon },
  props: {
    total: Number,
    label: String,
  },
}
</script>
<style lang="scss" scoped>
.seals {
  margin: 36px 0 26px;
  .seals__item {
    display: flex;
    gap: 8px;
    justify-content: center;
  }
  .seals__desc {
    font-family: $fontFamily;
    font-size: 12px;
    line-height: 120%;
    color: $color-gray;
  }
}
</style>
