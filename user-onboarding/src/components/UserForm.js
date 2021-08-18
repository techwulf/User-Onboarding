import React from 'react';

export default function UserForm(props) {
  const {values, submit, change, disabled, errors} = props;

  const onSubmit = evt => {
    evt.preventDefault();
    submit();
  }
  const onChange = evt => {
    const {name, value, checked, type} = evt.target;
    const valueToUse = type === 'checkbox' ? checked : value;
    change(name, valueToUse);
  }
  return (

    <div>
      <form onSubmit={onSubmit}>
        <h2>New User</h2>
        <div class="form-item">
          <p class="error-message"></p>
          <label>Username
            <input 
              value={values.username}
              onChange={onChange}
              placeholder='Enter a Username'
              name='username'
              type='text'
            />
          </label>
        </div>
        <div class="form-item">
          <p class="error-message"></p>
          <label>email
            <input 
              value={values.email}
              onChange={onChange}
              placeholder='Enter an Email'
              name='email'
              type='email'
            />
          </label>
        </div>
        <div class="form-item">
          <p class="error-message"></p>
          <label>Password
            <input 
              value={values.password}
              onChange={onChange}
              placeholder='Enter a Password'
              name='password'
              type='password'
            />
          </label>
        </div>
        <div class="form-item">
          <p class="error-message"></p>
          <label>Do you agree to our TOS?
            <input 
              checked={values.tos}
              onChange={onChange}
              name='tos'
              type='checkbox'
            />
          </label>
        </div>
      </form>
    </div>
  )
}