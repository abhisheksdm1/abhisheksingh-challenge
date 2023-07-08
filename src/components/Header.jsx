import React,{useContext, useState } from 'react';
import Logo from '../assets/restaurant_24px.svg';
import { FaShoppingCart} from 'react-icons/fa';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import { FaMinus, FaPlus } from 'react-icons/fa'
import { cartContext, toogleContext,userContext } from '../App';
    

export default function Header() {
    
    const { menuItems, setMenuItems } = useContext(userContext);
    const {cart,setCart}=useContext(cartContext);
    const {toogle2,setToogle2,toogle1,setToogle1,clear,setClear}=useContext(toogleContext);
    const navigate=useNavigate();

    const checkoutHandler =()=>
    {
        // clear ===0 ? setCart(1):setCart(0);
        setMenuItems((prevItems) =>
        prevItems.map((item) => ({
          ...item,
          name: '',
          total: 0,
        }))
      );
        navigate('/checkout');
        setToogle2(true);
        setCart(0); 

    }

    function homeHandler (){
        if(toogle2===true)
        {
        navigate('/LandingPage');
    }
    }
  
    function logouthandle()
    {
        navigate('/');
        setToogle2((prev)=>!prev)
        setToogle1((prev)=>!prev)
        clear ===0 ? setCart(1):setCart(0);
        setCart(0);
        window.location.reload();
    }

    const totalCost = menuItems.reduce((total, item) =>item.total<=0 ? total : total + item.cost, 0);

    const handleIncrement1 = (id) => {
        setMenuItems((prevState) => {
          const updatedItems = prevState.map((item) => {
            if (item.id === id) {
              return {
                ...item,
                total: item.total + 1,
                cost: (item.total + 1) * item.price,
              };
            } 
            return item;
          });
          return updatedItems;
        });

        setCart((prev) => prev + 1);
      };

      console.log("data",menuItems);

      const handleDecrement1 = (id) => {
        setMenuItems((prevState) => {
            const updatedItems = prevState.map((item) => {
              if (item.id === id) {
                return {
                  ...item,
                  total: item.total - 1,
                  cost: (item.total - 1) * item.price,
                };
              } 
              return item;
            });
            return updatedItems;
          });
          setCart((prev) => prev - 1);
      };

      function loginhandle()
      {
        
        navigate('/login');
      }

      const registerhandle =()=>{
        navigate('/register');
      }

    return (
    <div>
       <div className='flex bg-[#4f46e5] align-center justify-between p-5 text-white' >
        <div className='flex' onClick={homeHandler}>
        <div className='mr-2' >
         <img src={Logo} className=''></img>
         </div>
      <div>
      <button className='text-lg relative bottom-0.5' >Food's Restaurant</button>
      </div>
      </div>
      <div>
      <div className='flex'>
      { toogle2===false ?
        <div>
        <button className='mr-5' onClick={loginhandle}>login</button>
        <button className='mr-5' onClick={registerhandle}>Register</button>
        </div>
        :
        <button className='mr-5' onClick={logouthandle}>logout</button>

    }
        { toogle1 && <span className='cart-container mr-5'  onClick={()=>window.my_modal_4.showModal()}>
          <FaShoppingCart />
          <span className='cart-value'> { cart}</span>
          </span>
        }
      </div>
        
      </div>

    </div>
    <dialog id="my_modal_4" className="modal " >
  <form method="dialog" className="modal-box  max-w-5xl">
    <h3 className="font-bold text-lg">Order Summary</h3>
    <br/>
    {totalCost > 0 &&
        menuItems
          .filter((item) => item.total > 0)
          .map((list, index) => (
            <div key={index} className=''>
              <table>
                <tbody>
                  <tr>
                    <td className='text-left p-3' colSpan={3}>
                    <div className='flex mb-3 td1'>                      
                        <span style={{width:'100px'}}>{list.name} :</span>
                        </div>
                    </td>
                    <td className='text-left'>
                    <div className='flex mb-3'>
                        <span>{list.total}</span>
                    </div>
                    </td>
                    <td className='text-left'>
                      <div className='flex mb-3'>
                        <h1
                          className='bg-[#4f46e5] rounded-sm pt-2 pb-2 pl-5 pr-5 mr-5 text-white'
                          onClick={() => handleIncrement1(list.id)}
                        >
                          <FaPlus />
                        </h1>
                        <h1
                          className='bg-[#ef4444] rounded-sm pt-2 pb-2 pl-5 pr-5 mr-5 text-white'
                          onClick={() => handleDecrement1(list.id)}
                        >
                          <FaMinus />
                        </h1>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))}
      <br />
    <div>
        <p>Total (INR) :{totalCost}</p>
    </div>
    <div className="modal-action flex mr-5 justify-end">
      {/* if there is a button, it will close the modal */}
      <button onClick={checkoutHandler} className="btn bg-[#4f46e5] mr-5 rounded-lg pt-1 pb-1 pl-3 pr-3 mr-5 text-white">SAVE AND CHECKOUT</button>
      <button className="btn text-violet-600">CANCLE</button>
      <br/>
    </div>
  </form>
</dialog>
    </div>
  )
}
