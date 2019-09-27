import React from 'react'
import styles from './MainHeader.module.sass'
import logo from '../../images/logo.png'
import { logoutAction } from "../../actions/actionCreator";
import connect from 'react-redux/es/connect/connect'
function MainHeader(props) {
    return(
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <img src={logo} alt={'logo'}/>
                <div className={styles.logoutButton} onClick={props.logoutAction}>
                    <span>Logout</span>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
  logoutAction: () => dispatch(logoutAction()),
});

const mapStateToProps = (state) => {
    return{

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MainHeader);