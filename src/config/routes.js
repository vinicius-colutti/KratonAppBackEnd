const express = require('express')

module.exports = function(server){
    const router = express.Router()
    server.use('/api', router)

    // Rotes de Ciclo de pagamento
    const BillingCycle = require('../api/billingCycle/billingCycleService')
    BillingCycle.register(router, '/billingCycles')
}