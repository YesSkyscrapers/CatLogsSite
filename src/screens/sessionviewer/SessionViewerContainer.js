import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import SessionViewerComponent from "./SessionViewerComponent";
import DataProvider from '../../DataProvider'



const SessionViewerContainer = ({

}) => {
    let { sessionhash, id } = useParams();

    let [sessions, setSessions] = useState([])
    let [isAllSessionsLoading, setIsAllSessionsLoading] = useState(true)
    let [isSpecificSessionLoading, setIsSpecificSessionLoading] = useState(true)
    let [damageDone, setDamageDone] = useState([])
    let [damageDoneDescription, setDamageDoneDescription] = useState({})
    let [damageTaken, setDamageTaken] = useState([])
    let [damageTakenDescription, setDamageTakenDescription] = useState({})
    let [session, setSession] = useState(null)
    let [_id, setId] = useState(id)

    useEffect(() => {
        setIsAllSessionsLoading(true)
        DataProvider.getCombatSessions(sessionhash, 500, 0).then(loadedSessions => {
            setSessions(loadedSessions.data)
        }).finally(() => {
            setIsAllSessionsLoading(false)
        })
    }, [sessionhash])

    useEffect(() => {
        setId(id)
        if (id) {
            setIsSpecificSessionLoading(true)
            Promise.all([
                DataProvider.getDamageDone(id, 500, 0),
                DataProvider.getDamageTaken(id, 500, 0),
                DataProvider.getCombatSession(id, 500, 0)
            ]).then(values => {
                setDamageDone(values[0].data.sort((x, y) => y.overall - x.overall))
                setDamageTaken(values[1].data.sort((x, y) => y.overall - x.overall))
                setSession(values[2].data[0])
            }).finally(() => {
                setIsSpecificSessionLoading(false)
            })
        }
    }, [id])

    useEffect(() => {
        if (damageDone.length > 0) {
            damageDone.forEach(item => {
                if (!damageDoneDescription[item.id]) {
                    DataProvider.getDamageDoneSpells(item.id, 500, 0).then(response => {
                        damageDoneDescription[item.id] = response.data.sort((x, y) => y.amount - x.amount)

                        setDamageDoneDescription(damageDoneDescription)
                    })
                }
            })
        }
    }, [damageDone])

    useEffect(() => {
        if (damageTaken.length > 0) {
            damageTaken.forEach(item => {
                if (!damageTakenDescription[item.id]) {
                    DataProvider.getDamageTakenByPlayer(item.id, 500, 0).then(response => {
                        damageTakenDescription[item.id] = response.data.sort((x, y) => y.amount - x.amount)

                        setDamageTakenDescription(damageTakenDescription)
                    })
                }
            })
        }
    }, [damageTaken])

    return (
        <SessionViewerComponent
            sessionhash={sessionhash}
            id={_id}
            isLoading={isAllSessionsLoading || isSpecificSessionLoading}
            sessions={sessions}
            damageDone={damageDone}
            damageTaken={damageTaken}
            session={session}
            damageDoneDescription={damageDoneDescription}
            damageTakenDescription={damageTakenDescription}
        />
    )
}

export default SessionViewerContainer