import "./styles/css/utilities.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./layouts/footer";
import Navbar from "./layouts/navbar";
import Home from "./pages/home";
import DetailActivity from "./pages/detailActivity";

function App() {
    return (
        <>
            <BrowserRouter>
                <ToastContainer />
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/DetailSky/:id" element={<DetailActivity />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
