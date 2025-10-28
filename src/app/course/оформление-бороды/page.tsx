'use client'

import { LessonLayout } from '@/components/ui/lesson-layout'

export default function BeardStylingPage() {
  return (
    <LessonLayout 
      title="Оформление бороды"
      description="Профессиональный курс по оформлению и стрижке бороды"
    >
      <div className="space-y-4">
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="font-semibold text-gray-800 mb-2">Урок 1: Формы бороды</h3>
          <p className="text-gray-600 text-sm">Изучение различных форм и стилей бороды</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="font-semibold text-gray-800 mb-2">Урок 2: Техники стрижки</h3>
          <p className="text-gray-600 text-sm">Профессиональные техники стрижки бороды</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="font-semibold text-gray-800 mb-2">Урок 3: Уход и моделирование</h3>
          <p className="text-gray-600 text-sm">Уход за бородой и создание формы</p>
        </div>
      </div>
    </LessonLayout>
  )
}