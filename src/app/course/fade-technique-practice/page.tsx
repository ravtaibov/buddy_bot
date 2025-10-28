'use client'

import { LessonLayout } from '@/components/ui/lesson-layout'

export default function FadeTechniquePage() {
  return (
    <LessonLayout 
      title="Практика техники «FADE»"
      description="Продвинутый курс по технике fade для опытных мастеров"
    >
      <div className="space-y-4">
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
          <h3 className="font-semibold text-white mb-2 text-lg">Урок 1: Виды Fade</h3>
          <p className="text-gray-300 text-sm sm:text-base">Изучение различных типов переходов</p>
        </div>
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
          <h3 className="font-semibold text-white mb-2 text-lg">Урок 2: Техника выполнения</h3>
          <p className="text-gray-300 text-sm sm:text-base">Пошаговое создание плавных переходов</p>
        </div>
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
          <h3 className="font-semibold text-white mb-2 text-lg">Урок 3: Доводка и финиш</h3>
          <p className="text-gray-300 text-sm sm:text-base">Финальная обработка и детализация</p>
        </div>
      </div>
    </LessonLayout>
  )
}