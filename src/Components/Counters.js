import React from 'react'
import Counter from './Counter';

const Counters = ({counters, totalCounters, onAddItem, onReset, onIncrement, onDecrement, onDelete}) => {
  return (
    <div className='container2'>
      <div className='text-info'>nb of items : <span className='badge badge-nb'>{ counters.length }</span></div>
      <div className='text-info'>total stuff : <span className='badge badge-nb'>{ totalCounters }</span></div>
      <button className='badge add-item' onClick={onAddItem}>Add item</button>
      { counters.map(counter => 
        <Counter 
          key={counter.id} 
          counter={counter}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onDelete={onDelete}
        />)
      }
      <button className='badge reset' onClick={onReset}>Reset all</button>
    </div>
  );
};

export default Counters;