<template>
  <div class="signature__button">
    <UiButton color="primary" type="button">
      <slot>Participar</slot>
    </UiButton>
  </div>
</template>
<script>
import UiButton from '@components/shared/Button.vue'

export default {
  props: {},
  components: { UiButton },
}
</script>
