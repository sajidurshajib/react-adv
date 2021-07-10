const Text = ({addEmoji, addBracket})=>{
    let text = 'I am Javascript programming language.'

    if(addEmoji){
        text = addEmoji(text, ':)')
    }
    if(addBracket){
        text = addBracket(text)
    }

    return <div>{text}</div>
}

export default Text