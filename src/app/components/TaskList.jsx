import React from 'react';
import { connect } from 'react-redux'

export const TaskList = ({tasks, name, id}) => (
    <div>
        <h3>
            {name}
        </h3>
        <div>
            {tasks.map(task =>(
                <div>
                    {task.name}
                </div>
            ))}
        </div>
        <button onClick={{()=>createNewTask(id)}}>

        </button>
    </div>
)

const mapStateToProps = (state, ownProps) => {
    let groupID = ownProps.id;
    return {
        name: ownProps.name,
        id: groupID,
        tasks: state.tasks.filter(task=>task.group === groupID)
    }
}

const mapDispatchToProps = (dispatch, ownPropes) => {
    return {
        createNewTask(id) {
            console.log('Creating new task... ', id);
        }
    }
}

export const ConnectedTaskList = connect(mapStateToProps)(TaskList)