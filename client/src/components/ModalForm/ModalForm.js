import React from 'react'
import styles from './ModalForm.module.sass'
import Input from './Inputs/Input/Input'
import connect from 'react-redux/es/connect/connect'
import { Field, reduxForm  } from "redux-form";
import * as validate from "../../utils/validation/validationFields";
import { GENDER, MODAL_FORM_STATUS_MODE } from '../../constants'
import RadioButton from './Inputs/RadioButton/RadioButton'
import {changeStatusModalFormAction, addNewEmployeeAction} from "../../actions/actionCreator";
import {compose} from "redux";
import SubmitButton from './Inputs/SubmitButton/SubmitButton'
import { createTextMask  } from 'redux-form-input-masks'
class ModalForm extends React.Component{

onCloseWindow = () => {
    this.props.changeStatusModalFormAction(false, '');
};
saveHandler = (data) => {
    if(this.props.status === MODAL_FORM_STATUS_MODE.ADD){
        this.props.addNewEmployeeAction(data)
    }
};

    render(){
        const  dateMask = createTextMask({
           pattern: '9999-99-99'
        });
        return(
            <>
                { this.props.isActive &&
                    <div className={styles.overlay}>
                        <div className={styles.modalWindow}>
                            <div className={styles.header}>
                                <span>Enter the data please </span>
                                <span style={{cursor:'pointer'}} onClick={this.onCloseWindow}>X</span>
                            </div>
                            <div className={styles.form}>
                                <Field name={"fullName"} type={"text"} validate={[validate.isRequireValidation]}
                                       label={"Full Name: "} component={Input}/>
                                <div className={styles.radioContainer}>
                                    <Field id='radioMale' validate={[validate.isRequireValidation]} name='gender'
                                           component={RadioButton} type='radio' value={GENDER.MALE} title="Male"/>
                                    <Field id='radioFemale' validate={[validate.isRequireValidation]} name='gender'
                                           component={RadioButton} type='radio' value={GENDER.FEMALE} title="Female"/>
                                </div>
                                <Field name={"dateOfBirth"} type={"text"}
                                       validate={[validate.isRequireValidation]} label={"Date of birth: "}
                                       component={Input} {...dateMask} placeholder={'YYYY-MM-DD'}
                                />
                                <Field name={"contactInformation"} type={"text"}
                                       validate={[validate.isRequireValidation]} label={"Contact Info: "}
                                       component={Input}/>
                                <Field name={"salary"} type={"text"} validate={[validate.isRequireValidation]}
                                       label={"Salary: "} component={Input}/>
                                <Field name={"position"} type={"text"} validate={[validate.isRequireValidation]}
                                       label={"Position: "} component={Input}/>
                            </div>
                            <div className={styles.footer}>
                                <SubmitButton handleForm={this.props.handleSubmit(this.saveHandler)}/>
                            </div>
                        </div>
                    </div>
                }
            </>
        )

    }
}

const mapDispatchToProps = (dispatch) => ({
    changeStatusModalFormAction: (isActive, status) => dispatch(changeStatusModalFormAction(isActive, status)),
    addNewEmployeeAction: (employee) => dispatch(addNewEmployeeAction(employee)),
});

const mapStateToProps = (state) => {
    const { isActive, status } = state.modalFormReducer;
    const { err } = state.employeeReducer;
    return {
        isActive,
        status,
        err,
    }
};

export default compose(connect(mapStateToProps,mapDispatchToProps),reduxForm({
    form: 'employeeForm',
}))(ModalForm);
