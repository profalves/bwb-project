<template>
  <q-page padding>
    <div class="text-center text-h5 q-mt-md">Cadastro</div>
    <div class="text-center caption q-mb-md">Busca pelo CEP ou Localização</div>
    <div class="row">
      <div class="col">
        <q-input square outlined v-model="endereco.cep" label="CEP" bg-color="white" />
      </div>
      <div class="col-auto">
        <q-btn
          unelevated
          icon="ion-pin"
          class="bg-secondary text-white q-py-md"
          label="localização"
        />
      </div>
    </div>
    <br />
    <q-input outlined v-model="endereco.logradouro" label="Endereço" bg-color="white" />
    <br />
    <q-input outlined type="number" v-model="endereco.numero" label="Número" bg-color="white" />
    <br />
    <q-input outlined v-model="endereco.ref" label="Referência" bg-color="white" />
    <br />
    <q-input outlined v-model="endereco.bairro" label="Bairro" bg-color="white" />
    <br />
    <q-input outlined v-model="endereco.cidade" label="Cidade" bg-color="white" />
    <br />

    <q-footer class="bg-transparent text-secondary text-center q-pa-md q-mb-lg">
      <div class="row q-gutter-sm q-mb-md">
        <div class="col">
          <q-icon name="fas fa-circle" />
        </div>
        <div class="col">
          <q-icon name="fas fa-circle" />
        </div>
        <div class="col">
          <q-icon name="fas fa-circle" />
        </div>
        <div class="col">
          <q-icon name="far fa-circle" />
        </div>
      </div>
      <q-btn
        color="secondary"
        class="full-width"
        label="Continuar"
        size="lg"
        @click="$router.push('nonregistered')"
      />
    </q-footer>
  </q-page>
</template>

<script>
export default {
  name: "Endereço",
  data() {
    return {
      endereco: {
        cidade: null,
        bairro: null,
        logradouro: null,
        numero: null,
        ref: null
      }
    };
  },
  methods: {
    async setEndereco() {
      await localStorage.setItem("endereco", JSON.stringify(this.endereco));
      await this.$router.push("registerreview");
    }
  }
};
</script>

