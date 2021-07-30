<template>
  <div class="box">
    <div class="box__inner">
      <BoxTitle v-if="title || $slots.title">
        <slot name="title">{{ title }}</slot>
      </BoxTitle>
      <div class="box__content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
import BoxTitle from '@components/shared/Box/BoxTitle.vue'

export default {
  components: {
    BoxTitle,
  },
  props: {
    title: String,
  },
  setup() {
    return {}
  },
}
</script>
<style lang="scss" scoped>
.box--no-padding {
  padding: 0;

  .box__content,
  .box__title {
    padding: 0;
  }
}
.box {
  background-color: #fff;
  padding: 8px 16px;
  box-shadow: 0px 4px 20px rgba(225, 225, 225, 0.5);
  @include sm {
    border-radius: 8px;
  }

  &__inner {
    position: relative;
  }
  &__title {
    font-family: $fontFamily;
    font-weight: bold;
    font-size: 14px;
    line-height: 110%;
    padding: 16px;
    border-bottom: 1px solid #f1f4f5;
    color: #000000;
  }
  &__content {
    padding: 0;
  }
  &__title ~ &__content {
    padding: 8px 0;
  }
}

.iconInformation {
  position: absolute;
  top: 8px;
  right: 0;
}
.title {
  color: #141728;
  font-family: $fontFamily;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 110%;
  margin-top: 5px;
}
.description {
  color: #616161;
  font-family: $fontFamily;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  max-width: 327px;
  margin: 16px auto;
  padding: 8px 0;
}
.flex {
  display: flex;
  justify-content: space-between;
  margin-top: 21px;
}
.flex > div {
  flex: 0 1 33%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
.flex > div + div {
  border-left: 1px solid #e1e1e1;
}

.flex h3 {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.flex .big-title {
  font-family: $fontFamily;
  font-weight: bold;
  font-size: 24px;
  line-height: 110%;
  color: #141728;
}
.flex .currency {
  font-weight: 600;
  font-size: 10px;
  line-height: 1;
}

.flex .ref-number {
  font-family: 'Quicksand', sans-serif;
  font-weight: 300;
  font-size: 12px;
  line-height: 120%;
  margin-top: 7px;
  color: #616161;
}
.label {
  font-family: $fontFamily;
  background: #f1f4f5;
  border-radius: 25px;
  font-size: 10px;
  line-height: 120%;
  font-weight: 400;
  padding: 5px 8px;
  min-width: 125px;
  display: inline-block;
}
</style>
