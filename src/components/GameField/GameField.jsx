import Row from "./Row/Row.jsx"
import classes from "./GameField.module.css"
import Cell from "./Row/Cell/Cell.jsx"

const GameField = (props) => {
    let getCells = (rowIndex) => {
        let cells = []
        for (let i = 0; i < 8; i++) {
            cells.push(<Cell key={i} cellIndex={i} rowIndex={rowIndex}></Cell>)
        }
        return cells
    }
    let getRows = () => {
        let rows = []
        for (let i = 0; i < 8; i++) {
            rows.push(<Row rowIndex={i} key={i} getCells={getCells}></Row>)
        }
        return rows
    }

    let field = getRows().map((rows) => rows)
    return (<div className={classes.gameFieldContainer}>
        {field}
    </div>)
}

export default GameField