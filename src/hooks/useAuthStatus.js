import React, {useEffect,useState, useRef} from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

export const useAuthStatus = () => {
    const [loggedIn, seLoggedIn] = useState(false)
    const [checkingStatus,setCheckingStatus] = useState(true)
    const isMounted = useRef(true)

    useEffect(() => {
        if(isMounted) {
            const auth = getAuth()
            onAuthStateChanged(auth,(user) => {
                if(user) {
                    seLoggedIn(true)
                }
                setCheckingStatus(false);
            })
        }
        
    },[isMounted])
  return {loggedIn, checkingStatus}
  
}
