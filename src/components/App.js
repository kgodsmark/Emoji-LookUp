import React from 'react';
import emojiData from '../data/emojiList';

class App extends React.Component {

  constructor (props) {
    super(props);
    this.emojiSearch = this.emojiSearch.bind(this);
    this.handleKeywords = this.handleKeywords.bind(this);
  }

  
  emojiSearch (emojiLookUp) {
    return emojiData.filter((item) => {
      return item.keywords.includes(emojiLookUp);
    });
  }

  handleKeywords (event) {
    console.log(event.target)
    event.preventDefault();
    const emojiLookUp = event.target[0].value;
    // if (newText.length === 0) return;
    this.props.emojiSearch(emojiLookUp);
    // event.target[0].value = '';
  }

  render () {
    return (
      <div>
        <h1>Emoji Search</h1>
        <p>Find your Emoji mojo</p>

        <div>
            <form onSubmit={this.handleKeywords}>
              <input type='text' placeholder="Type a keyword..." />
              <input type='submit' value='Search' />
            </form>
        </div>

        <p>Here are your Emojis:</p>


      </div>
    );
  }
}
export default App;

