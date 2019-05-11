<template>
  <q-page padding class="flex flex-center">
    <div class="text-center text-h5 q-mt-xl">
      Solicitação de <br />
      acesso efetuada!
    </div>
    <div class="text-center caption q-mb-xl">
      Sua solicitação foi efetuada <br />
      com sucesso. Estamos verificando <br />
      os dados do seu cadastro.
    </div>
      <img src="https://diasporasinamericafund.com/images/tick1.gif" />

  </q-page>
</template>

<script>
import { setTimeout } from 'timers';
export default {
  name: 'Confirmation',
  created() {
    setTimeout(() => {
      this.$router.replace('login')
    }, 5000)
  }
}
</script>

<style>
</style>
