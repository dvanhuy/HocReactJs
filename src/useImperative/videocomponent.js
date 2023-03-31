import { forwardRef, useImperativeHandle, useRef } from "react"
import firelop from "./firelop.mp4"

function VideoComponent(prop,ref){
    const videoRef = useRef()
    useImperativeHandle(ref,()=>({
        play(){
            videoRef.current.play()
        },
        pause(){
            videoRef.current.pause()
        }
    }))

    return (
        <>
            <video ref={videoRef} src={firelop} width={200}></video>
        </>
    )
}

export default forwardRef(VideoComponent)