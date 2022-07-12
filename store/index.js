export const state = () => ({
  activeVideo: {
    source: '' || '/videos/one.mp4',
    name: '' || 'One'
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
      source: 'asdasd',
      name: 'asdsad'
    },
    {
      source: 'asdasd',
      name: 'asdsad'
    },
    {
      source: 'asdasd',
      name: 'asdsad'
    },
    {
      source: 'asdasd',
      name: 'asdsad'
    },
    {
      source: 'asdasd',
      name: 'asdsad'
    }
  ]
})

export const mutations = {
  setActiveVideo (state, video) {
    state.activeVideo = video
    console.log(state.activeVideo.source)
  }
}
