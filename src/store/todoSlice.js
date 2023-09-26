import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
        oneTodo: null
    },
    reducers: {
        addTodo: (state, action) => {
            console.log(state.todos, action.payload);
            state.todos.push(action.payload);
        },
        changeTodoStatus: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload);
            todo.status = !todo.status;
        },
        getOneTodo: (state, action) => {
            const oneTodo = state.todos.find(todo => todo.id == action.payload);
            state.oneTodo = oneTodo;
        }
    }
});

export const { addTodo, changeTodoStatus, getOneTodo } = todoSlice.actions;
export default todoSlice.reducer;