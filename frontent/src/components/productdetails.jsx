import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Productdetals = () => {
  const dispatch = useDispatch()
  const navigator = useNavigate()
  const signout = () => {
    dispatch({ type: 'SET_USER', payload: 'user not found' }); 
    navigator('/')
  }

  return (
  <div>
    <div style={{display:'flex',justifyContent:'center',backgroundColor:'dimgray',alignItems:'center',height:'80px',gap:'1000px'}}>
      <h2 style={{color:'white'}}>Product Details</h2>
      <button style={{borderRadius:'10px'}}>Add to cart</button>
    </div>
    <div style={{justifyContent:'space-around',display:'flex',backgroundColor:'white',height:'320px'}}>
      <a href='#'>
        <img src='b2.jpg' style={{height:'200px',width:'400'}}></img>
        <h4>boots</h4>
        <h4>3000/-</h4>
        <div>
        <h4>size</h4>
        <button>S</button>
        <button>M</button>
        <button>L</button>
        </div>
      </a>
      <a href='#'>
        <img src='h4.jpg' style={{height:'200px',width:'500'}}></img>
        <h4>heels</h4>
        <h4>2000/-</h4>
        <div>
        <h4>size</h4>
        <button>S</button>
        <button>M</button>
        <button>L</button>
        </div>

      </a>
      <a href='#'>
        <img src='men5.jpg' style={{height:'200px',width:'500'}}></img>
        <h4>Mens wear</h4>
        <h4>5000/-</h4>
        <div>
        <h4>size</h4>
        <button>S</button>
        <button>M</button>
        <button>L</button>
        </div>
      </a>

    </div>
     
     
   
    

</div>




  );
};

export default Productdetals;
