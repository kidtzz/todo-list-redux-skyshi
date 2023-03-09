import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteSky, getIdSky, getSky } from "../redux/actions/actionTodoList";
import { FaRegTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ModalAdd, ModalDelete } from "../components/modal";

function Activity() {
    const {
        getListSkyResult,
        getListSkyLoading,
        getListSkyError,
        deleteSkyResult,
    } = useSelector((state) => state.reducerTodoList);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getSky());
    }, [dispatch]);

    const navigate = useNavigate();
    const DetailSky = (dataQ) => {
        navigate(`/DetailSky/${dataQ.title.replace(/ /g, "-")}`);
        dispatch(getIdSky(dataQ));
    };

    const [idDel, setIDDelete] = useState();
    const handleDetele = () => {
        dispatch(deleteSky(idDel.id));
    };

    useEffect(() => {
        if (deleteSkyResult) {
            dispatch(getSky());
        }
    }, [deleteSkyResult, dispatch]);

    const [loading, setLoading] = useState();
    const [brp, setBrp] = useState(5);

    function handelInfiniteScroll() {
        if (
            window.innerHeight + document.documentElement.scrollTop + 1 >=
            document.documentElement.scrollHeight
        ) {
            setTimeout(() => {
                setBrp(10);
            }, 500);
            setLoading(<h5>Loading......</h5>);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handelInfiniteScroll);
        return () => window.removeEventListener("scroll", handelInfiniteScroll);
    }, []);

    return (
        <>
            <div className="container my-5">
                <div className="d-flex justify-content-between">
                    <div className="title">
                        <h2>Activity</h2>
                    </div>
                    <div
                        className="button-tambah btn-add"
                        data-bs-toggle="modal"
                        data-bs-target="#ModalAdd"
                    >
                        <button className="btn btn-primary">Tambah</button>
                    </div>
                </div>

                <div className="my-5">
                    <hr />
                </div>
                <div className="content">
                    <div className="row">
                        {getListSkyResult ? (
                            getListSkyResult.data
                                .slice(0, brp)
                                .map((item, index) => {
                                    const dateG = item.created_at;
                                    const myDate = new Date(dateG);
                                    const day = myDate.getDate();

                                    const month = myDate.getMonth();
                                    const year = myDate.getFullYear();
                                    const monthNames = [
                                        "Januari",
                                        "Febuari",
                                        "Maret",
                                        "April",
                                        "Mei",
                                        "Juni",
                                        "Juli",
                                        "Agustus",
                                        "September",
                                        "Oktober",
                                        "November",
                                        "Desember",
                                    ];

                                    const resultDate =
                                        ("0" + day).slice(-2) +
                                        " " +
                                        monthNames[month] +
                                        " " +
                                        year;
                                    return (
                                        <div
                                            className="col-12 mb-4"
                                            key={index}
                                        >
                                            <div
                                                className="card"
                                                sx={{ width: "18rem" }}
                                            >
                                                <div className="card-body">
                                                    <h5
                                                        className="card-title"
                                                        onClick={() =>
                                                            DetailSky(item)
                                                        }
                                                    >
                                                        {item.title}
                                                    </h5>
                                                </div>
                                                <div className="card-body justify-content-between d-flex">
                                                    <div>
                                                        <h6 className="card-title">
                                                            {resultDate}
                                                        </h6>
                                                    </div>

                                                    <div className="icon-button mx-1">
                                                        <i
                                                            className="cur-pointer "
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#exampleModal"
                                                            onClick={() =>
                                                                setIDDelete(
                                                                    item
                                                                )
                                                            }
                                                        >
                                                            <FaRegTrashAlt />
                                                        </i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })
                        ) : getListSkyLoading ? (
                            <p>loading...</p>
                        ) : (
                            <p>
                                {getListSkyError
                                    ? getListSkyLoading
                                    : "data Kosong bg..."}
                            </p>
                        )}
                        {loading}
                    </div>
                </div>
            </div>
            <ModalDelete
                exampleModal="exampleModal"
                onConfirm={handleDetele}
                modalTitle={<>Delete Data</>}
                modalBody={<>Yakin Mau delete?</>}
                btnColor={"btn-danger"}
            />
            <ModalAdd
                exampleModal="ModalAdd"
                modalTitle={<>Tambah Activity</>}
            />
        </>
    );
}

export default Activity;
