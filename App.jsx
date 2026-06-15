import React, { useState } from 'react';
import Article from './components/Article';
import './App.css';

function App() {
  const [articleData, setArticleData] = useState({
    title: 'Название',
    author: 'Автор',
    text: 'Длинный текст...........',
    date: '15.06.2026',
    imageUrl: 'https://img.goodfon.ru/wallpaper/big/d/1c/smailiki-zheltye-shary-ulybki.webp'
  });

  const [settings, setSettings] = useState({
    titleFont: 'sans-serif',
    titleColor: '#2c3e50',
    titleSize: 28,
    titleAlign: 'left',
    titleBg: '#eef2f3',

    authorFont: 'monospace',
    authorColor: '#7f8c8d',
    authorSize: 14,
    authorBg: '#ffffff',

    textFont: 'serif',
    textColor: '#34495e',
    textSize: 16,
    textBg: '#ffffff',

    articleBg: '#f9f9f9',
    imagePosition: 'right'
  });

  const handleDataChange = (e) => {
    const { name, value } = e.target;
    setArticleData(prev => ({ ...prev, [name]: value }));
  };

  const handleSettingChange = (e) => {
    const { name, value } = e.target;
    setSettings(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Конструктор статей</h1>
      </header>

      <div className="main-layout">
        <aside className="settings-panel">
          <h2>Настройки статьи</h2>
          
          <section className="settings-section">
            <label>Заголовок:
              <input type="text" name="title" value={articleData.title} onChange={handleDataChange} />
            </label>
            <label>Автор:
              <input type="text" name="author" value={articleData.author} onChange={handleDataChange} />
            </label>
            <label>Дата:
              <input type="text" name="date" value={articleData.date} onChange={handleDataChange} />
            </label>
            <label>Текст:
              <textarea name="text" value={articleData.text} onChange={handleDataChange} rows="4" />
            </label>
            <label>Ссылка на картинку:
              <input type="text" name="imageUrl" value={articleData.imageUrl} onChange={handleDataChange} placeholder="Оставьте пустым для удаления" />
            </label>
          </section>

          <section className="settings-section">
            <label>Шрифт:
              <select name="titleFont" value={settings.titleFont} onChange={handleSettingChange}>
                <option value="sans-serif">Sans-serif</option>
                <option value="serif">Serif</option>
                <option value="monospace">Monospace</option>
              </select>
            </label>
            <label>Размер (px):
              <input type="number" name="titleSize" value={settings.titleSize} onChange={handleSettingChange} min="12" max="64" />
            </label>
            <div className="color-pickers">
              <label>Цвет текста:
                <input type="color" name="titleColor" value={settings.titleColor} onChange={handleSettingChange} />
              </label>
              <label>Фон:
                <input type="color" name="titleBg" value={settings.titleBg} onChange={handleSettingChange} />
              </label>
            </div>
          </section>

          <section className="settings-section">
            <label>Шрифт:
              <select name="textFont" value={settings.textFont} onChange={handleSettingChange}>
                <option value="sans-serif">Sans-serif</option>
                <option value="serif">Serif</option>
                <option value="monospace">Monospace</option>
              </select>
            </label>
            <label>Размер (px):
              <input type="number" name="textSize" value={settings.textSize} onChange={handleSettingChange} min="10" max="32" />
            </label>
            <div className="color-pickers">
              <label>Цвет текста:
                <input type="color" name="textColor" value={settings.textColor} onChange={handleSettingChange} />
              </label>
              <label>Фон:
                <input type="color" name="textBg" value={settings.textBg} onChange={handleSettingChange} />
              </label>
            </div>
          </section>

          <section className="settings-section">
            <label>Общий фон статьи:
              <input type="color" name="articleBg" value={settings.articleBg} onChange={handleSettingChange} />
            </label>
            <label>Расположение картинки:
              <select name="imagePosition" value={settings.imagePosition} onChange={handleSettingChange}>
                <option value="right">Картинка слева</option>
                <option value="left">Картинка справа</option>
              </select>
            </label>
            <label>Выравнивание заголовка:
              <select name="titleAlign" value={settings.titleAlign} onChange={handleSettingChange}>
                <option value="left">По левому краю</option>
                <option value="center">По центру</option>
                <option value="right">По правому краю</option>
              </select>
            </label>
          </section>
        </aside>

        <main className="preview-area">
          <h2>Предпросмотр</h2>
          <Article data={articleData} settings={settings} />
        </main>
      </div>
    </div>
  );
}

export default App;