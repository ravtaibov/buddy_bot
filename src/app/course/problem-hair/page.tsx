'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const courseData = {
  title: "Работа с проблемными волосами",
  description: "Специализированный курс по работе с различными типами проблемных волос",
  lessons: [
    {
      id: 1,
      title: "Диагностика проблем волос",
      description: "Определение типов проблем и их причин",
      content: `
        <h3>Диагностика проблем волос</h3>
        <p>Научитесь правильно определять проблемы волос и их первопричины.</p>
        
        <h4>Основные типы проблем:</h4>
        <ul>
          <li>Поврежденные волосы (химическое воздействие)</li>
          <li>Сухие и ломкие волосы</li>
          <li>Жирные волосы у корней</li>
          <li>Тонкие и редкие волосы</li>
          <li>Непослушные и пушащиеся волосы</li>
        </ul>
        
        <h4>Методы диагностики:</h4>
        <p>1. <strong>Визуальный осмотр:</strong> Оценка состояния волос и кожи головы</p>
        <p>2. <strong>Тактильная диагностика:</strong> Определение структуры и эластичности</p>
        <p>3. <strong>Тест на пористость:</strong> Проверка способности волос впитывать влагу</p>
        
        <h4>Анамнез клиента:</h4>
        <ul>
          <li>История химических процедур</li>
          <li>Используемые средства ухода</li>
          <li>Образ жизни и питание</li>
          <li>Гормональные изменения</li>
        </ul>
      `
    },
    {
      id: 2,
      title: "Техники для поврежденных волос",
      description: "Специальные приемы работы с поврежденными волосами",
      content: `
        <h3>Техники для поврежденных волос</h3>
        <p>Изучение безопасных техник стрижки поврежденных волос.</p>
        
        <h4>Принципы работы:</h4>
        <ul>
          <li>Минимизация механического воздействия</li>
          <li>Использование острых инструментов</li>
          <li>Техники "горячих ножниц"</li>
          <li>Поэтапное восстановление длины</li>
        </ul>
        
        <h4>Специальные техники:</h4>
        <p>1. <strong>Dusting:</strong> Удаление только поврежденных кончиков</p>
        <p>2. <strong>Search and destroy:</strong> Точечное удаление секущихся волос</p>
        <p>3. <strong>Protective cutting:</strong> Стрижка с сохранением длины</p>
        
        <h4>Рекомендации по уходу:</h4>
        <ul>
          <li>Протеиновые маски для восстановления</li>
          <li>Увлажняющие процедуры</li>
          <li>Защита от термического воздействия</li>
          <li>Регулярная коррекция кончиков</li>
        </ul>
      `
    },
    {
      id: 3,
      title: "Работа с тонкими волосами",
      description: "Создание объема и плотности для тонких волос",
      content: `
        <h3>Работа с тонкими волосами</h3>
        <p>Техники создания визуального объема и плотности.</p>
        
        <h4>Стратегии создания объема:</h4>
        <ul>
          <li>Многослойные стрижки</li>
          <li>Текстурирование для плотности</li>
          <li>Правильная длина для типа волос</li>
          <li>Техники укладки для объема</li>
        </ul>
        
        <h4>Техники стрижки:</h4>
        <p>1. <strong>Градуированный боб:</strong> Классика для тонких волос</p>
        <p>2. <strong>Лесенка:</strong> Создание движения и объема</p>
        <p>3. <strong>Пикси с текстурой:</strong> Максимальный объем на коротких волосах</p>
        
        <h4>Что избегать:</h4>
        <ul>
          <li>Слишком сильное филирование</li>
          <li>Очень длинные волосы</li>
          <li>Тяжелые прямые срезы</li>
          <li>Агрессивное текстурирование</li>
        </ul>
        
        <h4>Средства для укладки:</h4>
        <ul>
          <li>Муссы для объема</li>
          <li>Текстурирующие спреи</li>
          <li>Сухие шампуни</li>
          <li>Легкие фиксирующие средства</li>
        </ul>
      `
    },
    {
      id: 4,
      title: "Кудрявые и непослушные волосы",
      description: "Техники работы с кудрявыми и непослушными волосами",
      content: `
        <h3>Кудрявые и непослушные волосы</h3>
        <p>Специальные подходы к стрижке кудрявых волос.</p>
        
        <h4>Понимание структуры кудрей:</h4>
        <ul>
          <li>Типы кудрей (2A-4C)</li>
          <li>Пористость кудрявых волос</li>
          <li>Естественные паттерны роста</li>
          <li>Усадка при высыхании</li>
        </ul>
        
        <h4>Техники стрижки кудрей:</h4>
        <p>1. <strong>Стрижка на сухие волосы:</strong> Видение естественной формы</p>
        <p>2. <strong>Curly cutting:</strong> Стрижка каждого завитка отдельно</p>
        <p>3. <strong>DevaCut:</strong> Специализированная техника для кудрей</p>
        
        <h4>Принципы работы:</h4>
        <ul>
          <li>Не растягивать волосы при стрижке</li>
          <li>Работать с естественным паттерном</li>
          <li>Создавать форму, а не бороться с ней</li>
          <li>Учитывать усадку волос</li>
        </ul>
        
        <h4>Уход за кудрями:</h4>
        <ul>
          <li>Метод "co-washing"</li>
          <li>Техники нанесения средств</li>
          <li>Сушка диффузором</li>
          <li>Защита во время сна</li>
        </ul>
      `
    }
  ]
};

