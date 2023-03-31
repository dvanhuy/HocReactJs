import { useEffect, useRef } from "react";
import VideoComponent from "./videocomponent"

function UseImperativee(){
    const videoRef = useRef();
    // tính đóng gói của dữ liệu
    const playHanlde = ()=>{
        videoRef.current.play()
    }
    const pauseHanlde = ()=>{
        videoRef.current.pause()
    }
    useEffect(() => {
        console.log(videoRef);
    }, []);
    return (    
        <>
            <VideoComponent ref={videoRef}/>
            <button onClick={playHanlde}>Chạy</button>
            <button onClick={pauseHanlde}>Dừng</button>
        </>
    )
}

export default UseImperativee