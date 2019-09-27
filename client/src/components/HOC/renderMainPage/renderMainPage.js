import  React, { Component }  from 'react';
import connect from 'react-redux/es/connect/connect';
import { getUserAction } from '../../../actions/actionCreator';
import { STORAGE_KEYS } from '../../../constants';
import history from '../../../history'
export default function (ComposedComponent) {
    class Authenticate extends Component {
        initUser(){
            if(!this.props.user.email) {
                this.props.getUserAction();
            }
        }
        componentDidMount() {
            if(localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN_TYPE)){
                this.initUser();
            } else{
                history.push('/login')
            }
        }
        render() {
            return (
                <>
                    { this.props.user.email ? <ComposedComponent  user={this.props.user} {...this.props}/> : null }
                </>
            );
        }
    }

    const mapStateToProps = (state) => {
        const { user, error } = state.userReducer;
        return {
            user,
            error
        }
    };
    const mapDispatchToProps = (dispatch) => ({
        getUserAction: () => dispatch(getUserAction()),
    });
    return connect(
        mapStateToProps,
        mapDispatchToProps
    )(Authenticate);
}