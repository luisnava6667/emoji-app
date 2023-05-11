import React from 'react'
import EmojiCard, { EmojiCardProps } from './emojiCard'
export interface EmojiListProps {
  emoji: EmojiCardProps[]
}
export default function List({ emoji }: EmojiListProps) {
  return (
    <>
      <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
        {emoji.map((emoji, index) => (
          <EmojiCard key={index} {...emoji} />
        ))}
      </div>
    </>
  )
}
