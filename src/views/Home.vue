<template>
  <div class="container">
    <div class="grid">
      <div class="left wapper-flex">
        <Box>
          <CardKota title="Spotify Family">
            <template #service>
              <IconSpotify />
            </template>
            <template #description>
              Grupo destinado a pessoas que querem ver o melhor da Netflix em 4K
              a um preço acessível.
            </template>
            <template #label>Customizado</template>
            <div class="iconInformation md:hidden">
              <IconInformation
                @click="
                  useSweetAlert.info({
                    title: 'Informação do Grupo',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque suscipit arcu vitae lorem faucibus tincidunt. Ut in eros eget neque congue laoreet. Nulla a commodo sem, at convallis justo. Aliquam sed mi sed purus cursus pulvinar a in nisi. Maecenas massa orci, hendrerit non mauris ac, malesuada semper tortor. Etiam scelerisque odio urna. Vestibulum scelerisque dui a consequat laoreet.',
                  })
                "
              />
            </div>
            <div class="card-kota-info">
              <div>
                <h3>
                  <span class="big-title">{{
                    `${kotasUsed}/${kotasTotal}`
                  }}</span>
                  <span class="ref-number">vagas disponíveis</span>
                </h3>
              </div>
              <div>
                <h3>
                  <span class="big-title">
                    <span class="currency">R$</span>
                    7,90
                  </span>
                  <span class="ref-number">por mês</span>
                </h3>
              </div>
              <div>
                <h3>
                  <span class="big-title"><IconLink /></span>
                  <span class="ref-number">acesso por convite</span>
                </h3>
              </div>
            </div>
          </CardKota>
        </Box>
        <Box title="Administrador">
          <Profile :src="ImageJoao" name="João das Couves" />
          <Seals :total="3" label="selos disponíveis" />
        </Box>
        <Box>
          <Collapse title="Teste">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit
            amet justo bibendum, pretium augue rhoncus, pellentesque dolor.
            Vivamus id mattis erat. Maecenas dapibus rhoncus vulputate. Aenean
            eget dolor vel ligula sollicitudin ornare. Proin quis diam libero.
            Cras scelerisque efficitur urna, interdum convallis lorem laoreet a.
          </Collapse>
        </Box>
        <Box title="Quem já faz parte">
          <ProfileGroup>
            <Profile :src="ImageMaria" name="Maria" shadow />
            <Profile :src="ImageFilipe" name="Filipe" shadow />
            <Profile :src="ImageAna" name="Ana" shadow />
          </ProfileGroup>
        </Box>
        <Box title="Perguntas Frequentes" class="no-padding" noPaddingContent>
          <CollapseGroup>
            <Collapse title="Quais são as formas de pagamento?">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit
              amet justo bibendum, pretium augue rhoncus, pellentesque dolor.
              Vivamus id mattis erat. Maecenas dapibus rhoncus vulputate. Aenean
              eget dolor vel ligula sollicitudin ornare. Proin quis diam libero.
              Cras scelerisque efficitur urna, interdum convallis lorem laoreet
              a.
            </Collapse>
            <Collapse title="O que é caução?">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit
              amet justo bibendum, pretium augue rhoncus, pellentesque dolor.
              Vivamus id mattis erat. Maecenas dapibus rhoncus vulputate. Aenean
              eget dolor vel ligula sollicitudin ornare. Proin quis diam libero.
              Cras scelerisque efficitur urna, interdum convallis lorem laoreet
              a.
            </Collapse>
            <Collapse title="Quando terei acesso ao serviço?">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit
              amet justo bibendum, pretium augue rhoncus, pellentesque dolor.
              Vivamus id mattis erat. Maecenas dapibus rhoncus vulputate. Aenean
              eget dolor vel ligula sollicitudin ornare. Proin quis diam libero.
              Cras scelerisque efficitur urna, interdum convallis lorem laoreet
              a.
            </Collapse>
            <Collapse title="Políticas de cancelamento">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit
              amet justo bibendum, pretium augue rhoncus, pellentesque dolor.
              Vivamus id mattis erat. Maecenas dapibus rhoncus vulputate. Aenean
              eget dolor vel ligula sollicitudin ornare. Proin quis diam libero.
              Cras scelerisque efficitur urna, interdum convallis lorem laoreet
              a.
            </Collapse>
          </CollapseGroup>
        </Box>
        <CardGroup>
          <Card>
            <CardKota title="Spotify Family">
              <template #service>
                <IconSpotify />
              </template>
              <template #description>
                <span> <b>2</b> vagas </span>
                <br />
                <br />
                <span> <b>R$ 15,90</b> por mês </span>
              </template>
              <p class="text-help">Última vaga</p>
            </CardKota>
          </Card>
          <Card>
            <CardKota title="Deezer Family">
              <template #service>
                <IconSpotify />
              </template>
              <template #description>
                <span> <b>2</b> vagas </span>
                <br />
                <br />
                <span> <b>R$ 15,90</b> por mês </span>
              </template>
              <p class="text-help">Última vaga</p>
            </CardKota>
          </Card>
          <Card>
            <CardKota title="Avast Ultimate">
              <template #service>
                <IconSpotify />
              </template>
              <template #description>
                <span> <b>2</b> vagas </span>
                <br />
                <br />
                <span> <b>R$ 15,90</b> por mês </span>
              </template>
              <p class="text-help">Última vaga</p>
            </CardKota>
          </Card>
          <Card>
            <CardKota title="HBO +">
              <template #service>
                <IconSpotify />
              </template>
              <template #description>
                <span> <b>2</b> vagas </span>
                <br />
                <br />
                <span> <b>R$ 15,90</b> por mês </span>
              </template>
              <p class="text-help">Última vaga</p>
            </CardKota>
          </Card>
          <Card>
            <CardKota title="Disney Plus">
              <template #service>
                <IconSpotify />
              </template>
              <template #description>
                <span> <b>2</b> vagas </span>
                <br />
                <br />
                <span> <b>R$ 15,90</b> por mês </span>
              </template>
              <p class="text-help">Última vaga</p>
            </CardKota>
          </Card>
        </CardGroup>
      </div>
      <div class="right">
        <Signature
          class="nav-sticky"
          :price-per-kota="7.9"
          :kotas-available="kotasAvailable"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

