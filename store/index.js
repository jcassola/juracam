export const state = () => ({
  activeVideo: {
    souce: '',
    name: ''
  },
  videos: [
    {
      source: '/one.mp4',
      name: 'One'
    },
    {
      source: '/two.mp4',
      name: 'Two'
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
