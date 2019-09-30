import React from 'react'
import styles from './TableItem.module.sass'
import './TableItem.module.sass'
import trashImg from '../../../images/trash.png'
import editImg from '../../../images/edit.png'
import moment from 'moment'
import { deleteEmployeeById } from "../../../actions/actionCreator";
import connect from "react-redux/es/connect/connect";
class TableItem extends React.Component{
    deleteEmployeeHandler = () =>{
        this.props.deleteEmployeeById(this.props.employee._id)
    };
    render(){
        return(
            <tr>
                <td><span>{this.props.employee.fullName}</span></td>
                <td><span>{moment(this.props.employee.dateOfBirth).format('D MMM YYYY')}</span></td>
                <td><span>{this.props.employee.position}</span></td>
                <td><span>{this.props.employee.salary}</span></td>
                <td>
                    <div className={styles.tableButtons}>
                        <div className={styles.imgContainer}>
                            <img src={editImg} alt={'Edit button'}/>
                        </div>
                        <div className={styles.imgContainer} onClick={this.deleteEmployeeHandler}>
                            <img src={trashImg} alt={'Trash button'}/>
                        </div>
                    </div>
                </td>
            </tr>
        )
    }
}

const mapStateToProps = (state) => {
    return{

    }
};

const mapDispatchToProps = (dispatch) => ({
    deleteEmployeeById: (id) => dispatch(deleteEmployeeById(id)),
});

export default connect(mapStateToProps,mapDispatchToProps)(TableItem);
