import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Tasks } from '../api/task'; 

class Task extends Component {
    
    deleteTask(){
        Meteor.call('tasks.remove', this.props.task._id);
    }

    toggleChecked(){
        Tasks.update(this.props.task._id, {
            $set: { checked: !this.props.task.checked }
        });
    }

    render() { 
        const taskClassName = this.props.task.checked ? 'checked' : '';

        return ( 
            <li className={taskClassName}>
                <button className="delete" onClick={this.deleteTask.bind(this)}>
                    &times;
                </button>
                <input type="checkbox" 
                    readOnly 
                    checked={this.props.task.checked}
                    onClick={this.toggleChecked.bind(this)}
                />
                <span className="text">
                    {this.props.task.text} <br/>
                    {this.props.task.username}    
                </span>
            </li>
         )
    }
}
 
export default Task;