import React from "react";
import "./Dashboard.css"
import Select from 'react-select'
import { BOSSES_OPTIONS, CLASSES_OPTIONS, DIFFICULTY_OPTIONS } from "../../constants";
import { css } from "@emotion/react";
import DotLoader from "react-spinners/DotLoader";


const override = css`
  display: block;
    margin: 0 auto;
`;

const DashboardComponent = ({
    boss,
    playerClass,
    difficulty,
    onBossChange,
    onClassChange,
    onDifficultyChange,
    isLoading,
    table
}) => {

    return (
        <div>
            <div className="filterRowContainer">
                <Select onChange={onBossChange} className="filterItem" options={BOSSES_OPTIONS} value={BOSSES_OPTIONS.find(i => i.value == (boss ? boss : "any"))} />
                <Select onChange={onDifficultyChange} className="filterItem" options={DIFFICULTY_OPTIONS} value={DIFFICULTY_OPTIONS.find(i => i.value == (difficulty ? difficulty : "any"))} />
                <Select onChange={onClassChange} className="filterItem" options={CLASSES_OPTIONS} value={CLASSES_OPTIONS.find(i => i.value == (playerClass ? playerClass : "any"))} />
            </div>
            {
                isLoading ? (
                    <div className="loaderContainer">
                        <DotLoader color={"white"} loading={isLoading} css={override} size={50} />
                    </div>
                ) : (
                    <div >
                        <div className="tableContainer">
                            {
                                table.map((row, index) => {
                                    return (
                                        <div className={`tableRow ${index == table.length - 1 ? "" : "tableRowBorder"}`}>
                                            <div className="tableRowRank">{index + 1}</div>
                                            <div className="tableRowName">{row.playerName}</div>
                                            <div className="tableRowDPS">{row.dps}</div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div>
                            {//pagination
                            }
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default DashboardComponent