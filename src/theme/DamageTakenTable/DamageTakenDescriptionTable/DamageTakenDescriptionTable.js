import { useEffect, useState } from "react"
import { DotLoader } from "react-spinners"
import AmountRow from "../../AmountRow/AmountRow"
import "./DamageTakenDescriptionTable.css"
import { css } from "@emotion/react";

const override = css`
  display: block;
    margin: 0 auto;
`;


const DamageTakenDescriptionTable = ({
    data
}) => {

    const [maxOverall, setMaxOverall] = useState(0)
    const [allOverall, setAllOverall] = useState(0)

    useEffect(() => {
        if (data) {
            let max = 0
            let overall = 0
            data.forEach((item) => {
                if (item.amount > max) {
                    max = item.amount
                }
                overall += item.amount
            })

            setMaxOverall(max)
            setAllOverall(overall)
        }
    }, [data])




    return (
        <div className="TableOverlayContainer">
            {
                data ? (
                    <div className="TableOverlayTable">
                        <div className="TargetTableHeaderRow">
                            <div className="TargetTableHeaderColumn TargetTableHeaderName">Способность</div>
                            <div className="TargetTableHeaderColumn TargetTableHeaderAmount">Нанесено</div>
                        </div>
                        {
                            data.map((greatItem, index) => {
                                return (
                                    <div key={"gi" + greatItem.id} className={index % 2 == 0 ? "TargetTableRow TargetTableRowDiffColor" : "TargetTableRow"}>
                                        <div className="TargetTableColumn TargetTableName">
                                            <div className="TargetTableNameContainer">{greatItem.byPlayerName.split('"').join("")}</div>
                                        </div>
                                        <div className="TargetTableColumn TargetTableAmount">
                                            <AmountRow
                                                rowProcent={`${Math.floor(greatItem.amount * 10000 / allOverall) / 100}`}
                                                procent={greatItem.amount / maxOverall}
                                                overall={greatItem.amount}
                                            />
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                ) : (
                    <div className="TableOverlayLoader">
                        <DotLoader color={"white"} loading css={override} size={50} />
                    </div>
                )
            }
        </div>
    )
}

export default DamageTakenDescriptionTable