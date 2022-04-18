import React from "react";
import "./SessionViewer.css"
import DotLoader from "react-spinners/DotLoader";
import Pagination from "../../theme/Pagination/Pagination";
import SpecificSessionViewerContainer from "./specificSessionViewer/SpecificSessionViewerContainer";
import AllSessionViewerContainer from "./allSessionViewer/AllSessionViewerContainer";
import { css } from "@emotion/react";

const override = css`
  display: block;
    margin: 0 auto;
`;


const SessionViewerComponent = ({
    sessionhash,
    id,
    isLoading,
    sessions,
    damageDone,
    damageTaken,
    session,
    damageDoneDescription,
    damageTakenDescription
}) => {

    return (
        <div>
            {
                isLoading ? (
                    <div className="loaderContainer">
                        <DotLoader color={"white"} loading={isLoading} css={override} size={50} />
                    </div>
                ) : (
                    id ? (
                        <SpecificSessionViewerContainer
                            sessionId={id}
                            damageDone={damageDone}
                            damageTaken={damageTaken}
                            session={session}
                            damageDoneDescription={damageDoneDescription}
                            damageTakenDescription={damageTakenDescription}
                        />
                    ) : (
                        <AllSessionViewerContainer
                            sessionhash={sessionhash}
                            sessions={sessions}
                        />
                    )
                )
            }
        </div>
    )
}

export default SessionViewerComponent