import userInfo from "../data/user"
import { IoIosAdd } from "react-icons/io";
const Stories = () => {
  return (
    <>
        <div className="py-3 px-2 border-b border-gray-300 flex justify-start items-center">
            <div className="flex flex-col justify-center items-center">
                <div className="w-16 h-16 rounded-ful relative">
                    <img src={userInfo.profileSrc} alt="" className="w-16 h-16 rounded-full" />
                <span className="absolute h-5 w-5 bg-slate-100 rounded-full right-0 bottom-0 flex justify-center items-center">
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