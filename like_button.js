// import 'bootstrap/dist/css/bootstrap.min.css';
// import React, {Component} from 'react';
// import Card from 'react-bootstrap/Card';

'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
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

// const displayCard = React.createElement;

// class onlineDirectory extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = [
// 			{
// 				venueName: 'Barefoot Buddha',
// 				venueLocation: 'Havensight',
// 				venuePhoneNumber: '+1 (340)777-3668',
// 				venueDescription: 'Cafe, Gift Shop',
// 				venueBio: '',
// 				venueReviews: '',
// 				venueComments: '',
// 			},
// 			{
// 				venueName: 'Stir It Up',
// 				venueLocation: 'Havensight',
// 				venuePhoneNumber: '+1 (340)777-3668',
// 				venueDescription: 'Cafe',
// 				venueBio:
// 					'Small vibrant cafe that serves coffees, teas, kombucha, and a wonderful variety of scratch made pastries.',
// 				venueReviews: '',
// 				venueComments: '',
// 				venueSchedule: [{ open: '' }, { close: '' }],
// 			},
// 			{
// 				venueName: 'Doghouse Pub',
// 				venueLocation: 'Havensight',
// 				venuePhoneNumber: '+1 (340)777-3668',
// 				venueDescription: 'Bar, Dine',
// 				venueBio: '',
// 				venueReviews: '',
// 				venueComments: '',
// 				venueSchedule: [{ open: '' }, { close: '' }],
// 			},
// 			{
// 				venueName: 'Deli Deck',
// 				venueLocation: 'Havensight',
// 				venuePhoneNumber: '+1 (340)777-3668',
// 				venueDescription: 'Restaurant',
// 				venueBio: '',
// 				venueReviews: '',
// 				venueSchedule: [{ open: '' }, { close: '' }],
// 			},
// 		];
// 	}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);