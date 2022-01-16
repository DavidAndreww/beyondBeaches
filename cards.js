//I need to loop venues array and return a card for each object. 
//this new array of cards needs to be pushed to a container in the dom as innerHTML 
// var createCard = (venues)=>{
// 	if (venues.venueId){console.log('hello');
// 	}
// }
// document.getElementByClass('card').innerHTML = venueName
const body = document.querySelector('body')
console.log(body);
let venues = [
	{
		venueName: 'Barefoot Buddha',
		venueId: 0,
		venueLocation: 'Havensight',
		venuePhoneNumber: '+1 (340)777-3668',
		venueCategory: 'EAT/DRINK/<BR>GIFTS',
		venueBio: '',
        venueWebsiteUrl:'',
		venueSchedule: [{ open: '' }, { close: '' }],
	},
	{
		venueName: 'Stir It Up',
		venueId: 1,
		venueLocation: 'Havensight',
		venuePhoneNumber: '+1 (340)777-3668',
		venueCategory: 'EAT/DRINK',
		venueBio:
		'Small vibrant cafe that serves coffees, teas, kombucha, and a wonderful variety of scratch made pastries.',
        venueWebsiteUrl:'',
		venueSchedule: [{ open: '' }, { close: '' }],
	},
	{
		venueName: 'Doghouse Pub',
		venueId: 2,
		venueLocation: 'Havensight',
		venuePhoneNumber: '+1 (340)777-3668',
		venueCategory: 'EAT/DRINK',
		venueBio: '',
        venueWebsiteUrl:'',
		venueSchedule: [{ open: '' }, { close: '' }],
	},
	{
		venueName: 'Deli Deck',
		venueId: 3,
		venueLocation: 'Havensight',
		venuePhoneNumber: '+1 (340)777-3668',
		venueCategory: 'EAT/DRINK',
		venueBio: '',
		venueWebsiteUrl:'',
		venueSchedule: [{ open: '' }, { close: '' }],
	},
];



  venues.forEach((venue) => {
body.innerHTML += 
	`<div id="card">
	<h1 id="cardCategory">${venue.venueCategory}</h1>
	<h2 id="venueName">${ venue.venueName }</h2>
	<div id="venueInfo">
		<p id="" class="venueHashtag"></p>
		<p id="venueBio"></p>
		<div id="venueCardLeft"></div>
		<div id="venueCardRight"></div>
	</div>	
</div>`
});
