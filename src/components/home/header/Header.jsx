import { NavLink } from "react-router-dom";
import Cart from "./CartIcon";
import Logo from "./Logo";
import Menu from "./Menu";



export default function Header() {
    return (
        <div className="w-full bg-white shadow-lg h-[60px] flex justify-center fixed z-50">
            <div className="max-w-[1080px] w-[1080px] h-full flex justify-between items-center px-[10px] ">
                <Menu />
                <Logo />
                <div className="max-sm:hidden h-full flex items-center">
                    <NavLink className={({isActive}) => isActive ? "h-full flex items-center px-2 border-b-3 border-[#f54952] transition duration-300 ease-in-out rounded-sm" : "px-2 "} to={"/"}>
                        <b>হোম</b>
                    </NavLink>

                    <NavLink className={({isActive}) => isActive ? "h-full flex items-center px-2 border-b-3 border-[#f54952] transition duration-300 ease-in-out rounded-sm" : "px-2 "} to={"/shari"}>
                        <b>শাড়িঘর</b>
                    </NavLink>

                    <NavLink className={({isActive}) => isActive ? "h-full flex items-center px-2 border-b-3 border-[#f54952] transition duration-300 ease-in-out rounded-sm" : "px-2 "} to={"/student_comb"}>
                        <b>বেকার বাজেট কম্বো</b>
                    </NavLink>

                    <NavLink className={({isActive}) => isActive ? "h-full flex items-center px-2 border-b-3 border-[#f54952] transition duration-300 ease-in-out rounded-sm" : "px-2 "} to={"/premium_comb"}>
                        <b>প্রিমিয়াম বাজেট কম্বো</b>
                    </NavLink>
                </div>
                <Cart />
            </div>
        </div>
    );
}
