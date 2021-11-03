import Task from './Task';

function TaskList({ tasks, deleteTask, toggleReminder }) {
    return (
        <div>
            {
                tasks.map((task, i) => <Task key={i} task={task} deleteTask={deleteTask} toggleReminder={toggleReminder} />)
            }
        </div>
    );
}

export default TaskList;