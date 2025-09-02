import starYellow from "../assets/starYellow.svg"
import CartImg from "../assets/cart.svg"

export default function Product() {
    return (
        <a href="#" className="w-[9rem] h-[220px] mr-[6px] mt-[10px] rounded-sm shadow-xl shadow-black overflow-hidden">
            <div className="w-full h-[7rem] rounded-tr-sm rounded-tl-sm bg-white relative">
                <img className="h-full w-full rounded-tr-sm rounded-tl-sm" src="https://sharigift.com/wp-content/uploads/2025/07/merron-color-saree-combo-150x150-1.webp" alt="" />
                <div className="star-cont absolute bottom-0 bg-transparent">⭐⭐⭐⭐</div>
            </div>
            <div className="w-full h-[6.8rem] rounded-bl-sm rounded-br-sm flex flex-col justify-between">
                <p className="text-[.8rem] leading-4 line-clamp-2 px-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis autem doloremque accusantium dicta animi aspernatur hic rem quisquam impedit pariatur ab, facere, consequatur nisi sunt fuga, qui consequuntur tenetur ipsa.</p>
                <div className="h-[25px] px-1">
                    <span className="text-[1.3rem] text-[#f57632]"><b>৳৫০০</b></span>  <span className="text-[.6rem]">-50%</span>
                    </div>
                <div className="text-[.6rem] px-1">⭐⭐⭐⭐ (25)</div>
                <div className="text-[.8rem] h-[30px] flex justify-between px-[2 px]">
                    <button type="button" class="bg-red-500 h-full w-[25px]"><img className="h-5 " src={CartImg} alt="" /></button>
                    <button className="bg-[#f54954] w-[70%] rounded-t-sm">Buy now</button>
                </div>
            </div>
        </a>
    );
}
