import "@/styles/globals.css";
import '@/styles/Content.css';
import '@/styles/Footer.css';
import '@/styles/Sidebar.css';
import '@/styles/Header.css';
import { Provider } from 'react-redux';
import store from '../redux/store';


export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}