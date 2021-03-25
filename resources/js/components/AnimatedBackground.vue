<template>
  <component :is="background" v-if="background" />
</template>

<script>
import { config } from '~/plugins/config'
import Squares from '~/components/Backgrounds/Squares'
import Stars from '~/components/Backgrounds/Stars'

export default {
  components: { Squares, Stars },

  data () {
    return {
      backgroundComponent: null
    }
  },

  computed: {
    background () {
      return config('settings.theme.background')
    }
  }
}
</script>
