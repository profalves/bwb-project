<template>
  <q-page padding>
    <q-scroll-observer @scroll="getPosition" />
    <q-page-sticky expand position="top" v-if="position > 40" style="z-index: 2;">
      <q-toolbar class="bg-white full-width">
         <q-input
          outlined bottom-slots
          v-model="search"
          label="Busca..."
          class="full-width">
          <template v-slot:append>
            <q-icon name="search" class="cursor-pointer" />
          </template>
        </q-input>
      </q-toolbar>
    </q-page-sticky>

    <q-input outlined bottom-slots v-model="search" label="Busca..." v-else>
      <template v-slot:append>
        <q-icon name="search" class="cursor-pointer" />
      </template>
    </q-input>

    <div v-show="position > 40" class="q-py-xl"></div>

    <q-banner class="bg-grey-3 text-center">
      <img
        src="https://via.placeholder.com/270x100?text=Banner"
        style="width: 100%; height: auto;"
      >
    </q-banner>

    <div
      class="row q-gutter-md q-mt-lg justify-center"
      >
      <div class="col-xs-5">
        <img
          src="https://via.placeholder.com/100"
          style="width: 100%; height: auto;"
          @click="$router.push('produto')"
        >
        <p class="caption text-center">
          casinha de cachorro n.1
        </p>
        <div class="text-center text-weight-bolder decoration text-grey">
          R$ 32,00
        </div>
        <div class="text-center text-weight-bolder text-grey-7">
          R$ 28,00
        </div>

        <q-input type="number" outlined dense v-model="qtde1">
          <template v-slot:before>
            <q-btn
              color="positive"
              icon="remove"
              round
              @click="qtde1 <= 0 ? qtde1 = 0 : qtde1 -= 1" />
          </template>

          <template v-slot:after>
            <q-btn
              color="positive"
              icon="add"
              round
              @click="qtde1 += 1" />
          </template>
        </q-input>

        <q-btn
          class="full-width q-mt-md"
          color="positive"
          @click="$router.push('register')">
            Adicionar ao Carrinho
        </q-btn>
      </div>
      <div class="col-xs-5">
        <img
          src="https://via.placeholder.com/100"
          style="width: 100%; height: auto;"
        >
        <p class="caption text-center">
          casinha de cachorro n.1
        </p>
        <div class="text-center text-weight-bolder decoration text-grey">
          R$ 32,00
        </div>
        <div class="text-center text-weight-bolder text-grey-7">
          R$ 28,00
        </div>

        <q-input type="number" outlined dense v-model="qtde2">
          <template v-slot:before>
            <q-btn
              color="positive"
              icon="remove"
              round
              @click="qtde2 <= 0 ? qtde2 = 0 : qtde2 -= 1" />
          </template>

          <template v-slot:after>
            <q-btn
              color="positive"
              icon="add"
              round
              @click="qtde2 += 1" />
          </template>
        </q-input>

        <q-btn
          class="full-width q-mt-md"
          color="positive"
          @click="$router.push('register')">
            Adicionar ao Carrinho
        </q-btn>
      </div>
      <div class="col-xs-5">
        <img
          src="https://via.placeholder.com/100"
          style="width: 100%; height: auto;"
        >
        <p class="caption text-center">
          casinha de cachorro n.1
        </p>
        <div class="text-center text-weight-bolder decoration text-grey">
          R$ 32,00
        </div>
        <div class="text-center text-weight-bolder text-grey-7">
          R$ 28,00
        </div>

        <q-input outlined dense v-model="qtde1">
          <template v-slot:before>
            <q-btn
              color="positive"
              icon="remove"
              round
              @click="qtde1 <= 0 ? qtde1 = 0 : qtde1 -= 1" />
          </template>

          <template v-slot:after>
            <q-btn
              color="positive"
              icon="add"
              round
              @click="qtde1 += 1" />
          </template>
        </q-input>

        <q-btn
          class="full-width q-mt-md"
          color="positive"
          @click="$router.push('register')">
            Adicionar ao Carrinho
        </q-btn>
      </div>
      <div class="col-xs-5">
        <img
          src="https://via.placeholder.com/100"
          style="width: 100%; height: auto;"
        >
        <p class="caption text-center">
          casinha de cachorro n.1
        </p>
        <div class="text-center text-weight-bolder decoration text-grey">
          R$ 32,00
        </div>
        <div class="text-center text-weight-bolder text-grey-7">
          R$ 28,00
        </div>

        <q-input outlined dense v-model="qtde2">
          <template v-slot:before>
            <q-btn
              color="positive"
              icon="remove"
              round
              @click="qtde2 <= 0 ? qtde2 = 0 : qtde2 -= 1" />
          </template>

          <template v-slot:after>
            <q-btn
              color="positive"
              icon="add"
              round
              @click="qtde2 += 1" />
          </template>
        </q-input>

        <q-btn
          class="full-width q-mt-md"
          color="positive"
          @click="$router.push('register')">
            Adicionar ao Carrinho
        </q-btn>
      </div>
    </div>


  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'PageIndex',
  data(){
    return {
      search: '',
      position: 0,
      qtde1: 1,
      qtde2: 1
    }
  },
  methods:{
    getPosition(point){
      this.position = point.position
    }
  }
}
</script>

<style>
  .decoration {
    text-decoration: line-through;
  }
</style>

