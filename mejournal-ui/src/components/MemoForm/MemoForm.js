import React, { useRef } from 'react';
import moment from 'moment'

const MemoForm = ({ date, value, onMemoFormSubmit }) => {
  const creationDay = moment(date.format("YYYY-MM-DD"));
  const input = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const instant = moment(creationDay);
    instant.hour(moment().hour());
    instant.minute(moment().minute());
    instant.second(moment().second());
    input.current.disabled = 'disabled'
    onMemoFormSubmit({
      date: instant, 'text': form.memo.value
    }).then(data => {
      form.reset();
    }).catch(e => {
      alert(e)
    }).finally(() => {
      if (input.current) input.current.disabled = '';
    });
  }

  return (
    <form class="form-inline" onSubmit={handleFormSubmit} >
      <input type="hidden" name="creationDay" value={creationDay} />
      <div class="form-group m-2 col-sm-8">
        <textarea
          ref={input}
          name="memo"
          class="form-control col-12 "
          value={value}
          placeholder="type your memo"
          rows="2" />
      </div>
      <div class="form-group m-2 col-12 col-md-1">
        <button type="submit" class="btn btn-secondary">Add</button>
      </div>
    </form>
  );
}

export default MemoForm;