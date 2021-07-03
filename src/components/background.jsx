import React, { Component } from 'react'
import Task from './newtask';

class Background extends Component {
    constructor(){
        super();{
            this.inputRef = React.createRef();
            this.taskRef = React.createRef();
            this.state = {
                click : 0,
                tasks : [],
            }
        }
    }
    render() {
         const elem = this.state.tasks; 
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
            <div className='delete-btn' onClick={() => this.componentDidMount(this.state.tasks)}>Delete</div>
            </section>
             {elem[2]}
             {elem[4]}
             {elem[6]}
            </React.Fragment>
         );
    }
    clickHandler = (e) =>{
        if(this.inputRef.current.value === ''){

        }else{
            this.setState({click : this.state.click +=1});
            setTimeout(() =>{
                this.inputRef.current.value = ''

            },100) 
             return  this.componentDidMount(<Task  key={this.state.click} info={this.inputRef.current.value}></Task>)
        }
    }
    componentDidMount(props){
        this.setState(()=>{
            this.state.tasks.push(props);
        })
        const task = document.querySelectorAll('.tasks');
        this.deleteHandler(task);
    }
    
    deleteHandler = (props) =>{
       console.log(props)
       for(let i of props){
          if(i.className == 'tasks selected'){
              document.getElementById('root').removeChild(i);
              this.setState({click : this.state.click -= 1})
          }
       }
    }
}


 
export default Background;