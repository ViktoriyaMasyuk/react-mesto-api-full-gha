import React from 'react';
import { Link } from "react-router-dom";
// import { useNavigate } from 'react-router-dom';


function NavBar(props) {

  //  const navigate = useNavigate();
  // function signOut(){
  //      navigate('/sign-in');
  //   props.isLoggedIn(false);
  //   localStorage.removeItem('jwt');
    
  // }
    return (
        <div className="header__user-info">
            <p className="header__email">{props.emailUser}</p>
            {/* <a className="header__link" 
            src="/sign-in"
            onClick={props.onClick}>Выйти</a> */}
            <Link to="/sign-in" className="header__link" type="button" onClick={props.onClick}>Выйти</Link>
        </div>
    )
}
export default NavBar;