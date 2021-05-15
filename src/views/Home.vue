<template>
  <div class="home">
    <HelloWorld msg="W"/>
    <p>root: {{root}}</p>
    <p>doubleCounter: {{1}}</p>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from '@/store'
import { AllMutationTypes } from '@/store/mutation-types'

import HelloWorld from '@/components/HelloWorld.vue'

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld
  },
  setup () {
    const store = useStore()

    console.log(store.getters.getVersion)
    console.log(store.getters.doubleCounter)

    // store.commit('UPDATAEROOT')

    return {
      root: '1'
    }
  }
})
</script>
