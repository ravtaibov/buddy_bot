'use client'

import { LessonLayout } from '@/components/ui/lesson-layout'

export default function MenHaircutMasterPage() {
  return (
    <LessonLayout 
      title="Мастер мужских стрижек"
      description="Профессиональный курс по мужским стрижкам для начинающих"
    >
      <div className="space-y-4">
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
          <h3 className="font-semibold text-white mb-2 text-lg">Урок 1: Анализ формы лица</h3>
          <p className="text-gray-300 text-sm sm:text-base">Как подобрать стрижку под тип лица клиента</p>
        </div>
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
          <h3 className="font-semibold text-white mb-2 text-lg">Урок 2: Современные техники</h3>
          <p className="text-gray-300 text-sm sm:text-base">Актуальные методы стрижки и укладки</p>
        </div>
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
          <h3 className="font-semibold text-white mb-2 text-lg">Урок 3: Работа с текстурой</h3>
          <p className="text-gray-300 text-sm sm:text-base">Создание объема и текстуры в мужских стрижках</p>
        </div>
      </div>
    </LessonLayout>
  )
}