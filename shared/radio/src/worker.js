import blob from './blog'

export default new Worker(window.URL.createObjectURL(blob))
