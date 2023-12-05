import React from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

// 지출 내역 컴포넌트
function ExpenseItem(props) {
  return (
    <>
      <div className='expense-item'>
        <ExpenseDate date={props.date} />
        <div className='expense-item__description'>
          <h2>{props.title}</h2>
          <div className='expense-item__price'>{props.amount}원</div>
        </div>
      </div>
    </>
  );
}

export default ExpenseItem;
