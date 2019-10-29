<template>
  <q-page padding id="register" class="bg-default">
    <div class="q-mt-xl platform-ios-only"></div>
    <div class="text-center text-h5 q-my-md">Solicite seu acesso</div>
    <p class="text-center q-mb-xl">
      Ao cadastrar sua conta, você será capaz de comprar mais rápido,
      ficar atualizado sobre a situação de um pedido e acompanhar o histórico
      dos pedidos que você já fez.
    </p>
    <q-input
      outlined
      v-model.number="cnpj"
      mask="##.###.###/####-##"
      label="CNPJ"
      bg-color="white"
    />
    <br />
    <q-btn
      color="secondary"
      class="full-width"
      label="Cadastrar"
      size="lg"
      @click="$router.push('preregistered')"
    />
  </q-page>
</template>

<script>
export default {
  name: "RequestAccess",
  data() {
    return {
      cnpj: null
    };
  }
};
</script>

<style>
</style>
