import logoImg from "../../../assets/ShariGiftLogo.png"

export default function Logo(){
    return (
        <div className="h-[80%]">
            <img src={logoImg} className="h-full" alt="Shari Gift Logo..." />
        </div>
    );
}