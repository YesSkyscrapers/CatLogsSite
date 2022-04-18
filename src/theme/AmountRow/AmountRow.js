import { convertNumberToString } from "../../tools"
import "./AmountRow.css"



const AmountRow = ({
    rowProcent,
    procent,
    color = 'white',
    overall
}) => {
    return (
        <div className="AmountRowContainer">
            <div className="AmountRowProcent">{`${rowProcent}%`}</div>
            <div className="AmountRowRowProcentContainer">
                <div className="AmountRowRowProcent" style={{
                    backgroundColor: color,
                    width: `${procent * 100}%`
                }} />
            </div>
            <div className="AmountRowOverall">{convertNumberToString(overall)}</div>
        </div>
    )
}

export default AmountRow