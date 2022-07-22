import { videosList } from '@/assets/videos-list'
import { picturesList } from '@/assets/pictures-list'

export const state = () => ({
  activeVideo: videosList[0],

  activeImg: picturesList[0],

  videos: videosList,
  pictures: picturesList
})

export const mutations = {
  setActiveVideo (state, video) {
    state.activeVideo = video
  },
  playNextVideo (state) {
    const index = state.videos.indexOf(state.activeVideo)
    state.activeVideo = state.videos[index + 1]
  },
  playPreviousVideo (state) {
    const index = state.videos.indexOf(state.activeVideo)
    state.activeVideo = state.videos[index - 1]
  },

  setActiveImg (state, img) {
    state.activeImg = img
  }
}
