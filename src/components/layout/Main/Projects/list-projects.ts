import Cootels from 'assets/images/cootels.webp'
import Ovroe from 'assets/images/ovroe.webp'
import Rest from 'assets/images/rest.webp'
import Siftday from 'assets/images/siftday.webp'
import Siftdos from 'assets/images/siftdos.webp'
import Siftify from 'assets/images/siftify.webp'
import Siftlix from 'assets/images/siftlix.webp'
import Siftrate from 'assets/images/siftrate.webp'
import Siftshop from 'assets/images/siftshop.webp'
import SmartWatch from 'assets/images/smart-watch.webp'
import SpaceX from 'assets/images/space-x.webp'
import Waxtools from 'assets/images/waxtools.webp'
import { Project } from 'types/project.interface'

export const projects: Project[] = [
  {
    title: 'siftshop 🏪',
    image: Siftshop,
    stack: ['T3 Stack', 'SCSS', 'MongoDB'],
    code: 'https://github.com/sifmeop/siftshop',
    demo: 'https://siftshop.vercel.app/'
  },
  {
    title: 'siftrate 📝',
    image: Siftrate,
    stack: ['T3 Stack', 'SCSS', 'MongoDB'],
    code: 'https://github.com/sifmeop/siftrate',
    demo: 'https://siftrate.vercel.app/'
  },
  {
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
    title: 'siftify 🎵',
    image: Siftify,
    stack: ['T3 Stack', 'SCSS', 'Ant Design', 'Zustand'],
    code: 'https://github.com/sifmeop/siftify',
    demo: 'https://siftify.vercel.app/'
  },
  {
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
    title: 'siftdos 📃',
    image: Siftdos,
    stack: ['Next', 'TS', 'SCSS', 'Tailwind', 'Redux Toolkit', 'Redux Persist'],
    code: 'https://github.com/sifmeop/siftdos',
    demo: 'https://siftdos.vercel.app/'
  },
  {
    title: 'WaxTools ⚙️',
    image: Waxtools,
    stack: [
      'Next.js',
      'SCSS',
      'Tailwind',
      'Redux Toolkit',
      'React Hook Form',
      '@waxio/waxjs',
      'eosjs',
      'highcharts',
      'next-translate'
    ],
    code: null,
    demo: 'https://waxtools.net/'
  },
  {
    title: 'OVROE 👕',
    image: Ovroe,
    stack: ['HTML', 'SCSS', 'JS'],
    code: 'https://github.com/sifmeop/OVROE',
    demo: 'https://sifmeop.github.io/OVROE/'
  },
  {
    title: 'Rest 🍽️',
    image: Rest,
    stack: ['HTML', 'SCSS', 'JS'],
    code: 'https://github.com/sifmeop/Rest',
    demo: 'https://sifmeop.github.io/Rest/'
  },
  {
    title: 'SpaceX 🚀',
    image: SpaceX,
    stack: ['HTML', 'SCSS', 'JS'],
    code: 'https://github.com/sifmeop/Space-X',
    demo: 'https://sifmeop.github.io/Space-X/'
  },
  {
    title: 'Cootels 🏨',
    image: Cootels,
    stack: ['HTML', 'SCSS', 'JS'],
    code: 'https://github.com/sifmeop/Cootels',
    demo: 'https://sifmeop.github.io/Cootels/'
  },
  {
    title: 'Smart-Watch ⌚',
    image: SmartWatch,
    stack: ['HTML', 'SCSS', 'JS'],
    code: 'https://github.com/sifmeop/Smart-Watch',
    demo: 'https://sifmeop.github.io/Smart-Watch/'
  }
]
