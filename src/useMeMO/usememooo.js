import { useState,useMemo,useRef} from "react";

function UseMemooo(){

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [product, setProduct] = useState([]);

    const useref = useRef();
    const handleSubmit = ()=>{
        setProduct([...product,{
            name,
            price: Number(price) // parseInt hoặc +price cx dc
        }])
        setName("")
        setPrice("")
        useref.current.focus()
    }

    // const total = product.reduce((result,prod)=>{
    //     console.log("Tính lại ko cần");
    //     return  result + prod.price
    // } , 0)

    // phương thức hoặc động gần giống useeffect và useCallBack
    const total = useMemo(() =>{
        const result = product.reduce((result,prod)=>{
                console.log("Tính lại ko cần");
                return  result + prod.price
            } , 0)
        return result;
    },[product]);

    return (
        <div style={{padding: "10px 20px"}}>
            <input type="text"
            ref={useref}
            value={name}
            placeholder="Nhập tên"
            onChange={e=>setName(e.target.value)} />
            <input type="text"
            value={price}
            placeholder="Nhập giá"
            onChange={e=>setPrice(e.target.value)} />
            <br />
            <button onClick={handleSubmit}>Thêm</button>
            <h3>Giá toàn bộ là: {total} </h3>
            <div>
                <ul>{product.map((ev,index)=>{
                    return (
                        <li key={index}>Sản phẩm: {ev.name} - Giá:  {ev.price}</li>
                    )
                })}</ul>
            </div>
        </div>
    )
}
export default UseMemooo