import React, { useEffect, useState } from 'react';
import Header from '../components/Header'; // Імпортуємо Header
import Footer from '../components/Footer'; // Імпортуємо Footer
import SideBar from '../components/SideBar'; // Імпортуємо Sidebar
import Content from '../components/Content'; // Імпортуємо Content
import { fetchDogBreeds } from '../components/api'; // Імпортуємо функцію для отримання порід собак

// Псевдодані для меню
const menuList = ['Home', 'About', 'Contact'];

export default function Home() {
  const [breeds, setBreeds] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadBreeds = async () => {
    setLoading(true);
    const breedList = await fetchDogBreeds();
    setBreeds(breedList);
    setLoading(false);
  };

  // Завантаження списку порід при першому рендері
  useEffect(() => {
    loadBreeds();
  }, []);

  return (
    <div>
      {/* Хедер */}
      <Header title="Welcome to the Dog Breeds App!" />

      {/* Бокова панель з меню */}
      <SideBar title="Navigation" menuList={menuList} />

      {/* Головний вміст */}
      <main>
        {/* Використовуємо компонент Content для відображення списку порід собак */}
        <Content breeds={breeds} loading={loading} loadBreeds={loadBreeds} />
      </main>

      {/* Футер */}
      <Footer title="Footer Section" menuList={menuList} />
    </div>
  );
}
