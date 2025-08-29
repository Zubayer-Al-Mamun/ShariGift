import { Outlet, useLocation } from "react-router-dom";
import Header from "./home/header/Header";
import Footer from "./Footer";

export default function Page() {
    const route = useLocation();
    console.log(route);
    return (
        <>
            <div className="w-[100%] relative h-[100vh]">
                <Header />
                <div className="pt-[70px] w-[100%]">
                    <Outlet />
                </div>
            </div>
        </>
    );
}
