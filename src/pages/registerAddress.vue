<template>
  <q-page padding>
    <div class="text-center text-h5" :class="$q.platform.is.ios ? 'q-mt-xl' : 'q-mt-md'">Cadastro</div>
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
    <q-select
      label="Estado"
      v-model.number="endereco.estado"
      :options="estados"
      outlined
      bg-color="white"
    />
    <br />
    <q-select
      label="Cidade"
      filled
      v-model="endereco.cidade"
      use-input
      fill-input
      input-debounce="0"
      :options="cidades"
      @filter="filterCities"
      outlined
      :style="$q.platform.is.ios ? 'margin-bottom: 100px' : 'margin-bottom: 10px'"
      :bg-color="this.endereco.estado ? 'white' : null "
      :disable="!this.endereco.estado"
      :hint="!this.endereco.estado ? 'Selecione primeiro um Estado' : 'Selecione a cidade'"
    >
      <template v-slot:no-option>
        <q-item>
          <q-item-section class="text-grey">Sem resultados</q-item-section>
        </q-item>
      </template>
    </q-select>

    <q-footer class="bg-default text-secondary text-center q-pa-md q-mb-lg">
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
import pesquisar from "../data/cidades";
import estados from "../data/estados";

export default {
  name: "Endereço",
  data() {
    return {
      pesquisar,
      estados,
      endereco: {
        cidade: null,
        estado: null,
        bairro: null,
        logradouro: null,
        numero: null,
        ref: null
      },
      cidades: []
    };
  },
  computed: {
    pesquisaCidades() {
      if (!this.endereco.estado) return [];
      let lista = this.pesquisar.cidades.find(
        row => row.sigla === this.endereco.estado.value
      );
      console.log("lista: ", lista);
      return lista.cidades.map(row => ({
        label: row,
        value: row
      }));
    }
  },
  methods: {
    async setEndereco() {
      await localStorage.setItem("endereco", JSON.stringify(this.endereco));
      await this.$router.push("registerreview");
    },
    filterCities(val, update) {
      console.log("val: ", val);
      update(() => {
        if (val === "") {
          this.cidades = this.pesquisaCidades;
        } else {
          const needle = val.toLowerCase();
          this.cidades = this.pesquisaCidades.filter(
            v => v.value.toLowerCase().indexOf(needle) > -1
          );
        }
      });
    }
  }
};
</script>
