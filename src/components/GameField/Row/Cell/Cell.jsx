import classes from "./Cell.module.css"
import React, { useState } from "react"

const Cell = (props) => {

    let [cellClicked, setCellClicked] = useState(false)

    const clickCell = () => {
        setCellClicked(true)
    }

    let currentCellClass = classes.item
    if (cellClicked == true) {
        currentCellClass = classes.boom
    }

    return (<div onClick={clickCell}
        className={currentCellClass}> {props.cellIndex}.{props.rowIndex}</div>)
}

export default Cell