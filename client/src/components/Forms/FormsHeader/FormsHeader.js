import React , { Component } from 'react';
import styles from './FormsHeader.module.sass';

class FormsHeader extends Component{

    render(){
        return(
            <div className={styles.container}>
                <h2 className={styles.formTitle}>{this.props.title}</h2>
                <span className={styles.helpText}>{this.props.text}</span>
            </div>
        );
    }
}
export default FormsHeader;