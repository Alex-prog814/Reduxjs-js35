import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getOneTodo, saveChanges } from '../store/todoSlice';

const EditTodo = () => {
  const { oneTodo } = useSelector(state => state.todos);
  const [todo, setTodo] = useState('');
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getOneTodo(id));
  }, []);

  useEffect(() => {
    if(oneTodo) {
      setTodo(oneTodo);
    };
  }, [oneTodo]);

  return (
    <>
      {todo ? (
        <div>
          <h3>Edit TODO</h3>
          <input type="text" onChange={e => setTodo({ ...todo, body: e.target.value })} value={todo.body} />
          <button onClick={() => {
            dispatch(saveChanges(todo));
            navigate('/');
          }}>Save Changes</button>
        </div>
      ) : (
        <h5>Loading...</h5>
      )}
    </>
  )
}

export default EditTodo