'use strict'

const express = require('express')
const employeeCtrl = require('../controllers/EmployeeCtrl')


const api = express.Router()

api.get('/employees', employeeCtrl.getEmployees)
api.post('/employee/n', employeeCtrl.saveEmployee)
api.post('/employee/u', employeeCtrl.editEmployee);
api.post('/employee/d', employeeCtrl.deleteEmployee);
api.post('/employee/g', employeeCtrl.getEmployee)








module.exports = api
