import React from 'react'
import styles from './EmployeeTable.module.sass'
import tableHeaders from '../../constants/tableHeaderText'
import TableItem from './TableItem/TableItem'
import { getEmployees, deleteEmployeeById } from '../../actions/actionCreator'
import connect from 'react-redux/es/connect/connect'
import ModalWindow from '../ModalForm/ModalForm'
class EmployeeTable extends React.Component{
    componentDidMount(){
        this.props.getEmployees();
    }
renderEmployees = () => {
    const res = this.props.employees.map(value =>
        <TableItem key={value._id} employee={value}/>
    );
    return [...res];
};
    deleteEmployeeHandler(){
        this.props.deleteEmployeeById()
    }


renderTableHeaders = ()=> {
    const res = tableHeaders.map(value => <th key={value}>{value}</th> );
    return [...res];
};
    render(){
        return(
            <>
            <table className={styles.table}>
                <thead>
                    <tr>
                        {this.renderTableHeaders()}
                    </tr>
                </thead>
                <tbody>
                {this.renderEmployees()}
                </tbody>
            </table>
                <ModalWindow/>
                </>
        )
    }


}

const mapStateToProps = (state) => {
  const { employees } = state.employeeReducer;
  return ({
          employees
      }
  )
};

const mapDispatchToProps = (dispatch) => ({
    getEmployees: () => dispatch(getEmployees()),
    deleteEmployeeById: (id) => dispatch(deleteEmployeeById(id))
});

export default connect(mapStateToProps,mapDispatchToProps)(EmployeeTable);