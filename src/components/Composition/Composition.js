import Bracket from "./Bracket"
import Emoji from "./Emoji"
import Text from "./Text"

const Composition = ()=>{
    return (
        <div>
            <Emoji>
                {({addEmoji})=> (
                <Bracket>
                    {({addBracket}) => <Text addEmoji={addEmoji} addBracket={addBracket}/>}
                </Bracket>
                )}
            </Emoji>
        </div>
    )
}

export default Composition