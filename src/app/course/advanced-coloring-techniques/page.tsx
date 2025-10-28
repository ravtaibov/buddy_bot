'use client'

import { LessonLayout } from '@/components/ui/lesson-layout'

export default function AdvancedColoringTechniquesPage() {
  return (
    <LessonLayout 
      title="Сложные техники окрашивания"
      description="Продвинутые методы окрашивания для опытных колористов"
    >
      <div className="space-y-4">
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
          <h3 className="font-semibold text-white mb-2 text-lg">Урок 1: Сложные переходы</h3>
          <p className="text-gray-300 text-sm sm:text-base">Техники создания сложных цветовых переходов</p>
        </div>
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
          <h3 className="font-semibold text-white mb-2 text-lg">Урок 2: Многотональное окрашивание</h3>
          <p className="text-gray-300 text-sm sm:text-base">Работа с несколькими оттенками одновременно</p>
        </div>
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
          <h3 className="font-semibold text-white mb-2 text-lg">Урок 3: Креативные техники</h3>
          <p className="text-gray-300 text-sm sm:text-base">Авторские и креативные методы окрашивания</p>
        </div>
      </div>
    </LessonLayout>
  )
}