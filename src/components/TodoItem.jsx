import React from 'react';
import styles from '../index.module.css';
import { useDispatch } from 'react-redux';
import { changeTodoStatus } from '../store/todoSlice';
import { useNavigate } from 'react-router-dom'; 

const TodoItem = ({ todo }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

  return (
    <li className={styles.list__item}>
        <input type="checkbox" onChange={() => dispatch(changeTodoStatus(todo.id))} />
        <p className={todo.status ? styles.completed : styles.undone}>{todo.body}</p>
        <button>Delete</button>
        <button onClick={() => navigate(`/edit/${todo.id}`)}>Edit</button>
    </li>
  )
}

export default TodoItem