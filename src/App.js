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
                <Navbar />
                <Routes>
                    <Route path="/" element={<Activity />} />
                    <Route path="/DetailSky/:id" element={<DetailActivity />} />
                    <Route path="/Infinite" element={<InfiniteP />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
