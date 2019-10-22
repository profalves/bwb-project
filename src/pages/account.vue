<template>
  <q-page class="flex flex-center" padding>
    <div class="text-center text-h5 q-my-md">Minha conta</div>

    <q-btn outline label="Meus dados" class="full-width" />
    <q-btn outline label="Meus pedidos" class="full-width" />
    <q-btn outline label="Meus endereços" class="full-width" />
    <q-btn outline label="alterar minha senha" class="full-width" />

    <q-btn :ripple="false" flat label="Sair" class="full-width" v-go-back="'/'" />
  </q-page>
</template>

<script>
import { win32 } from 'path';
export default {
  name: 'MinhaConta'
}
</script>

<style>
</style>
