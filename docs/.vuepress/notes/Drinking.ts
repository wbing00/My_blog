import { defineNoteConfig } from 'vuepress-theme-plume'

export default defineNoteConfig({
  dir: '/Photo Island/What I am drinking every day/',
  link: '/Drinking/',
  sidebar: [
    'README.md',
    {
      text: 'Coffee',
      prefix: 'STARBUCKS', 
      items: [
        'STARBUCKS.md',
      ]
    },
  ]
})