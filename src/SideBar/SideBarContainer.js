import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import SideBarComponent from "./SideBarComponent";

const SideBarContainer = ({ }) => {

    const sideBarShow = useSelector((state) => state.app.sideBarShow)

    let wrapperRef = useRef(null)

    useEffect(() => {
        console.log(sideBarShow)
        const wrapper = wrapperRef.current
        wrapper.classList.add(sideBarShow ? 'is-nav-open' : "is-nav-closed")
        wrapper.classList.remove(!sideBarShow ? 'is-nav-open' : "is-nav-closed")
    }, [sideBarShow])



    return (
        <SideBarComponent
            wrapperRef={wrapperRef}
        />
    )
}

export default SideBarContainer


