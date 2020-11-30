import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import FavoritesMain from "../favorites-main/favorites-main";
import Header from "../header/header";
import Preloader from "../preloader/preloader";
import {getfavoritesLoadStatus} from "../../store/selectors/selectors";
import {changeFavoritesLoadStatus} from "../../store/actions";
import {fetchFavoritesList} from "../../store/api-actions";

class FavoritesScreen extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {fetchFavoritesListAction, changeFavoritesLoadStatusAction} = this.props;

    Promise.all([
      fetchFavoritesListAction()
    ])
    .then(() => {
      changeFavoritesLoadStatusAction(true);
    });
  }

  componentWillUnmount() {
    const {changeFavoritesLoadStatusAction} = this.props;

    changeFavoritesLoadStatusAction(false);
  }

  render() {
    const {favoritesLoadStatus} = this.props;

    return (
      <div className="page">

        <Header/>

        {
          favoritesLoadStatus ?
            <FavoritesMain /> :
            <Preloader />
        }

        <footer className="footer container">
          <Link to={`/`} className="header__logo-link">
            <img className="footer__logo" src="/img/logo.svg" alt="6 cities logo" width="64" height="33" />
          </Link>
        </footer>
      </div>
    );
  }
}

FavoritesScreen.propTypes = {
  favoritesLoadStatus: PropTypes.bool.isRequired,
  changeFavoritesLoadStatusAction: PropTypes.func.isRequired,
  fetchFavoritesListAction: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  favoritesLoadStatus: getfavoritesLoadStatus(state)
});

const mapDispatchToProps = (dispatch) => ({
  changeFavoritesLoadStatusAction(status) {
    dispatch(changeFavoritesLoadStatus(status));
  },
  fetchFavoritesListAction() {
    return dispatch(fetchFavoritesList());
  }
});

export {FavoritesScreen};
export default connect(mapStateToProps, mapDispatchToProps)(FavoritesScreen);
