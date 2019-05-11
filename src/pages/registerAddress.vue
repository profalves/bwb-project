<template>
  <q-page padding>
    <div class="text-center text-h5 q-mt-md">Cadastro</div>
    <div class="text-center caption q-mb-xl">
      Adicione seu Endereço
    </div>
    <q-input outlined v-model="endereco.cep" label="CEP" />
    <br />
    <div
      class="caption"
      v-show="endereco.bairro || endereco.cidade">
      {{ endereco.bairro ?
          `Bairro: ${endereco.bairro} - Cidade: ${endereco.cidade}` :
          'Cidade: ' +  endereco.cidade
      }}
    </div>
    <br />
    <q-input outlined v-model="endereco.logradouro" label="Endereço" />
    <br />
    <q-input outlined v-model="endereco.numero" label="Número" />
    <br />

    <q-footer class="bg-transparent text-grey text-center q-pa-md">
      <q-btn
      color="positive"
      class="full-width"
      label="Continuar"
      size="lg"
      @click="setEndereco" />
    </q-footer>

  </q-page>
</template>

<script>
export default {
  name: 'Endereço',
  data(){
    return {
      endereco: JSON.parse(localStorage.getItem('endereco'))
    }
  },
  methods: {
    async setEndereco() {
      await localStorage.setItem('endereco', JSON.stringify(this.endereco))
      await this.$router.push('registerreview')
    }
  }
}
</script>

