import React from 'react'
import styles from './SubmitButton.module.sass'

export default function SubmitButton(props) {
    return(
        <div className={styles.button} onClick={props.handleForm}>
            <span>Save</span>
        </div>
    )

}