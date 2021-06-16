import React, { Component } from 'react'
import Task from './newtask';

class Background extends Component {
    constructor(){
        super();{
            this.inputRef = React.createRef();
            this.taskRef = React.createRef();
            this.state = {
                click : false
            }
        }
    }
    render() { 
        return (
            <React.Fragment>
            <section className='main' rel={this.mainSection}>
            <div className='todolist-Background'>
                <h3>Jakub Putaj React-To-Do-List</h3>
                <div className='general-function'>
                <input type="text" className='main-input' ref={this.inputRef}/>
                <div className='plus-box' onClick={this.clickHandler}></div>
                </div>
            </div>
            </section>
            </React.Fragment>
         );
    }
    clickHandler = () =>{
        if(this.inputRef.current.value === ''){

        }else{
            const message = this.inputRef.current.value
            const NewMessage = <p>{message}</p>
            this.setState({click : true})
            return( <Task> NewMessage</Task>);
            
        } 
    }

    
}
 
export default Background;