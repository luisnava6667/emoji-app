import React from 'react'

interface CategoryProps {
  emoji: string
  group: string
  handleFilter: (group: string) => void
}

export default function CategoryCard({
  emoji,
  group,
  handleFilter
}: CategoryProps) {
  return (
    <>
      <button className='flex justify-start pl-7 rounded-md bg-gray-100 py-2 hover:bg-gray-200 items-center gap-5 transition-all duration-500' onClick={()=>handleFilter(group)}>
        <span
          role={'img'}
          aria-label={emoji}
          className='text-4xl md:text-5xl mb-2'>
          {emoji}
        </span>
        <p className=''>{group}</p>
      </button>
    </>
  )
}
