import React from 'react';
import PT from 'prop-types';

class SearchInput extends React.Component {
  constructor (props) {
    super(props);
    this.handleKeywords = this.handleKeywords.bind(this);
  }

  handleKeywords (event) {
    console.log(event.target.value)
    event.preventDefault();
    // const emojiLookUp = event.target[0].value;
    // if (emojiLookUp.length === 0) return;
    this.props.emojiSearch(event);
    // event.target[0].value = '';
  }

  render () {
    return (
   
      <div>
        <input type='text' placeholder="Type a keyword..." onChange={this.handleKeywords}/>

    </div>

    );
  }
  static propTypes = {
    emojiSearch: PT.func.isRequired
  }
}

export default SearchInput;



