import React from "react";
import Header from "./Header";
import {connect} from "react-redux";

class HeaderRenderContainer extends React.PureComponent {


    render() {
        return (
            <div>
                <Header {...this.props}/>
            </div>
        );
    }
}

let mapStateToProps = state => {
    return {
        user: state.authorization.user,
        isAuth: state.authorization.isAuth
    };
}

const HeaderContainer = connect(mapStateToProps, {})(HeaderRenderContainer);

export default HeaderContainer;