import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form'
import TeamMember from './TeamMember'



const initialFormValues = {
  username: '',
  email: '',
  role: '',
}



function App() {
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
  }

  return (
    <div className="App">
      <header><h1>Team Builder App</h1></header>
      <Form 
      values={formValues}
      update={updateForm}
      submit={submitForm}
      />

      

    </div>
  );
}

export default App;
