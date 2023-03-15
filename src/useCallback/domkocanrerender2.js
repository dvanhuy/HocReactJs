import React from "react";

// nếu truyền 1 arrow function thì hai arrow fucn sẽ khác nhau
//  nên meno sẽ dùng toán tử 3 ngôi để so sánh và trả ra kết quả khác nhau
// vì vậy sẽ rerender
function Kocanrerenderrrr({onIncrease}){
    console.log("Re-render dư");
    return(
        <>
            <div>Đây là dom không cần re-rerender</div> 
            <button onClick={onIncrease} style={{marginTop: "20px"}} >Tăng</button>
        </>
    )
}
export default React.memo(Kocanrerenderrrr)
// kiểm tra xem prop có thay đổi hay không
//nếu thay đổi thì mới rerender