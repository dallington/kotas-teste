<template>
  <div class="signature-wrap">
    <div
      class="expand"
      :class="{ 'is-expanded': isExpanded }"
      ref="mobileExpanded"
      :aria-expanded="isExpanded"
    >
      <Box no-shadow>
        <SignatureInfo
          v-bind="$props"
          @updatePriceTotal="updatePriceTotalSignature"
        />
      </Box>
      <span class="text-help hidden md:block">Você ainda não será cobrado</span>
    </div>
    <div class="mobile">
      <button type="button" @click="handleExpandInfo">
        <span class="price"
          >{{ formatMoney(priceTotalSignature) }}
          <small>/mês</small>
        </span>

        <span class="show-prices">Ver Todos Valores</span>
      </button>

      <SignatureButton />
    </div>
  </div>
</template>
<script>
import { ref } from 'vue'
import { formatMoney } from '@/utils'
import handleCollapse from '@/utils/collapse'

import Box from '@components/shared/Box/Box.vue'
import SignatureInfo from './SignatureInfo.vue'
import SignatureButton from './SignatureButton.vue'

export default {
  props: {
    kotasAvailable: Number,
    pricePerKota: Number,
  },
  components: { Box, SignatureButton, SignatureInfo },
  setup(props) {
    const priceTotalSignature = ref(props.pricePerKota)
    const isExpanded = ref(false)
    const mobileExpanded = ref(null)

    const updatePriceTotalSignature = (value) => {
      priceTotalSignature.value = value
    }

    const handleExpandInfo = () => {
      handleCollapse(mobileExpanded.value, isExpanded.value)
      isExpanded.value = !isExpanded.value
    }
    return {
      priceTotalSignature,
      updatePriceTotalSignature,
      formatMoney,
      handleExpandInfo,
      isExpanded,
      mobileExpanded,
    }
  },
}
</script>
<style lang="scss" scoped>
.signature-wrap {
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 0;
  z-index: 100;

  @include md {
    position: relative;
    bottom: unset;
    .mobile {
      display: none;
    }
  }
  @media (max-width: #{$screen-md-min - 1px}) {
    .mobile {
      background: #fff;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 14px 24px;
      border-top: 2px solid #f1f4f5;
      > button {
        flex: 0 1 60%;
        display: flex;
        flex-direction: column;
        gap: 8px;
        font-family: $fontFamily;
        .price {
          font-style: normal;
          font-weight: bold;
          font-size: 14px;
          line-height: 110%;
        }
        .show-prices {
          color: $color-success;
          font-size: 12px;
        }
      }
      > div {
        flex: 0 1 30%;
      }
    }
    .expand {
      height: 0;
      overflow: hidden;
      box-shadow: 10px 1px 100px #9e9e9e;
      &.is-expanded {
        border-radius: 15px 15px 0 0;
        padding-top: 2.5rem;
        background: #fff;
      }
    }
  }
}
</style>
