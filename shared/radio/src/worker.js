import blob from './blob'

export default new Worker(window.URL.createObjectURL(blob))
