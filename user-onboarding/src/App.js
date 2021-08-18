// Libraries
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import * as yup from 'yup';
// import axios from 'axios';

// Components
import UserForm from './components/UserForm';
import User from './components/User';
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
const initialDisabled = true;

function App() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);
  const [users, setUsers] = useState([]);
  
  // core functions
  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({...formErrors, [name]:''}))
      .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}));
  }
  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({...formValues,[name]:value});
  };
  const formSubmit = () => {
    const newUser = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      tos: formValues.tos
    }
    axios.post('https://reqres.in/api/users', newUser)
      .then(res => {
        setUsers([res.data, ...users])
      }).catch(err => console.error(err));
    setFormValues(initialFormValues);
  }

  // side effects 
  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid));
  }, [formValues]);

  return (
    <div>
      <UserForm 
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />
      {
        users.map(newUser => {
          return <User key={newUser.id} data={newUser}/> 
        })
      }
    </div>
  );
}

export default App;
