<template>
    <button
      v-bind="$attrs"
       v-on="$listeners"
    >
      <slot/>

    </button>
</template>

<script lang="ts">

import {
  defineComponent,
  // PropType,
  // computed,
  // ref,
  // toRef,
  // Ref,
} from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'VButton',

})
</script>
