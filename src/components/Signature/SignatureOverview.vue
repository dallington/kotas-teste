<template>
  <div class="signature-overview">
    <slot></slot>
  </div>
</template>
<script>
import { ref, watch } from 'vue'
import { formatMoney } from '@/utils'
import IconInfo from '@assets/svgs/information.svg'
import useSweetAlert from '@/utils/sweetAlert'
import SignatureItem from './SignatureItem.vue'
import SignatureButton from './SignatureButton.vue'

export default {
  props: {
    kotasAvailable: Number,
    pricePerKota: Number,
  },
  components: { SignatureItem, SignatureButton, IconInfo },
  setup(props) {
    const qtdKotas = ref(1)
    const priceTotalSignature = ref(props.pricePerKota)
    const isValid = () =>
      qtdKotas.value > 0 && qtdKotas.value <= props.kotasAvailable

    const addKota = () => {
      qtdKotas.value = isValid() ? qtdKotas.value + 1 : qtdKotas.value
    }
    const reduceKota = () => {
      qtdKotas.value = isValid() ? qtdKotas.value - 1 : qtdKotas.value
    }

    const disabledAdd = () => qtdKotas.value >= props.kotasAvailable
    const disabledReduce = () => qtdKotas.value <= 1

    const updatePriceTotal = () => {
      priceTotalSignature.value = parseFloat(
        parseFloat(qtdKotas.value) * parseFloat(props.pricePerKota)
      )
    }
    watch(qtdKotas, () => updatePriceTotal())

    const pricePerKotaFormatted = formatMoney(props.pricePerKota)
    return {
      qtdKotas,
      addKota,
      reduceKota,
      disabledAdd,
      disabledReduce,
      priceTotalSignature,
      formatMoney,
      pricePerKotaFormatted,
      useSweetAlert,
    }
  },
}
</script>
<style lang="scss" scoped>
.signature-wrap {
  @include sm {
    display: none;
  }
}
.signature {
  display: flex;
  flex-direction: column;
  &__item:not(:first-child):not(.no-border) {
    border-top: 1px solid #e1e1e1;
  }
}
.font-bold {
  font-weight: 700;
}
.text-black {
  color: #000;
}
.icon-information svg {
  width: 16px;
  height: 16px;
}
.ind-qtdKotas {
  font-size: 14px;
  font-weight: normal;
  color: #000;
}
.btn-qtd {
  font-family: $fontFamily;
  background: $color-primary;
  border-radius: 50%;
  margin-left: 5px;
  span {
    font-size: 14px;
    line-height: 110%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 2px 3px;
    width: 17px;
    height: 17px;
    color: #fff;
  }
  &[disabled] {
    pointer-events: none;
    background: $color-gray;
    opacity: 0.2;
  }
}
.steps {
  width: 100%;
  display: flex;
  justify-content: space-between;
  &:before {
    /* content: '';
    width: calc(100% - 30%);
    position: absolute;
    height: 2px;
    background: #000;
    top: 54%;
    left: 15%;
    z-index: 0; */
  }
  &__item {
    position: relative;
    overflow: hidden;
    .line {
      content: '';
      width: 100px;
      position: absolute;
      height: 1px;
      background: #01b1ec;
      top: 10px;
      z-index: 0;
    }
    &:first-child .line {
      width: 50px;
      left: 20px;
    }
    &:last-child .line {
      width: 50px;
      left: -50px;
    }
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    font-family: $fontFamilySec;
    &-price {
      color: $color-dark-gray;
      font-size: 10px;
      line-height: 150%;
    }
    &-price.text-success {
      color: $color-success;
    }
    &-label {
      font-weight: 300;
      font-size: 8px;
      line-height: 120%;
    }
    &-indicator {
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      &::before {
        content: '';
        width: 10px;
        height: 10px;
        background: #f1f4f5;
        border: 1px solid #e1e1e1;
        border-radius: 50%;
        z-index: 10;
      }
    }
    &-indicator.is-active {
      &::before {
        width: 20px;
        height: 20px;
        background: #fff;
        border: 1px solid $color-primary;
      }
      &:after {
        content: '';
        width: 10px;
        height: 10px;
        background: $color-primary;
        border: 1px solid $color-primary;
        border-radius: 50%;
        position: absolute;
        z-index: 10;
      }
    }
  }
}
</style>
