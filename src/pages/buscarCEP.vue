<template>
  <q-page padding id="prereg">
    <div class="text-center text-h5 q-mt-md">Cadastro</div>
    <div class="text-center caption q-mb-xl">
      Adicione seu CEP
    </div>
    <q-input
      outlined
      v-model="cep"
      mask="########"
      label="CEP"
      class="full-width desktop-only"
      @keyup.enter="buscarCEP" />
    <q-input
      outlined
      v-model="cep"
      mask="########"
      label="CEP"
      class="full-width desktop-hide"
      @keyup.enter="buscarCEP"
      @blur="buscarCEP">
      <template v-slot:append>
        <q-icon name="check_circle" color="positive" class="cursor-pointer" v-if="confirm" />
      </template>
    </q-input>
    <br />

    <q-btn
      color="positive"
      class="full-width q-mb-xl"
      icon="place"
      label="Minha localização"
      size="lg"
      @click="gps" />

    <q-btn
      color="positive"
      class="full-width q-mt-xl"
      label="Continuar"
      size="lg"
      :disable="!confirm"
      @click="$router.push('registrarendereco')" />
  </q-page>
</template>

<script>
export default {
  name: 'BuscaCEP',
  data(){
    return {
      cep: '',
      confirm: false
    }
  },
  methods: {
    buscarCEP() {
      this.$axios.get('http://api.postmon.com.br/v1/cep/' + this.cep)
      .then((res) => {
        localStorage.setItem('endereco', JSON.stringify(res.data))
        //this.$router.push('registrarendereco')
        this.confirm = true
      })
      .catch((e) => {
        console.log('ERRO: ', e.response)
        if(e.response !== undefined){
          this.$q.notify({
            message: e.response.statusText,
            color: 'red'
          })
        }
        else {
          this.$q.notify({
            message: 'CEP inválido',
            color: 'red'
          })
        }
      })
    },
    gps() {
      this.$q.notify('Captura o enderço via geolocalização')
    }
  },
}
</script>

<style>
#prereg {
  overflow: hidden;
}
</style>
