// Libraries
import React, {useState} from 'react';
// import axios from 'axios';

// Components
import UserForm from './components/UserForm';
import schema from './validation/formSchema';

// Initial Values
const initialFormValues = {
  username: '',
  email: '',
  password: '',
  tos: false
}
const initialFormErrors = {
  username: '',
  email: '',
  password: '',
  tos: false
}
const initialDisabled = false;

function App() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);
  
  const inputChange = (name, value) => {
    setFormValues({...formValues,[name]:value});
  };
  const formSubmit = () => {
    const newUser = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      tos: formValues.tos
    }
  }
  return (
    <div>
      <UserForm 
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />
    </div>
  );
}

export default App;
