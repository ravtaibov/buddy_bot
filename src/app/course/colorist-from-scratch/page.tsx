'use client'

import { LessonLayout } from '@/components/ui/lesson-layout'

export default function ColoristFromScratchPage() {
  return (
    <LessonLayout 
      title="Колорист с нуля"
      description="Полный курс обучения колористике для начинающих мастеров"
    >
      <div className="space-y-4">
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
          <h3 className="font-semibold text-white mb-2 text-lg">Урок 1: Теория цвета</h3>
          <p className="text-gray-300 text-sm sm:text-base">Основы колористики и цветового круга</p>
        </div>
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
          <h3 className="font-semibold text-white mb-2 text-lg">Урок 2: Техники окрашивания</h3>
          <p className="text-gray-300 text-sm sm:text-base">Различные методы нанесения краски</p>
        </div>
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
          <h3 className="font-semibold text-white mb-2 text-lg">Урок 3: Коррекция цвета</h3>
          <p className="text-gray-300 text-sm sm:text-base">Исправление неудачного окрашивания</p>
        </div>
      </div>
    </LessonLayout>
  )
}