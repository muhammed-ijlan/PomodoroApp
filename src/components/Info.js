import {useDispatch} from "react-redux"
import { logout } from "../redux/userSlice"
function Info() {

 const dispatch = useDispatch()

    const logoutHandler = () =>{
        dispatch(logout())
    }
  return (
    <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
  <img className="block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0" src="" alt="Profile
  Img"/>
  <div className="text-center space-y-2 sm:text-left">
    <div className="space-y-0.5">
      <p className="text-lg text-black font-semibold">
        {}
      </p>
      <p className="text-gray-500 font-medium">
        {}
      </p>
    </div>
  <button onClick={logoutHandler} class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent">LogOut</button>
  </div>
</div>
  )
}

export default Info