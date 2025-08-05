
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

const Root = () => {
    return (
        <div className="max-w-11/12 mx-auto container">
            <NavBar></NavBar>
            {
                <Outlet></Outlet>
            }
        
        </div>
    );
};

export default Root;