import Expenses from './components/Expenses';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: '휴지',
      amount: 5000,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'LG 올레드 TV', amount: 2000000, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: '자동차보험',
      amount: 500000,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: '나무책상',
      amount: 450000,
      date: new Date(2021, 5, 12),
    },
  ];
  return (
    <div>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
