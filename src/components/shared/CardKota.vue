<template>
  <div class="card-kota">
    <Avatar>
      <slot name="service"></slot>
    </Avatar>
    <h2 class="title">
      <slot name="title">{{ title }}</slot>
    </h2>
    <p class="description" v-if="$slots.description">
      <slot name="description"></slot>
    </p>
    <span class="label" v-if="$slots.label"><slot name="label"></slot></span>
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
.card-kota {
  padding: 8px;
  .title {
    color: #141728;
    font-family: 'Mulish', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 110%;
    margin-top: 5px;
  }
  .description {
    color: #616161;
    font-family: 'Mulish', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    max-width: 327px;
    margin: 16px auto;
    padding: 8px 0;
  }
  .label {
    font-family: 'Mulish', sans-serif;
    background: #f1f4f5;
    border-radius: 25px;
    font-size: 10px;
    line-height: 120%;
    font-weight: 400;
    padding: 5px 8px;
    min-width: 125px;
    display: inline-block;
  }
}
</style>
