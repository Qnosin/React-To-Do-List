import React, { Component } from 'react'
import Task from './newtask';

class Background extends Component {
    constructor(){
        super();{
            this.inputRef = React.createRef();
            this.taskRef = React.createRef();
            this.state = {
                click : 0,
                tasks : []
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
            {this.state.click > 0 ? <Task key={this.state.click} info={this.inputRef.current.value}></Task>:null};
            </React.Fragment>
         );
    }
    clickHandler = (e) =>{
        if(this.inputRef.current.value === ''){

        }else{
            console.log(e)
            this.setState({click : this.state.click +=1});
            setTimeout(() => {
                this.inputRef.current.value = '';
            }, 100);
        } 
    }

    
}
 
export default Background;