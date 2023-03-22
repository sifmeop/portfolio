import Cootels from 'assets/images/cootels.webp'
import Ovroe from 'assets/images/ovroe.webp'
import Rest from 'assets/images/rest.webp'
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
  //   image: '',
  //   stack: ['Next']
  // },
  {
    id: 2,
    title: 'siftday 🍕',
    image: Siftday,
    stack: [
      'React',
      'TS',
      'SCSS',
      'Tailwind',
      'Chakra UI',
      'Redux Toolkit',
      'RTQ Query',
      'React Hook Form',
      'Nest',
      'Prisma',
      'MongoDB'
    ],
    code: 'https://github.com/sifmeop/siftday',
    demo: 'https://siftday.vercel.app/'
  },
  {
    id: 3,
    title: 'siftify 🎵',
    image: Siftify,
    stack: ['T3 Stack', 'SCSS', 'Ant Design', 'Zustand'],
    code: 'https://github.com/sifmeop/siftify',
    demo: 'https://siftify.vercel.app/'
  },
  {
    id: 4,
    title: 'siftlix 🍿',
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
    image: Siftdos,
    stack: ['Next', 'TS', 'SCSS', 'Tailwind', 'Redux Toolkit', 'Redux Persist'],
    code: 'https://github.com/sifmeop/siftdos',
    demo: 'https://siftdos.vercel.app/'
  },
  {
    id: 6,
    title: 'OVROE 👕',
    image: Ovroe,
    stack: ['HTML', 'SCSS', 'JS'],
    code: 'https://github.com/sifmeop/OVROE',
    demo: 'https://sifmeop.github.io/OVROE/'
  },
  {
    id: 7,
    title: 'Rest 🍽️',
    image: Rest,
    stack: ['HTML', 'SCSS', 'JS'],
    code: 'https://github.com/sifmeop/Rest',
    demo: 'https://sifmeop.github.io/Rest/'
  },
  {
    id: 8,
    title: 'SpaceX 🚀',
    image: SpaceX,
    stack: ['HTML', 'SCSS', 'JS'],
    code: 'https://github.com/sifmeop/Space-X',
    demo: 'https://sifmeop.github.io/Space-X/'
  },
  {
    id: 9,
    title: 'Cootels 🏨',
    image: Cootels,
    stack: ['HTML', 'SCSS', 'JS'],
    code: 'https://github.com/sifmeop/Cootels',
    demo: 'https://sifmeop.github.io/Cootels/'
  },
  {
    id: 10,
    title: 'Smart-Watch ⌚',
    image: SmartWatch,
    stack: ['HTML', 'SCSS', 'JS'],
    code: 'https://github.com/sifmeop/Smart-Watch',
    demo: 'https://sifmeop.github.io/Smart-Watch/'
  }
]
