import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";

export default function Contact() {
    return (
        <>
            <Navbar />
            <div className="container w-full flex flex-col items-center justify-center h-[85vh] bg-slate-200">
                <h2 className="py-1 text-center text-lg font-bold">
                    Ada Pertanyaan? Hubungi Kami
                </h2>
                <div className="flex justify-center h-auto items-center gap-5">
                    <a href="https://web.whatsapp.com/">
                        <img
                            className="w-[50px] rounded-md"
                            src="http://localhost:8000/storage/assets/whatsapp.svg"
                            alt=""
                        />
                    </a>
                    <a href="https://id-id.facebook.com/">
                        <img
                            className="w-[50px]"
                            src="http://localhost:8000/storage/assets/facebook.svg"
                            alt=""
                        />
                    </a>
                    <a href="https://twitter.com/home">
                        <img
                            className="w-[50px]"
                            src="http://localhost:8000/storage/assets/twitter.svg"
                            alt=""
                        />
                    </a>
                </div>
            </div>
            <Footer />
        </>
    );
}
