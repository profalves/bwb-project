<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-default text-grey">
      <q-toolbar>
        <q-btn flat dense round aria-label="Menu" disable>
          <!-- @click="leftDrawerOpen = !leftDrawerOpen" -->
          <!-- <q-icon name="menu" /> -->
        </q-btn>

        <q-toolbar-title class="text-weight-bolder text-center">Logo</q-toolbar-title>

        <q-btn flat dense round icon="search" />
        <!-- @click="rightDrawerOpen = !rightDrawerOpen"
        :disable="disabled"-->
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" class="full-width" content-class="bg-grey-7">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          color="white"
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
        />
      </q-toolbar>
      <main-menu />
      <q-footer bordered class="footer bg-transparent" v-show="$route.path !== '/'">
        <q-btn class="full-width" @click="$router.push('account')">Minha conta</q-btn>
      </q-footer>
    </q-drawer>

    <q-drawer v-model="rightDrawerOpen" side="right" content-class="bg-grey-7">
      <q-toolbar>
        <q-space />
        <q-btn
          flat
          dense
          round
          color="white"
          icon="ion-cart"
          @click="rightDrawerOpen = !rightDrawerOpen"
        />
      </q-toolbar>
      <c-cart />
      <q-footer bordered class="footer bg-transparent">
        <div class="row q-gutter-sm">
          <div class="col">
            <q-btn
              class="float-left"
              color="transparent"
              @click="rightDrawerOpen = !rightDrawerOpen"
            >Continuar comprando</q-btn>
          </div>
          <div class="col">
            <q-btn class="float-right" color="positive">Finalizar Pedido</q-btn>
          </div>
        </div>
      </q-footer>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer bordered class="bg-white text-primary">
      <q-tabs
        no-caps
        active-color="primary"
        indicator-color="transparent"
        class="text-grey"
        v-model="tab"
      >
        <q-tab name="images" label="Images" />
        <q-tab name="videos" label="Videos" />
        <q-tab name="articles" label="Articles" />
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<script>
import { openURL } from "quasar";
import mainMenu from "../components/mainMenu";
import cCart from "../components/cart";

export default {
  name: "MyLayout",
  components: {
    mainMenu,
    cCart
  },
  data() {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
      rightDrawerOpen: this.$q.platform.is.desktop,
      disabled: false,
      tab: null
    };
  },
  methods: {
    openURL
  }
};
</script>

<style>
.footer {
  padding: 5px;
  text-align: center;
}
.main-footer {
  padding: 5px;
}
</style>
