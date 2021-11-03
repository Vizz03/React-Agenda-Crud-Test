import { FaTimes, FaPencilAlt,} from 'react-icons/fa';


function Task({ task, deleteTask, toggleReminder }) {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`}>
            <h3 >
                {task.text}
              
              
                <FaTimes
                    style={{ color: 'red', cursor: 'pointer' }}
                    onClick={() => deleteTask(task.id)}
                />
                
            </h3>
            <br/>
            <p onClick={() => toggleReminder(task.id)}> From : {task.start.toString()}</p>
            <br/>
            <p onClick={() => toggleReminder(task.id)}> To : {task.end.toString()}</p>
            <br/>
            
        </div>
    );
}

export default Task;