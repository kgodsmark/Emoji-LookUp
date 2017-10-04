import React from 'react';
import EmojiData from './emojiList';
import EmojiResults from './EmojiResults';
import SearchInput from './SearchInput';
// import filterEmoji from './FilterEmoji';

class App extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      filteredEmoji: EmojiData,
    };
    this.filterEmoji = this.filterEmoji.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }
  filterEmoji (emojiLookUp, maxResults) {
    const filtered = EmojiData.filter((emoji) => {
      if(emoji.title.includes(emojiLookUp)) {
        return true;
      }
      if(emoji.keywords.includes(emojiLookUp)) {
        return true;
      }
      return false;
    }).slice(0,maxResults);

    return filtered;

  }

  handleSearch(event) {
    this.setState({
      filteredEmoji: this.filterEmoji(event.target.value, 20)

    });

  }




  render () {
    return (
      <div>
        <h1>Emoji Search</h1>
        <p>Find your Emoji mojo</p>

      <SearchInput 
      emojiSearch={this.handleSearch}
   
      />

        <p>Here are your Emojis:</p>
        <EmojiResults 
        EmojiData={this.state.filteredEmoji}
        />

      </div>
    );
  }
}
export default App;

