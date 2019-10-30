<template>
  <q-page padding id="prereg" class="bg-default">
    <div class="text-center text-h5 q-mt-xl">Cadastro</div>
    <div class="text-center caption q-mb-xl">
      Encontramos o seu cadastro
      <br />Por favor insira uma senha de acesso.
    </div>
    <q-input
      outlined
      v-model.number="cnpj"
      mask="##.###.###/####-##"
      label="CNPJ"
      class="full-width"
      bg-color="white"
    >
      <template v-slot:append>
        <q-icon name="check_circle" color="positive" class="cursor-pointer" />
      </template>
    </q-input>

    <br />
    <q-input
      type="password"
      outlined
      v-model="pass"
      label="Senha"
      bg-color="white"
      class="q-mt-xl"
    />
    <br />
    <q-input type="password" outlined v-model="confirm" label="Repetir Senha" bg-color="white" />
    <br />
    <q-btn color="secondary" class="full-width" label="Continuar" size="lg" @click="modal = true" />

    <!-- modal -->
    <q-dialog v-model="modal" full-width full-height>
      <q-card>
        <q-card-section class="row justify-end">
          <q-btn icon="clear" flat size="lg" @click="$router.push('login')" />
        </q-card-section>
        <q-card-section class="text-center">
          <div class="q-my-xl fit">
            <q-icon name="ion-checkmark-circle-outline" size="90px" color="secondary" />
            <p class="text-subtitle1 q-mt-xl">
              Sua solicitação foi
              <strong>efetuada com sucesso.</strong>
              Estamos verificando os dados do seu cadastro!
            </p>
          </div>
        </q-card-section>

        <q-card-actions
          class="bg-teal text-white text-center absolute-bottom justify-center"
          @click="save"
        >
          <!-- <q-btn flat label="OK" class="bg-secondary full-width" v-close-popup /> -->
          <div class="q-pa-sm">CONCLUIR</div>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
export default {
  name: "PreRegistered",
  data() {
    return {
      cnpj: "07.585.413/0001-24",
      pass: "",
      confirm: "",
      modal: false
    };
  },
  methods: {
    save() {
      this.modal = false;
      this.$q.notify({
        message: `Você está seguindo o fluxo de um usuário com pré-cadastro, se quiser ir para a tela onde mostra como é de um CNPJ sem pré-cadastro, clique em ok`,
        timeout: 9000, // in milliseconds; 0 means no timeout
        // type: 'positive',
        // color: 'positive',
        // textColor: 'black', // if default 'white' doesn't fit
        icon: "fas fa-hand-paper",
        // or
        //avatar: 'statics/boy-avatar.png',
        closeBtn: true, // or string as button message e.g. 'dismiss'
        actions: [
          {
            label: "usuário sem pré-cadastro",
            handler: () => {
              this.$router.push("registercnpj");
            }
          },
          {
            label: "fechar",
            handler: () => {
              return;
            }
          }
        ]
      });
      this.$router.push("login");
    }
  }
};
</script>

<style>
#prereg {
  overflow: hidden;
}
</style>
