import React , { Component } from 'react';
import styles from './TextInput.module.sass';

class TextInput extends Component{

    renderError = () => {
        if (this.props.meta.touched && this.props.meta.error) {
            return (
                <span style={{fontWeight: '500' ,color: '#b72522', paddingLeft: '10px'}}>{this.props.meta.error}</span>
            );
        }
    };
    render(){
        return(
            <div className={styles.container}>
                <input className={styles.textBox} {...this.props.input} type={this.props.type} placeholder={this.props.label} />
                {this.renderError()}
            </div>
        );
    }
}
export default TextInput;