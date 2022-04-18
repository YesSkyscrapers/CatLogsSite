import React from "react";
import "./SpecificSessionViewer.css"
import DotLoader from "react-spinners/DotLoader";
import Pagination from "../../../theme/Pagination/Pagination";
import { css } from "@emotion/react";
import BethtilacImage from '../../../images/bethtilacImage.png'
import RhyolithImage from '../../../images/rhyolithImage.png'
import ShannoxImage from '../../../images/shannoxImage.png'
import moment from 'moment';
import DamageDoneTable from "../../../theme/DamageDoneTable/DamageDoneTable";
import DamageTakenTable from "../../../theme/DamageTakenTable/DamageTakenTable";

const BOSS_INFO = {
    "RHYOLITH": {
        image: RhyolithImage,
        name: "Риолит"
    },
    "BETHTILAC": {
        image: BethtilacImage,
        name: "Бет'тилак"
    },
    "SHANNOX": {
        image: ShannoxImage,
        name: "Шэннокс"
    }
}

const DIFFICULTY = {
    "1": "10об",
    "2": "25об",
    "3": "10гер",
    "4": "25гер"
}


const TABS = [{
    key: 0,
    title: "Нанесено урона"
}, {
    key: 1,
    title: "Получено урона"
}]

const SpecificSessionViewerComponent = ({
    damageDone,
    damageTaken,
    session,
    tab,
    onTabSelect,
    damageDoneDescription,
    damageTakenDescription
}) => {

    return (
        <div>
            <div className="SpecificSessionBossInfoContainer">
                <img className="SpecificSessionBossInfoImage" src={BOSS_INFO[session.boss].image} />
                <div className="SpecificSessionBossInfoTextContainer">
                    <div className="SpecificSessionBossInfoTitle">{`${BOSS_INFO[session.boss].name}${session.difficulty ? `(${DIFFICULTY[session.difficulty]})` : ``}`}</div>
                    <div className="SpecificSessionBossInfoAdditionalInfoContainer">
                        <div className={session.isWin ? "SpecificSessionBossInfoKill" : "SpecificSessionBossInfoWipe"}>{`${session.isWin ? "Убийство" : "Вайп"} (${moment.utc((moment(session.timeEnd).diff(moment(session.timeStart)))).format("mm:ss")})`}</div>
                        <div className="SpecificSessionBossInfoTime">{moment(session.timeEnd).format("DD.MM.YYYY HH:mm")}</div>
                    </div>
                </div>
            </div>
            <div className="SpecificSessionTabsContainer">
                {
                    TABS.map(_tab => {
                        return (
                            <div key={_tab.key} onClick={() => onTabSelect(_tab.key)} className={_tab.key == tab ? "SpecificSessionTabContainerActive" : "SpecificSessionTabContainer"}>
                                <div className={_tab.key == tab ? "SpecificSessionTabActive" : "SpecificSessionTab"}>
                                    {_tab.title}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="SpecificSessionTableContainer">
                {
                    tab == 0 ? (
                        <DamageDoneTable
                            damageDoneDescription={damageDoneDescription}
                            duration={moment(session.timeEnd).diff(moment(session.timeStart), "seconds")}
                            data={damageDone}
                        />
                    ) : (
                        <DamageTakenTable
                            damageTakenDescription={damageTakenDescription}
                            duration={moment(session.timeEnd).diff(moment(session.timeStart), "seconds")}
                            data={damageTaken}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default SpecificSessionViewerComponent