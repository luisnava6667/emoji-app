import React, { useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Modal from './modal'
export interface EmojiCardProps {
  code?: string
  emoji: string
  name: string
  category?: string
  group?: string
}
export default function EmojiCard({
  code,
  emoji,
  name,
  category,
  group
}: EmojiCardProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div
        className='bg-gray-100 p-2 rounded-xl shadow-md flex flex-col items-center justify-between 
      hover:bg-gray-200 transition-all duration-500 scale-100 hover:scale-105 cursor-pointer
      '
        onClick={() => setIsOpen(true)}>
        <span
          role={'img'}
          aria-label={emoji}
          className='text-4xl md:text-5xl mb-2'>
          {emoji}
        </span>
        <h3 className='font-bold text-gray-700 text-center'>{name}</h3>
        <p className='text-sm pt-3'>More Info</p>
      </div>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        emoji={emoji}
        code={code}
        category={category}
        name={name}
        group={group}
      />
    </>
  )
}
