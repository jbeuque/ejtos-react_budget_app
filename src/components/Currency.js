import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const {dispatch,currency } = useContext(AppContext);

    const changeCurrency = (val)=>{
            dispatch({
                type: 'CHG_CURRENCY',
                payload: val,
            })
    }
    

  return (
        <div className='btn btn-success '>
            <label htmlFor="currency">Currency: </label>
             
        <select className='btn btn-success dropdown-toggle' 
         name="currency" id="currency" defaultValue={currency} onChange={event=>changeCurrency(event.target.value)}>
        <option value="$">$ Dollar</option>
        <option value="£">£ Pound</option>
        <option value="€">€ Euro</option>
        <option value="₹">₹ Ruppee</option>
      </select>	
      
    </div>
    );
};

export default Currency;

