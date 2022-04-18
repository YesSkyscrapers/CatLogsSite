import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { toggleSideBar } from "../store/app";
import SideBarComponent from "./SideBarComponent";

const SideBarContainer = ({ }) => {

    const sideBarShow = useSelector((state) => state.app.sideBarShow)

    let wrapperRef = useRef(null)

    useEffect(() => {
        const wrapper = wrapperRef.current
        wrapper.classList.add(sideBarShow ? 'is-nav-open' : "is-nav-closed")
        wrapper.classList.remove(!sideBarShow ? 'is-nav-open' : "is-nav-closed")
    }, [sideBarShow])

    const history = useHistory()
    const dispatch = useDispatch()

    const onPress = (boss) => {
        history.push(boss.link)
        dispatch(toggleSideBar(false))
    }

    return (
        <SideBarComponent
            wrapperRef={wrapperRef}
            onPress={onPress}
        />
    )
}

export default SideBarContainer


