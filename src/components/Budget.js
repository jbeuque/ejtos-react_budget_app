import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';




const Budget = () => {
    const {budget } = useContext(AppContext);
    const {dispatch} = useContext(AppContext);
    const {expenses} = useContext(AppContext);


    const setBudget = (value) => {

        const totalExpenses = expenses.reduce((total, item) => {
            return (total += item.cost);
        }, 0);

        if (value > 20000) { 
             alert("the budget can't be more than 20000");
             
        }; 
        if (value < totalExpenses) {
            alert("the budget can't be less than the spending");
        };

        dispatch({
            type: 'SET_BUDGET',
            payload: value,
        });
     
    };
    
    return (
        <div className='alert alert-secondary'>
            <span>Budget: £ </span>
            
            <input
                        required='required'
                        type='number'
                        id='budget'
                        step="10"
                        value={budget}
                        style={{size: 10}}
                        onChange={(event) => setBudget(event.target.value)}>
                        </input>
            
        
        </div>
        
    );
};
export default Budget;
