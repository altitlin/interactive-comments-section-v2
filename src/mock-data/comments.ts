import { CommentWithReplies } from '@types'

export const mockComments: CommentWithReplies[] = [
  {
    id: 1,
    content: 'Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You have nailed the design and the responsiveness at various breakpoints works really well.',
    createdAt: '2022-06-04T10:30:00Z',
    score: 12,
    user: {
      image: '/images/image-amyrobson.png',
      username: 'amyrobson',
    },
    replies: [
      {
        id: 11,
        content: 'Velit officia enim ut aute mollit elit commodo ipsum id ipsum. Do eu culpa mollit aute consequat qui incididunt voluptate ullamco commodo cillum et. Reprehenderit incididunt aliquip voluptate do minim magna et laborum.',
        createdAt: '2022-06-06T10:30:00Z',
        score: 6,
        user: {
          image: '/images/image-maxblagun.png',
          username: 'maxblagun',
        },
        replyingTo: 'amyrobson',
      },
      {
        id: 12,
        content: 'Ut commodo laboris et Lorem ad duis irure id do voluptate do non. Duis consectetur ut Lorem excepteur labore. Esse irure proident ea qui. Do dolore consequat quis fugiat cillum commodo veniam enim do. Magna sunt aliqua esse elit nulla ex commodo Lorem incididunt dolor commodo adipisicing. Eiusmod voluptate dolore officia aliquip velit eu irure nulla aliquip occaecat commodo occaecat tempor. Nulla minim quis proident laborum culpa qui dolore labore magna excepteur consequat nulla.',
        createdAt: '2022-06-04T10:30:00Z',
        score: 9,
        user: {
          image: '/images/image-ramsesmiron.png',
          username: 'ramsesmiron',
        },
        replyingTo: 'amyrobson',
      },
    ],
  },
  {
    id: 2,
    content: 'Woah, your project looks awesome! How long have you been coding for? I am still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!',
    createdAt: '2022-06-14T10:30:00Z',
    score: 5,
    user: {
      image: '/images/image-maxblagun.png',
      username: 'maxblagun',
    },
  },
  {
    id: 3,
    content: 'If you are still new, I had recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It iss very tempting to jump ahead but lay a solid foundation first.',
    createdAt: '2022-06-07T10:30:00Z',
    score: 4,
    user: {
      image: '/images/image-ramsesmiron.png',
      username: 'ramsesmiron',
    },
    replies: [
      {
        id: 31,
        content: 'Velit officia enim ut aute mollit elit commodo ipsum id ipsum. Do eu culpa mollit aute consequat qui incididunt voluptate ullamco commodo cillum et. Reprehenderit incididunt aliquip voluptate do minim magna et laborum.',
        createdAt: '2022-05-23T10:30:00Z',
        score: 6,
        user: {
          image: '/images/image-maxblagun.png',
          username: 'maxblagun',
        },
        replyingTo: 'ramsesmiron',
      },
      {
        id: 32,
        content: 'Ut commodo laboris et Lorem ad duis irure id do voluptate do non. Duis consectetur ut Lorem excepteur labore. Esse irure proident ea qui. Do dolore consequat quis fugiat cillum commodo veniam enim do. Magna sunt aliqua esse elit nulla ex commodo Lorem incididunt dolor commodo adipisicing. Eiusmod voluptate dolore officia aliquip velit eu irure nulla aliquip occaecat commodo occaecat tempor. Nulla minim quis proident laborum culpa qui dolore labore magna excepteur consequat nulla.',
        createdAt: '2022-05-27T10:30:00Z',
        score: 9,
        user: {
          image: '/images/image-juliusomo.png',
          username: 'juliusomo',
        },
        replyingTo: 'ramsesmiron',
      },
    ],
  },
  {
    id: 33,
    content: 'I could not agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.',
    createdAt: '2022-06-02T10:30:00Z',
    score: 2,
    user: {
      image: '/images/image-juliusomo.png',
      username: 'juliusomo',
    },
  },
]
