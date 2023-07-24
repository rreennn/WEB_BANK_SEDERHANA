import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

export default function Tabungan(props) {
    return (
        <>
            <Navbar auth={props.auth.user}/>
            <div className="container mx-auto h-[70vh] bg-slate-200">
                <h2 className="text-2xl text-center pt-10">Halo, {props.auth.user.name}</h2>
                <h3 className="text-xl text-center pt-2">Selamat menabung!</h3>
                <h2 className="text-4xl font-bold text-center pt-10">
                    Rp {props.auth.user.tabungan}
                </h2>
                <div className="flex justify-center py-10">
                    <button onClick={() => window.location.href = route('store')} class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Aku mau menabung!
                        </span>
                    </button>
                    <button onClick={() => window.location.href = route('ambil')} class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Aku mau ambil uangku!
                        </span>
                    </button>
                </div>
            </div>
            <Footer />
        </>
    );
}
