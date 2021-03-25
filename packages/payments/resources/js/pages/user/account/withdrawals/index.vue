<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12">
        <v-card>
          <v-toolbar>
            <v-toolbar-title>
              {{ $t('Withdrawals') }}
            </v-toolbar-title>
            <v-spacer />
          </v-toolbar>
          <v-card-text>
            <v-btn color="primary" :to="{ name: 'user.account.withdrawals.create' }" class="mb-3">
              {{ $t('Make a withdrawal') }}
            </v-btn>
            <data-table
              api="/api/withdrawals"
              :headers="headers"
              :search-enabled="false"
            />
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
    return { title: this.$t('Withdrawals') }
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
