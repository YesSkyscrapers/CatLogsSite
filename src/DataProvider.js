import { config } from './config'

const basicFetch = (action, data) => {
    return fetch(`${config.url}action`, {
        method: "POST",
        body: JSON.stringify({
            action,
            data
        })
    })
        .then(response => response.json())
        .catch(console.log)
}


class DataProvider {
    constructor() { }

    getCombatSessions = async (hash, pageSize, pageIndex) => {
        return await basicFetch("session.read", {
            pageIndex,
            pageSize,
            hash
        })
    }


    getCombatSession = async (id, pageSize, pageIndex) => {
        return await basicFetch("session.read", {
            pageIndex,
            pageSize,
            id
        })
    }

    getDamageDone = async (combatSessionId, pageSize, pageIndex) => {
        return await basicFetch("combatSessionDamageDonePlayer.read", {
            pageIndex,
            pageSize,
            combatSessionId
        })
    }

    getDamageDoneSpells = async (byPlayerId, pageSize, pageIndex) => {
        return await basicFetch("combatSessionDamageDonePlayerSpell.read", {
            pageIndex,
            pageSize,
            byPlayerId
        })
    }

    getDamageTaken = async (combatSessionId, pageSize, pageIndex) => {
        return await basicFetch("combatSessionDamageTakenTarget.read", {
            pageIndex,
            pageSize,
            combatSessionId
        })
    }

    getDamageTakenByPlayer = async (toTargetId, pageSize, pageIndex) => {
        return await basicFetch("combatSessionDamageTakenTargetByPlayer.read", {
            pageIndex,
            pageSize,
            toTargetId
        })
    }

    getCombatLogs = async (boss, difficulty, playerClass, pageSize, pageIndex) => {
        return await basicFetch("combatLog.read", {
            pageIndex,
            pageSize,
            boss,
            difficulty,
            playerClass
        })
    }
}

export default new DataProvider()