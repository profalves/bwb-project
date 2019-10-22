<template>
  <q-page padding class="bg-default">
    <q-scroll-observer @scroll="getPosition" />
    <q-page-sticky expand position="top" v-if="position > 40" style="z-index: 2;">
      <q-toolbar class="bg-black full-width">
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
        <q-input color="lime-11" bg-color="green" filled v-model="text" label="Label">
          <template v-slot:prepend>
            <q-icon name="event" />
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
      <img src="https://via.placeholder.com/270x100?text=Banner" style="width: 100%; height: auto;" />
    </q-banner>

    <div class="row q-gutter-md q-mt-lg">
      <div class="col-xs col-md-4">
        <img src="https://via.placeholder.com/100" style="width: 100%; height: auto;" />
        <p class="caption text-center">casinha de cachorro n.1</p>
        <q-btn
          outline
          small
          size="10px"
          class="full-width"
          @click="$router.push('register')"
        >faça login para ver os preços</q-btn>
      </div>
      <div class="col-xs col-md-4">
        <img src="https://via.placeholder.com/100" style="width: 100%; height: auto;" />
        <p class="caption text-center">casinha de cachorro n.1</p>
        <q-btn
          outline
          small
          size="10px"
          class="full-width"
          @click="$router.push('register')"
        >faça login para ver os preços</q-btn>
      </div>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
import { posix } from "path";
export default {
  name: "PageIndex",
  data() {
    return {
      search: "",
      position: 0
    };
  },
  methods: {
    getPosition(point) {
      this.position = point.position;
    }
  }
};
</script>