import Box from '@components/shared/Box/Box.vue'
import CardGroup from '@components/shared/CardGroup.vue'
import Card from '@components/shared/Card.vue'
import CardKota from '@components/shared/CardKota.vue'
import Profile from '@components/shared/Profile.vue'
import ProfileGroup from '@components/shared/ProfileGroup.vue'
import CollapseGroup from '@components/shared/CollapseGroup.vue'
import Collapse from '@components/shared/Collapse.vue'
import Seals from '@components/shared/Seals.vue'

import Signature from '@components/Signature/Signature.vue'

import IconSpotify from '@assets/svgs/spotify.svg'
import IconInformation from '@assets/svgs/information.svg'
import IconLink from '@assets/svgs/link.svg'

import ImageJoao from '@assets/images/profile-joao.jpg'
import ImageMaria from '@assets/images/profile-maria.jpg'
import ImageFilipe from '@assets/images/profile-filipe.jpg'
import ImageAna from '@assets/images/profile-ana.jpg'

import useSweetAlert from '@/utils/sweetAlert'

export default {
  components: {
    Box,
    CardGroup,
    Card,
    CardKota,
    Profile,
    ProfileGroup,
    Seals,
    IconSpotify,
    IconInformation,
    IconLink,
    CollapseGroup,
    Collapse,
    Signature,
  },
  setup() {
    const kotasTotal = ref(5)
    const kotasUsed = ref(2)
    const kotasAvailable = ref(kotasTotal.value - kotasUsed.value)
    return {
      ImageJoao,
      ImageMaria,
      ImageFilipe,
      ImageAna,
      kotasTotal,
      kotasUsed,
      kotasAvailable,
      useSweetAlert,
    }
  },
}
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 16px;
  .left {
    grid-column: span 12 / span 12;
    padding-bottom: 20px;
    @include md {
      grid-column: span 8 / span 8;
      padding-bottom: 0;
    }

    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .right {
    grid-column: span 12 / span 12;
    @include md {
      grid-column: span 4 / span 4;
    }
  }
}
@include md {
  .nav-sticky {
    background: #fff;
    position: sticky;
    top: 20px;
  }
}
.iconInformation {
  position: absolute;
  top: 8px;
  right: 0;
}

.card-kota-info {
  display: flex;
  justify-content: space-between;
  margin-top: 21px;
  margin-bottom: 15px;
}
.card-kota-info > div {
  flex: 0 1 33%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
.card-kota-info > div + div {
  border-left: 1px solid #e1e1e1;
}

.card-kota-info h3 {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.card-kota-info .big-title {
  font-family: 'Mulish', sans-serif;
  font-weight: bold;
  font-size: 24px;
  line-height: 110%;
  color: #141728;
}
.card-kota-info .currency {
  font-weight: 600;
  font-size: 10px;
  line-height: 1;
}

.card-kota-info .ref-number {
  font-family: 'Quicksand', sans-serif;
  font-weight: 300;
  font-size: 12px;
  line-height: 120%;
  margin-top: 7px;
  color: #616161;
}
</style>
