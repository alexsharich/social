import React from 'react';
import { NavLink } from 'react-router-dom';
import { UserAuthDataType } from '../../state/authReducer';
import s from './Header.module.css'

type HeaderPropsType = {
  auth: UserAuthDataType
  logout: () => void
}

const Header = (props: HeaderPropsType) => {
  return (
    <header className={s.header}>
      <img src='./logo512.png'></img>
      <div className={s.loginBlock}>
        {props.auth.isAuth
          ? <div>{props.auth.login}  <button onClick={props.logout}>Log out</button> </div>
          : <NavLink to={'/login'}>Login</NavLink>
        }
      </div>
    </header>
  )
}

export default Header;