import axios from './interceptors'
import {employeesURL, employeeURL} from "../baseURL";

export const getEmployees = () => axios.get(employeesURL);
export const deleteEmployeeById = (id) => axios.delete(`${employeeURL}/${id}`);
export const createEmployee = (employee) => axios.post(`${employeeURL}`,employee);