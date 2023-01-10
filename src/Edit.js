import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { update } from "./MasterSlice";

export default function Edit() {
  let location = useLocation();
  const [pname, setPname] = useState(location.state.obj.productName);
  const [pprice, setPprice] = useState(location.state.obj.productPrice);
  const [pqty, setPqty] = useState(location.state.obj.productQty);
  const [index, setIndex] = useState(location.state.index);
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const edit = () => {
    let obj = {
      productName: pname,
      productPrice: pprice * 1,
      productQty: pqty * 1,
    };
    dispatch(update({obj,index}));
    navigate('/')
  };
  return (
    <div className="container">
      <div className="row mt-5 mb-5">
        <div className="col-md-3">
          <input type="hidden" value={index}></input>
          <input
            className="form-control"
            onChange={(event) => setPname(event.target.value)}
            placeholder="Product Name"
            defaultValue={pname}
          ></input>
        </div>
        <div className="col-md-3">
          <input
            className="form-control"
            onChange={(event) => setPprice(event.target.value)}
            placeholder="Product Price"
            defaultValue={pprice}
          ></input>
        </div>
        <div className="col-md-3">
          <input
            className="form-control"
            onChange={(event) => setPqty(event.target.value)}
            placeholder="Product Qty"
            defaultValue={pqty}
          ></input>
        </div>
        <div className="col-md-3">
          <button className="btn btn-outline-secondary" onClick={edit}>
            Update
          </button>
        </div>
      </div>
    </div>
  );
}
