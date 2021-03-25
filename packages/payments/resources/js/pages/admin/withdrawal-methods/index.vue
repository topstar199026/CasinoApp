<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>
            {{ $t('Withdrawal methods') }}
          </v-card-title>
          <v-card-text>
            <v-btn color="primary" :to="{ name: 'admin.withdrawal-methods.create' }" class="mb-3">
              {{ $t('Create withdrawal method') }}
            </v-btn>
            <data-table
              api="/api/admin/withdrawal-methods"
              :headers="headers"
            >
              <template v-slot:item.actions="{ item }">
                <withdrawal-method-menu :id="item.id" :item="item" small />
              </template>
            </data-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import DataTable from '~/components/DataTable'
import WithdrawalMethodMenu from 'packages/payments/resources/js/components/Admin/WithdrawalMethodMenu'

export default {
  middleware: ['auth', 'verified', '2fa_passed', 'admin'],

  components: { WithdrawalMethodMenu, DataTable },

  metaInfo () {
    return { title: this.$t('Withdrawal methods') }
  },

  computed: {
    headers () {
      return [
        { text: this.$t('ID'), value: 'id' },
        { text: this.$t('Name'), value: 'name' },
        { text: this.$t('Gateway'), value: 'payment_method.gateway.name' },
        { text: this.$t('Method'), value: 'payment_method.name' },
        { text: this.$t('Status'), value: 'status_title', sortable: false },
        { value: 'actions', sortable: false, align: 'right' }
      ]
    }
  }
}
</script>
