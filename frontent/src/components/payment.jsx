import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
  const [Name, setName] = useState('');
  const [adress, setadress] = useState('');
  const [email, setEmail] = useState('');
  const [phonenumber, setPhoneNumber] = useState('');
  
  const navigate = useNavigate();
  const handleSubmit = async () => {
    
    
    if (!Name || !adress ||!email || !phonenumber) {
      console.error('Please fill in all fields');
     
      return;
    }
  
    
    try {
      const response = await axios.post('http://localhost:1000/register', {
        Name,
        adress,
        email,
        phonenumber,
      });
      console.log(response.data); 
      if(response.data) {
      
        navigate('/login')
      }
    } catch (error) {
      console.error('Payment failed', error);
    }
  };

  
// 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
  return (
  <div>
    <div style={{display:'flex',alignContent:'center',backgroundColor:'white',alignItems:'center',height:'80px'}}>
      <img src='logo1.jpeg' style={{height:'80px',width:'130px'}}></img>
      <div style={{fontStyle:'italic',fontStretch:'expanded',fontSize:'30px'}}>Soul Safari</div>
    </div>
    <div style={{ backgroundImage:`url(/bg.jpg)`,backgroundSize:'cover',height:'800px' ,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:'10px'}}>
      <h2 style={{color:'white'}}>PAYMENT</h2>
      <div>
       
        <input
          type="text"
          value={Name}
          placeholder='Enter Name'
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
    

      <div >
      
        <input
          type="text"
          value={adress}
          placeholder='Enter Address'
          onChange={(e) => setadress(e.target.value)}
          required
        />
      </div>

      <div >
       
        <input
          type="email"
          value={email}
          placeholder='Enter Email'
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div >
      
        <input
          type="number"
          value={phonenumber}
          placeholder='Enter Phone Number'
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
      </div>
    
     
      <button  style={{backgroundColor:'green'}}>PLACE ORDER</button>
    </div>
    </div>
    
  );
};

export default Payment;
