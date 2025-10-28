'use client'

import { LessonLayout } from '@/components/ui/lesson-layout'

export default function BarberFromScratchPage() {
  return (
    <LessonLayout 
      title="Барбер с нуля"
      description="Полный курс обучения барберингу для начинающих мастеров"
    >
      <div className="space-y-4">
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
          <h3 className="font-semibold text-white mb-2 text-lg">Урок 1: Основы барберинга</h3>
          <p className="text-gray-300 text-sm sm:text-base">Введение в профессию барбера, инструменты и оборудование</p>
        </div>
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
          <h3 className="font-semibold text-white mb-2 text-lg">Урок 2: Техники стрижки</h3>
          <p className="text-gray-300 text-sm sm:text-base">Основные техники мужской стрижки</p>
        </div>
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
          <h3 className="font-semibold text-white mb-2 text-lg">Урок 3: Работа с машинкой</h3>
          <p className="text-gray-300 text-sm sm:text-base">Техники работы с машинкой для стрижки</p>
        </div>
      </div>
    </LessonLayout>
  )
}