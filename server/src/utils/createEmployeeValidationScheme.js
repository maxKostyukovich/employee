const Yup = require('yup');
const valid = Yup.object().shape({
    fullName: Yup.string()
        .required("Full name is required!"),
    gender: Yup.string()
        .matches(/MALE|FEMALE/,'Gender is invalid')
        .required("Gender is required"),
    dateOfBirth: Yup.string()
        .required('Date of birth is required'),
    contactInformation: Yup.string(),
    salary: Yup.number()
        .required('Salary is required'),
    position: Yup.string()
        .required('Position is required')
});
module.exports = valid;