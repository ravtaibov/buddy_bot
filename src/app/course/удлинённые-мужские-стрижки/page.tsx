'use client'

import { LessonLayout } from '@/components/ui/lesson-layout'

export default function ExtendedMensHaircutsPage() {
  return (
    <LessonLayout 
      title="Удлинённые мужские стрижки"
      description="Профессиональный курс по созданию удлинённых мужских стрижек"
    >
      <div className="space-y-4">
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="font-semibold text-gray-800 mb-2">Урок 1: Основы удлинённых стрижек</h3>
          <p className="text-gray-600 text-sm">Изучение принципов создания удлинённых мужских стрижек</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="font-semibold text-gray-800 mb-2">Урок 2: Техники стрижки длинных волос</h3>
          <p className="text-gray-600 text-sm">Специальные техники работы с длинными волосами</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="font-semibold text-gray-800 mb-2">Урок 3: Укладка и стайлинг</h3>
          <p className="text-gray-600 text-sm">Методы укладки удлинённых мужских стрижек</p>
        </div>
      </div>
    </LessonLayout>
  )
}