import React from 'react'
import styles from './Input.module.sass'

function Input(props) {
    const renderError = () => {
        if (props.meta.touched && props.meta.error) {
            return (
                <span style={{fontWeight: '500' ,color: '#b72522', paddingLeft: '10px'}}>{props.meta.error}</span>
            );
        }
    };
    return(
        <div className={styles.container}>
                <span>{props.label}</span>
                <input  placeholder={props.placeholder} className={styles.input} {...props.input} type={props.type}  />
            {renderError()}
        </div>
    )
}

export default Input;