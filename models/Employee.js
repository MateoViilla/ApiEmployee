'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const EmployeeSchema = Schema({
  name: {type: String, required: true},
  dod: {type: String, required: true},
  country: {type: String, required:true},
  userName: { type: String, required:true },
  hireDate: { type: String, required:true },
  status: { type: Boolean,default:false },
  userName: { type: String, required:true },
  area: { type: String, required: true},
  jobTitle: { type: String, required:true},
  tipRote: { type: Number, required: false}
})

module.exports = mongoose.model('Employee', EmployeeSchema)
