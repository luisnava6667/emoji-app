'use client'
import React, { useState } from 'react'
import List from '@/components/list'
import emojisData from '@/data/emojis'
import { category } from '@/data/category'
import CategoryCard from '@/components/categoryCard'
export default function Home() {
  const [filterEmoji, setfilterEmoji] = useState(emojisData.slice(0, 100))
  const handleSearch = (search: string) => {
    if (search.trim().length > 0) {
      setfilterEmoji(
        emojisData.filter((emoji) => {
          return emoji.name.toLowerCase().includes(search.toLowerCase().trim())
        })
      )
    } else {
      setfilterEmoji(emojisData.slice(0, 100))
    }
  }
  const handleRestore = () => {
    setfilterEmoji(emojisData.slice(0, 100))
  }
  const filterByCategory = (group: string) => {
    setfilterEmoji(
      emojisData.filter((emoji) => {
        return emoji.group.toLowerCase().includes(group.toLowerCase().trim())
      })
    )
  }

  return (
    <main>
      <h1 className='text-2xl md:text-5xl font-bold text-gray-600 text-center tracking-wide'>
        Welcome to Info-Emoji
      </h1>
      <div className='flex justify-center'>
        <input
          type='text'
          id='name'
          placeholder='Search for an emoji'
          className='w-full max-w-xl border border-gray-300 p-3 rounded-md my-8 bg-white shadow-md focus:outline-none focus:border-emerald-900 focus:ring-1'
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-3 mb-2'>
        {category.map((category) => (
          <CategoryCard
            key={category.id}
            emoji={category.emoji}
            handleFilter={filterByCategory}
            group={category.group}
          />
        ))}
      </div>
      <div className='flex justify-center'>
        <button
          className='max-w-xl transition-all duration-500 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded w-full mb-8'
          onClick={handleRestore}>
          Reset
        </button>
      </div>
      <List emoji={filterEmoji.slice(0, 100)} />
    </main>
  )
}
