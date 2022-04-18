import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import AppComponent from "./AppComponent";

const AppContainer = ({ }) => {

    let [showFullImage, setFullImage] = useState(null)
    const history = useHistory()

    const onDownload = () => {
        // history.push("http://localhost:2424/download")

    }

    return (
        <AppComponent
            showFullImage={showFullImage}
            setFullImage={setFullImage}
            onDownload={onDownload}
        />
    )
}

export default AppContainer