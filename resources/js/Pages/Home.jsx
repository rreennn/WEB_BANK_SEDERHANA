import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

export default function Home(props) {
    return (
        <>
            <Navbar auth={props.auth.user} />

            <div className="container flex flex-col w-auto h-[85vh] mx-8 bg-slate-200">
                <h2 className="py-5 text-3xl text-center font-bold">
                    Selamat datang di Bank Anak Kami!
                </h2>
                <div className="flex justify-center pb-4">
                    <img
                        className="rounded-sm w-[400px] h-[200px]"
                        src="http://localhost:8000/storage/assets/anaknabung.jpg"
                        alt=""
                    />
                </div>
                <p className="px-10 text-justify">
                    Di Bank Anak, kami mengajarkan nilai-nilai keuangan yang
                    penting kepada anak-anak sambil membuat pembelajaran
                    menyenangkan. Melalui permainan dan cerita interaktif,
                    anak-anak akan belajar tentang menabung, berbagi, dan
                    mengelola uang dengan bijaksana. Kami ingin membantu
                    anak-anak membangun pondasi yang kuat untuk masa depan yang
                    cerah secara finansial. Bergabunglah dengan kami dan mari
                    bersama-sama membuka pintu kesuksesan finansial untuk
                    generasi mendatang!
                </p>
                <div className="flex justify-center mt-3">
                    <button
                        onClick={() => (window.location.href = route("about"))}
                        class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
                    >
                        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Lebih Lanjut
                        </span>
                    </button>
                </div>
            </div>
            <Footer />
        </>
    );
}
