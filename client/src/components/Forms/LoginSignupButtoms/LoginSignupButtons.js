import React  from 'react';
import styles from './LoginSignupButtons.module.sass';
import { Link } from 'react-router-dom'

function LoginSignupButton(props) {
    return(
        <Link to={props.link}>
            <div className={styles.container}>
                <span>{props.text}</span>
            </div>
        </Link>
    )

}

export default LoginSignupButton;