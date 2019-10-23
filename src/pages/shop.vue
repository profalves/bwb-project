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

    <div v-for="(item, index) in 4" :key="index">
      <hr />
      <div class="row q-gutter-sm q-my-lg">
        <div class="col-5">
          <img
            src="https://via.placeholder.com/100"
            style="width: 100%; height: auto;"
            @click="$router.push('produto')"
          />
        </div>
        <div class="col">
          <q-btn flat size="sm" color="blue">Lorem ipsum dolor sit</q-btn>
          <div class="q-ml-md text-weight-bolder strike text-grey">R$ 50,00</div>
          <div class="q-ml-md text-weight-bolder text-grey-7">R$ 43,90</div>

          <div class="row q-gutter-sm">
            <div class="col-6">
              <q-input type="number" dense borderless v-model="qtde[index]">
                <template v-slot:before>
                  <q-btn
                    color="positive"
                    icon="remove"
                    round
                    size="xs"
                    @click="qtde[index] <= 0 ? qtde[index] = 0 : qtde[index] -= 1"
                  />
                </template>

                <template v-slot:after>
                  <q-btn color="positive" icon="add" round size="xs" @click="qtde[index] += 1" />
                </template>
              </q-input>
            </div>
            <div class="col">
              <q-btn
                style="margin-top: 10px"
                color="positive"
                rounded
                size="xs"
                @click="$router.push('register')"
              >Adicionar</q-btn>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: "PageIndex",
  data() {
    return {
      search: "",
      position: 0,
      qtde: [0, 0, 0, 0],
      qtde1: 1,
      qtde2: 1
    };
  },
  methods: {
    getPosition(point) {
      this.position = point.position;
    }
  }
};
</script>

<style>
.strike {
  text-decoration: line-through;
}
</style>

