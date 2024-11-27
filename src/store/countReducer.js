//import { type } from "@testing-library/user-event/dist/type"

const defaultState = {
    count: 0
}

const INCREMENT = "INCREMENT"

export const countReducer = (state = defaultState, action) => {                        // создание Reducer для "id"(ключа) нашей задачи (начальное состояние и действия(данные action))
    switch (action.type) {
        case "INCREMENT":
            return {...state, count: state.count + 1}
        default:
            return state                                                               // если передали в Reducer ни ADD и ни REMOVE, то просто возвращается старое состояние задачи         
    }
}

export const icrementCountAction = () => ({type: INCREMENT, payload: ''})