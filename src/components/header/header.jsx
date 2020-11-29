import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {AuthorizationStatus} from "../../const";

const Header = (props) => {
  const {mainScreenStatus, authorizationStatus, userMail} = props;

  const logoStyle = mainScreenStatus ? `header__logo-link header__logo-link--active` : `header__logo-link`;
  const logoRoute = mainScreenStatus ?
    <a className={logoStyle}>
      <img className="header__logo" src="/img/logo.svg" alt="6 cities logo" width="81" height="41"/>
    </a> :
    <Link to={`/`} className={logoStyle}>
      <img className="header__logo" src="/img/logo.svg" alt="6 cities logo" width="81" height="41"/>
    </Link>;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">

            {logoRoute}

          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link to={`/favorites`} className="header__nav-link header__nav-link--profile">
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  <span className="header__user-name user__name">{authorizationStatus === AuthorizationStatus.AUTH ? userMail : `Sign in`}</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  userMail: PropTypes.string.isRequired,
  mainScreenStatus: PropTypes.bool
};

const mapStateToProps = ({USER}) => ({
  authorizationStatus: USER.authorizationStatus,
  userMail: USER.userMail
});

export {Header};
export default connect(mapStateToProps)(Header);
