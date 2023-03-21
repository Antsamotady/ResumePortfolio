import React, { Component } from 'react'

class Counter extends Component {
  
  render() {

    const {counter, onIncrement, onDecrement, onDelete} = this.props;

    return (
      <div className="item-line">
        <span className={this.getBadgeClass()}>{this.formatCount()}</span>
        <div>
          <button className='badge incr' onClick={() => onIncrement(counter)}>++</button>
          <button className='badge decr' onClick={() => onDecrement(counter)}>--</button>
          <button className='badge delete' onClick={() => onDelete(counter.id)}>del</button>
        </div>
      </div>
    )
  }

  formatCount() {
    const { value } = this.props.counter;

    return value === 0 ? 'Zero' : value;
  }

  getBadgeClass() {
    let classes = "badge item-nb badge-";
    classes += this.props.counter.value === 0 ?
      "zero" :
      this.props.counter.value > 0 ? "positive" : "negative"
      ;

    return classes;
  }

}

export default Counter;