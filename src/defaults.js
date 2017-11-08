const API_URL = 'http://ant.fe.up.pt/api/'
// const API_URL = 'http://ant.fe.up.pt:4568/'
const SEARCH_URL = API_URL + 'search'
const NEWS_RANKINGS_URL = API_URL + 'rankings/news'
const EVENTS_RANKINGS_URL = API_URL + 'rankings/events'
const PHOTO_SERVICE = API_URL + 'status/photo?url='
const ATOM_URL = SEARCH_URL + '/atom'
const LOG_CLICK_URL = API_URL + 'log/event/click'
const LOG_SEARCH_URL = API_URL + 'log/event/search'

const IMAGE_PLACEHOLDER = require('src/assets/no_photo.jpg')

const DEFAULTS = {
  api_url: API_URL,
  search_url: SEARCH_URL,
  news_url: NEWS_RANKINGS_URL,
  events_url: EVENTS_RANKINGS_URL,
  atom_url: ATOM_URL,
  log_click_url: LOG_CLICK_URL,
  log_search_url: LOG_SEARCH_URL,
  photo_service: PHOTO_SERVICE,
  img_placeholder: IMAGE_PLACEHOLDER
}

export default DEFAULTS
