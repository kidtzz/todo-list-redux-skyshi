import {
    DELETE_SKY,
    GET_ID_SKY,
    GET_LIST_SKY,
    ADD_TODO_SKY,
    UPDATE_SKY,
    DELETE_TODO,
    GET_ID_TODO,
    GET_LIST_TODO,
    ADD_TODO_TODO,
    UPDATE_TODO,
} from "../actions/actionTodoList";

const initialState = {
    getListSkyResult: false,
    getListSkyLoading: false,
    getListSkyError: false,

    deleteSkyResult: false,
    deleteSkyLoading: false,
    deleteSkyError: false,

    addSkyResult: false,
    addSkyLoading: false,
    addSkyError: false,

    updateSkyResult: false,
    updateSkyLoading: false,
    updateSkyError: false,

    getIdSkyResult: false,

    //ini tood

    getListTodoResult: false,
    getListTodoLoading: false,
    getListTodoError: false,

    deleteTodoResult: false,
    deleteTodoLoading: false,
    deleteTodoError: false,

    addTodoResult: false,
    addTodoLoading: false,
    addTodoError: false,

    updateTodoResult: false,
    updateTodoLoading: false,
    updateTodoError: false,

    getIdTodoResult: false,
};

const reducerTodoList = (state = initialState, action) => {
    switch (action.type) {
        case GET_LIST_SKY:
            return {
                ...state,
                getListSkyResult: action.payload.data,
                getListSkyLoading: action.payload.loading,
                getListSkyError: action.payload.errorMsg,
            };

        case GET_ID_SKY:
            return {
                ...state,
                getIdSkyResult: action.payload.data,
            };
        case DELETE_SKY:
            return {
                ...state,
                deleteSkyResult: action.payload.data,
                deleteSkyLoading: action.payload.loading,
                deleteSkyError: action.payload.errorMessage,
            };
        case ADD_TODO_SKY:
            return {
                ...state,
                addSkyResult: action.payload.data,
                addSkyLoading: action.payload.loading,
                addSkyError: action.payload.errorMessage,
            };
        case UPDATE_SKY:
            return {
                ...state,
                updateSkyResult: action.payload.data,
                updateSkyLoading: action.payload.loading,
                updateSkyError: action.payload.errorMessage,
            };

        //todo

        case GET_LIST_TODO:
            return {
                ...state,
                getListTodoResult: action.payload.data,
                getListTodoLoading: action.payload.loading,
                getListTodoError: action.payload.errorMsg,
            };

        case GET_ID_TODO:
            return {
                ...state,
                getIdTodoResult: action.payload.data,
            };
        case DELETE_TODO:
            return {
                ...state,
                deleteTodoResult: action.payload.data,
                deleteTodoLoading: action.payload.loading,
                deleteTodoError: action.payload.errorMessage,
            };
        case ADD_TODO_TODO:
            return {
                ...state,
                addTodoResult: action.payload.data,
                addTodoLoading: action.payload.loading,
                addTodoError: action.payload.errorMessage,
            };

        case UPDATE_TODO:
            return {
                ...state,
                updateTodoResult: action.payload.data,
                updateTodoLoading: action.payload.loading,
                updateTodoError: action.payload.errorMessage,
            };
        default:
            return state;
    }
};

export default reducerTodoList;
