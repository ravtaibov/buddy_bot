'use client'

import { LessonLayout } from '@/components/ui/lesson-layout'

export default function MenHairPermPage() {
  return (
    <LessonLayout 
      title="Мужская завивка волос"
      description="Профессиональные техники завивки мужских волос"
    >
      <div className="space-y-4">
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
          <h3 className="font-semibold text-white mb-2 text-lg">Урок 1: Виды завивки</h3>
          <p className="text-gray-300 text-sm sm:text-base">Различные типы химической завивки для мужчин</p>
        </div>
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
          <h3 className="font-semibold text-white mb-2 text-lg">Урок 2: Химические составы</h3>
          <p className="text-gray-300 text-sm sm:text-base">Выбор и применение химических составов</p>
        </div>
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
          <h3 className="font-semibold text-white mb-2 text-lg">Урок 3: Техника выполнения</h3>
          <p className="text-gray-300 text-sm sm:text-base">Пошаговое выполнение мужской химической завивки</p>
        </div>
      </div>
    </LessonLayout>
  )
}