import React from "react";

// fuction component
const DeleteButton = (props) => {
  const { deleteUnnecessaryTask } = props;
  return (
      <div className="delete-button-wrapper">
        <button type="button" class="btn btn--caution btn--inside uppercase" onClick={deleteUnnecessaryTask}>delete the completed tasks</button>
      </div>
  );
}

export default DeleteButton;
