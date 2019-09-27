import React from 'react'
import styles from './SignupPage.module.sass'
import FormsHeader from '../../components/Forms/FormsHeader/FormsHeader'
import logo from '../../images/logo.png';
import LoginSignupButton from "../../components/Forms/LoginSignupButtoms/LoginSignupButtons";
import { Field, reduxForm  } from "redux-form";
import TextInput from '../../components/Forms/Inputs/TextInput/TextInput'
import * as validate from "../../utils/validation/validationFields";
import { signupAction, resetErrorAction } from "../../actions/actionCreator";
import connect from 'react-redux/es/connect/connect';
import { compose } from 'redux';
import SubmitButton from "../../components/Forms/SubmitButton/SubmitButton";
import {toast, clearToast } from '../../utils/toast';
class SignupPage extends React.Component {
    showErrorMessage = () => {
        if(this.props.err) {
            toast(this.props.err.message)
        }
    };
    componentDidMount() {
        this.props.resetErrorAction();
    }
    componentWillUnmount() {
        clearToast();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.showErrorMessage()
    }
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.nav}>
                        <img src={logo} alt={'logo'}/>
                        <LoginSignupButton link={'/login'} text={'login'}/>
                    </div>
                    <div className={styles.formContainer}>
                        <FormsHeader title={'CREATE AN ACCOUNT'} text={'We always keep your name and email address private.'}/>
                        <div className={styles.inputsContainer}>
                            <Field name={"login"} type={"text"} validate={[validate.isRequireValidation]} label={"Login"} component={TextInput}/>
                            <Field name={"email"} type={"text"} validate={[validate.isRequireValidation, validate.emailValidation]} label={"Email Address"} component={TextInput}/>
                            <Field name={"password"} validate={[validate.passwordValidation, validate.isRequireValidation]} type={"password"} label={"Password"} component={TextInput}/>
                            <Field name={"passwordConformation"} validate={[validate.confirmPasswordValidation, validate.isRequireValidation]} type={"password"} label={"Password Conformation"} component={TextInput}/>
                            <SubmitButton  onClick={this.props.handleSubmit(this.props.signupAction)} submitText={"Create account"}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch) => ({
    signupAction: (data) => dispatch(signupAction(data)),
    resetErrorAction: () => dispatch(resetErrorAction()),
});

const mapStateToProps = (state) => {
    const { user, isFetching, err } = state.userReducer;
    return {
        user,
        isFetching,
        err,
    }
};

export default compose(connect(mapStateToProps,mapDispatchToProps),reduxForm({
    form: 'loginForm',
}))(SignupPage);