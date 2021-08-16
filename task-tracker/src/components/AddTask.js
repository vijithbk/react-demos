import React, { useState } from 'react'

const AddTask = ({onAdd}) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault();

        if(!text) {
            alert('Please add task')
            return
        }

        onAdd({ text, day, reminder })
        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input value={text} onChange={(e) => setText(e.target.value)} type="text" placeholder="Add text" />
            </div>
            <div className='form-control'>
                <label>Day & Time</label>
                <input value={day} onChange={(e) => setDay(e.target.value)} type="text" placeholder="Add day & time" />
            </div>
            <div className='form-control form-control-check'>
                <label>Set reminder</label>
                <input checked={reminder} value={reminder} type="checkbox" onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>

            <input className="btn btn-block" type="submit" value="Save task" />
        </form>
    )
}

export default AddTask
