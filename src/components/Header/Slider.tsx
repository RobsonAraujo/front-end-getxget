import * as S from './styles'

import Swiper from 'react-id-swiper'
import Loader from 'components/Loader'
import Button from 'components/Button'

import { ISliderProps } from './IHeaderProps'

const Slider = ({ images }: ISliderProps) => {
  const params = {
    navigation: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    direction: 'horizontal',
    scrollbar: false,
    loop: true,
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 0,
      modifier: 1,
      slideShadows: false
    },
    breakpoints: {
      1024: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 0
      }
    }
  }
  return images.length > 0 ? (
    <S.Slider>
      <Swiper {...params}>
        {images.map((e) => (
          <div
            key={e.id}
            style={{
              background: `url(${e.img}) center center no-repeat`,
              backgroundSize: 'cover'
            }}
          >
            <S.Post>
              <div>
                <span>
                  <b>{e.category}</b>
                </span>
                <h1>{e.name}</h1>
                {e.description && <p>{e.description}</p>}
                <Button cta text={e.button} />
              </div>
            </S.Post>
          </div>
        ))}
      </Swiper>
    </S.Slider>
  ) : (
    <Loader isLoading />
  )
}

export default Slider
