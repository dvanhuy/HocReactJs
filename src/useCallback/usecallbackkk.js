import { useCallback, useState } from "react"
import Kocanrerenderrrr from "./domkocanrerender2"
function UseCallBackk(){

    const [count,setCount] = useState(0)

    //useCallback tạo ra 1 tham chiếu bên ngoài hàm
    // trả về 1 tham chiếu cho handleIncrease
    // nếu dependency rông ([]) thì lần tiếp theo rerender sẽ vẫn trả về tham chiếu cũ
    // dependency thay đổi thì sẽ trả về 1 tham chiếu mới
    const handleIncrease = useCallback(()=>{
        setCount(count=>count+1)
    },[])

    return (
        <>
            <Kocanrerenderrrr onIncrease={handleIncrease}/>
            <h1>{count}</h1>
        </>
    )
}
export default UseCallBackk