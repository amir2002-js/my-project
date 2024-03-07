import userInfo from "../data/user"
import { IoIosAdd } from "react-icons/io";
const Stories = () => {
  return (
    <>
        <div className="py-3 px-2 border-b border-gray-300 flex gap-52  justify-start items-center">
            <div className="flex flex-col justify-center items-center">
                <div className="size-16 rounded-[50%] relative">
                    <img src={userInfo.profileSrc} alt=""  className=" object-cover aspect-square rounded-full" />
                    <span className="absolute h-5 w-5 bg-slate-400 rounded-full right-0 bottom-0 flex justify-center items-center border-[2.5px] border-white">
                        <IoIosAdd/>
                    </span>
                </div>
                <p>your story</p>
            </div>
        </div>
    </>
  )
}


export default Stories