import {useDispatch} from "react-redux"
import { logout } from "../redux/userSlice"

function Info({user}) {
 const dispatch = useDispatch()

    const logoutHandler = () =>{
        dispatch(logout())
    }
  return (
 <div className="pt-16">
      <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
    <img className="block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0" src={user.pic} alt="Profile
    Img"/>
    <div className="text-center space-y-2 sm:text-left">
      <div className="space-y-0.5">
        <p className="text-lg text-black font-semibold">
          {user.username}
        </p>
        <p className="text-gray-500 font-medium">
          {user.useremail}
        </p>
      </div>
    <button onClick={logoutHandler} class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent">LogOut</button>
    </div>
  </div>
  <p className="text-center text-6xl font-medium text-white py-3 font-mono">Hello {user.username.split(" ")[0]} !!</p>
 </div>
  )
}

export default Info