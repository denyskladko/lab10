import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { updateDate } from '../redux/reducers/dateReducer';

const DateTime = ({ currentDate, updateDate }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      updateDate(); // Оновлюємо час через Redux
    }, 1000);

    return () => clearInterval(interval); // Очищення інтервалу при розмонтуванні
  }, [updateDate]);

  if (!currentDate) {
    return null; // Не відображати нічого, якщо стан відсутній
  }

  const date = new Date(currentDate);

  return (
    <div>
      <p>{date.toLocaleDateString('uk-UA')}</p>
      <p>{date.toLocaleTimeString('uk-UA')}</p>
    </div>
  );
};

// Отримання стану із Redux Store
const mapStateToProps = (state) => ({
  currentDate: state.date.currentDate,
});

// Передача дії у компонент
const mapDispatchToProps = {
  updateDate,
};

// Підключення компонента до Redux
export default connect(mapStateToProps, mapDispatchToProps)(DateTime);