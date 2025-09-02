import Product from "../Product";
import "./home.css";

import shariGiftLight from "../../assets/shari_gift_ligh_bannar.jpeg"

export default function Home() {
    return (
        <div className="w-[100%] lg:w-[1024px] flex flex-col items-center ">
            <div className="w-[100%] flex justify-center relative">
                <img
                    className="h-full w-full object-cover"
                    src={shariGiftLight}
                    alt="sharigift bannar"
                />
                {/* <a
                    className=" shop-now-btn text-transparent flex items-center justify-center absolute bottom-[20px]"
                    href="#"
                >
                    Buy Now
                </a> */}
            </div>
            <div className="product-cont w-[100%] pl-[6px] pb-[60px] flex flex-wrap justify-center ">

                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
            </div>
        </div>
    );
}

// <Footer/>

// import handLoomImg from "..//../assets/Handloom.jpg"
// import "./home.css"
// import Footer from "../Footer";

// export default function Home() {
//     return (
//         <div className="w-[100%] h-[100vh] flex flex-col items-center bg-green-500">
//             <div className="h-[345px] xl:w-[1280px] lg:w-[1024px] w-[100%] flex justify-center relative">
//                 <img className="h-full w-full object-cover" src="https://sharigift.com/wp-content/uploads/2025/08/Blue-Pink-Modern-Special-Offer-Sale-Banner-1024x512.png" alt="" />
//                 <a className=" shop-now-btn text-transparent flex items-center justify-center text-4xl absolute h-[30px] p-[10px] " href="#">Buy Now</a>
//             </div>

//             <div className="product-cont w-[100%] xl:w-[1280px] lg:w-[1024px] md:w-[768px] sm:p-[0px] p-[6px] pb-[60px] flex flex-wrap justify-center ">
//                 <div className="w-[150px] h-[300px] m-[8px] border shadow-xl shadow-black"></div>
//                 <div className="w-[150px] h-[300px] m-[8px] border shadow-xl shadow-black"></div>
//                 <div className="w-[200px] h-[300px] m-[8px] border shadow-xl shadow-black"></div>
//                 <div className="w-[200px] h-[300px] m-[8px] border shadow-xl shadow-black"></div>
//                 <div className="w-[200px] h-[300px] m-[8px] border shadow-xl shadow-black"></div>
//                 <div className="w-[200px] h-[300px] m-[8px] border shadow-xl shadow-black"></div>
//                 <div className="w-[200px] h-[300px] m-[8px] border shadow-xl shadow-black"></div>
//                 <div className="w-[200px] h-[300px] m-[8px] border shadow-xl shadow-black"></div>
//                 <div className="w-[200px] h-[300px] m-[8px] border shadow-xl shadow-black"></div>
//                 <div className="w-[200px] h-[300px] m-[8px] border shadow-xl shadow-black"></div>
//                 <div className="w-[200px] h-[300px] m-[8px] border shadow-xl shadow-black"></div>
//                 <div className="w-[200px] h-[300px] m-[8px] border shadow-xl shadow-black"></div>
//                 <div className="w-[200px] h-[300px] m-[8px] border shadow-xl shadow-black"></div>
//             </div>
//             <Footer/>
//         </div>
//     );
// }
