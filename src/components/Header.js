import { useLocation } from 'react-router-dom';

function Header({ showAddTask, toggleAddTask }) {

    const location = useLocation()

    return (
        <header className='header'>
            <h2>Add Agenda</h2>
            {
                location.pathname === '/'
                    ? <button
                        className='btn'
                        style={{ backgroundColor: showAddTask ? 'red' : 'green' }}
                        onClick={toggleAddTask}>{showAddTask ? 'Close' : 'Add'}
                    </button>
                    : null
            }
        </header >
    );
}

export default Header;