import { videosList } from '@/assets/videos-list'
import { picturesList } from '@/assets/pictures-list'

export const state = () => ({
  activeVideo: {
    source: '' || videosList[0].source,
    name: '' || videosList[0].name
  },
  activeImg: {
    source: '' || picturesList[0].source
  },
  videos: videosList,
  pictures: picturesList
})

export const mutations = {
  setActiveVideo (state, video) {
    state.activeVideo = video
  },
  setActiveImg (state, img) {
    state.activeImg = img
  }
}
