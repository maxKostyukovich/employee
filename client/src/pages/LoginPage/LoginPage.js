import React from 'react'
import styles from './LoginPage.module.sass'
import FormsHeader from '../../components/Forms/FormsHeader/FormsHeader'
import logo from '../../images/logo.png';
import LoginSignupButton from "../../components/Forms/LoginSignupButtoms/LoginSignupButtons";
import { Field, reduxForm  } from "redux-form";
import TextInput from '../../components/Forms/Inputs/TextInput/TextInput'
import * as validate from "../../utils/validation/validationFields";
import {loginAction, resetErrorAction} from "../../actions/actionCreator";
import connect from 'react-redux/es/connect/connect';
import { compose } from 'redux';
import SubmitButton from "../../components/Forms/SubmitButton/SubmitButton";
import {toast, clearToast } from '../../utils/toast';
class LoginPage extends React.Component {
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.err){
            toast(this.props.err.message);
        }
    }
    componentDidMount() {
        this.props.resetErrorAction();
    }
    componentWillUnmount() {
        clearToast();
    }

    render() {
        return (
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.nav}>
                        <img src={logo} alt={'logo'}/>
                        <LoginSignupButton link={'/signup'} text={'Signup'}/>
                    </div>
                    <div className={styles.formContainer}>
                        <FormsHeader title={'LOGIN TO YOUR ACCOUNT'}/>
                        <div className={styles.inputsContainer}>
                            <Field name={"email"} type={"text"} validate={[validate.isRequireValidation, validate.emailValidation]} label={"Email Address"} component={TextInput}/>
                            <Field name={"password"} validate={[validate.passwordValidation, validate.isRequireValidation]} type={"password"} label={"Password"} component={TextInput}/>
                            <SubmitButton  onClick={this.props.handleSubmit(this.props.loginAction)} submitText={"LOGIN"}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch) => ({
    loginAction: (data) => dispatch(loginAction(data)),
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
}))(LoginPage);