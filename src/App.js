import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from './MasterSlice';
function App() {
  let dispatch = useDispatch();
  let productList = useSelector(state=>state.master.value.productList);
  return (
    <div className='container text-center'>
      <table className='table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead> 
        <tbody>
          {productList.map((obj,index)=><tr key={index}>
            <td>{obj.id}</td>
            <td>{obj.productName}</td>
            <td>{obj.productPrice}</td>
            <td>{obj.productQty}</td>
            <td><button className='btn btn-primary'>Edit</button></td>
            <td><button className='btn btn-outline-danger' onClick={()=>dispatch(index)} >Delete</button></td>
          </tr>)}
        </tbody>
      </table>
    </div>
  );
}

export default App;
