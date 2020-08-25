import React from 'react';
import moment from 'moment'

const memoForm = ({ date, value, onMemoFormSubmit }) => {
  const creationDay = moment(date.format("YYYY-MM-DD"))

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    onMemoFormSubmit({
      date: creationDay, 'text': form.memo.value
    }).then(data => {
      form.reset();
    });
  }

  return (
    <form class="form-inline" onSubmit={handleFormSubmit} >
      <input type="hidden" name="creationDay" value={creationDay} />
      <div class="form-group m-2 col-md-6">
        <textarea
          name="memo"
          class="form-control col-md-12 "
          value={value}
          placeholder="type your memo"
          rows="2" />
      </div>
      <button type="submit" class="btn btn-secondary mb-2">Add</button>
    </form>
  );
}

export default memoForm;