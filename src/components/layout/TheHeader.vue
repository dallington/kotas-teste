<template>
  <header class="app-header">
    <div class="grid">
      <a href="#" rel="logo">
        <Logo />
      </a>
      <div class="search">
        <form autocomplete="false">
          <button type="button"><IconSearch /></button>
          <input type="text" placeholder="O que você procura?" />
        </form>
      </div>
      <nav class="actions">
        <a href="#" rel="criar grupo">
          <IconPlus />
          Criar Grupo
        </a>
        <a href="#" rel="criar grupo">
          <IconBox />
          Meus Grupos
        </a>
        <a href="#" rel="criar grupo">
          <Badge number="15" state="error">
            <IconBell />
          </Badge>
        </a>
        <a href="#" rel="criar grupo">
          <Profile :src="ImageJoao" size="32px" />
        </a>
      </nav>
    </div>
  </header>
</template>
<script>
import Logo from '@assets/svgs/logo.svg'
import IconSearch from '@assets/svgs/search.svg'
import IconPlus from '@assets/svgs/icon-plus.svg'
import IconBox from '@assets/svgs/icon-box.svg'
import IconBell from '@assets/svgs/icon-bell.svg'

import Badge from '@components/shared/Badge.vue'
import Profile from '@components/shared/Profile.vue'

import ImageJoao from '@assets/images/profile-joao.jpg'

export default {
  components: {
    Logo,
    IconSearch,
    IconPlus,
    IconBox,
    IconBell,
    Badge,
    Profile,
  },
  setup() {
    return {
      ImageJoao,
    }
  },
}
</script>
<style lang="scss" scoped>
header {
  width: 100%;
  .grid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    align-items: center;
    gap: 30px;
    padding: 12px 16px;
  }
  background: #fff;
  box-shadow: 0px 1px 1px #e1e1e1;
}

.search {
  grid-column: span 5 / 5 span;
  form {
    max-width: 500px;
    background: #ffffff;
    border: 1px solid #e1e1e1;
    box-sizing: border-box;
    border-radius: 50px;
    display: flex;
    align-items: center;
    padding: 8px 12px;
    position: relative;
    overflow: hidden;
    &:focus-within {
      border-color: $color-primary;
    }
    input {
      font-family: $fontFamily;
      font-size: 12px;
      position: absolute;
      width: 100%;
      height: 100%;
      border: 0;
      &:focus {
        outline: none;
      }
      padding-left: 24px;
    }
    button {
      position: relative;
      z-index: 10;
      svg stroke {
        fill: $color-primary;
      }
    }
  }
}
.actions {
  grid-column: span 6 / 6 span;
  justify-self: flex-end;
  display: flex;
  align-items: center;
  gap: 22px;
  a {
    display: flex;
    align-items: center;
    font-family: $fontFamily;
    svg {
      stroke: currentColor;
      margin-right: 10px;
    }
  }
}
</style>
