import React from "react";
import {Image} from "react-bootstrap";
import SubtitleImage from "./../../../content/Image/mainImg.jpeg"

const SubHeader = () => {
    return (
        <div className="subheader">
            <Image src={SubtitleImage} fluid/>
            <div className="sub-text" >
                <h1> <span className="">Незабываемые ароматы</span></h1>
                <br/>
                <div className="body">ПРОБУДИВШИЕ ВАШИ ЧУВСТВА</div>
                <div className="body">Олицетворение счастья и радости жизни</div>
            </div>
        </div>
    );
}

export default SubHeader;