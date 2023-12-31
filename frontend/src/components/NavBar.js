import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

function NavBar(props) {

    return (
        <div className="header__user-info">
            <p className="header__email">{props.emailUser}</p>
            <Routes>
              <Route path="/"
                element={ <Link to="/sign-in" className="header__link" type="button" onClick={props.onClick}>Выйти</Link>}
              />
            </Routes>
        </div>
    )
}
export default NavBar;