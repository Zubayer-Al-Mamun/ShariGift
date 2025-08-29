import menuIcon from "../../../assets/menu.svg"

export default function Menu(){
    return (
        <div className=" h-full p-3 flex justify-center items-center sm:hidden">
            <img className="h-[80%]" src={menuIcon} alt="" />
        </div>    
    );
}