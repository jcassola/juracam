export const state = () => ({
  activeVideo: {
    source: '' || '/videos/one.mp4',
    name: '' || 'One'
  },
  activeImg: {
    source: '' || '/pictures/one.jpg'
  },
  videos: [
    {
      source: '/videos/one.mp4',
      name: 'One'
    },
    {
      source: '/videos/two.mp4',
      name: 'Two'
    },
    {
      source: '/videos/one.mp4',
      name: 'Three'
    },
    {
      source: '/videos/one.mp4',
      name: 'Four'
    },
    {
      source: '/videos/one.mp4',
      name: 'Five'
    },
    {
      source: '/videos/one.mp4',
      name: 'Six'
    },
    {
      source: '/videos/one.mp4',
      name: 'Seven'
    },
    {
      source: '/videos/one.mp4',
      name: 'Eight'
    },
    {
      source: '/videos/one.mp4',
      name: 'Nine'
    },
    {
      source: '/videos/one.mp4',
      name: 'Ten'
    }
  ],
  pictures: [
    {
      source: '/pictures/one.jpg'
    },
    {
      source: '/pictures/two.jpg'
    },
    {
      source: '/pictures/three.jpg'
    },
    {
      source: '/pictures/one.jpg'
    },
    {
      source: '/pictures/two.jpg'
    }
  ]
})

export const mutations = {
  setActiveVideo (state, video) {
    state.activeVideo = video
  },
  setActiveImg (state, img) {
    state.activeImg = img
  }
}
