<template>
  <q-page padding class="bg-default">
    <q-scroll-observer @scroll="getPosition" />
    <q-page-sticky expand position="top" v-if="position > 40" style="z-index: 2;">
      <q-toolbar class="full-width">
        <q-input
          outlined
          bottom-slots
          v-model="search"
          label="Busca..."
          class="full-width"
          bg-color="white"
          filled
        >
          <template v-slot:append>
            <q-icon name="search" class="cursor-pointer" />
          </template>
        </q-input>
      </q-toolbar>
    </q-page-sticky>

    <q-input outlined bottom-slots v-model="search" label="Busca..." bg-color="white" v-else>
      <template v-slot:append>
        <q-icon name="search" class="cursor-pointer" />
      </template>
    </q-input>

    <div v-show="position > 40" class="q-py-xl"></div>

    <img
      src="https://via.placeholder.com/270x150?text=Banner"
      style="width: 100vw; height: auto; margin: -8px"
    />

    <div class="row q-gutter-md q-my-lg">
      <div class="col-xs col-md-4">
        <img src="https://via.placeholder.com/100" style="width: 100%; height: auto;" />
        <p class="caption text-center">Lorem ipsum dolor sit</p>
        <q-btn
          outline
          small
          size="10px"
          class="full-width"
          @click="dialog = !dialog"
        >faça login para ver os preços</q-btn>
      </div>
      <div class="col-xs col-md-4">
        <img src="https://via.placeholder.com/100" style="width: 100%; height: auto;" />
        <p class="caption text-center">Lorem ipsum dolor sit</p>
        <q-btn
          outline
          small
          size="10px"
          class="full-width"
          @click="dialog = !dialog"
        >faça login para ver os preços</q-btn>
      </div>
    </div>

    <!-- modal  -->
    <q-dialog v-model="dialog" position="top">
      <q-card>
        <q-card-section class="text-center">
          <div class="text-caption">Deseja visualizar os preços?</div>
        </q-card-section>

        <q-card-section class="text-center text-h5">
          <strong class="undelined cursor-pointer" @click="$router.push('login')">Faça Login</strong> ou
          <strong class="undelined cursor-pointer" @click="$router.push('register')">Cadastre-se</strong>
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<style>
.undelined {
  text-decoration: underline;
}
</style>

<script>
import { posix } from "path";
export default {
  name: "PageIndex",
  data() {
    return {
      search: "",
      position: 0,
      dialog: false
    };
  },
  methods: {
    getPosition(point) {
      this.position = point.position;
    }
  }
};
</script>
