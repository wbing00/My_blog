import { defineNoteConfig } from 'vuepress-theme-plume'

export default defineNoteConfig({
  dir: 'Photo Island',
  link: '/What I am drinking every day/STARBUCKS/',
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