import React from 'react';
import './ExpenseDate.css';

// 지출 내역의 날짜 관리
function ExpenseDate(props) {
  const month = props.date.toLocaleString('ko-KR', { month: 'long' });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString('ko-KR', { day: '2-digit' });
  return (
    <div className='expense-date'>
      <div className='expense-date__month'>{month}</div>
      <div className='expense-date__year'>{year}</div>
      <div className='expense-date__day'>{day}</div>
    </div>
  );
}

export default ExpenseDate;
