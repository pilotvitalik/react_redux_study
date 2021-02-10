import React, { Component } from "react";
import { connect } from "react-redux";
import User from "../components/User.js";
import Page from "../components/Page.js";
import { setYear } from "../store/actions/PageActions.js";

import "./App.css";

class App extends Component {
  render() {
    const { user, page, setYearAction } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Мой топ фото</h1>
        </header>
        <User name={user.name} />
        <Page photos={page.photos} year={page.year} setYear={setYearAction} />
      </div>
    );
  }
}

// приклеиваем данные из store
const mapStateToProps = (store) => {
  console.log(store); // посмотрим, что же у нас в store?
  return {
    user: store.user,
    page: store.page,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setYearAction: (year) => dispatch(setYear(year)),
  };
};

// в наш компонент App, с помощью connect(mapStateToProps)
export default connect(mapStateToProps, mapDispatchToProps)(App);
