<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>
            {{ $t('Withdrawals') }}
          </v-card-title>
          <v-card-text>
            <data-table
              api="/api/admin/withdrawals"
              :headers="headers"
              search-enabled
              :search-label="$t('Search by user ID or name')"
            >
              <template v-slot:item.name="{ item: { account : { user } } }">
                <user-link :user="user" />
              </template>
              <template v-slot:item.actions="{ item }">
                <withdrawal-menu :id="item.id" :code="item.external_id ? get(item, 'method.payment_method.gateway.code') : null" small />
              </template>
            </data-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { get } from '~/plugins/utils'
import DataTable from '~/components/DataTable'
import UserLink from '~/components/Admin/UserLink'
import WithdrawalMenu from 'packages/payments/resources/js/components/Admin/WithdrawalMenu'

export default {
  middleware: ['auth', 'verified', '2fa_passed', 'admin'],

  components: { WithdrawalMenu, DataTable, UserLink },

  metaInfo () {
    return { title: this.$t('Withdrawals') }
  },

  computed: {
    headers () {
      return [
        { text: this.$t('ID'), value: 'id' },
        { text: this.$t('Name'), value: 'name', sortable: false },
        { text: this.$t('Method'), value: 'method.name', sortable: false },
        { text: this.$t('Amount'), value: 'payment_amount', align: 'right' },
        { text: this.$t('Currency'), value: 'payment_currency', align: 'right' },
        { text: this.$t('Credits'), value: 'amount', format: 'decimal', align: 'right' },
        { text: this.$t('Status'), value: 'status_title', align: 'right', sortable: false },
        { text: this.$t('Created at'), value: 'created_at', align: 'right' },
        { value: 'actions', sortable: false, align: 'right' }
      ]
    }
  },

  methods: {
    get
  }
}
</script>
