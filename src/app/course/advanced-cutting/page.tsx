'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const courseData = {
  title: "Сложные техники стрижки",
  description: "Продвинутый курс для опытных мастеров, изучающих сложные техники стрижки",
  lessons: [
    {
      id: 1,
      title: "Градуированные стрижки",
      description: "Изучение сложных градуированных техник",
      content: `
        <h3>Градуированные стрижки</h3>
        <p>В этом уроке мы изучим продвинутые техники создания градуированных стрижек.</p>
        
        <h4>Основные принципы градуировки:</h4>
        <ul>
          <li>Понимание углов среза</li>
          <li>Работа с различными зонами головы</li>
          <li>Создание плавных переходов</li>
          <li>Техники наслоения</li>
        </ul>
        
        <h4>Практические техники:</h4>
        <p>1. <strong>Классическая градуировка:</strong> Создание объема через слои</p>
        <p>2. <strong>Обратная градуировка:</strong> Техника для создания внутреннего объема</p>
        <p>3. <strong>Смешанная градуировка:</strong> Комбинирование различных углов</p>
        
        <h4>Инструменты и техники:</h4>
        <ul>
          <li>Работа с филировочными ножницами</li>
          <li>Техника point cutting</li>
          <li>Слайсинг для создания текстуры</li>
        </ul>
      `
    },
    {
      id: 2,
      title: "Асимметричные стрижки",
      description: "Создание современных асимметричных форм",
      content: `
        <h3>Асимметричные стрижки</h3>
        <p>Изучение техник создания стильных асимметричных стрижек.</p>
        
        <h4>Планирование асимметрии:</h4>
        <ul>
          <li>Анализ формы лица клиента</li>
          <li>Выбор подходящего типа асимметрии</li>
          <li>Создание схемы стрижки</li>
          <li>Определение ключевых точек</li>
        </ul>
        
        <h4>Техники выполнения:</h4>
        <p>1. <strong>Диагональные срезы:</strong> Создание динамичных линий</p>
        <p>2. <strong>Геометрические формы:</strong> Четкие углы и переходы</p>
        <p>3. <strong>Мягкая асимметрия:</strong> Плавные неравномерные формы</p>
        
        <h4>Особенности работы:</h4>
        <ul>
          <li>Точность измерений</li>
          <li>Контроль симметрии в асимметрии</li>
          <li>Работа с различными текстурами волос</li>
        </ul>
      `
    },
    {
      id: 3,
      title: "Текстурирование",
      description: "Продвинутые техники создания текстуры",
      content: `
        <h3>Продвинутое текстурирование</h3>
        <p>Мастерство создания различных текстур в стрижке.</p>
        
        <h4>Виды текстурирования:</h4>
        <ul>
          <li>Point cutting - точечная стрижка</li>
          <li>Slide cutting - скользящая стрижка</li>
          <li>Twist cutting - стрижка с поворотом</li>
          <li>Razor cutting - работа с бритвой</li>
        </ul>
        
        <h4>Техники для разных типов волос:</h4>
        <p>1. <strong>Тонкие волосы:</strong> Создание объема через текстуру</p>
        <p>2. <strong>Густые волосы:</strong> Прореживание и облегчение</p>
        <p>3. <strong>Кудрявые волосы:</strong> Работа с естественной текстурой</p>
        
        <h4>Инструменты текстурирования:</h4>
        <ul>
          <li>Филировочные ножницы разных типов</li>
          <li>Бритва и техники ее использования</li>
          <li>Специальные ножницы для текстурирования</li>
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

export default function AdvancedCuttingPage() {
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
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
            <h1 className="text-3xl font-bold mb-2">{courseData.title}</h1>
            <p className="text-blue-100">{courseData.description}</p>
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
                          ? 'bg-blue-100 border-l-4 border-blue-500'
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