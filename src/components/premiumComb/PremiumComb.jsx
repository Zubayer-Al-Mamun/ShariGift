import Footer from "../Footer";

export default function PremiumComb() {
    return (
        <div className="w-[100%] bg-gray-400 flex flex-col items-center relative overflow-y-scroll">
            <div className="w-[100%] xl:w-[1280px] lg:w-[1024px] md:w-[768px] sm:w-[640px] p-[6px] pb-[60px] bg-blue-300 flex flex-wrap justify-center overflow-y-scroll">
                <div className="lg:w-[265px] lg:h-[460px] m-[6px] bg-gray-400"></div>
                <div className="lg:w-[265px] lg:h-[460px] m-[6px] bg-gray-400"></div>
                <div className="lg:w-[265px] lg:h-[460px] m-[6px] bg-gray-400"></div>
                <div className="lg:w-[265px] lg:h-[460px] m-[6px] bg-gray-400"></div>
                <div className="lg:w-[265px] lg:h-[460px] m-[6px] bg-gray-400"></div>
                <div className="lg:w-[265px] lg:h-[460px] m-[6px] bg-gray-400"></div>
            </div>

            <Footer />
        </div>
    );
}
