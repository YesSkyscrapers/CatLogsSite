import { useEffect, useState } from "react"
import { DotLoader } from "react-spinners"
import { convertNumberToString } from "../../tools"
import AmountRow from "../AmountRow/AmountRow"
import "./DamageDoneTable.css"
import { css } from "@emotion/react";
import DamageDoneDescriptionTable from "./DamageDoneDescriptionTable/DamageDoneDescriptionTable"
import { CLASSES } from "../../constants"

const override = css`
  display: block;
    margin: 0 auto;
`;


const DamageDoneTable = ({
    data,
    duration,
    damageDoneDescription
}) => {

    const [maxOverall, setMaxOverall] = useState(0)
    const [allOverall, setAllOverall] = useState(0)

    useEffect(() => {
        let max = 0
        let overall = 0
        data.forEach((item) => {
            if (item.overall > max) {
                max = item.overall
            }
            overall += item.overall
        })
        setMaxOverall(max)
        setAllOverall(overall)
    }, [data])


    const [showOverlay, setShowOverlay] = useState(null)

    const onMouseEnter = item => {
        setShowOverlay(item.id)
    }

    const onMouseLeave = item => {
        if (showOverlay == item.id) {
            setShowOverlay(null)
        }
    }

    return (
        <div className="Table">
            <div className="TableHeaderRow">
                <div className="TableHeaderColumn TableHeaderName">Имя</div>
                <div className="TableHeaderColumn TableHeaderAmount">Нанесено</div>
                <div className="TableHeaderColumn TableHeaderDPS">ДПС</div>
            </div>
            {
                data.map((item, index) => {
                    return (
                        <div onMouseEnter={() => onMouseEnter(item)} onMouseLeave={() => onMouseLeave(item)} key={item.id} className={index % 2 == 0 ? "TableRow TableRowDiffColor" : "TableRow"}>
                            <div className="TableColumn TableName">
                                <div className="TableNameContainer" style={{ color: CLASSES.find(playerClass => playerClass.key == item.playerClass)?.color || "white" }}>{item.playerName.split('"').join("")}</div>
                            </div>
                            <div className="TableColumn TableAmount">
                                <AmountRow
                                    rowProcent={`${Math.floor(item.overall * 10000 / allOverall) / 100}`}
                                    procent={item.overall / maxOverall}
                                    overall={item.overall}
                                    color={CLASSES.find(playerClass => playerClass.key == item.playerClass)?.color || "white"}
                                />
                            </div>
                            <div className="TableColumn TableDPS">
                                <div className="TableDPSContainer">{convertNumberToString(item.overall / duration)}</div>
                            </div>

                            {
                                showOverlay && showOverlay == item.id ? (
                                    <DamageDoneDescriptionTable
                                        data={damageDoneDescription[item.id]}
                                    />
                                ) : null
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}

export default DamageDoneTable