import React from 'react';

// 지출 내역의 날짜 관리
function ExpenseDate(props) {
  const month = props.date.toLocaleString('ko-KR', { month: 'long' });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString('ko-KR', { day: '2-digit' });
  return (
    <div>
      <div>{month}</div>
      <div>{year}</div>
      <div>{day}</div>
    </div>
  );
}

export default ExpenseDate;
