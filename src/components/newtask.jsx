import React, { Component } from 'react'


class Task extends Component {
    constructor(props){
        super(props);{
            this.state = {
                remove: false,
                selected : false
            }
            this.refTask = React.createRef();  
        }
    }
    render() { 
        return (
            <React.Fragment>
                    {this.state.remove ? null :  <section onClick={this.handleSelectClick} className={`tasks`} rel={this.refTask}> <p>{this.props.info}</p> </section>}
                </React.Fragment>
         );
    }
     handleSelectClick = (e) =>{
        const block = e.target
        block.classList.toggle('selected');
        this.setState({selected : true})
    }
}
 
export default Task;