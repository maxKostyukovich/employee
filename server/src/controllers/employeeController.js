import Employee from '../models/employee.model'
module.exports.createEmployee = async(req, res, next) => {
    try{
        const employee = await Employee(req.body);
        employee.save();
        res.send(employee);
    } catch(e){
        console.log('error form create ',e);
        next(e);
    }
};

module.exports.getAllEmployees = async(req, res, next) => {
  try {
      const employees = await Employee.find({ });
      res.send(employees);
  } catch(e){
      console.log('error in get all employee ', e);
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
        console.log(e);
        next(e);
    }
};