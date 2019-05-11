<template>
  <q-list class="text-white text-weight-bolder text-h5" no-border>
    <q-expansion-item
      expand-separator
      label="Cães"
      expand-icon="chevron_right"
      expand-icon-class="text-white"
    >
      <div style="padding: 0 15px">
        <q-list v-for="(item, index) in lista" :key="index">
          <q-expansion-item
            expand-separator
            :label="item"
            expand-icon="chevron_right"
            expand-icon-class="text-white"
            switch-toggle-side
          ></q-expansion-item>
        </q-list>
      </div>
    </q-expansion-item>
    <q-expansion-item
      expand-separator
      label="Gatos"
      expand-icon="chevron_right"
      expand-icon-class="text-white"
    >
      <div style="padding: 0 15px">
        <q-list v-for="(item, index) in lista" :key="index">
          <q-expansion-item
            expand-separator
            :label="item"
            expand-icon="chevron_right"
            expand-icon-class="text-white"
            switch-toggle-side
          ></q-expansion-item>
        </q-list>
      </div>
    </q-expansion-item>
    <q-expansion-item
      expand-separator
      label="Aves"
      expand-icon="chevron_right"
      expand-icon-class="text-white"
    >
      <div style="padding: 0 15px">
        <q-list v-for="(item, index) in lista" :key="index">
          <q-expansion-item
            expand-separator
            :label="item"
            expand-icon="chevron_right"
            expand-icon-class="text-white"
            switch-toggle-side
          ></q-expansion-item>
        </q-list>
      </div>
    </q-expansion-item>
    <q-expansion-item
      expand-separator
      label="Roedores"
      expand-icon="chevron_right"
      expand-icon-class="text-white"
    >
      <div style="padding: 0 15px">
        <q-list v-for="(item, index) in lista" :key="index">
          <q-expansion-item
            expand-separator
            :label="item"
            expand-icon="chevron_right"
            expand-icon-class="text-white"
            switch-toggle-side
          ></q-expansion-item>
        </q-list>
      </div>
    </q-expansion-item>
    <q-expansion-item
      expand-separator
      label="Outros"
      expand-icon="chevron_right"
      expand-icon-class="text-white"
    ></q-expansion-item>
    <q-expansion-item
      expand-separator
      label="Intitucional"
      expand-icon="chevron_right"
      expand-icon-class="text-white"
    ></q-expansion-item>
    <!-- <q-item clickable tag="a" target="_blank" href="http://v1.quasar-framework.org">
        <q-item-section avatar>
          <q-icon name="school" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Docs</q-item-label>
          <q-item-label caption>v1.quasar-framework.org</q-item-label>
        </q-item-section>
      </q-item> -->
  </q-list>
</template>

<script>
export default {
  name: 'ComponentMenu',
  data () {
    return {
      lista: [ 'Acessórios', 'Bebedouros', 'Comedouros', 'Casinhas', 'Higiene' ]
    }
  }
}
</script>

<style>
</style>
