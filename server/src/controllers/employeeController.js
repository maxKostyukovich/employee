import Employee from '../models/employee.model'

module.exports.createEmployee = async(req, res, next) => {
    try{
        const employee = await Employee(req.body);
        employee.save();
        res.send(employee);
    } catch(e){
        next(e);
    }
};

module.exports.getAllEmployees = async(req, res, next) => {
  try {
      const employees = await Employee.find({ });
      res.send(employees);
  } catch(e){
      next(e);
  }
};

module.exports.deleteEmployee = async(req, res, next) => {
    try{
        const _id = req.params.id;
        const result = await Employee.findOneAndDelete({_id});
        console.log(result);
        res.status(200).send();
    }catch(e){
        next(e);
    }
};

module.exports.updateEmployee = async(req, res, next) => {
  try {
      const _id = req.params.id;
      const result = await Employee.updateOne({_id}, req.body);
      res.send({ok:'ok'});
  }  catch(e){
      console.log(e);
      next(e);
  }
};