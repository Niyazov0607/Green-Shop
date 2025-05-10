import { Route, Routes } from "react-router";
import Header from "../modules/Header";
import Footer from "../modules/Footer/Footer";
import HomePage from "../pages/HomePage";
import NotFound from "../components/NotFounded";

const MainRouter = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default MainRouter;
