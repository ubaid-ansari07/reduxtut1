import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { remove,save } from "./MasterSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function App() {
  let navigate = useNavigate()
  const [pname, setPname] = useState("");
  const [pprice, setPprice] = useState(0);
  const [pqty, setPqty] = useState(0);
  let dispatch = useDispatch();
  let productList = useSelector((state) => state.master.value.productList);
  const saveP = ()=>{
    let obj = {
      productName:pname,
      productPrice:pprice*1,
      productQty:pqty*1
    }
    dispatch(save(obj));
  }
  const edit = (obj,index)=>{
    navigate('/edit',{state:{obj,index}})
  }
  return (
    <div className="container text-center">
      <div className="row mt-5 mb-5">
        <div className="col-md-3">
          <input className="form-control" onChange={(event)=>setPname(event.target.value)} placeholder="Product Name"></input>
        </div>
        <div className="col-md-3">
          <input className="form-control" onChange={(event)=>setPprice(event.target.value)} placeholder="Product Price"></input>
        </div>
        <div className="col-md-3">
          <input className="form-control"  onChange={(event)=>setPqty(event.target.value)} placeholder="Product Qty"></input>
        </div>
        <div className="col-md-3">
          <button className="btn btn-outline-secondary" onClick={saveP}>Add</button>
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Sno</th>
            <th>Name</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {productList.map((obj, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{obj.productName}</td>
              <td>{obj.productPrice}</td>
              <td>{obj.productQty}</td>
              <td>
                <button className="btn btn-primary" onClick={()=>edit(obj,index)}>Edit</button>
              </td>
              <td>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => dispatch(remove(index))}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
