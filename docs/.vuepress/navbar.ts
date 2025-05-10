import { defineNavbarConfig } from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
  { text: '首页', link: '/' },
  { text: '博客', link: '/blog/' },
  { text: '标签', link: '/blog/tags/' },
  { text: '归档', link: '/blog/archives/' },
  {
    text: 'Living Island',
    items: [
      { text: 'Become a Power Woman', link: '/notes/Living Island/Become a Power Woman/README.md' },
    ]
  },

  {
    text: 'Skill Island',
    items: [
      { text: 'Jazz', link: '/notes/Skill Island/Jazz/README.md'},
      { text: 'Used to be a debater', link: '/notes/Skill Island/Used to be a debater/README.md'},
      { text: 'I love hosting', link: '/notes/Skill Island/I love hosting/README.md'},
      { text: 'Video clip', link: '/notes/Skill Island/Video clip/README.md'},
    ]
  },

  {
    text: 'Growth Island',
    items: [
      { text: 'It is very messy here', link: '/notes/Growth Island/It is very messy here/README.md' },
    ]
  },

  {
    text: 'Working Island',
    items: [
      { text: 'I want to be a PM', link: '/notes/Working Island/I want to be a PM/README.md'},
    ]
  },

  {
    text: 'Photo Island',
    items: [
      { text: 'Yes,it is me', link: '/notes/Photo Island/Yes,it is me/README.md' },
      { text: 'What I am drinking every day', link: '/notes/Photo Island/What I am drinking every day/README.md' },
      { text: 'Photo Diary', link: '/notes/Photo Island/Photo Diary/README.md' },
    ]
  },

])
