import {HiCode} from 'react-icons/hi'
import {HiPencil} from 'react-icons/hi'
import {MdDesignServices} from 'react-icons/md'

import AVATAR1 from './assets/avatar1.jpg'
import AVATAR2 from './assets/avatar2.jpg'
import AVATAR3 from './assets/avatar3.jpg'
import AVATAR4 from './assets/avatar4.jpg'

import IMG1 from './assets/portfolio1.jpg'
import IMG2 from './assets/portfolio2.jpg'
import IMG3 from './assets/portfolio3.jpg'
import IMG4 from './assets/portfolio4.jpg'
import IMG5 from './assets/portfolio5.png'
import IMG6 from './assets/portfolio6.jpg'

export const links =[
    {
        index: 1,
        name: "Home",
        path: '/'
    },
    {
        index: 2,
        name: "About",
        path: '/about'
    },
    {
        index: 3,
        name: "Projects",
        path: '/projects'
    },
    {
        index: 4,
        name: "Contact",
        path: '/contact'
    },
]

export const testimonials =[
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
  
export const projects = [
    {
      id: 1,
      image: IMG1,
      title: 'Crypto Dashboard',
      github: 'https://github.com',
      demo: 'https://dribbble.com'
    },
    {
      id: 2,
      image: IMG2,
      title: 'Charts & Infographics',
      github: 'https://github.com',
      demo: 'https://dribbble.com'
    },
    {
      id: 3,
      image: IMG3,
      title: 'Clothing App UI',
      github: 'https://github.com',
      demo: 'https://dribbble.com'
    },
  
    {
      id: 4,
      image: IMG4,
      title: 'Ecommerce Website',
      github: 'https://github.com',
      demo: 'https://dribbble.com'
    },
    {
      id: 5,
      image: IMG5,
      title: 'Data Analysis',
      github: 'https://github.com',
      demo: 'https://dribbble.com'
    },
    {
      id: 6,
      image: IMG6,
      title: 'Charts in Figma',
      github: 'https://github.com',
      demo: 'https://dribbble.com'
    },
]
  
export const services = [
  {
    id: 1,
    icon: <HiCode />,
    title: "Web Development",
    info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, non",
  },
  {
    id: 2,
    icon: <HiPencil />,
    title: "Content Creation",
    info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, non",
  },
  {
    id: 3,
    icon: <MdDesignServices />,
    title: "UI/UX Design",
    info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, non",
  },
]

export const faqs = [
  {
    id: 1,
    question: "Lorem ipsum dolor sit amet consectetur?",
    answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quibusdam beatae recusandae tenetur, consectetur debitis libero vel doloremque veritatis ipsam, et unde? Omnis alias fuga modi iste sunt expedita vero."
  },
  {
    id: 2,
    question: "Lorem ipsum dolor sit amet consectetur?",
    answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quibusdam beatae recusandae tenetur, consectetur debitis libero vel doloremque veritatis ipsam, et unde? Omnis alias fuga modi iste sunt expedita vero."
  },
  {
    id: 3,
    question: "Lorem ipsum dolor sit amet consectetur?",
    answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quibusdam beatae recusandae tenetur, consectetur debitis libero vel doloremque veritatis ipsam, et unde? Omnis alias fuga modi iste sunt expedita vero."
  },
  {
    id: 4,
    question: "Lorem ipsum dolor sit amet consectetur?",
    answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quibusdam beatae recusandae tenetur, consectetur debitis libero vel doloremque veritatis ipsam, et unde? Omnis alias fuga modi iste sunt expedita vero."
  },
  {
    id: 5,
    question: "Lorem ipsum dolor sit amet consectetur?",
    answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quibusdam beatae recusandae tenetur, consectetur debitis libero vel doloremque veritatis ipsam, et unde? Omnis alias fuga modi iste sunt expedita vero."
  },
  {
    id: 6,
    question: "Lorem ipsum dolor sit amet consectetur?",
    answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quibusdam beatae recusandae tenetur, consectetur debitis libero vel doloremque veritatis ipsam, et unde? Omnis alias fuga modi iste sunt expedita vero."
  },
]
