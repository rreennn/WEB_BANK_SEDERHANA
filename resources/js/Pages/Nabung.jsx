import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import { useState } from "react";
import { router } from "@inertiajs/react";

export default function Nabung(props) {
    const [tabungan, setTabungan] = useState(0);

    const handleSubmit = () => {
        const data = {
            tabungan: tabungan,
        };

        router.post(route("nabung", props.auth.user.id), data);
    };

    console.log(props);
    return (
        <>
            <Navbar auth={props.auth.user} />

            <div className="container mx-auto h-[70vh] bg-slate-200">
                <h2 className="text-2xl text-center pt-10">
                    Halo, {props.auth.user.name}
                </h2>
                <h3 className="text-xl text-center pt-2">Selamat menabung!</h3>
                <h2 className="text-4xl font-bold text-center pt-10">
                    Rp {props.auth.user.tabungan}
                </h2>
                <div class="mb-6 flex justify-center flex-col items-center w-full mt-5">
                    <label
                        for="default-input"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Jumlah yang ingin ditabung
                    </label>
                    <input
                        onChange={(tabungan) =>
                            setTabungan(tabungan.target.value)
                        }
                        value={tabungan}
                        type="number"
                        min={1000}
                        id="default-input"
                        className="max-w-xs  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                </div>
                <div className="flex justify-center py-10">
                    <button
                        onClick={() => handleSubmit()}
                        className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
                    >
                        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Tabung Sekarang!
                        </span>
                    </button>
                </div>
            </div>
            <Footer />
        </>
    );
}
