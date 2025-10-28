'use client'

import { useRouter } from 'next/navigation'

interface BackButtonProps {
  className?: string
}

export function BackButton({ className = '' }: BackButtonProps) {
  const router = useRouter()

  const handleBack = () => {
    router.back()
  }

  return (
    <div className={`flex justify-start mb-4 ${className}`}>
      <button
        onClick={handleBack}
        className="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base font-light hover:scale-105 active:scale-95 transform flex items-center gap-2"
      >
        ← Назад
      </button>
    </div>
  )
}