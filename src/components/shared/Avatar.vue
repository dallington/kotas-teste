<template>
  <div
    class="avatar"
    :class="{ 'avatar--img': src, 'avatar--shadow': shadow }"
    :style="getSize"
  >
    <template v-if="src">
      <img :src="src" alt="profile picture `${name}" />
    </template>
    <template v-if="!src">
      <slot></slot>
    </template>
  </div>
</template>
<script>
import { computed } from 'vue'

export default {
  name: 'Avatar',
  props: {
    src: String,
    icon: String,
    shadow: Boolean,
    size: String,
  },
  setup(props) {
    const getSize = computed(() => {
      if (props.size) {
        return {
          width: props.size,
          height: props.size,
        }
      }
      return ''
    })
    return { getSize }
  },
}
</script>
<style lang="scss" scoped>
.avatar {
  width: 64px;
  height: 64px;
  border: 1px solid #f1f4f5;
  box-sizing: border-box;
  border-radius: 50px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.avatar--img {
  width: 56px;
  height: 56px;
  border: 1px solid #0cd4ad;
  border-radius: 50px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  img {
    position: absolute;
    inset: 0;
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 100%;
  }
}
.avatar--shadow {
  width: 48px;
  height: 48px;
  border: 1px solid #ffffff;
  box-sizing: border-box;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}
</style>
