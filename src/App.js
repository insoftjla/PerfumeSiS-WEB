import React from 'react';
import './App.css';
import ScreenRoot from "./screens/Root";
import {connect} from "react-redux";
import {initializeApp} from "./redux/reducers/initialized";

class App extends React.Component {

    componentDidMount() {
        if (!this.props.isAuth) this.props.initializeApp()
    }

    render() {
        return (
            <ScreenRoot/>
        );
    }
}

let mapStateToProps = state => {
    return {
        isInitialized: state.initializedApp.isInitialized,
        isAuth: state.authorization.isAuth
    }
}

export default connect(mapStateToProps, {initializeApp})(App);

