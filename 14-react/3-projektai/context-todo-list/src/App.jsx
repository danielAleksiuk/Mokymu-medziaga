
import './App.css'
import AddTodo from './components/AddTodo'
import Filter from './components/Filter'
import TodoList from './components/TodoList'
import TodoContextProvider from './context/TodoContextProvider'

function App() {

  return (
    <div className='todo-app'>
      <h1>Todo list</h1>
      <TodoContextProvider>
          <AddTodo/>
          <TodoList/>
          <Filter/>
      </TodoContextProvider>
    </div>
  )
}

export default App
