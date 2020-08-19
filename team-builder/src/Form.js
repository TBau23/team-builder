import React from 'react';
import './App.css';




export default function Form(props) {

    const { values, update, submit } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

  return (
    <form >  
        <div >
        <h2>Add a New Team Member</h2>
        <button disabled={!values.username || !values.email || !values.role ? true : false}>Submit</button>
        </div>

        <div className='inputs'>

            <label>
                Username:&nbsp;
                <input 
                value={values.username}
                name='username'
                placeholder='type username'
                maxLength='20'
                type='text'
                />
            </label>

            <label>
                Email:&nbsp;
                <input 
                value={values.email}
                name='email'
                placeholder='enter email'
                maxLength='30'
                type='email'
                />
            </label>

            <label>
                Role:&nbsp;
                <select value={values.role} name='role'>
                    <option value=''>Select a role</option>
                    <option value='front-end'>Front End Engineer</option>
                    <option value='back-end'>Back End Engineer</option>
                </select>

            </label>

        </div>
    </form>
  );
}


