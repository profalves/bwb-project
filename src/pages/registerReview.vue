<template>
  <q-page padding>
    <div class="text-center text-h5 q-mt-md">Cadastro</div>
    <div class="text-center caption q-mb-xl">
      Confirme seus dados
    </div>
    <div class="text-weight-bolder">Meus dados</div>
    <q-card class="q-pa-md">
      CNPJ: 07.585.413/0001-24 <br />
      Nome fantasia: Best Up <br />
      Telefone: (11) 3449-3321 <br />
    </q-card>
    <div class="text-center q-mb-md">
      <q-btn flat :ripple="false" color="positive" label="Editar" />
    </div>


    <div class="text-weight-bolder">Endereco</div>
    <q-card class="q-pa-md">
      Bestup <br />
      {{endereco.logradouro}}, {{endereco.numero}} <br />
      {{endereco.cidade}} - {{endereco.estado}}
    </q-card>
    <div class="text-center q-mb-md">
      <q-btn flat :ripple="false" color="positive" label="Editar" />
    </div>

    <q-footer class="bg-transparent text-grey text-center q-pa-md">
      <q-btn
      color="positive"
      class="full-width"
      label="Confirmar"
      size="lg"
      @click="$router.push('confirmation')" />
    </q-footer>

  </q-page>
</template>

<script>
export default {
  name: 'RegisterReview',
  data(){
    return {
      endereco: ''
    }
  },
  mounted() {
    this.endereco = JSON.parse(localStorage.getItem('endereco'))
  }
}
</script>

<style>
</style>
