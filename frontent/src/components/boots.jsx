import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Boots = () => {
  const dispatch = useDispatch()
  const navigator = useNavigate()
  const signout = () => {
    dispatch({ type: 'SET_USER', payload: 'user not found' }); 
    navigator('/')
  }
  const cart= () => {
  
      navigator('/cart')
    }
  
    const handleSubmit = async() => {
        navigator('/cart')
       
      }

      const fav = async() => {
        navigator('/fav')
    }

      const buy = async() => {
        navigator('/pay')
      }   

  return (
    <div>
    <div style={{justifyContent:'space-between',display:'flex',alignContent:'center',backgroundColor:'white',alignItems:'center',height:'90px'}}>
      <img src='logo1.jpeg' style={{height:'90px',width:'150px'}}></img>
      <div style={{fontStyle:'italic',fontStretch:'expanded',fontSize:'30px'}}>Soul Safari</div>
     <div style={{display:'flex',justifyContent:'left',padding:'10px',gap:'10px'}}> 
      <button onClick={fav} style={{borderRadius:'10px'}}>Favourites</button>
      <button onClick={cart} style={{borderRadius:'10px'}}>Cart</button>
    </div>
      
    </div>
    <div style={{justifyContent:'space-around',display:'flex',backgroundColor:'black',height:'320px'}}>
      <a href='#'>
        <h4></h4>
        <img src='b1.jpg' style={{height:'200px',width:'250'}}></img>
        <div style={{color:'white'}}>Black Boot</div>
        <div style={{color:'white'}}>Rs:4000/-</div>
        <button onClick={buy} style={{borderRadius:'10px'}}>BuyNow</button>
        <button onClick={handleSubmit} style={{borderRadius:'10px'}}>Addtocart</button>


      </a>
      <a href='#'>
        <h4></h4>
        <img src='b2.jpg' style={{height:'200px',width:'450'}}></img>
        <div style={{color:'white'}}>Leather Boot</div>
        <div style={{color:'white'}}>Rs:5000/-</div>
        <button onClick={buy} style={{borderRadius:'10px'}}>BuyNow</button>
        <button onClick={handleSubmit} style={{borderRadius:'10px'}}>Addtocart</button>

      </a>
      <a href='#'>
        <h4></h4>
        <img src='b3.jpg' style={{height:'200px',width:'450'}}></img>
        <div style={{color:'white'}}>Sndiago cowboy Boots</div>
        <div style={{color:'white'}}>Rs:3700/-</div>
        <button onClick={buy} style={{borderRadius:'10px'}}>BuyNow</button>
        <button onClick={handleSubmit} style={{borderRadius:'10px'}}>Addtocart</button>

      </a>
      <a href='#'>
        <h4></h4>
        <img src='b4.jpg' style={{height:'200px',width:'250'}}></img>
        <div style={{color:'white'}}>Sude leather ankled boot</div>
        <div style={{color:'white'}}>Rs:6300/-</div>
        <button onClick={buy} style={{borderRadius:'10px'}}>BuyNow</button>
        <button onClick={handleSubmit} style={{borderRadius:'10px'}}>Addtocart</button>

      </a>
    </div>
    <div  style={{justifyContent:'space-around',display:'flex',backgroundColor:'black',height:'320px'}}>
      <a href='#'>
        <h4></h4>
        <img src='b5.jpg' style={{height:'200px',width:'250'}}></img>
        <div style={{color:'white'}}>Mens outdoor Boot</div>
        <div style={{color:'white'}}>Rs:3000/-</div>
        <button onClick={buy} style={{borderRadius:'10px'}}>BuyNow</button>
        <button onClick={handleSubmit} style={{borderRadius:'10px'}}>Addtocart</button>

      </a>
      <a href='#'>
        <h4></h4>
        <img src='b6.jpg' style={{height:'200px',width:'250'}}></img>
        <div style={{color:'white'}}>Solid design gray hell Boot</div>
        <div style={{color:'white'}}>Rs:8500/-</div>
        <button onClick={buy} style={{borderRadius:'10px'}}>BuyNow</button>
        <button onClick={handleSubmit} style={{borderRadius:'10px'}}>Addtocart</button>
        
      </a>
      <a href='#'>
        <h4></h4>
        <img src='b7.jpg' style={{height:'200px',width:'250'}}></img>
        <div style={{color:'white'}}>Leather Boots for women</div>
        <div style={{color:'white'}}>Rs:7200/-</div>
        <button onClick={buy} style={{borderRadius:'10px'}}>BuyNow</button>
        <button onClick={handleSubmit} style={{borderRadius:'10px'}}>Addtocart</button>

      </a>
      <a href='#'>
        <h4></h4>
        <img src='b8.jpg' style={{height:'200px',width:'250'}}></img>
        <div style={{color:'white'}}>Winter Boots for kids</div>
        <div style={{color:'white'}}>Rs:4800/-</div>
        <button onClick={buy} style={{borderRadius:'10px'}}>BuyNow</button>
        <button onClick={handleSubmit} style={{borderRadius:'10px'}}>Addtocart</button>

      </a>


    </div>

    
      
  </div>



  );
};

export default Boots;