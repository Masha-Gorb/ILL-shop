import React, {useState, useEffect} from "react"
import slide1 from '../../asserts/slides/slide1.png'
import slide2 from '../../asserts/slides/slide2.png'
import slide3 from '../../asserts/slides/slide3.png'
import slide4 from '../../asserts/slides/slide4.png'
import slide5 from '../../asserts/slides/slide5.png'
import slide6 from '../../asserts/slides/slide6.png'
import slide7 from '../../asserts/slides/slide7.png'
import slide8 from '../../asserts/slides/slide8.png'
import s from '../SliderImage/TestSlider.module.css'

export const TestSlider = () => {
  const img = [
    <img alt={''} key={slide1} src={slide1} />,
    <img alt={''} key={slide2} src={slide2} />,
    <img alt={''} key={slide3} src={slide3} />,
    <img alt={''} key={slide4} src={slide4} />,
    <img alt={''} key={slide5} src={slide5} />,
    <img alt={''} key={slide6} src={slide6} />,
    <img alt={''} key={slide7} src={slide7} />,
    <img alt={''} key={slide8} src={slide8} />,
  ]

  const [activeIndex, setActiveIndex] = useState(0);

// Хук Effect
  useEffect(() => {
    // Запускаем интервал
    const interval = setInterval(() => {
      // Меняем состояние
      setActiveIndex((current) => {
        return current === img.length - 1 ? 0 : current + 1
      })
    }, 3000)
    // Выключаем интервал
    return () => clearInterval()
  }, [img.length])

// Вычисляем индекс предыдущего слайда
  const prevImgIndex = activeIndex ? activeIndex - 1 : img.length - 1
// Вычисляем индекс следующего слайда
  const nextImgIndex = activeIndex === img.length - 1 ? 0 : activeIndex + 1

  return (
    <>
      <div className={s.slider}>
        <div className={s.sliderImgPrev}
             key={prevImgIndex}>
          {img[prevImgIndex]}
        </div>
        <div className={s.sliderImg}
             key={activeIndex}>
          {img[activeIndex]}
        </div>
        <div className={s.sliderImgNext}
             key={nextImgIndex}>
          {img[nextImgIndex]}
        </div>
      </div>
    </>
  )
}