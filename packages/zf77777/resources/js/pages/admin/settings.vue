<template>
  <v-card flat>
    <v-card-text>
      <v-expansion-panels>
        <v-expansion-panel>
          <v-expansion-panel-header>{{ $t('77777GateWay') }}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-btn icon v-on="on">
              <v-icon :small="small">mdi-dots-vertical</v-icon>
            </v-btn>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card-text>
  </v-card>
</template>

<script>
import { config } from '~/plugins/config'

export default {
  // mixins: [FormMixin],

  props: {
    form: {
      type: Object,
      required: true
    }
  },

  data () {
    return {
      variables: {        
      }
    }
  },

  computed: {
    
  },

  created () {
    // this.$emit('input', this.variables)
  }
}
</script>
