import axios from 'axios';
import React from 'react';
import { connect} from 'react-redux';
import { setAuthUserData, UserAuthDataType } from '../../state/authReducer';
import { AppStateType } from '../../state/redux-store';
import Header from './Header';
import s from './Header.module.css'

type HeaderContainerPropsType = MapStateToProps & MapDispatchToProps

type MapStateToProps = {
  auth: UserAuthDataType
}
type MapDispatchToProps = {
  setAuthUserData: (data: UserAuthDataType) => void
}

class HeaderContainer extends React.Component<HeaderContainerPropsType>{
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
      withCredentials: true
    })
      .then(response => {
        debugger
        if (response.data.resultCode === 0) {
          this.props.setAuthUserData(response.data.data)
        }
      })
  }
  render() {
    return (
      <Header {...this.props} />
    )
  }
}

const mapStateToProps = (state: AppStateType): MapStateToProps => {
  return {
    auth: state.auth.data
  }
}


export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);