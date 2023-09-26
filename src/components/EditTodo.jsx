import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getOneTodo } from '../store/todoSlice';

const EditTodo = () => {
  const { oneTodo } = useSelector(state => state.todos);
  const [todo, setTodo] = useState(oneTodo);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getOneTodo(id));
  }, []);

  return (
    <div>EditTodo</div>
  )
}

export default EditTodo