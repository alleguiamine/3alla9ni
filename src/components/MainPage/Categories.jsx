import React from "react"

const Categories = () => {
  const data = [
    {
      cateImg: "./images/category/mona-lisa.png",
      cateName: "Tableaux sans lumière",
    },
    {
      cateImg: "./images/category/mona.png",
      cateName: "Tableau avec lumière",
    },
    {
      cateImg: "./images/category/magic-box.png",
      cateName: "Box Explosif",
    },
    {
      cateImg: "./images/category/cat4.png",
      cateName: "Lines",
    },
    {
      cateImg: "./images/category/cat4.png",
      cateName: "Shapes",
    },
    {
      cateImg: "./images/category/cat4.png",
      cateName: "Regions",
    },
    {
      cateImg: "./images/category/cat4.png",
      cateName: "Vibes",
    },
    {
      cateImg: "./images/category/cat4.png",
      cateName: "New Born",
    },
   
  ]

  return (
    <>
      <div className='category'>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories
