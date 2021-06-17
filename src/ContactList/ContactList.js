import React from 'react';

const ConstactList = ({ constacts }) => (
  <ul className="ConstactList">
    {constacts.map(({ id, text, completed }) => (
      <li
        key={id}
        // className={classNames('ConstactList__item', {
        //   'ConstactList__item--completed': completed,
        // })}
      >
        <input
          type="checkbox"
          className="ConstactList__checkbox"
          checked={completed}
          onChange={() => onToggleCompleted(id)}
        />
        <p className="ConstactList__text">{text}</p>
        <button
          type="button"
          className="ConstactList__btn"
          onClick={() => onDeleteTodo(id)}
        >
          Удалить
        </button>
      </li>
    ))}
  </ul>
);

export default ConstactList;
