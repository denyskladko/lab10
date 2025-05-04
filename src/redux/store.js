import { configureStore } from '@reduxjs/toolkit';
import logoReducer from './reducers/logoReducer';
import dateReducer from './reducers/dateReducer';
import menuReducer from './reducers/menuReducer';
const store = configureStore({ 
  reducer: {
    logo: logoReducer, // Додано редюсер логотипу
    date: dateReducer,
    menu: menuReducer,
  },
});


export default store;
