import classes from "./Cell.module.css"
import React, { useState } from "react"

const Cell = (props) => {
    let mines = props.mines
    let [cellClicked, setCellClicked] = useState(false)

    const clickCell = () => {
        setCellClicked(true)
    }


    let cellNumber = props.cellIndex + "." + props.rowIndex;
    let getMines = () => {
        for (let i = 0; i < mines.length; i++) {
            if (cellNumber == mines[i]) {
                return true
            }
        }
        return false
    }

    let thisCellMine = getMines();
    let currentCellClass = classes.item
    if (cellClicked == true && thisCellMine) {
        currentCellClass = classes.boom
    }

    return (<div onClick={clickCell}
        className={currentCellClass}>{cellNumber}</div>)
}

export default Cell