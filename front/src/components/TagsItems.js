import React from 'react'
import { useSelector } from 'react-redux'

export const TagsItems = () => {
  const { categories } = useSelector(state => state.item.search);

  return (
    <>
      { categories && categories.map((element, index) => (
        <span key={`tags_${index}`}>{(index ? ' > ' : '') + element}</span>
      ))}
    </>
  )
}
