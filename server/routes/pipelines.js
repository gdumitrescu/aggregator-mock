import express from 'express'

import _ from 'lodash'
import faker from 'faker'
var chance = require('chance').Chance()

const pipelineNames = [
  'Front End',
  'Back End',
  'Web',
  'Mobile',
  'Hybrid',
  'Android',
  'iOS'
]

const pipelinesLength = pipelineNames.length

const pipelines = _.times(pipelinesLength, function (i) {
  return {
    id: faker.random.uuid(),
    name: pipelineNames[i],
    active: chance.bool({
      likelihood: 75
    })
  }
})

const router = express.Router()
router.get('/', function (req, res, next) {
  res.json(pipelines)
  next()
})

module.exports = router
