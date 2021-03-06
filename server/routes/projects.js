import express from 'express'

import _ from 'lodash'
import faker from 'faker'
var chance = require('chance').Chance()

const projects = _.times(10, function () {
  return {
    id: faker.random.uuid(),
    name: faker.company.companyName(),
    code: faker.finance.account(),
    active: chance.bool({
      likelihood: 75
    })
  }
})

const router = express.Router()
router.get('/', function (req, res, next) {
  res.json(projects)
  next()
})

module.exports = router
