import { FETCH_CAT_IMAGES, FETCH_CAT_TYPES } from './actions';
export function fetchCatImages(catType) {
    return { type: FETCH_CAT_IMAGES , payload: catType };
  }

  export function fetchCatTypes() {
    return { type: FETCH_CAT_TYPES };
  }
