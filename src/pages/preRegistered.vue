<template>
  <q-page padding id="prereg">
    <div class="text-center text-h5 q-mt-xl">Cadastro</div>
    <div class="text-center caption q-mb-xl">
      Encontramos o seu cadastro <br/>
      Por favor insira uma senha de acesso.
    </div>
    <q-input
      outlined
      v-model.number="cnpj"
      mask="##.###.###/####-##"
      label="CNPJ"
      class="full-width">
      <template v-slot:append>
        <q-icon name="check_circle" color="positive" class="cursor-pointer" />
      </template>
    </q-input>

    <br />
    <q-input type="password" outlined v-model="pass" label="Senha" />
    <br />
    <q-input type="password" outlined v-model="confirm" label="Repetir Senha" />
    <br />
    <q-btn
      color="positive"
      class="full-width"
      label="Continuar"
      size="lg"
      @click="$router.push('shop')" />

  </q-page>
</template>

<script>
export default {
  name: 'PreRegistered',
  data(){
    return {
      cnpj: '07.585.413/0001-24',
      pass: '',
      confirm: ''
    }
  }
}
</script>

<style>
#prereg {
  overflow: hidden;
}
</style>
