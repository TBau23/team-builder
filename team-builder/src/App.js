import React, {useState, useEffect} from 'react';
import { v4 as uuid} from 'uuid'
import './App.css';
import Form from './Form'
import TeamMember from './TeamMember'


const initialTeamList = [
  {
    id: uuid(),
    username: 'Giovanni',
    email: 'gio@vanni.com',
    role: 'Front End Engineer'
  },
]

const initialFormValues = {
  username: '',
  email: '',
  role: '',
}

const fakeAxiosGet = () => {
  return Promise.resolve({ status: 200, success: true, data: initialTeamList })
}
const fakeAxiosPost = (url, { username, email, role }) => {
  const newTeamMember = { id: uuid(), username, email, role }
  return Promise.resolve({ status: 200, success: true, data: newTeamMember })
}


export default function App() {
  const [teamMembers, setTeamMembers] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)

  const updateForm = (inputName, inputValue) => {
    // form state updater to be used inside the onChange handler of the form inputs
    // take in the name of an input and its value to update formValues
    setFormValues({...formValues, [inputName]: inputValue}) // take a copy of existing formValues, but
    //change the input that is being changed
  }

  const submitForm = () => {
    //
    const teamMember = {
      username: formValues.username.trim(), // trim removes whitespace from both ends of a string!
      email: formValues.email.trim(),
      role: formValues.role,
    }
    //prevent further action if either username or email or role is empty after trimming
    if (!teamMember.username || !teamMember.email) {
      return // using return singularly is good way to quickly short circuit a function
    }

    fakeAxiosPost('fake.com', teamMember)
      .then(res => {
        
        setTeamMembers([res.data, ...teamMembers ]) //replace with all friends of old array ()
      })
      .catch(err => {
        debugger
      })
      .finally(() => {
        setFormValues(initialFormValues)
      })
      
    }
  

useEffect(() => {
  fakeAxiosGet('fakeapi.com').then(res => setTeamMembers(res.data))
  submitForm()
}, [])



  return (
    <div className="App">
      <header><h1>Team Builder App</h1></header>
      <Form 
      values={formValues}
      update={updateForm}
      submit={submitForm}
      />

      {teamMembers.map(member => {
        return(
          <TeamMember details={member} />
        )
      })}



    </div>
  );
}


