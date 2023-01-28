import axios from "axios";

import { toast } from "react-toastify";

//Ativity Group
//GET, post,detail,delete,update
const apiActivity = "https://todo.api.devcode.gethired.id/activity-groups/";

//TODO ITEM
//create,detail,update,delete
const apiTodo = "https://todo.api.devcode.gethired.id/todo-items/";

export const GET_LIST_SKY = "GET_LIST_SKY"; 
export const GET_ID_SKY = "GET_ID_SKY";
export const ADD_TODO_SKY = "ADD_TODO_SKY";
export const DELETE_SKY = "DELETE_SKY";
export const UPDATE_SKY = "UPDATE_SKY";

export const GET_LIST_TODO = "GET_LIST_TODO";
export const GET_ID_TODO = "GET_ID_TODO";
export const ADD_TODO_TODO = "ADD_TODO_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";

export const getSky = () => {
    return (dispatch) => {
        dispatch({
            type: GET_LIST_SKY,
            payload: {
                loading: true,
                data: false,
                error: false,
            },
        });
        axios.get(apiActivity).then((response) => {
            dispatch({
                type: GET_LIST_SKY,
                payload: {
                    loading: false,
                    data: response.data,
                    error: false,
                },
            }).catch((error) => {
                dispatch({
                    type: GET_LIST_SKY,
                    payload: {
                        loading: false,
                        data: false,
                        error: error.message,
                    },
                });
            });
        });
    };
};

//Activity-group
export const getIdSky = (data) => {
    return (dispatch) => {
        dispatch({
            type: GET_ID_SKY,
            payload: {
                loading: true,
                data: data,
                errorMsg: false,
            },
        });
    };
};

export const addSky = (data) => {
    return (dispatch) => {
        //loading
        dispatch({
            type: ADD_TODO_SKY,
            payload: {
                loading: true,
                data: false,
                errorMessage: false,
            },
        });

        axios({
            method: "POST",
            url: apiActivity,
            timeout: 12000,
            data: data,
        })
            .then((response) => {
                dispatch({
                    type: ADD_TODO_SKY,
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false,
                    },
                });
                toast.success("todo-added");
            })
            .catch((error) => {
                dispatch({
                    type: ADD_TODO_SKY,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: error.message,
                    },
                });
            });
    };
};
export const deleteSky = (id) => {
    return (dispatch) => {
        //loading
        dispatch({
            type: DELETE_SKY,
            payload: {
                loading: true,
                data: false,
                errorMessage: false,
            },
        });

        //get API
        axios({
            method: "DELETE",
            url: apiActivity + id,
            timeout: 12000,
        })
            .then((response) => {
                dispatch({
                    type: DELETE_SKY,
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false,
                    },
                });
                toast.error("data berhasil delete");
            })
            .catch((error) => {
                dispatch({
                    type: DELETE_SKY,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: error.message,
                    },
                });
            });
    };
};
export const updateSky = (data) => {
    return (dispatch) => {
        dispatch({
            type: UPDATE_SKY,
            payload: {
                loading: true,
                data: false,
                errorMessage: false,
            },
        });
        axios({
            method: "PUT",
            url: apiTodo + data.id,
            timeout: 12000,
            data: data,
        })
            .then((response) => {
                dispatch({
                    type: UPDATE_SKY,
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false,
                    },
                });
                toast.success("Activity Group Updated");
            })
            .catch((error) => {
                dispatch({
                    type: UPDATE_SKY,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: error.message,
                    },
                });
            });
    };
};

//GET TODO Khususon
export const getTodo = (idget) => {
    return (dispatch) => {
        dispatch({
            type: GET_LIST_TODO,
            payload: {
                loading: true,
                data: false,
                errorMsg: false,
            },
        });
        axios
            .get(
                `https://todo.api.devcode.gethired.id/todo-items?activity_group_id=${idget}`
            )
            .then((response) => {
                dispatch({
                    type: GET_LIST_TODO,
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMsg: false,
                    },
                });
            })
            .catch((error) => {
                dispatch({
                    type: GET_LIST_TODO,
                    payload: {
                        loading: false,
                        data: false,
                        errorMsg: error.message,
                    },
                });
            });
    };
};
export const addTodo = (idget, data) => {
    return (dispatch) => {
        console.log("data?", data);
        dispatch({
            type: ADD_TODO_TODO,
            payload: {
                loading: true,
                data: false,
                errorMessage: false,
            },
        });

        console.log("id?", idget);

        axios({
            method: "POST",
            url: `https://todo.api.devcode.gethired.id/todo-items?activity_group_id=${idget}`,
            timeout: 12000,
            data: data,
        })
            .then((response) => {
                dispatch({
                    type: ADD_TODO_TODO,
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false,
                    },
                });
                toast.success("todo-added");
            })
            .catch((error) => {
                dispatch({
                    type: ADD_TODO_TODO,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: error.message,
                    },
                });
            });
    };
};

//TODO-ITEM
export const getIdTodo = (data) => {
    return (dispatch) => {
        dispatch({
            type: GET_ID_TODO,
            payload: {
                loading: true,
                data: data,
                errorMsg: false,
            },
        });
    };
};

export const deleteTodo = (id) => {
    return (dispatch) => {
        //loading
        dispatch({
            type: DELETE_TODO,
            payload: {
                loading: true,
                data: false,
                errorMessage: false,
            },
        });

        //get API
        axios({
            method: "DELETE",
            url: apiTodo + id,
            timeout: 12000,
        })
            .then((response) => {
                dispatch({
                    type: DELETE_TODO,
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false,
                    },
                });
                toast.error("Todo-List has been delete");
            })
            .catch((error) => {
                dispatch({
                    type: DELETE_TODO,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: error.message,
                    },
                });
            });
    };
};
export const updateTodo = (data) => {
    return (dispatch) => {
        dispatch({
            type: UPDATE_TODO,
            payload: {
                loading: true,
                data: false,
                errorMessage: false,
            },
        });
        axios({
            method: "PUT",
            url: apiTodo + data.id,
            timeout: 12000,
            data: data,
        })
            .then((response) => {
                dispatch({
                    type: UPDATE_TODO,
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false,
                    },
                });
                toast.success("Todo-List Updated");
            })
            .catch((error) => {
                dispatch({
                    type: UPDATE_TODO,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: error.message,
                    },
                });
            });
    };
};
