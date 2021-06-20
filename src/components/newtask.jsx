import React, { Component } from 'react'


class Task extends Component {
    constructor(props){
        super(props);{
            this.state = {
                remove: false
            }
            this.refTask = React.createRef();  
        }
    }
    render() { 
        return (
            <React.Fragment>
                    {this.state.remove ? null :  <section className={`tasks`} rel={this.refTask}> <p>{this.props.info}</p> <div className='RemoveBtn' onClick={this.RemoveHandler}></div></section>}
                </React.Fragment>
         );
    }
    RemoveHandler = () =>{
        this.setState({remove : true})
    }
}
 
export default Task;