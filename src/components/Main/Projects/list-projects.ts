import Cootels from 'assets/images/cootels.png'
import Ovroe from 'assets/images/ovroe.png'
import Rest from 'assets/images/rest.png'
import Siftday from 'assets/images/siftday.webp'
import Siftdos from 'assets/images/siftdos.webp'
import Siftify from 'assets/images/siftify.webp'
import Siftlix from 'assets/images/siftlix.webp'
import SmartWatch from 'assets/images/smart-watch.webp'
import SpaceX from 'assets/images/space-x.webp'
import { Project } from 'types/project.interface'

export const projects: Project[] = [
  // {
  //   id: 1,
  //   title: 'siftspeak',
  //   description: '',
  //   image: '',
  //   stack: ['Next']
  // },
  {
    id: 2,
    title: 'siftday 🍕',
    description: '',
    image: Siftday,
    stack: [
      'React',
      'TS',
      'SCSS',
      'Tailwind',
      'Chakra UI',
      'Redux Toolkit',
      'RTQ Query'
    ],
    code: 'https://github.com/sifmeop/siftday',
    demo: 'https://siftday.vercel.app/'
  },
  {
    id: 3,
    title: 'siftify 🎵',
    description: '',
    image: Siftify,
    stack: ['T3 Stack', 'SCSS', 'Ant Design', 'Zustand'],
    code: 'https://github.com/sifmeop/siftify',
    demo: 'https://siftify.vercel.app/'
  },
  {
    id: 4,
    title: 'siftlix 🍿',
    description: '',
    image: Siftlix,
    stack: [
      'Next',
      'TS',
      'SCSS',
      'Tailwind',
      'Ant Design',
      'Redux Toolkit',
      'RTQ Query'
    ],
    code: 'https://github.com/sifmeop/siftlix',
    demo: 'https://siftlix.vercel.app/'
  },
  {
    id: 5,
    title: 'siftdos 📃',
    description: '',
    image: Siftdos,
    stack: ['Next', 'TS', 'SCSS', 'Tailwind', 'Redux Toolkit', 'Redux Persist'],
    code: 'https://github.com/sifmeop/siftdos',
    demo: 'https://siftdos.vercel.app/'
  },
  {
    id: 6,
    title: 'OVROE 👕',
    description: '',
    image: Ovroe,
    stack: ['HTML', 'SCSS', 'JS'],
    code: 'https://github.com/sifmeop/OVROE',
    demo: 'https://sifmeop.github.io/OVROE/'
  },
  {
    id: 7,
    title: 'Rest 🍽️',
    description: '',
    image: Rest,
    stack: ['HTML', 'SCSS', 'JS'],
    code: 'https://github.com/sifmeop/Rest',
    demo: 'https://sifmeop.github.io/Rest/'
  },
  {
    id: 8,
    title: 'SpaceX 🚀',
    description: '',
    image: SpaceX,
    stack: ['HTML', 'SCSS', 'JS'],
    code: 'https://github.com/sifmeop/Space-X',
    demo: 'https://sifmeop.github.io/Space-X/'
  },
  {
    id: 9,
    title: 'Cootels 🏨',
    description: '',
    image: Cootels,
    stack: ['HTML', 'SCSS', 'JS'],
    code: 'https://github.com/sifmeop/Cootels',
    demo: 'https://sifmeop.github.io/Cootels/'
  },
  {
    id: 10,
    title: 'Smart-Watch ⌚',
    description: '',
    image: SmartWatch,
    stack: ['HTML', 'SCSS', 'JS'],
    code: 'https://github.com/sifmeop/Smart-Watch',
    demo: 'https://sifmeop.github.io/Smart-Watch/'
  }
]
