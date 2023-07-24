import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

export default function About(props) {
    return (
        <>
            <Navbar auth={props.auth.user}/>
            <div className="container bg-slate-200  w-full pb-5 px-8">
                <h2 className="text-2xl text-center pt-5 font-bold">
                    Tentang Kami
                </h2>
                <p className="mt-5 text-center px-10">
                    Kami telah merancang web Bank Anak kami dengan berbagai
                    fitur yang didedikasikan untuk membantu anak-anak belajar
                    tentang keuangan dengan cara yang menyenangkan dan
                    interaktif. Di sini, anak-anak dapat membuka akun tabungan
                    khusus mereka dan belajar bagaimana cara menabung uang dari
                    sumber-sumber kecil yang mereka miliki, seperti uang jajan
                    atau hadiah ulang tahun.
                </p>
                <div className="flex justify-evenly m-8">
                    <div className="w-[40%]">
                        <img
                            className="w-[385px] h-[210px]"
                            src="http://localhost:8000/storage/assets/anakdikasihuang.jpeg"
                            alt=""
                        />
                    </div>
                    <div className="w-[70%]">
                        <p className="pt-10">
                            Salah satu fitur utama kami adalah menawarkan
                            program penghargaan untuk mendorong anak-anak
                            menabung lebih banyak. <br />
                            Mereka akan mendapatkan hadiah dan poin setiap kali
                            berhasil mencapai target tabungan mereka. <br />
                            Fitur ini bertujuan untuk memberikan dorongan
                            positif agar anak-anak merasa senang dan bangga
                            dengan kemajuan finansial mereka.
                        </p>
                    </div>
                </div>
                <div className="flex justify-evenly m-8 gap-2">
                    <div className="w-[70%]">
                        <p className="pt-5 text-justify mx-4">
                            Keamanan merupakan prioritas utama kami. Web Bank
                            Anak dilengkapi dengan lapisan keamanan modern,
                            sehingga orangtua dapat dengan tenang memantau
                            aktivitas anak-anak mereka dan memastikan pengalaman
                            berbanking mereka selalu aman. Kami berharap bahwa
                            melalui fitur-fitur web Bank Anak kami, generasi
                            muda akan belajar dan mengembangkan kebiasaan
                            finansial yang baik sejak dini, membuka jalan menuju
                            masa depan yang lebih stabil dan sukses secara
                            finansial. Mari bersama-sama mempersiapkan mereka
                            menjadi generasi yang cerdas dan berpengeluaran
                            bijaksana!
                        </p>
                    </div>
                    <div className="w-[40%]">
                        <img
                            className="w-[385px] h-[210px]"
                            src="http://localhost:8000/storage/assets/menabung.jpg"
                            alt=""
                        />
                    </div>
                </div>
                <div className="flex justify-center">
                    <button onClick={() => window.location.href = route('register')} class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Daftar Sekarang!
                        </span>
                    </button>
                    <button onClick={() => window.location.href = route('login')} class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Login Akun Anda!
                        </span>
                    </button>
                </div>
            </div>
            <Footer />
        </>
    );
}
