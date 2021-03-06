import { useEffect, useState } from "react"
import { DotLoader } from "react-spinners"
import AmountRow from "../../AmountRow/AmountRow"
import "./DamageDoneDescriptionTable.css"
import { css } from "@emotion/react";
import { SPELLSCHOOLS, SPELLSCHOOL_UNKNOWN } from "../../../constants";

const override = css`
  display: block;
    margin: 0 auto;
`;


const DamageDoneDescriptionTable = ({
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
                        <div className="SpellTableHeaderRow">
                            <div className="SpellTableHeaderColumn SpellTableHeaderName">Способность</div>
                            <div className="SpellTableHeaderColumn SpellTableHeaderAmount">Нанесено</div>
                        </div>
                        {
                            data.map((greatItem, index) => {
                                return (
                                    <div key={"gi" + greatItem.id} className={index % 2 == 0 ? "SpellTableRow SpellTableRowDiffColor" : "SpellTableRow"}>
                                        <div className="SpellTableColumn SpellTableName">
                                            <div className="SpellTableNameContainer"
                                                style={{ color: SPELLSCHOOLS[greatItem.school] || SPELLSCHOOLS[SPELLSCHOOL_UNKNOWN] }}
                                            >{greatItem.spellName.split('"').join("")}</div>
                                        </div>
                                        <div className="SpellTableColumn SpellTableAmount">
                                            <AmountRow
                                                rowProcent={`${Math.floor(greatItem.amount * 10000 / allOverall) / 100}`}
                                                procent={greatItem.amount / maxOverall}
                                                overall={greatItem.amount}
                                                color={SPELLSCHOOLS[greatItem.school] || SPELLSCHOOLS[SPELLSCHOOL_UNKNOWN]}
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

export default DamageDoneDescriptionTable