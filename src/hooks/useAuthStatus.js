import React, {useEffect,useState, useRef} from 'react'
import { getAuth, onAuthStateChange } from 'firebase/auth'

export const useAuthStatus = () => {
    const [loggedIn, seLoggedIn] = useState(false)
    const [checkingStatus,setCheckingStatus] = useState(true)
    const isMounted = useRef(true)

    useEffect(() => {
        if(isMounted) {
            const auth = getAuth()
            onAuthStateChange(auth,(user) => {
                if(user) {
                    setLoggIn(true)
                }
                setCheckingStatus(false);
            })
        }
        
    },[isMounted])
  return (
    {loggedIn, checkingStatus}
  )
}
