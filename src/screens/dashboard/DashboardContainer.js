import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
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

const DashboardContainer = ({

}) => {
    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)
    const queryBoss = searchParams.get("boss")
    const queryClass = searchParams.get("class") || "any"
    const queryDifficulty = searchParams.get("difficulty") || "any"

    let [boss, setBoss] = useState(queryBoss)
    let [playerClass, setClass] = useState(queryClass)
    let [difficulty, setDifficulty] = useState(queryDifficulty)

    let [isLoading, setLoading] = useState(true)
    let [table, setTable] = useState([])

    useEffect(() => {
        setBoss(queryBoss)
        setClass(queryClass)
        setDifficulty(queryDifficulty)
        history.push(`/dashboard?boss=${queryBoss}&class=${queryClass}&difficulty=${queryDifficulty}`)
        startLoad()
    }, [queryBoss, queryClass, queryDifficulty])

    const history = useHistory()
    const dispatch = useDispatch()

    const onBossChange = value => {
        setBoss(value.value)
        history.push(`/dashboard?boss=${value.value}&class=${queryClass}&difficulty=${queryDifficulty}`)
    }

    const onClassChange = value => {
        setClass(value.value)
        history.push(`/dashboard?boss=${queryBoss}&class=${value.value}&difficulty=${queryDifficulty}`)
    }

    const onDifficultyChange = value => {
        setDifficulty(value.value)
        history.push(`/dashboard?boss=${queryBoss}&class=${queryClass}&difficulty=${value.value}`)
    }

    const startLoad = async () => {
        setLoading(true)

        try {
            await new Promise(res => {
                setTimeout(() => {
                    res()
                }, 5000)
            })
            setTable(TESTDATA)
        } catch (err) {

        } finally {
            setLoading(false)
        }
    }

    return (
        <DashboardComponent
            boss={boss}
            playerClass={playerClass}
            difficulty={difficulty}
            onBossChange={onBossChange}
            onClassChange={onClassChange}
            onDifficultyChange={onDifficultyChange}
            isLoading={isLoading}
            table={table}
        />
    )
}

export default DashboardContainer