import React, {Component} from "react"

class Bracket extends Component {
    addBracket = (text)=> `[ ${text} ]` //Function

    render(){
        return this.props.children({addBracket : this.addBracket})
    }
}

export default Bracket