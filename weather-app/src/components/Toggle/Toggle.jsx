import './toggle.css'


const Toggle = ( { handleChange, isChecked }) => {

    
    return (
        <div className='toggle-container'>
            <input 
            type='checkbox'
            id='check'
            className='toggle'
            onChange={handleChange}
            checked={isChecked}
            />
                <label htmlFor='check' className='check'>
                </label>
        </div>
    )
}

export default Toggle