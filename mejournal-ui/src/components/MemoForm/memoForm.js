import React from 'react';

const MemoForm = ({ onSubmit }) => {

  const formRef = React.createRef();

  const submitForm = (e) => {
    e.preventDefault();
    const { text: textInp } = e.target;

    const memo = {
      text: textInp.value,
      date: new Date()
    }

    onSubmit(memo, resetForm);
  }

  const resetForm = () => {
    formRef.current.reset();
  }

  return (<form onSubmit={submitForm} ref={formRef} >
    <input name="text" />
  </form>);
}

export default MemoForm;