import React from 'react';
import EmojiData from './emojiList';


class FilterEmoji extends React.Component {
  

  filterEmoji (emojiLookUp, maxResults) {
    const filtered = emojiData.filter((emoji) => {
      if(emoji.title.includes(emojiLookUp)) {
        return true;
      }
      if(emoji.keywords.includes(emojiLookUp)) {
        return true;
      }
      return false;
    }).slice(0,maxResults);

  }


  render () {
    return (
      emojiSearch()

  }

}


export default FilterEmoji;

