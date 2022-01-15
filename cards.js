//I need to loop venues array and return a card for each object. 
//this new array of cards needs to be pushed to a container in the dom as innerHTML 
var createCard = (venues)=>{
	if (venues.venueId){console.log('hello');
	}
}
document.getElementByClass('card').innerHTML = venueName

let venues = [
	{
		venueName: 'Barefoot Buddha',
		venueId: 0,
		venueLocation: 'Havensight',
		venuePhoneNumber: '+1 (340)777-3668',
		venueDescription: 'Cafe, Gift Shop',
		venueBio: '',
		venueEmail: '',
        venueWebsiteUrl:'',
		venueReviews: '',
		venueComments: '',
		venueSchedule: [{ open: '' }, { close: '' }],
	},
	{
		venueName: 'Stir It Up',
		venueId: 1,
		venueLocation: 'Havensight',
		venuePhoneNumber: '+1 (340)777-3668',
		venueDescription: 'Cafe',
		venueBio:
		'Small vibrant cafe that serves coffees, teas, kombucha, and a wonderful variety of scratch made pastries.',
        venueEmail: '',
        venueWebsiteUrl:'',
		venueReviews: '',
		venueComments: '',
		venueSchedule: [{ open: '' }, { close: '' }],
	},
	{
		venueName: 'Doghouse Pub',
		venueId: 2,
		venueLocation: 'Havensight',
		venuePhoneNumber: '+1 (340)777-3668',
		venueDescription: 'Bar, Dine',
		venueBio: '',
        venueEmail: '',
        venueWebsiteUrl:'',
        venueReviews: '',
		venueComments: '',
		venueSchedule: [{ open: '' }, { close: '' }],
	},
	{
		venueName: 'Deli Deck',
		venueId: 3,
		venueLocation: 'Havensight',
		venuePhoneNumber: '+1 (340)777-3668',
		venueDescription: 'Restaurant',
		venueBio: '',
        venueEmail: '',
        venueWebsiteUrl:'',
        venueReviews: '',
		venueSchedule: [{ open: '' }, { close: '' }],
	},
];



document.getElementById('cards_container').innerHTML = venues.map(createCard,(venue) => {
console.log('i am connected')
});
