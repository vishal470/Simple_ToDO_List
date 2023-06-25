import React from "react";

function TodoList(props) {
  return (
    <div>
      <div className="todo_style">
        <i
          className="fa fa-times"
          a
          ria-hidden="true"
          onClick={() => {
            props.onSelect(props.id);
          }}
        />
        <li>{props.text}</li>
      </div>
    </div>
  );
}

export default TodoList;
