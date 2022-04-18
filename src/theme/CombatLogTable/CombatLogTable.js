import moment from "moment"
import { useEffect, useState } from "react"
import { CLASSES } from "../../constants"
import { convertNumberToString, getRankColor } from "../../tools"
import "./CombatLogTable.css"



const CombatLogTable = ({
    data,
    pageIndex,
    pageSize,
    onLogPress
}) => {


    return (
        <div className="CombatLogTable">
            <div className="CombatLogTableHeaderRow">
                <div className="CombatLogTableHeaderColumn CombatLogTableHeaderRank">Ранг</div>
                <div className="CombatLogTableHeaderColumn CombatLogTableHeaderName">Имя</div>
                <div className="CombatLogTableHeaderColumn CombatLogTableHeaderDPS">ДПС</div>
            </div>
            {
                data.map((item, index) => {

                    return (
                        <div onClick={() => onLogPress(item.sessionHash, item.sessionId)} key={item.id} className={index % 2 == 0 ? "CombatLogTableRow CombatLogTableRowDiffColor" : "CombatLogTableRow"}>
                            <div className="CombatLogTableColumn CombatLogTableRank">
                                <div className="CombatLogTableRankContainer" style={{ color: getRankColor(index + pageSize * pageIndex + 1) }}>{index + pageSize * pageIndex + 1}</div>
                            </div>
                            <div className="CombatLogTableColumn CombatLogTableName">
                                <div className="CombatLogTableNameContainer" style={{ color: CLASSES.find(playerClass => playerClass.key == item.playerClass)?.color || "white" }}>{item.playerName.split('"').join("")}</div>
                            </div>
                            <div className="CombatLogTableColumn CombatLogTableDPS">
                                <div className="CombatLogTableDPSContainer">{convertNumberToString(item.amount)}</div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CombatLogTable