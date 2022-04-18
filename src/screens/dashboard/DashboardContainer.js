import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import DataProvider from "../../DataProvider";
import DashboardComponent from "./DashboardComponent";


const TESTDATA = [
    { id: 0, playerName: "Пакша", dps: 1007 },
    { id: 0, playerName: "Пакша", dps: 1006 },
    { id: 0, playerName: "Пакша", dps: 1005 },
    { id: 0, playerName: "Пакша", dps: 1004 },
    { id: 0, playerName: "Пакша", dps: 1003 },
    { id: 0, playerName: "Пакша", dps: 1002 },
    { id: 0, playerName: "Пакша", dps: 1001 },
    { id: 0, playerName: "Пакша", dps: 1000 }
]

const PAGE_SIZE = 10;

let requestId = 0

const DashboardContainer = ({

}) => {
    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)
    const queryBoss = searchParams.get("boss")
    const queryClass = searchParams.get("class")
    const queryDifficulty = searchParams.get("difficulty")
    const queryPageIndex = searchParams.get("pageIndex") || "0"

    let [boss, setBoss] = useState(queryBoss)
    let [playerClass, setClass] = useState(queryClass)
    let [difficulty, setDifficulty] = useState(queryDifficulty)
    let [pageIndex, setPageIndex] = useState(queryPageIndex)
    let [maxPageSize, setMaxPageSize] = useState(0)

    let [isLoading, setLoading] = useState(true)
    let [table, setTable] = useState([])

    useEffect(() => {
        setBoss(queryBoss)
        setClass(queryClass)
        setDifficulty(queryDifficulty)
        setPageIndex(queryPageIndex)
        history.push(`/dashboard?boss=${queryBoss}&class=${queryClass}&difficulty=${queryDifficulty}&pageIndex=${queryPageIndex}`)
        startLoad()
    }, [queryBoss, queryClass, queryDifficulty, queryPageIndex])

    const history = useHistory()
    const dispatch = useDispatch()

    const onBossChange = value => {
        setBoss(value.value)
        history.push(`/dashboard?boss=${value.value}&class=${queryClass}&difficulty=${queryDifficulty}&pageIndex=${queryPageIndex}`)
    }

    const onClassChange = value => {
        setClass(value.value)
        history.push(`/dashboard?boss=${queryBoss}&class=${value.value}&difficulty=${queryDifficulty}&pageIndex=${queryPageIndex}`)
    }

    const onDifficultyChange = value => {
        setDifficulty(value.value)
        history.push(`/dashboard?boss=${queryBoss}&class=${queryClass}&difficulty=${value.value}&pageIndex=${queryPageIndex}`)
    }

    const onPageIndexChange = value => {
        setPageIndex(value)
        history.push(`/dashboard?boss=${queryBoss}&class=${queryClass}&difficulty=${queryDifficulty}&pageIndex=${value}`)
    }

    const onLogPress = (hash, id) => {
        history.push(`/session/${hash}/${id}`)
    }

    const startLoad = async () => {
        setLoading(true)
        setTable([])

        requestId++;
        const _requestId = requestId

        try {

            let response = await DataProvider.getCombatLogs(
                boss == "null" ? null : boss,
                difficulty == "null" ? null : difficulty,
                playerClass == "null" ? null : playerClass,
                PAGE_SIZE,
                pageIndex)

            if (_requestId != requestId) {
                return;
            }


            setTable(response.data)
            setMaxPageSize(Math.ceil(response.count / PAGE_SIZE))
        } catch (err) {

        } finally {
            if (_requestId == requestId) {
                setLoading(false)
            }
        }
    }

    return (
        <DashboardComponent
            boss={boss}
            playerClass={playerClass}
            difficulty={difficulty}
            pageIndex={pageIndex}
            maxPageSize={maxPageSize}
            onBossChange={onBossChange}
            onClassChange={onClassChange}
            onDifficultyChange={onDifficultyChange}
            onPageIndexChange={onPageIndexChange}
            isLoading={isLoading}
            table={table}
            onLogPress={onLogPress}
        />
    )
}

export default DashboardContainer