import {useRef, useEffect} from 'react'

const PressKey = (key , cb) => {
    const callbackRef = useRef(cb)
    
    useEffect(() => {
      callbackRef.current = cb
    })
    useEffect(() => {
            const handle = (event) => {
              if(event.code === key){
                callbackRef.current(event) 
              }
            } 
      document.addEventListener('keypress', handle)
      return () => document.removeEventListener('keypress', handle)
    }, [key])
  }

export default PressKey