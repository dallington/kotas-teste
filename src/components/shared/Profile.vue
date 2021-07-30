<template>
  <div class="profile">
    <template v-if="src">
      <Avatar :src="src" :name="name" :shadow="shadow" :size="size" />
    </template>
    <h3 v-if="name && showName" class="profile__name">{{ name }}</h3>
  </div>
</template>
<script>
import Avatar from '@components/shared/Avatar.vue'

export default {
  name: 'Profile',
  components: {
    Avatar,
  },
  props: {
    src: String,
    name: String,
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
.profile {
  text-align: center;
  &__name {
    font-weight: 600;
    font-size: 12px;
    line-height: 120%;
    margin: 8px 0;
    color: $color-dark-gray;
  }
}
</style>
