<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-default text-grey">
      <q-toolbar>
        <q-btn flat dense round aria-label="Menu" disable>
          <!-- <q-icon name="menu" /> -->
        </q-btn>

        <q-toolbar-title class="text-weight-bolder text-center">Logo</q-toolbar-title>

        <q-btn flat dense round disable />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
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
      disabled: false
    };
  },
  methods: {
    openURL
  },
  beforeUpdate() {
    if (
      // this.$route.path === '/' ||
      this.$route.path === "/login" ||
      this.$route.path === "/register"
    )
      this.disabled = true;
  }
};
</script>

<style>
.footer {
  padding: 5px;
  text-align: center;
}
</style>
