import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Input({ addTask }) {

    const [text, setText] = useState('');
    const [start, setStart] = useState(new Date());
    const [end, setEnd] = useState(new Date());
    const [reminder, setReminder] = useState(false);

    function onSubmit(e) {
        e.preventDefault();

        if (!text) {
            alert('Empty Task');
            return;
        }

        if (!start) {
            alert('Empty Start Date');
            return;
        }

        if (!end) {
            alert('Empty End Date');
            return;
        }

        addTask({
            text: text,
            start: start,
            end: end,
            reminder: reminder
        });

        setText('');
        setStart('');
        setEnd('');
        setReminder(false);
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input
                    type="text"
                    placeholder="Add Task"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>
            <div className="form-control">
                <label>Start Date and Time</label>
                <DatePicker selected={start} onChange={(date) => setStart(date)} />
            </div>
            <div className="form-control">
                <label>End Date and Time</label>
                <DatePicker selected={end} onChange={(date) => setEnd(date)} />
            </div>
            <div className="form-control form-control-check">
                <label>Set Reminder</label>
                <input
                    type="checkbox"
                    checked={reminder}
                    onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>
            <input
                type="submit"
                value="Save"
                className='btn btn-block'
            />
        </form>
    );
}

export default Input;