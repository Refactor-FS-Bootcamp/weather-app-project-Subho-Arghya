import Header from "./Header";
import Sidebar from "./Sidebar";

const StaticUI = (props) => {
    return (
        <>
        <Header />
        <Sidebar />
        {props.children}
        </>
    )
}

export default StaticUI