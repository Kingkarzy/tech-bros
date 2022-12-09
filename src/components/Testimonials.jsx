import React from 'react'
import './../pages/home/home.css'
import AVATAR1 from '../assets/avatar1.jpg'
import AVATAR2 from '../assets/avatar2.jpg'
import AVATAR3 from '../assets/avatar3.jpg'
import AVATAR4 from '../assets/avatar4.jpg'

// Import SwiperJs
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
// import 'swiper/modules/navigation/navigation.min.css'
// import 'swiper/modules/pagination/pagination.min.css'


const data =[
  {
    index: 1,
    avatar: AVATAR1,
    name: "Tina Snow",
    review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore consectetur pariatur esse, quae nulla itaque fuga dicta quasi doloremque aliquid."
  },
  {
    index: 2,
    avatar: AVATAR2,
    name: "Shatta Wale",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eum quae pariatur, dolor nostrum omnis necessitatibus facere porro, aliquid vitae dicta aperiam illo eligendi."
  },
  {
    index: 3,
    avatar: AVATAR3,
    name: "Kama Chukwuma",
    review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore consectetur pariatur esse, quae nulla itaque fuga dicta quasi doloremque aliquid."
  },
  {
    index: 4,
    avatar: AVATAR4,
    name: "Sairtek",
    review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore consectetur pariatur esse, quae nulla itaque fuga dicta quasi doloremque aliquid."
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container mySwiper"
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{clickable: true,}}
      navigation={true}
      modules={[Pagination, Navigation]}
    >
        {data.map(({index, avatar, name, review})=>{
          return(
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5>{name}</h5>
              <small className='client__review'>{review}</small>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default Testimonials