<template>
  <q-page padding>
    <div
      class="row q-gutter-md q-mt-lg justify-center"
      >
      <div class="col">
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
    </div>


  </q-page>
</template>

<style>
</style>

<script>

export default {
  name: 'Produto',
  data(){
    return {
      search: '',
      position: 0,
      qtde1: 1,
      qtde2: 1
    }
  }
}
</script>

<style>
  .decoration {
    text-decoration: line-through;
  }
</style>

