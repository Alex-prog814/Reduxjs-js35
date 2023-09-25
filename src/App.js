import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddTodo from './components/AddTodo'
import Navbar from './components/Navbar'
import TodoList from './components/TodoList'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/add" element={<AddTodo />} />
      </Routes>
    </>
  )
}

export default App