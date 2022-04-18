import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import SpecificSessionViewerComponent from "./SpecificSessionViewerComponent";



const SpecificSessionViewerContainer = ({
    damageDone,
    damageTaken,
    session,
    damageDoneDescription,
    damageTakenDescription
}) => {

    let [tab, setTab] = useState(0)

    const onTabSelect = id => {
        setTab(id)
    }

    return (
        <SpecificSessionViewerComponent
            damageDone={damageDone}
            damageTaken={damageTaken}
            session={session}
            tab={tab}
            onTabSelect={onTabSelect}
            damageDoneDescription={damageDoneDescription}
            damageTakenDescription={damageTakenDescription}
        />
    )
}

export default SpecificSessionViewerContainer