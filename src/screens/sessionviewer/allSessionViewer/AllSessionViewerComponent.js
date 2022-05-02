import React from "react";
import "./AllSessionViewer.css"
import DotLoader from "react-spinners/DotLoader";
import Pagination from "../../../theme/Pagination/Pagination";
import { css } from "@emotion/react";
import BethtilacImage from '../../../images/bethtilacImage.png'
import RhyolithImage from '../../../images/rhyolithImage.png'
import ShannoxImage from '../../../images/shannoxImage.png'
import AlysrazorImage from '../../../images/alysrazorImage.png'
import moment from 'moment';

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
    },
    "ALYSRAZOR": {
        image: AlysrazorImage,
        name: "Алисразор"
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