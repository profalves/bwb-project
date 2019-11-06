<template>
  <div id="q-app">
    <transition :name="transition">
      <router-view></router-view>
    </transition>
    <!-- <router-view /> -->
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      transition: null
    };
  },
  watch: {
    $route(to, from) {
      console.log("from: ", from);
      console.log("to: ", to);
      console.log("history: ", window.history.length);
      const toDepth = to.path.split("/").length;
      // console.log("toDepth: ", toDepth);
      const fromDepth = from.path.split("/").length;
      // console.log("fromDepth: ", fromDepth);
      this.transition = toDepth < fromDepth ? "slide-right" : "slide-left";
    }
  }
};
</script>

<style>
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition-duration: 0.3s;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
  overflow: hidden;
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate(3em, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate(-3em, 0);
}
</style>
