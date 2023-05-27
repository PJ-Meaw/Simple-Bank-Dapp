
export default function Register() {
    return (
        <>
            <div className="w-full h-full flex flex-row justify-center items-center font-Kanit">
                <div className="flex flex-col items-center">
                    <p className="text-[64px] text-[#7C56A9] mb-[80px]">Create your account</p>
                    <input type="text" className="mb-[27px] rounded-[20px] border-[2px] border-[#60C3E1] w-[465px] h-[55px] pl-[39px] outline-none text-[24px] " placeholder="your name"/>
                    <p className="mb-[66px] text-[#565656] text-[20px]">Please create your account before starting &gt;&lt;</p>
                    <button className="w-[247px] h-[53px] bg-[#A694F6] text-white text-[22px] rounded-[40px]">Start Simple bank !</button>
                </div>
            </div>
        </>
    )
}
