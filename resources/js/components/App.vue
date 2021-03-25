<template>
  <component :is="layout" v-if="layout" :class="routeClass" />
</template>
<script>
import { config } from '~/plugins/config'

// Load layout components dynamically.
const requireContext = require.context('~/layouts', false, /.*\.vue$/)

const layouts = requireContext.keys()
  .map(file =>
    [file.replace(/(^.\/)|(\.vue$)/g, ''), requireContext(file)]
  )
  .reduce((components, [name, component]) => {
    components[name] = component.default || component
    return components
  }, {})

export default {
  data () {
    return {
      layout: null
    }
  },

  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: 'Page',
    // all titles will be injected into this template
    titleTemplate: '%s | ' + config('app.name')
  },

  computed: {
    routeClass () {
      if (!this.$route.name) {
        return ''
      }

      let result = this.$route.name.replaceAll('.', '-')

      if (this.$route.name === 'game') {
        result += `-${this.$route.params.game}`
      } else if (this.$route.name === 'page') {
        result += `-${this.$route.params.id}`
      }

      return `view-${result}`
    }
  },

  methods: {
    setLayout (layout) {
      this.layout = layouts[layout]
    }
  }
}
</script>
