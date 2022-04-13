import React from "react";
import "./SideBar.css"
import FLImage from '../images/firelands.png'
import BethtilacImage from '../images/bethtilacImage.png'
import RhyolithImage from '../images/rhyolithImage.png'
import ShannoxImage from '../images/shannoxImage.png'

const FirelandsBosses = [
    {
        key: "bethtilac",
        name: "Бет'тилак",
        image: BethtilacImage,
        link: "/dashboard?boss=bethtilac"
    },
    {
        key: "rhyolith",
        name: "Риолит",
        image: RhyolithImage,
        link: "/dashboard?boss=rhyolith"
    },
    {
        key: "shannox",
        name: "Шэннокс",
        image: ShannoxImage,
        link: "/dashboard?boss=shannox"
    }
]

const SideBarComponent = ({
    wrapperRef,
    onPress
}) => {



    return (
        <div ref={wrapperRef} className="sidebar is-nav-closed">
            <div className="SidebarRow">
                <img src={FLImage} className="SidebarImage" />
                <div className="SidebarRowTitle">
                    Огненные просторы
                </div>
            </div>
            <div>
                {
                    FirelandsBosses.map(boss => {
                        return (
                            <div onClick={() => onPress(boss)} key={boss.key} className="SidebarBossRow">
                                <img src={boss.image} className="SidebarBossImage" />
                                <div className="SidebarBossRowTitle">
                                    {boss.name}
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default SideBarComponent




