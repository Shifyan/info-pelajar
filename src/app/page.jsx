export default function Landing(){
    return(
        <>
            <div className="flex flex-row w-full h-screen items-center bg-blue-800 text-white">
                <div className="left-section basis-1/2">
                    <h1>Ini Section Left</h1>
                </div>
                <div className="right-section basis-1/2">
                    <div className="right-header text-4xl mb-6 font-bold flex justify-center ">
                        <p>Selamat Datang Di Pusat Data Pelajar</p> 
                    </div>
                    <div className="comment mb-4  flex justify-center">
                        <p>Silahkan Login Untuk Mengakses Data!</p>
                    </div>
                    <div className="button text-black mb-4 flex justify-center">
                        <button className="p-2 bg-white rounded hover:bg-gray-200 transition-colors duration-500 ease">Log In</button>
                    </div>
                </div>
            </div>
        </>
    )
}