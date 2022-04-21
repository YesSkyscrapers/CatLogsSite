import React from "react";
import "./Header.css"

const HeaderComponent = ({
    onMenuPress,
    isMenuActive,
    onTitlePress
}) => {
    return (
        <div className="headerContainer">
            <div className="menuButton" onClick={onMenuPress}>
                <div style={{ width: 40, height: 4, backgroundColor: 'white', marginTop: 5 }} />
                <div style={{ width: 40, height: 4, backgroundColor: 'white', marginTop: 8 }} />
                <div style={{ width: 40, height: 4, backgroundColor: 'white', marginTop: 8 }} />
            </div>
            <div onClick={onTitlePress} className="HeaderTitle">CatLogs</div>
        </div>
    )
}

export default HeaderComponent




