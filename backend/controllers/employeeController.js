
const getEmployees = (req,res)=>{
    res.send({
        "Name":"John",
        "Age":20
     })
}

const getEmployeeBank = (req,res)=>{
    res.send({
        "Bank":"SBI"
    })
}


module.exports = {
    getEmployees,
    getEmployeeBank
}