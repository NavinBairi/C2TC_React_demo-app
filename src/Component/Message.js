//import { render } from '@testing-library/react'
import react,{Component} from 'react'
{
   constructor()
   { Supper()
    this.state = {
        message:'HELLO M17 STUDENT '
    } 
   }

ChangeMessage()
{
    this.setState(
        {
            message: 'You are places at cg'
        }
    )
}
render()
{
    return(
        <div>
            <h1> {this.state.message}</h1>
            <button onClick = { ()=> this.ChangeMessage()} >Click me</button>
        </div>
    )
    
}
}
export default Message