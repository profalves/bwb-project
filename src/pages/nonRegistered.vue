<template>
  <q-page padding>
    <div class="text-center text-h5 q-my-xl">Cadastro</div>
    <q-input
      outlined
      v-model.number="email"
      label="Email"
      class="full-width" />

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
      @click="$router.push('registercnpj')" />

    <q-footer class="bg-white text-grey text-center q-pa-md">
      <div class="row q-gutter-sm">
        <div class="col">
          <q-icon name="fas fa-circle" />
        </div>
        <div class="col">
          <q-icon name="far fa-circle" />
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
  name: 'NonRegistered',
  data(){
    return {
      email: '',
      pass: '',
      confirm: ''
    }
  }
}
</script>

