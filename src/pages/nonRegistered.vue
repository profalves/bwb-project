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
      size="lg"
      @click="$router.push('registercnpj')">
        Continuar
    </q-btn>

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
  },
  mounted(){
    this.$q.notify({
      message: `Você está na tela onde mostra o fluxo de um usuário sem registro,
      se quiser ir para a tela onde mostra como é de um CNPJ pré-cadastrado, clique em ok`,
      timeout: 6000, // in milliseconds; 0 means no timeout
      // type: 'positive',
      // color: 'positive',
      // textColor: 'black', // if default 'white' doesn't fit
      icon: 'fas fa-hand-paper',
      // or
      //avatar: 'statics/boy-avatar.png',
      closeBtn: true, // or string as button message e.g. 'dismiss'
      actions: [
        {
          label: 'ir para pré-cadastro',
          handler: () => {
            this.$router.push('preregistered')
          }
        },
        {
          label: 'fechar',
          handler: () => {
            return
          }
        }
      ]
    })
  }
}
</script>

