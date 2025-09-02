import { Outlet, useLocation } from "react-router-dom";
import Header from "./home/header/Header";
import Footer from "./Footer";

export default function Page() {
    const route = useLocation();
    console.log(route);
    return (
        <>
            <div className="w-[100%] h-[100vh] relative">
                {/* <img className="absolute w-full h-full object-cover" src="https://images.unsplash.com/photo-1640292343595-889db1c8262e?q=80&w=1492&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> */}
                <Header />
                {/* <div className=" w-[100%] flex justify-center overflow-y-scroll"> */}
                <div className=" w-[100%] pt-[65px] flex justify-center">
                    <Outlet />
                </div>
            </div>
        </>
    );
}
