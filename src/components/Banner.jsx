import ARP_Full_Logo from '../assets/img/ARP_Full_Logo.png'

//โลโก้

const Banner = () => {
    return(
        <>
            <div className='bg-zinc-900 h-96'>
                <div className='max-w-fit m-auto w-screen h-screen flex justify-center items-center'>
                    <div className='border border-zinc-900 h-96 border-none'>
                    <img className='max-w-3xl' src={ARP_Full_Logo} alt="ARP LOGO" />
                 </div>
                </div>
            </div>
            <div>
            <div className="font-noto flex justify-center w-96 h-96 items-center m-auto">
                <div className=" bg-zinc-900 text-white border-x-4 border-none" >
                    <h1 className="text-2xl font-bold my-10 mx10 flex justify-center">
                    Algorhythm Project คือ?
                    </h1> 
                    <p className="mx-10 my-10">
                        Algorhythm Project หรือ Algorithm + Rhythm คือเส้นทางของระบบปฏิบัติการด้วยจังหวะของดนตรี พวกเราคือโปรเจกต์ที่รวบรวม VTuber (Virtual YouTuber) หลากหลายความสามารถและลักษณะนิสัยไว้ในที่ที่เดียว ในโปรเจกต์เราเน้นสร้างความบันเทิงให้กับทุกคนผ่านการไลฟ์สตรีมสดและดนตรี เราเชื่อว่าคุณจะเจอกับ VTuber ที่คุณชอบอย่างแน่นอนเพราะเรามีทุกแบบจริงๆ!
                    </p>
                </div>
            </div>
        </div>
        </>
    )


}

export default Banner;