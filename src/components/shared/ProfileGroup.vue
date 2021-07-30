<template>
  <div class="profile-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'ProfileGroup',
}
</script>
<style lang="scss" scoped>
.profile-group {
  display: flex;
  gap: 8px;
  margin-top: 16px;
  justify-content: center;
  .profile__name {
    font-size: 10px;
  }
}
</style>
