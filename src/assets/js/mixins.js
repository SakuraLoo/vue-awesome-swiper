import storage from 'assets/js/storage';
import {SEARCH_HISTORY_KEYWORD_KEY} from 'pages/search/config';

export const searchMixin = {
  methods: {
    $_search_selectItem(keyword) {
      let keywords = storage.get(SEARCH_HISTORY_KEYWORD_KEY, []);

      if (keywords.length !== 0) {
        keywords = keywords.filter(val => val !== keyword);
      }

      keywords.unshift(keyword);

      storage.set(SEARCH_HISTORY_KEYWORD_KEY, keywords);

      location.href = `http://www.tdleon.com/#/home/product/${keyword}`;
    }
  }
};
