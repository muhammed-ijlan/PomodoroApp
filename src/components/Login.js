import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import { useDispatch } from 'react-redux'
import { auth, provider } from "../firebase"
import { login } from '../redux/userSlice'
import "./Login.css"

function Login() {
 const dispatch = useDispatch()

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            console.log(result);
            const username = result.user.displayName;
            const useremail = result.user.email;
            const pic = result.user.photoURL

            dispatch(login({username,useremail,pic}))
            
        }).catch((err) => {
            console.log(err);
        })
    }

    return (
        <div className='pt-10  font-mono antialiased font-medium flex flex-col items-center'>
    <p className='font-bold text-6xl text-white py-8'>Login to Start Timer</p>
        <div className="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4 ">
        <button  onClick={signInWithGoogle}  type='button' className='signin inline-block  text-center  px-8 py-3 bg-gray-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'>SigIn with Google</button>
            </div>
        </div>
    )
}

export default Login