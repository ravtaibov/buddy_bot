'use client'

import { LessonLayout } from '@/components/ui/lesson-layout'

export default function ModernHaircutsFadePage() {
  return (
    <LessonLayout 
      title="Современные стрижки + переход fade"
      description="Актуальные мужские стрижки с техникой fade"
    >
      <div className="space-y-4">
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
          <h3 className="font-semibold text-white mb-2 text-lg">Урок 1: Современные тренды</h3>
          <p className="text-gray-300 text-sm sm:text-base">Актуальные тенденции в мужских стрижках</p>
        </div>
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
          <h3 className="font-semibold text-white mb-2 text-lg">Урок 2: Комбинирование с fade</h3>
          <p className="text-gray-300 text-sm sm:text-base">Сочетание современных стрижек с fade переходами</p>
        </div>
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
          <h3 className="font-semibold text-white mb-2 text-lg">Урок 3: Практическое выполнение</h3>
          <p className="text-gray-300 text-sm sm:text-base">Пошаговое выполнение современных стрижек</p>
        </div>
      </div>
    </LessonLayout>
  )
}