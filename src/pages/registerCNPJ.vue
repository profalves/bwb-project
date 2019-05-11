<template>
  <q-page padding>
    <div class="text-center text-h5 q-my-xl">Cadastro</div>
    <q-input
      outlined
      v-model="cnpj"
      mask="##.###.###/####-##"
      label="CNPJ"
      class="full-width">
      <template v-slot:append>
        <q-icon name="check_circle"
                color="positive"
                class="cursor-pointer"
                v-if="cnpj.length >= 14" />
      </template>
    </q-input>
    <br />
    <q-input outlined v-model="insEstadual" label="Inscrição Estadual" />
    <br />
    <q-input outlined v-model="razaoSocial" label="Razão Social" />
    <br />
    <q-btn
      color="positive"
      class="full-width"
      label="Continuar"
      size="lg"
      @click="$router.push('cnpjdados')" />

    <q-footer class="bg-transparent text-grey text-center q-pa-md">
      <div class="row q-gutter-sm">
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
    </q-footer>

  </q-page>
</template>

<script>
export default {
  name: 'RegisterCNPJ',
  data(){
    return {
      cnpj: '',
      insEstadual: '',
      razaoSocial: ''
    }
  }
}
</script>

