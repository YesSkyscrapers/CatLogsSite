import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import AllSessionViewerComponent from "./AllSessionViewerComponent";



const AllSessionViewerContainer = ({
    sessions,
    sessionhash
}) => {

    const history = useHistory()

    const onSelect = (id) => {
        history.push(`/session/${sessionhash}/${id}`)
    }


    return (
        <AllSessionViewerComponent
            sessions={sessions}
            onSelect={onSelect}
        />
    )
}

export default AllSessionViewerContainer