import "./styles/css/utilities.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./layouts/footer";
import Navbar from "./layouts/navbar";
import Activity from "./pages/Activity";
import DetailActivity from "./pages/detailActivity";
import InfiniteP from "./pages/InfiniteP";

function App() {
    return (
        <>
            <BrowserRouter>
                <ToastContainer />
                <div className="container">
                    <div className="row justify-content-center mx-2">
                        <div className="col-lg-6 col-md-12 col-sm-12 m-5 mobile-only">
                            <Navbar />
                            <Routes>
                                <Route path="/" element={<Activity />} />
                                <Route
                                    path="/DetailSky/:id"
                                    element={<DetailActivity />}
                                />
                                <Route
                                    path="/Infinite"
                                    element={<InfiniteP />}
                                />
                            </Routes>
                            <Footer />
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        </>
    );
}

export default App;
