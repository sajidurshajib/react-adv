import withHoc from "../../HOC/withHoc"

const Increment = ({count, increment, decrement})=>{
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    )
}
 export default withHoc(Increment)