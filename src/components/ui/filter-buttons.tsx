'use client'

import { motion } from 'framer-motion'

interface FilterButtonsProps {
  isArchive: boolean
  onArchiveClick: () => void
  onCurrentClick: () => void
}

export function FilterButtons({ isArchive, onArchiveClick, onCurrentClick }: FilterButtonsProps) {
  return (
    <div className="flex gap-3 sm:gap-4 justify-center mb-6">
      <motion.button
        className={`flex-1 max-w-[200px] cursor-pointer px-4 sm:px-6 py-2 sm:py-3 font-medium rounded-xl transition-all duration-300 border ${
          isArchive 
            ? 'bg-white/20 text-white border-white/30 backdrop-blur-md' 
            : 'bg-white/10 text-gray-300 border-white/20 hover:bg-white/15 hover:text-white backdrop-blur-md'
        }`}
        onClick={onArchiveClick}
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.02 }}
      >
        Архив
      </motion.button>
      
      <motion.button
        className={`flex-1 max-w-[200px] cursor-pointer px-4 sm:px-6 py-2 sm:py-3 font-medium rounded-xl transition-all duration-300 border ${
          !isArchive 
            ? 'bg-white/20 text-white border-white/30 backdrop-blur-md' 
            : 'bg-white/10 text-gray-300 border-white/20 hover:bg-white/15 hover:text-white backdrop-blur-md'
        }`}
        onClick={onCurrentClick}
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.02 }}
      >
        Актуальное
      </motion.button>
    </div>
  )
}