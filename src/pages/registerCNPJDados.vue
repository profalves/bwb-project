<template>
  <q-page padding>
    <div class="text-center text-h5 q-my-xl">Cadastro</div>
    <q-input outlined v-model="fantasia" label="Nome Fantasia" />
    <br />
    <q-input outlined v-model="contato" label="Contato" />
    <br />
    <q-input
      outlined
      v-model="telefone"
      mask="(##) #########"
      label="Telefone"
      placeholder="DDD + nº telefone"
      class="full-width">
    </q-input>
    <br />
    <q-btn
      color="positive"
      class="full-width"
      label="Continuar"
      size="lg"
      @click="$router.push('buscarendereco')" />

    <q-footer class="bg-transparent text-grey text-center q-pa-md">
      <div class="row q-gutter-sm">
        <div class="col">
          <q-icon name="fas fa-circle" />
        </div>
        <div class="col">
          <q-icon name="fas fa-circle" />
        </div>
        <div class="col">
          <q-icon name="fas fa-circle" />
        </div>
      </div>
    </q-footer>

  </q-page>
</template>

<script>
export default {
  name: 'CNPJDados',
  data(){
    return {
      fantasia: '',
      contato: '',
      telefone: ''
    }
  }
}
</script>

