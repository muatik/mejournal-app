import React from 'react';

const MemoForm = ({ onSubmit }) => {

  const formRef = React.createRef();

  const submitForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const { text: textInp } = form;

    const memo = {
      text: textInp.value,
      date: new Date()
    }
    onSubmit(memo).then(() => form.reset());
  }

  return (<form onSubmit={submitForm} ref={formRef} >
    <input name="text" />
  </form>);
}

export default MemoForm;