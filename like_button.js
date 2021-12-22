'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = [ {
        venueName: '',
        venueLocation: '',
        venuePhoneNumber:'',
        venueDescription: '',
        
        

    },
];
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}
const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);