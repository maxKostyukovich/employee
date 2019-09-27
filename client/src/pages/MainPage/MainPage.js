import React from 'react'
import styles from  './MainPage.module.sass'
//import connect from 'react-redux/es/connect/connect'
import MainHeader from '../../components/MainHeader/MainHeader'

function MainPage(props) {
    return (
        <div className={styles.container}>
            <MainHeader/>
            <div className={styles.wrapper}>
                <h1>Main Page</h1>
                <h2>Hi, {props.user.login}</h2>
            </div>
        </div>
    )
}

// const mapStateToProps = (state) => {
//   const { user } = state.userReducer;
//   return{
//       user,
//   }
// };
export default MainPage;