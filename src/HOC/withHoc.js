import React from "react"

const withHoc = (OriginalComponent)=>{
    class NewComponent extends React.Component{
        state = {
            count:0
        }

        increment = ()=>{
            this.setState((prevState)=>({count:prevState.count + 1}))
        }

        decrement = ()=>{
            this.setState((prevState)=>({count:prevState.count - 1}))
        }

        render(){
            return <OriginalComponent 
                count={this.state.count} 
                increment={this.increment} 
                decrement={this.decrement} />
        }
    }
    return NewComponent
}

export default withHoc