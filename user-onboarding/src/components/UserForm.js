import React from 'react';

export default function UserForm(props) {
  const {values, submit, change, disabled, errors} = props;

  const onSubmit = evt => {
    evt.preventDefault();
    submit();
  }
  return (

    <div>
      <form onSubmit={onSubmit}>

      </form>
    </div>
  )
}