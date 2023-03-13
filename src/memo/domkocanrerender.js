import React from "react";

function Kocanrerender({count}){
    console.log("Re-render dư");
    return(
        <div>Đây là dom không cần re-rerender {count}</div>
    )
}
export default React.memo(Kocanrerender)
// kiểm tra xem prop có thay đổi hay không
//nếu thay đổi thì mới rerender