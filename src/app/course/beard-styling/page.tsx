'use client'

import { LessonLayout } from '@/components/ui/lesson-layout'

export default function BeardStylingPage() {
  return (
    <LessonLayout 
      title="Оформление бороды"
      description="Профессиональный курс по оформлению и стрижке бороды"
    >
      <div className="space-y-4">
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
          <h3 className="font-semibold text-white mb-2 text-lg">Урок 1: Формы бороды</h3>
          <p className="text-gray-300 text-sm sm:text-base">Выбор формы бороды под тип лица</p>
        </div>
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
          <h3 className="font-semibold text-white mb-2 text-lg">Урок 2: Техники стрижки</h3>
          <p className="text-gray-300 text-sm sm:text-base">Профессиональные техники стрижки бороды</p>
        </div>
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
          <h3 className="font-semibold text-white mb-2 text-lg">Урок 3: Уход и моделирование</h3>
          <p className="text-gray-300 text-sm sm:text-base">Ежедневный уход и укладка бороды</p>
        </div>
      </div>
    </LessonLayout>
  )
}