<template>
  <v-card flat>
    <v-card-text>
      <v-expansion-panels>
        <v-expansion-panel>
          <v-expansion-panel-header>{{ $t('Zf77777') }}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-text-field
              v-model="form.PAYMENTS_ZF777777_USER"
              :label="$t('API userid')"
              :error="form.errors.has('PAYMENTS_ZF777777_USER')"
              :error-messages="form.errors.get('PAYMENTS_ZF777777_USER')"
              outlined
              :hint="$t('Please note, it is different from your regular zf77777 account userid')"
              persistent-hint
              @keydown="clearFormErrors($event,'PAYMENTS_ZF777777_USER')"
            />
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
        PAYMENTS_ZF777777_USER: config('user_id'),
        PAYMENTS_ZF77777_NOTIFY_URL: config('notifyurl'),
        PAYMENTS_ZF77777_RETURN_URL: config('returnurl'),
        PAYMENTS_ZF77777_SIGN: config('sign'),
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
