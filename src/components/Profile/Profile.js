import React from "react";
import PersonData from "./PersonalData";
import {Button, Table} from "react-bootstrap";
import {connect} from "react-redux";
import {
    setIsAddLocationData,
    setIsEditPersonData,
    addLocation,
    updatePersonData, updatePassword
} from "../../redux/reducers/profile";
import {Title} from "../commons/page/page";
import Location from "./Location";
import Password from "./Password";

class Profile extends React.Component {


    onProfile = (data) => {
        this.props.updatePersonData(data);
    };

    onLocation = (location) => {
        this.props.addLocation(location);
    };

    onPassword = (data) => {
        this.props.updatePassword(data.password);
    };

    render() {

        const {
            user,
            isUpdateData,
            isEditPersonData,
            setIsEditPersonData,
            isAddLocationData,
            setIsAddLocationData
        } = this.props

        return (
            <div className="pb-5">
                <Title value="Мой профиль"/>
                <PersonData
                    onSubmit={this.onProfile}
                    user={user}
                    isUpdate={isUpdateData}
                    isEdit={isEditPersonData}
                    setIsEdit={setIsEditPersonData}
                />

                <div className="mt-5">
                    <h6 className="mb-4">
                        <span className="text-uppercase">Контактная информация</span>
                        <Button variant="link" className="float-right">Редактировать</Button>
                    </h6>
                </div>
                <div>
                    <Table>
                        <tr>
                            <td className="w-25">Электронная почта</td>
                            <td>{user?.email}</td>
                        </tr>
                        <tr>
                            <td>Телефон</td>
                            <td>{user?.phoneNumber}</td>
                        </tr>
                    </Table>
                </div>
                <Location
                    onSubmit={this.onLocation}
                    locations={user?.locations}
                    isUpdate={isUpdateData}
                    isAdd={isAddLocationData}
                    setIsAdd={setIsAddLocationData}
                />
                <Password
                    onSubmit={this.onPassword}
                    isUpdate={isUpdateData}
                />
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        isUpdateData: state.profile.isUpdateData,
        isEditPersonData: state.profile.isEditPersonData,
        isAddLocationData: state.profile.isAddLocationData,
        user: state.authorization.user
    }
}

export default connect(mapStateToProps, {
    updatePersonData,
    setIsEditPersonData,
    addLocation,
    setIsAddLocationData,
    updatePassword
})(Profile);