import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaAngleLeft, FaPencilAlt } from "react-icons/fa";
import { BiSortAlt2 } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { ModalAddTodo, ModalDeleteTodo } from "../components/modal";
import {
    deleteTodo,
    getIdTodo,
    getTodo,
} from "../redux/actions/actionTodoList";
import {
    BsTrash,
    BsSortAlphaDown,
    BsSortAlphaUpAlt,
    BsSortUpAlt,
    BsSortDown,
    BsCursorText,
} from "react-icons/bs";

function DetailActivity() {
    const [tit, setTitle] = useState();
    const [idact, setIdAct] = useState();
    const {
        getIdSkyResult,
        getListTodoResult,
        getListTodoLoading,
        getListTodoError,
        addTodoResult,
        deleteTodoResult,
        updateTodoResult,
    } = useSelector((state) => state.reducerTodoList);
    const dispatch = useDispatch();

    //control Backk
    const navigate = useNavigate();
    const handleBack = () => {
        navigate("/Skyshi");
    };

    //get Activity-Group
    useEffect(() => {
        if (getIdSkyResult) {
            setTitle(getIdSkyResult.title);
            setIdAct(getIdSkyResult.id);
        }
    }, [getIdSkyResult]);
    // console.log("id?", idact);

    //Get All Todo-Items ini tapi K
    useEffect(() => {
        dispatch(getTodo(idact));
    }, [dispatch, idact]);

    //Get When Add
    useEffect(() => {
        if (addTodoResult) {
            dispatch(getTodo(idact));
        }
    }, [dispatch, addTodoResult, idact]);

    //edit-todoo
    const handleEditTodo = (idT) => {
        dispatch(getIdTodo(idT));
    };
    useEffect(() => {
        if (updateTodoResult) {
            dispatch(getTodo(idact));
        }
    }, [dispatch, updateTodoResult, idact]);

    //Delete
    const [idTodo, setIdTodo] = useState();
    const handleDelete = () => {
        dispatch(deleteTodo(idTodo.id));
    };
    useEffect(() => {
        if (deleteTodoResult) {
            dispatch(getTodo(idact));
        }
    }, [dispatch, deleteTodoResult, idact]);

    const [objSort, setObjSort] = useState();
    const shortMethod = {
        Terbaru: { method: (a, b) => b.id - a.id },
        Terlama: { method: (a, b) => a.id - b.id },
        AZ: { method: (a, b) => (a.title > b.title ? 1 : -1) },
        ZA: { method: (a, b) => (a.title > b.title ? -1 : 1) },
        Update: { method: (a, b) => b.updated_at - a.updated_at },
    };

    const [ital, setItal] = useState();
    const [tod, setTod] = useState();
    const [tangkap, setTangkap] = useState();
    const handleCheckBox = (item, e) => {
        console.log("apa?", item);
        const newTodo = () => {
            if (item.id) {
                return { ...item, is_active: !item?.is_active };
            }
            return item;
        };
        setTod(newTodo);
        setTangkap(tod?.is_active || "");
        if (e.target.checked && tod.is_active === false) {
            setItal("strikethrough italic");
        } else {
            setItal("");
        }
    };

    return (
        <>
            <div className="container detail-activity">
                <div className="d-flex justify-content-between">
                    <div className="header-left d-flex">
                        <div className="btn-back align-items-center mx-1">
                            <FaAngleLeft onClick={handleBack} />
                        </div>

                        <div className="title-activity">
                            <h4>{tit}</h4>
                        </div>

                        <div className="btn-edit mx-2">
                            <FaPencilAlt className="cus-pointer" />
                        </div>
                    </div>
                    <div className="header-right d-flex">
                        <div className="short-icon">
                            <div className="dropdown">
                                <div
                                    className="btn btn-success  bg-none px-3 "
                                    data-bs-toggle="dropdown"
                                >
                                    <BiSortAlt2 />
                                </div>

                                <ul className="dropdown-menu px-2">
                                    <li
                                        className="cur-pointer"
                                        onClick={() => setObjSort("Terbaru")}
                                    >
                                        <div className="dropdown-item d-flex align-items-center ">
                                            <BsSortDown />
                                            <span className="px-2">
                                                Terbaru
                                            </span>
                                        </div>
                                    </li>
                                    <li
                                        className="cur-pointer"
                                        onClick={() => setObjSort("Terlama")}
                                    >
                                        <div className="dropdown-item d-flex align-items-center ">
                                            <BsSortUpAlt />
                                            <span className="px-2">
                                                Terlama
                                            </span>
                                        </div>
                                    </li>
                                    <li
                                        className="cur-pointer"
                                        onClick={() => setObjSort("AZ")}
                                    >
                                        <div className="dropdown-item d-flex align-items-center ">
                                            <BsSortAlphaDown />
                                            <span className="px-2">A-Z</span>
                                        </div>
                                    </li>
                                    <li
                                        className="cur-pointer"
                                        onClick={() => setObjSort("ZA")}
                                    >
                                        <div className="dropdown-item d-flex align-items-center ">
                                            <BsSortAlphaUpAlt />
                                            <span className="px-2">Z-A</span>
                                        </div>
                                    </li>
                                    <li
                                        className="cur-pointer"
                                        onClick={() => setObjSort("Update")}
                                    >
                                        <div className="dropdown-item d-flex align-items-center ">
                                            <BsCursorText />
                                            <span className="px-2">
                                                Update By
                                            </span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div
                            className="btn-add"
                            data-bs-toggle="modal"
                            data-bs-target="#ModalAddTodo"
                        >
                            <button className="btn btn-success mx-2">
                                <AiOutlinePlus className="mx-2" />
                                Tambah
                            </button>
                        </div>
                    </div>
                </div>
                <div className="content-body my-5">
                    <div className="row">
                        {getListTodoResult ? (
                            <>
                                {getListTodoResult.data
                                    ?.sort(shortMethod[objSort]?.method)
                                    .map((item, index) => {
                                        return (
                                            <div
                                                className="col-lg-12 my-2"
                                                key={index}
                                            >
                                                <div className="card bg-light text-dark  py-2">
                                                    <div className="container">
                                                        <div className="d-flex justify-content-between">
                                                            <div className="side-title d-flex">
                                                                <div className="checkbox-todo mx-2">
                                                                    <input
                                                                        type="checkbox"
                                                                        onChange={(
                                                                            e
                                                                        ) => {
                                                                            handleCheckBox(
                                                                                item,
                                                                                e
                                                                            );
                                                                        }}
                                                                    />
                                                                </div>
                                                                <div className="title-todo mx-2 align-items-center d-flex align-items-center">
                                                                    <div
                                                                        className={`label-indicator mx-2 ${item.priority}`}
                                                                    ></div>
                                                                    <div>
                                                                        <h6
                                                                            className={
                                                                                tangkap
                                                                                    ? ital
                                                                                    : `p-1 ${ital}`
                                                                            }
                                                                        >
                                                                            {
                                                                                item.title
                                                                            }
                                                                        </h6>
                                                                    </div>
                                                                </div>
                                                                <div className="edit-todo">
                                                                    <i
                                                                        data-bs-toggle="modal"
                                                                        data-bs-target="#ModalAddTodo"
                                                                        onClick={() => {
                                                                            handleEditTodo(
                                                                                item
                                                                            );
                                                                        }}
                                                                    >
                                                                        <FaPencilAlt
                                                                            size={
                                                                                12
                                                                            }
                                                                        />
                                                                    </i>
                                                                </div>
                                                            </div>
                                                            <div className="right-content">
                                                                <i
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#ModalDelete"
                                                                    onClick={() => {
                                                                        setIdTodo(
                                                                            item
                                                                        );
                                                                    }}
                                                                >
                                                                    <BsTrash />
                                                                </i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                            </>
                        ) : getListTodoLoading ? (
                            <>Loading Data...</>
                        ) : (
                            <p>
                                {getListTodoError
                                    ? getListTodoLoading
                                    : "Loading Data..."}
                            </p>
                        )}
                    </div>
                </div>
            </div>
            <ModalAddTodo
                exampleModal="ModalAddTodo"
                modalTitle={<>Tambah Todo-List</>}
                idTodo={idact}
            />
            <ModalDeleteTodo
                modalTitle={<>Delete Todo</>}
                handleSubmit={handleDelete}
                exampleModal="ModalDelete"
                bodyContent={<>Yakin Mau delete ini?</>}
            />
        </>
    );
}

export default DetailActivity;
