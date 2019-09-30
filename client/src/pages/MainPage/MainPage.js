import React from 'react'
import styles from  './MainPage.module.sass'
import connect from 'react-redux/es/connect/connect'
import EmployeeTable from '../../components/EmployeeTable/EmployeeTable';
import MainHeader from '../../components/MainHeader/MainHeader'
import { changeStatusModalFormAction } from '../../actions/actionCreator'
import { MODAL_FORM_STATUS_MODE } from '../../constants'
function MainPage(props) {
    const openModalWindow = () => {
      props.changeStatusModalFormAction(true, MODAL_FORM_STATUS_MODE.ADD);
    };
    return (
        <div className={styles.container}>
            <MainHeader/>
            <div className={styles.wrapper}>
                <EmployeeTable/>
                <div className={styles.addEmployeeButton} onClick={openModalWindow}>
                    <span>Add new employee</span>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    const { isActive } = state.modalFormReducer;
  return{
      isActive,
  }
};
const mapDispatchToProps = (dispatch) => ({
    changeStatusModalFormAction: (isActive, status) => dispatch(changeStatusModalFormAction(isActive, status)),
});
export default connect(mapStateToProps,mapDispatchToProps)(MainPage);