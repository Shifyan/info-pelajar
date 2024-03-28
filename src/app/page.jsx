import Link from "next/link";

export default function Landing(){
    return(
        <>
            <div className="flex flex-row w-full h-screen items-center bg-blue-800 text-white">
                <div className="left-section basis-2/5">
                    <h1>Ini Section Left</h1>
                </div>
                <div className="right-section basis-3/5">
                    <div className="right-header text-4xl mb-6 font-bold flex justify-center ">
                        <p>Selamat Datang Di Pusat Data Pelajar</p> 
                    </div>
                    <div className="comment mb-4  flex justify-center">
                        <p>Silahkan Login!</p>
                    </div>
                    <div className="button text-black mb-4 flex justify-center">
                        <Link href={"/login"} className="p-2 bg-white rounded hover:bg-gray-200 transition-colors duration-500 ease">Log In</Link>
                    </div>
                </div>
            </div>
        </>
    )
}