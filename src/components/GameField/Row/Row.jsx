import classes from "./Row.module.css"

const Row = (props) => {
    return <div>{props.getCells(props.rowIndex)}</div>
}

export default Row