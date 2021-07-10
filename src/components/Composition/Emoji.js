import React, {Component} from "react"

class Emoji extends Component {
    addEmoji = (text, emoji) => `${text} ${emoji}` //Function

    render(){
        return this.props.children({addEmoji : this.addEmoji})
    }
}

export default Emoji