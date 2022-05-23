import React from "react";
import "./AllSessionViewer.css"
import DotLoader from "react-spinners/DotLoader";
import Pagination from "../../../theme/Pagination/Pagination";
import { css } from "@emotion/react";
import moment from 'moment';
import { BOSSES, BOSSES_IMAGES } from "../../../constants";

const BOSS_INFO = {
    "MORCHOK": {
        image: BOSSES_IMAGES[BOSSES.morchok],
        name: "Морхок"
    },
    "YORSAHJ": {
        image: BOSSES_IMAGES[BOSSES.yorsahj],
        name: "Йорсадж"
    },
    "ZONOZZ": {
        image: BOSSES_IMAGES[BOSSES.zonozz],
        name: "Зонозз"
    },
    "HAGARA": {
        image: BOSSES_IMAGES[BOSSES.hagara],
        name: "Хагара"
    },
    "ULTRAXION": {
        image: BOSSES_IMAGES[BOSSES.ultraxion],
        name: "Ультраксион"
    },
    "WARMASTER": {
        image: BOSSES_IMAGES[BOSSES.warmaster],
        name: "Воевода"
    },
    "SPINE": {
        image: BOSSES_IMAGES[BOSSES.spine],
        name: "Спина"
    },
    "MADNESS": {
        image: BOSSES_IMAGES[BOSSES.madness],
        name: "Мэднесс"
    }
}

const DIFFICULTY = {
    "1": "10об",
    "2": "25об",
    "3": "10гер",
    "4": "25гер"
}



const override = css`
  display: block;
    margin: 0 auto;
`;


const AllSessionViewerComponent = ({
    sessions,
    onSelect
}) => {
    return (
        <div className="AllSessionsContainer">
            {
                sessions.length == 0 && (
                    <div className="EmptySession">
                        Логи по пулам отсутствуют
                    </div>
                )
            }
            {
                sessions.map(session => {
                    return (
                        <div onClick={() => onSelect(session.id)} key={session.id} className="SessionRow">
                            <img src={BOSS_INFO[session.boss].image} className="SessionRowImage" />
                            <div className="SessionRowName">{`${BOSS_INFO[session.boss].name}${session.difficulty ? `(${DIFFICULTY[session.difficulty]})` : ``}`}</div>
                            <div className="SessionRowAddInfo">
                                <div className={session.isWin ? "SessionRowKill" : "SessionRowWipe"}>{`${session.isWin ? "Убийство" : "Вайп"} (${moment.utc((moment(session.timeEnd).diff(moment(session.timeStart)))).format("mm:ss")})`}</div>
                                <div className={"SessionRowTime"}>{moment(session.timeEnd).format("DD.MM.YYYY HH:mm")}</div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default AllSessionViewerComponent