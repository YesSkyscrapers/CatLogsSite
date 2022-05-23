import React from "react";
import "./SideBar.css"
import DSImage from '../images/dragonsoul.jpg'
import { BOSSES_IMAGES } from "../constants";

const dragonSoulBosses = [
    {
        key: "morchok",
        name: "Морхок",
        image: BOSSES_IMAGES.morchok,
        link: "/dashboard?boss=morchok"
    },
    {
        key: "yorsahj",
        name: "Йорсадж",
        image: BOSSES_IMAGES.yorsahj,
        link: "/dashboard?boss=yorsahj"
    },
    {
        key: "zonozz",
        name: "Зонозз",
        image: BOSSES_IMAGES.zonozz,
        link: "/dashboard?boss=zonozz"
    },
    {
        key: "hagara",
        name: "Хагара",
        image: BOSSES_IMAGES.hagara,
        link: "/dashboard?boss=hagara"
    },
    {
        key: "ultraxion",
        name: "Ультраксион",
        image: BOSSES_IMAGES.ultraxion,
        link: "/dashboard?boss=ultraxion"
    },
    {
        key: "warmaster",
        name: "Воевода",
        image: BOSSES_IMAGES.warmaster,
        link: "/dashboard?boss=warmaster"
    },
    {
        key: "spine",
        name: "Спина",
        image: BOSSES_IMAGES.spine,
        link: "/dashboard?boss=spine"
    },
    {
        key: "madness",
        name: "Мэднесс",
        image: BOSSES_IMAGES.madness,
        link: "/dashboard?boss=madness"
    }
]

const SideBarComponent = ({
    wrapperRef,
    onPress
}) => {



    return (
        <div ref={wrapperRef} className="sidebar is-nav-closed">
            <div className="SidebarRow">
                <img src={DSImage} className="SidebarImage" />
                <div className="SidebarRowTitle">
                    Душа дракона
                </div>
            </div>
            <div>
                {
                    dragonSoulBosses.map(boss => {
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




