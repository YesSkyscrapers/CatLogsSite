import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSideBar } from "../store/app";
import HeaderComponent from "./HeaderComponent";

const HeaderContainer = ({ }) => {
    const dispatch = useDispatch()
    const sideBarShow = useSelector((state) => state.app.sideBarShow)

    const onMenuPress = () => {
        dispatch(toggleSideBar(!sideBarShow))
    }



    return (
        <HeaderComponent
            onMenuPress={onMenuPress}
        />
    )
}

export default HeaderContainer


