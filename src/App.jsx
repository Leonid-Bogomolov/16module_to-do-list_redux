import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTaskAction, removeTaskAction, statusTaskAction } from "./store/taskReducer";
import { icrementCountAction } from "./store/countReducer";
import './App.css'

function App() {
  const [inputName, setInputName] = useState('')              // создали переменную(массив) с изначально одной пустой строкой по умолчанию
  const dispatch = useDispatch()                              // это опция позволяющая запускать Reducer-ы из React
  const tasks = useSelector(state => state.tasks.tasks)       // т.к. в Reducer вызываем tasks внутри tasks
  const count = useSelector(state => state.count.count)
  const addTask = () => {                                     // функция добавления задачи
    if (inputName !== '') {                                   // условие запреающее создание дела при пустом поле ввода нового дела
      const newTask = {
        id: count,
        name: inputName,
        status: false
      }
      setInputName('')                                          // очищаем поле input-a после каждого ввода новой задачи
      //dispatch({ type: "ADD_TASK", payload: newTask })        // прямой способ 
      dispatch(addTaskAction(newTask))                          // через функцию
      //dispatch({type: "INCREMENT", payload: ''})
      dispatch(icrementCountAction())
    }
  }
  const changeStatus = (taskid) => {
    dispatch(statusTaskAction(taskid))
  }
  const deleteTask = (taskid) => {
    /*dispatch({ type: "REMOVE_TASK", payload: taskid})*/
    dispatch(removeTaskAction(taskid))
  }
  return (
    <div className="App">
        <h1>Менеджер задач</h1>
      <div className="container">
        <input className="input-add" type="text" value={inputName} onChange={(e) => setInputName(e.target.value)} />    {/* переменная "inputName" будет изменяться по мере заполнения "input" */}
        <button className="addBtn btn" onClick={addTask}>Добавить задачу</button>
      </div>
      { tasks.map(task =>                                                  // добавляем в конец списка задач
        <div key={task.id} className={task.status ? "container taskNameReady" : "container"}>
          <div className="taskIteam">
            <div className="taskId">{task.id}</div>
            <div className="taskName">{task.name}</div>
          </div>
          <button className="readyBtn btn" onClick={() => changeStatus(task.id) }>Готово</button>
          <button className="deleteBtn btn" onClick={() => deleteTask(task.id)}>Удалить</button>
        </div>
      ) }
    </div>
  );
}
export default App;
