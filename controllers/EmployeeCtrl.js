'use strict'

const Employee = require('../models/Employee');

function getEmployees(req, res) {

    Employee.find({}, (err, employees)=>{
        if (err) 
            return res.send({OK:0, message: `An error has ocurred ${err}`});
        if (!employees)
            return res.send({OK:0, message:`No employee record found`});
        return res.send({OK:1, employees:employees});
    })
}

function getEmployee(req, res) {
    let employeeId = req.body.employeeId;
    Employee.findById(employeeId, (err, employee)=>{
        if (err) 
            return res.send({OK:0, message: `An error has ocurred ${err}`});
        if (!employee)
            return res.send({OK:0, message:`The employee is not registered`});
        return res.send({OK:1, employee:employee});
    })
}

function saveEmployee(req, res) {
    let employee = new Employee();
    employee.name = req.body.name;
    employee.dod = req.body.dod;
    employee.country = req.body.country;
    employee.userName = req.body.userName;
    employee.hireDate = req.body.hireDate;
    employee.status = req.body.status;
    employee.userName = req.body.userName;
    employee.area = req.body.area;
    employee.jobTitle = req.body.jobTitle;
    employee.tipRote = req.body.tipRote;

    employee.save((err, employeeStored) => {

        if (err)
            return res.send({OK:0, message: `An error has ocurred ${err}`});
        return res.send({OK:1, message: `Employee stored successfully`})
    });
}

function editEmployee(req, res) {
    
    let employeeId = req.body._id;
    let update = req.body;  
    Employee.findOneAndUpdate({_id : employeeId}, update, (err, employeeUpdated) => {
        if (err)
            return res.send({OK:0, message: `An error has ocurred ${err}`});
        return res.status(200).send({ OK:1, message: `Employee updated successfully` })
      })
}

function deleteEmployee(req, res) {
    let employeeId = req.body._id;
    Employee.findByIdAndRemove(employeeId, (err, employeeDeleted) => {
        if (err)
        return res.send({OK:0, message: `An error has ocurred ${err}`});
    return res.send({ OK:1,message:`Employee has deleted succesfully`, employee: employeeDeleted })

  })
}

module.exports = {
    getEmployees,
    getEmployee,
    saveEmployee,
    editEmployee,
    deleteEmployee   
}