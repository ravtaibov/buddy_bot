'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const courseData = {
  title: "Авторские техники",
  description: "Эксклюзивные авторские методики и инновационные подходы к стрижке",
  lessons: [
    {
      id: 1,
      title: "Разработка собственного стиля",
      description: "Создание уникального авторского подхода",
      content: `
        <h3>Разработка собственного стиля</h3>
        <p>Научитесь создавать свой уникальный стиль и авторские техники.</p>
        
        <h4>Основы авторского стиля:</h4>
        <ul>
          <li>Анализ собственных сильных сторон</li>
          <li>Изучение мировых трендов</li>
          <li>Адаптация техник под свой стиль</li>
          <li>Создание узнаваемого почерка</li>
        </ul>
        
        <h4>Этапы развития стиля:</h4>
        <p>1. <strong>Изучение основ:</strong> Освоение классических техник</p>
        <p>2. <strong>Экспериментирование:</strong> Поиск новых подходов</p>
        <p>3. <strong>Систематизация:</strong> Создание собственной методики</p>
        <p>4. <strong>Совершенствование:</strong> Постоянное развитие техник</p>
        
        <h4>Источники вдохновения:</h4>
        <ul>
          <li>Архитектура и дизайн</li>
          <li>Природные формы</li>
          <li>Модные тенденции</li>
          <li>Культурные особенности</li>
          <li>Индивидуальность клиента</li>
        </ul>
        
        <h4>Документирование процесса:</h4>
        <ul>
          <li>Ведение портфолио работ</li>
          <li>Описание техник и подходов</li>
          <li>Фотофиксация этапов работы</li>
          <li>Анализ результатов</li>
        </ul>
      `
    },
    {
      id: 2,
      title: "Инновационные техники стрижки",
      description: "Современные авторские методики",
      content: `
        <h3>Инновационные техники стрижки</h3>
        <p>Изучение и создание новых техник стрижки.</p>
        
        <h4>Современные авторские техники:</h4>
        <ul>
          <li>Invisible layering - невидимые слои</li>
          <li>Floating sections - плавающие секции</li>
          <li>Tension variation - варьирование натяжения</li>
          <li>Angle shifting - смещение углов</li>
        </ul>
        
        <h4>Техники создания объема:</h4>
        <p>1. <strong>Internal layering:</strong> Внутренние слои для объема</p>
        <p>2. <strong>Root lifting cuts:</strong> Стрижки для подъема у корней</p>
        <p>3. <strong>Disconnected layers:</strong> Разъединенные слои</p>
        
        <h4>Работа с формой:</h4>
        <ul>
          <li>Создание нестандартных силуэтов</li>
          <li>Игра с пропорциями</li>
          <li>Асимметричные решения</li>
          <li>Геометрические формы</li>
        </ul>
        
        <h4>Инструменты и приспособления:</h4>
        <ul>
          <li>Нестандартное использование обычных инструментов</li>
          <li>Специализированные ножницы</li>
          <li>Авторские приспособления</li>
          <li>Комбинирование техник</li>
        </ul>
      `
    },
    {
      id: 3,
      title: "Персонализация стрижек",
      description: "Индивидуальный подход к каждому клиенту",
      content: `
        <h3>Персонализация стрижек</h3>
        <p>Создание уникальных стрижек под каждого клиента.</p>
        
        <h4>Анализ клиента:</h4>
        <ul>
          <li>Форма лица и особенности черт</li>
          <li>Тип и структура волос</li>
          <li>Образ жизни и профессия</li>
          <li>Личные предпочтения</li>
          <li>Время на укладку</li>
        </ul>
        
        <h4>Создание концепции:</h4>
        <p>1. <strong>Консультация:</strong> Глубокое понимание потребностей</p>
        <p>2. <strong>Визуализация:</strong> Создание образа будущей стрижки</p>
        <p>3. <strong>Адаптация:</strong> Подгонка техник под особенности</p>
        <p>4. <strong>Реализация:</strong> Воплощение концепции</p>
        
        <h4>Техники персонализации:</h4>
        <ul>
          <li>Коррекция формы лица</li>
          <li>Работа с проблемными зонами</li>
          <li>Создание индивидуального силуэта</li>
          <li>Учет особенностей роста волос</li>
        </ul>
        
        <h4>Психология работы с клиентом:</h4>
        <ul>
          <li>Установление доверия</li>
          <li>Понимание ожиданий</li>
          <li>Управление процессом изменений</li>
          <li>Обучение уходу и укладке</li>
        </ul>
      `
    },
    {
      id: 4,
      title: "Создание коллекций",
      description: "Разработка авторских коллекций стрижек",
      content: `
        <h3>Создание коллекций</h3>
        <p>Процесс создания целостных коллекций авторских стрижек.</p>
        
        <h4>Концепция коллекции:</h4>
        <ul>
          <li>Выбор темы и идеи</li>
          <li>Определение целевой аудитории</li>
          <li>Создание мудборда</li>
          <li>Разработка цветовой палитры</li>
        </ul>
        
        <h4>Этапы создания:</h4>
        <p>1. <strong>Исследование:</strong> Изучение трендов и вдохновения</p>
        <p>2. <strong>Эскизирование:</strong> Создание набросков идей</p>
        <p>3. <strong>Прототипирование:</strong> Тестирование на моделях</p>
        <p>4. <strong>Финализация:</strong> Доведение до совершенства</p>
        
        <h4>Техническое исполнение:</h4>
        <ul>
          <li>Единство стиля в коллекции</li>
          <li>Вариативность для разных типов</li>
          <li>Инновационные элементы</li>
          <li>Практичность и носкость</li>
        </ul>
        
        <h4>Презентация коллекции:</h4>
        <ul>
          <li>Профессиональная фотосъемка</li>
          <li>Создание лукбука</li>
          <li>Подготовка к показам</li>
          <li>Продвижение в социальных сетях</li>
        </ul>
        
        <h4>Коммерциализация:</h4>
        <ul>
          <li>Адаптация для салонной работы</li>
          <li>Обучение других мастеров</li>
          <li>Создание обучающих материалов</li>
          <li>Защита авторских прав</li>
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

export default function SignatureTechniquesPage() {
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [activeTab, setActiveTab] = useState('lessons');
  const [favorites, setFavorites] = useState(new Set<number>());
  const [archived, setArchived] = useState(new Set<number>());
  const router = useRouter();

  const toggleFavorite = (lessonId: number) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(lessonId)) {
      newFavorites.delete(lessonId);
    } else {
      newFavorites.add(lessonId);
      // Убираем из архива, если добавляем в избранное
      const newArchived = new Set(archived);
      newArchived.delete(lessonId);
      setArchived(newArchived);
    }
    setFavorites(newFavorites);
  };

  const toggleArchive = (lessonId: number) => {
    const newArchived = new Set(archived);
    if (newArchived.has(lessonId)) {
      newArchived.delete(lessonId);
    } else {
      newArchived.add(lessonId);
      // Убираем из избранного, если добавляем в архив
      const newFavorites = new Set(favorites);
      newFavorites.delete(lessonId);
      setFavorites(newFavorites);
    }
    setArchived(newArchived);
  };

  const getFilteredLessons = () => {
    switch (activeTab) {
      case 'favorites':
        return courseData.lessons.filter(lesson => favorites.has(lesson.id));
      case 'archive':
        return courseData.lessons.filter(lesson => archived.has(lesson.id));
      default:
        return courseData.lessons.filter(lesson => !archived.has(lesson.id));
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
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6">
            <h1 className="text-3xl font-bold mb-2">{courseData.title}</h1>
            <p className="text-purple-100">{courseData.description}</p>
          </div>
          
          <div className="flex">
            <div className="w-1/3 bg-gray-50 p-6">
              <div className="flex mb-4 bg-white rounded-lg p-1">
                <button
                  onClick={() => setActiveTab('lessons')}
                  className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                    activeTab === 'lessons'
                      ? 'bg-purple-500 text-white'
                      : 'text-gray-600 hover:text-purple-600'
                  }`}
                >
                  Уроки
                </button>
                <button
                  onClick={() => setActiveTab('favorites')}
                  className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                    activeTab === 'favorites'
                      ? 'bg-purple-500 text-white'
                      : 'text-gray-600 hover:text-purple-600'
                  }`}
                >
                  Избранное ({favorites.size})
                </button>
                <button
                  onClick={() => setActiveTab('archive')}
                  className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                    activeTab === 'archive'
                      ? 'bg-purple-500 text-white'
                      : 'text-gray-600 hover:text-purple-600'
                  }`}
                >
                  Архив ({archived.size})
                </button>
              </div>
              <div className="space-y-2">
                {getFilteredLessons().map((lesson) => (
                  <div key={lesson.id} className="relative group">
                    <button
                      onClick={() => setSelectedLesson(lesson)}
                      className={`w-full text-left p-3 rounded-lg transition-colors ${
                        selectedLesson?.id === lesson.id
                          ? 'bg-purple-100 border-l-4 border-purple-500'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      <h3 className="font-medium">{lesson.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">{lesson.description}</p>
                    </button>
                    <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFavorite(lesson.id);
                        }}
                        className={`p-1 rounded ${
                          favorites.has(lesson.id)
                            ? 'text-yellow-500 hover:text-yellow-600'
                            : 'text-gray-400 hover:text-yellow-500'
                        }`}
                        title={favorites.has(lesson.id) ? 'Убрать из избранного' : 'Добавить в избранное'}
                      >
                        ⭐
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleArchive(lesson.id);
                        }}
                        className={`p-1 rounded ${
                          archived.has(lesson.id)
                            ? 'text-gray-600 hover:text-gray-700'
                            : 'text-gray-400 hover:text-gray-600'
                        }`}
                        title={archived.has(lesson.id) ? 'Убрать из архива' : 'Добавить в архив'}
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