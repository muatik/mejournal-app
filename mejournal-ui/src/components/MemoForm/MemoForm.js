import React from 'react';
import moment from 'moment'

const MemoForm = ({ date, value, onMemoFormSubmit }) => {
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
      <div class="form-group m-2 col-sm-8">
        <textarea
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