interface Lesson {
  id: number;
  title: string;
  description: string;
  content: string;
}

export default function ProblemHairPage() {
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('lessons');
  const [favorites, setFavorites] = useState<number[]>([]);
  const [archived, setArchived] = useState<number[]>([]);

  const toggleFavorite = (lessonId: number) => {
    setFavorites(prev => 
      prev.includes(lessonId) 
        ? prev.filter(id => id !== lessonId)
        : [...prev, lessonId]
    );
  };

  const toggleArchive = (lessonId: number) => {
    setArchived(prev => 
      prev.includes(lessonId) 
        ? prev.filter(id => id !== lessonId)
        : [...prev, lessonId]
    );
  };

  const getFilteredLessons = () => {
    switch (activeTab) {
      case 'favorites':
        return courseData.lessons.filter(lesson => favorites.includes(lesson.id));
      case 'archive':
        return courseData.lessons.filter(lesson => archived.includes(lesson.id));
      default:
        return courseData.lessons.filter(lesson => !archived.includes(lesson.id));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <button 
          onClick={() => router.back()}
          className="mb-6 text-blue-600 hover:text-blue-800 flex items-center gap-2"
        >
          ← Назад к курсам
        </button>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white p-6">
            <h1 className="text-3xl font-bold mb-2">{courseData.title}</h1>
            <p className="text-green-100">{courseData.description}</p>
          </div>
          
          <div className="flex">
            <div className="w-1/3 bg-gray-50 p-6">
              <div className="flex mb-4 bg-gray-200 rounded-lg p-1">
                <button
                  onClick={() => setActiveTab('lessons')}
                  className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                    activeTab === 'lessons'
                      ? 'bg-white text-blue-600 shadow-sm'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  Уроки
                </button>
                <button
                  onClick={() => setActiveTab('favorites')}
                  className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                    activeTab === 'favorites'
                      ? 'bg-white text-blue-600 shadow-sm'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  Избранное
                </button>
                <button
                  onClick={() => setActiveTab('archive')}
                  className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                    activeTab === 'archive'
                      ? 'bg-white text-blue-600 shadow-sm'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  Архив
                </button>
              </div>
              <div className="space-y-2">
                {getFilteredLessons().map((lesson) => (
                  <div key={lesson.id} className="relative">
                    <button
                      onClick={() => setSelectedLesson(lesson)}
                      className={`w-full text-left p-3 rounded-lg transition-colors ${
                        selectedLesson?.id === lesson.id
                          ? 'bg-green-100 border-l-4 border-green-500'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      <h3 className="font-medium">{lesson.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">{lesson.description}</p>
                    </button>
                    <div className="absolute top-2 right-2 flex gap-1">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFavorite(lesson.id);
                        }}
                        className={`p-1 rounded ${
                          favorites.includes(lesson.id)
                            ? 'text-yellow-500 hover:text-yellow-600'
                            : 'text-gray-400 hover:text-yellow-500'
                        }`}
                        title={favorites.includes(lesson.id) ? 'Убрать из избранного' : 'Добавить в избранное'}
                      >
                        ⭐
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleArchive(lesson.id);
                        }}
                        className={`p-1 rounded ${
                          archived.includes(lesson.id)
                            ? 'text-red-500 hover:text-red-600'
                            : 'text-gray-400 hover:text-red-500'
                        }`}
                        title={archived.includes(lesson.id) ? 'Убрать из архива' : 'Добавить в архив'}
                      >
                        📁
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex-1 p-6">
              {selectedLesson ? (
                <div 
                  className="prose max-w-none"
                  dangerouslySetInnerHTML={{ __html: selectedLesson.content }}
                />
              ) : (
                <div className="text-center text-gray-500 mt-8">
                  <p>Выберите урок для просмотра содержания</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}