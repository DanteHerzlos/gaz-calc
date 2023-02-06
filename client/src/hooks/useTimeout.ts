import { useEffect, useRef } from "react"

export default function useTimeout(){
  const timerRef = useRef<NodeJS.Timeout>()
  useEffect(() => {
    // Clear the setTimeout when the component unmounts
    return () => clearTimeout(timerRef.current)
  }, [])
  return timerRef
}