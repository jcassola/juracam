export const state = () => ({
  activeVideo: {
    souce: '',
    name: ''
  },
  videos: [
    {
      source: '~/assets/videos/one.mp4',
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
