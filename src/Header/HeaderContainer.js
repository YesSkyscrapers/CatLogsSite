import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { toggleSideBar } from "../store/app";
import HeaderComponent from "./HeaderComponent";

const HeaderContainer = ({ }) => {
    const dispatch = useDispatch()
    const sideBarShow = useSelector((state) => state.app.sideBarShow)
    const history = useHistory()
    const onMenuPress = () => {
        dispatch(toggleSideBar(!sideBarShow))
    }

    const onTitlePress = () => {
        history.push("/")
    }



    return (
        <HeaderComponent
            onMenuPress={onMenuPress}
            onTitlePress={onTitlePress}
        />
    )
}

export default HeaderContainer


