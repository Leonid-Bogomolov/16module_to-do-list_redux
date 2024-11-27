//import { type } from "@testing-library/user-event/dist/type"

//import { type } from "@testing-library/user-event/dist/type"

// store состоит из Reducer-ов
const defaultState = {
    tasks: []                                                                               // Стандартное (дефолтное) состояние для нашей задачи "Todo List"
}

const ADD_TASK = "ADD_TASK"
const STATUS_TASK = "STATUS_TASK"
const REMOVE_TASK = "REMOVE_TASK"

export const taskReducer = (state = defaultState, action) => {                             // создание самого Reducer для нашей задачи (начальное состояние и действия(данные action))
    switch (action.type) {
        case "ADD_TASK":
            return {...state, tasks: [...state.tasks, action.payload]}                          // передаём все предыдущие значения массива tasks + изменения
        case "STATUS_TASK":
            return {...state, tasks: state.tasks.map(task => {
                if(task.id === action.payload){
                    task.status = !task.status
                }
                return task
            })}
        case "REMOVE_TASK":
            return {...state, tasks: state.tasks.filter(task => task.id !== action.payload)}    // перебираем задачи по их id для изменения конкретной 
        default:
            return state                                                                     // если передали в Reducer ни ADD и ни REMOVE, то просто возвращается старое состояние задачи         
    }
}

export const addTaskAction = (payload) => ({type: ADD_TASK, payload})
export const statusTaskAction = (payload) => ({type: STATUS_TASK, payload})
export const removeTaskAction = (payload) => ({type: REMOVE_TASK, payload})
