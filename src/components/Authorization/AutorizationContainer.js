import React from "react";
import {login, logout} from "../../redux/reducers/authorization";
import {connect} from "react-redux";
import LoginForm from "../commons/forms/LoginForm";
import {Redirect} from "react-router-dom";

class AuthorizationContainer extends React.Component {

    render() {
        const onLogin = (formData) => {
            this.props.login(formData.username, formData.password)
        }

        if (this.props.isAuth) return <Redirect to="/"/>

        return (
            <div>
              <LoginForm onSubmit={onLogin}/>
            </div>
        )
    }

}

const
    mapStateToProps = state => {
        return {
            user: state.authorization.user,
            isAuth: state.authorization.isAuth
        }
    }

export default connect(mapStateToProps, {login, logout})(AuthorizationContainer);