<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-default text-grey">
      <q-toolbar>
        <!-- <q-btn flat dense round aria-label="Menu" @click="leftDrawerOpen = !leftDrawerOpen disable>
          <q-icon name="menu" />
        </q-btn>-->
        <q-btn flat dense round icon="ion-arrow-back" @click="$router.push('/')" />

        <q-toolbar-title class="text-weight-bolder text-center">Logo</q-toolbar-title>

        <q-btn flat dense round icon="search" />
        <!-- @click="rightDrawerOpen = !rightDrawerOpen"
        :disable="disabled"-->
      </q-toolbar>
    </q-header>

    <!-- <q-drawer v-model="leftDrawerOpen" class="full-width" content-class="bg-grey-7">
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
    </q-drawer>-->

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer bordered class="bg-white text-primary" :class="$q.platform.is.ios ? 'q-pb-md' : null">
      <div class="icons">
        <div class="icon-nav">
          <q-icon name="home" size="26px" />
          <p class="icon-label">HOME</p>
        </div>
        <div class="icon-nav" @click="leftDrawerOpen = !leftDrawerOpen">
          <q-icon name="category" size="26px" />
          <p class="icon-label">CATEGORIAS</p>
        </div>
        <div class="icon-nav" @click="rightDrawerOpen = !rightDrawerOpen">
          <q-icon name="ion-cart" size="26px" />
          <p class="icon-label">CARRINHO</p>
        </div>
        <div class="icon-nav">
          <q-icon name="mdi-brightness-percent" size="26px" />
          <p class="icon-label">PROMOÇÕES</p>
        </div>
        <div class="icon-nav">
          <q-icon name="menu" size="35px" />
        </div>
      </div>
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
    openURL,
    goBack() {
      window.history.back();
    }
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
.icons {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.icon-nav {
  padding: 5px;
  text-align: center;
  color: grey;
}
.icon-nav > p {
  margin: 0;
}
.icon-label {
  font-size: 10px;
}
.q-page-container.q-layout__section--animate {
  padding: 50px 0 !important;
}
</style>
