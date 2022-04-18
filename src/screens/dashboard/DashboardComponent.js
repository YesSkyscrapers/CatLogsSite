import React from "react";
import "./Dashboard.css"
import Select from '../../theme/Select/Select'
import { BOSSES_OPTIONS, CLASSES, CLASSES_OPTIONS, DIFFICULTY_OPTIONS } from "../../constants";
import { css } from "@emotion/react";
import DotLoader from "react-spinners/DotLoader";
import Pagination from "../../theme/Pagination/Pagination";
import FLImage from '../../images/firelands.png'
import CombatLogTable from "../../theme/CombatLogTable/CombatLogTable";


const PAGE_SIZE = 10;
const override = css`
  display: block;
    margin: 0 auto;
`;

const DashboardComponent = ({
    boss,
    playerClass,
    difficulty,
    pageIndex,
    maxPageSize,
    onBossChange,
    onClassChange,
    onDifficultyChange,
    onPageIndexChange,
    isLoading,
    table,
    onLogPress
}) => {

    return (
        <div>
            <div className="AboutRaidContainer">
                <img src={FLImage} className="AboutRaidImage" />
                <div className="AboutRaidTitle">Огненные просторы</div>
            </div>
            <div className="FilterRowContainer">
                <Select
                    emptyTitle="Босс"
                    emptyOption="Любой"
                    onChange={onBossChange}
                    className="filterItem"
                    options={BOSSES_OPTIONS}
                    value={BOSSES_OPTIONS.find(i => i.value == boss)}
                />
                <Select
                    emptyTitle="Сложность"
                    emptyOption="Любая"
                    onChange={onDifficultyChange}
                    className="filterItem"
                    options={DIFFICULTY_OPTIONS}
                    value={DIFFICULTY_OPTIONS.find(i => i.value == difficulty)}
                />
                <Select
                    emptyTitle="Класс"
                    emptyOption="Любой"
                    onChange={onClassChange}
                    className="filterItem"
                    options={CLASSES}
                    value={CLASSES.find(i => i.value == playerClass)}
                />
            </div>
            {
                isLoading ? (
                    <div className="loaderContainer">
                        <DotLoader color={"white"} loading={isLoading} css={override} size={50} />
                    </div>
                ) : (
                    <div className="CombatLogTableContainer">
                        <CombatLogTable
                            data={table}
                            pageIndex={pageIndex}
                            pageSize={PAGE_SIZE}
                            onLogPress={onLogPress}
                        />
                        <div className="paginationContainer">
                            <Pagination
                                pageIndex={pageIndex}
                                maxPageSize={maxPageSize}
                                onPageChange={onPageIndexChange}
                            />
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default DashboardComponent