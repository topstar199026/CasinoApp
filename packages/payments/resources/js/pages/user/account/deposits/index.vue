<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12">
        <v-card>
          <v-toolbar>
            <v-toolbar-title>
              {{ $t('Deposits') }}
            </v-toolbar-title>
            <v-spacer />
          </v-toolbar>
          <v-card-text>
            <v-btn color="primary" :to="{ name: 'user.account.deposits.create' }" class="mb-3">
              {{ $t('Make a deposit') }}
            </v-btn>
            <data-table
              api="/api/deposits"
              :headers="headers"
              :search-enabled="false"
            >
            </data-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import DataTable from '~/components/DataTable'

export default {
  middleware: ['auth', 'verified', '2fa_passed'],

  components: { DataTable },

  metaInfo () {
    return { title: this.$t('Deposits') }
  },

  beforeRouteEnter (to, from, next) {
    next(vm => {
      if (to.query.status) {
        if (to.query.status === 'complete') {
          vm.$store.dispatch('message/success', { text: vm.$t('Deposit successfully completed') })
        } else if (to.query.status === 'cancel') {
          vm.$store.dispatch('message/success', { text: vm.$t('Deposit successfully cancelled') })
        } else if (to.query.status === 'error') {
          vm.$store.dispatch('message/error', { text: vm.$t('There was an error while processing the deposit.') })
        }
        vm.$router.replace({ name: 'user.account.deposits.index' })
      }
    })
  },

  computed: {
    headers () {
      return [
        { text: this.$t('ID'), value: 'id' },
        { text: this.$t('Method'), value: 'method.name', sortable: false },
        { text: this.$t('Amount'), value: 'payment_amount', align: 'right' },
        { text: this.$t('Currency'), value: 'payment_currency', align: 'right' },
        { text: this.$t('Credits'), value: 'amount', format: 'integer', align: 'right' },
        { text: this.$t('Status'), value: 'status_title', align: 'right', sortable: false },
        { text: this.$t('Created at'), value: 'created_at', align: 'right' }
      ]
    }
  }
}
</script>
