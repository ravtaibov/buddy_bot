'use client'

import { LessonLayout } from '@/components/ui/lesson-layout'

export default function LongMenHaircutsPage() {
  return (
    <LessonLayout 
      title="Удлинённые мужские стрижки"
      description="Техники работы с длинными мужскими волосами"
    >
      <div className="space-y-4">
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
          <h3 className="font-semibold text-white mb-2 text-lg">Урок 1: Работа с длиной</h3>
          <p className="text-gray-300 text-sm sm:text-base">Техники работы с длинными волосами</p>
        </div>
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
          <h3 className="font-semibold text-white mb-2 text-lg">Урок 2: Слоистые стрижки</h3>
          <p className="text-gray-300 text-sm sm:text-base">Создание объема и текстуры в длинных стрижках</p>
        </div>
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
          <h3 className="font-semibold text-white mb-2 text-lg">Урок 3: Стайлинг и укладка</h3>
          <p className="text-gray-300 text-sm sm:text-base">Профессиональная укладка длинных мужских стрижек</p>
        </div>
      </div>
    </LessonLayout>
  )
}