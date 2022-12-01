
import StaticUI from "../components/StaticUI"
import { Route , Routes } from "react-router-dom"
import Home from "../pages/home"
import City from "../pages/city"


const AppRoute = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={
                    <StaticUI>
                        <Home />
                    </StaticUI>
                }/>
                <Route path="/cities" element={
                    <StaticUI>
                        <City />
                    </StaticUI>
                }/>
            </Routes>
        </>
    )
}

export default AppRoute