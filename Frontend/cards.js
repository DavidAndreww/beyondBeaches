//I need to loop venues array and return a card for each object.
//this new array of cards needs to be pushed to a container in the dom as innerHTML

const body = document.querySelector('body');
console.log(body);

let venues = [
	{
		venueName: 'BAREFOOT BUDDHA',
		venueId: 0,
		venueLocation: 'Havensight',
		venuePhoneNumber: '+1 (340)777-3668',
		venueCategory: 'EAT/DRINK',
		venueHashtag: '#coffee, #eats, #gifts, #localcrafts',
		venueBio:
			'Small vibrant cafe that serves coffees, teas, kombucha, and a wonderful variety of scratch made pastries.',
		venueWebsiteUrl: 'barefootbuddha.com',
		venueSchedule: [{ open: '' }, { close: '' }],
	},
	{
		venueName: 'STIR IT UP',
		venueId: 1,
		venueLocation: 'Havensight',
		venuePhoneNumber: '+1 (340)777-3668',
		venueCategory: 'EAT/DRINK',
		venueHashtag: '#coffee, #eats, #gifts, #localcrafts',
		venueBio:
			'Small vibrant cafe that serves coffees, teas, kombucha, and a wonderful variety of scratch made pastries.',
		venueWebsiteUrl: 'stiritupvi.com',
		venueSchedule: [{ open: '' }, { close: '' }],
	},
	{
		venueName: 'DOGHOUSE PUB',
		venueId: 2,
		venueLocation: 'Havensight',
		venuePhoneNumber: '+1 (340)777-3668',
		venueCategory: 'EAT/DRINK',
		venueHashtag: '#coffee, #eats, #gifts, #localcrafts',
		venueBio:
			'Small vibrant cafe that serves coffees, teas, kombucha, and a wonderful variety of scratch made pastries.',
		venueWebsiteUrl: 'doghousevi.com',
		venueSchedule: [{ open: '' }, { close: '' }],
	},
	{
		venueName: 'DELI DECK',
		venueId: 3,
		venueLocation: 'Havensight',
		venuePhoneNumber: '+1 (340)777-3668',
		venueCategory: 'EAT/DRINK',
		venueHashtag: '#coffee, #eats, #gifts, #localcrafts',
		venueBio:
			'Small vibrant cafe that serves coffees, teas, kombucha, and a wonderful variety of scratch made pastries.',
		venueWebsiteUrl: 'delideckvi.com',
		venueSchedule: [{ open: '' }, { close: '' }],
	},
	{
		venueName: 'BAREFOOT BUDDHA',
		venueId: 0,
		venueLocation: 'Havensight',
		venuePhoneNumber: '+1 (340)777-3668',
		venueCategory: 'EAT/DRINK',
		venueHashtag: '#coffee, #eats, #gifts, #localcrafts',
		venueBio:
			'Small vibrant cafe that serves coffees, teas, kombucha, and a wonderful variety of scratch made pastries.',
		venueWebsiteUrl: 'barefootbuddha.com',
		venueSchedule: [{ open: '' }, { close: '' }],
	},
	{
		venueName: 'STIR IT UP',
		venueId: 1,
		venueLocation: 'Havensight',
		venuePhoneNumber: '+1 (340)777-3668',
		venueCategory: 'EAT/DRINK',
		venueHashtag: '#coffee, #eats, #gifts, #localcrafts',
		venueBio:
			'Small vibrant cafe that serves coffees, teas, kombucha, and a wonderful variety of scratch made pastries.',
		venueWebsiteUrl: 'stiritupvi.com',
		venueSchedule: [{ open: '' }, { close: '' }],
	},
	{
		venueName: 'DOGHOUSE PUB',
		venueId: 2,
		venueLocation: 'Havensight',
		venuePhoneNumber: '+1 (340)777-3668',
		venueCategory: 'EAT/DRINK',
		venueHashtag: '#coffee, #eats, #gifts, #localcrafts',
		venueBio:
			'Small vibrant cafe that serves coffees, teas, kombucha, and a wonderful variety of scratch made pastries.',
		venueWebsiteUrl: 'doghousevi.com',
		venueSchedule: [{ open: '' }, { close: '' }],
	},
	{
		venueName: 'DELI DECK',
		venueId: 3,
		venueLocation: 'Havensight',
		venuePhoneNumber: '+1 (340)777-3668',
		venueCategory: 'EAT/DRINK',
		venueHashtag: '#coffee, #eats, #gifts, #localcrafts',
		venueBio:
			'Small vibrant cafe that serves coffees, teas, kombucha, and a wonderful variety of scratch made pastries.',
		venueWebsiteUrl: 'delideckvi.com',
		venueSchedule: [{ open: '' }, { close: '' }],
	},
];

venues.forEach((venue) => {
	body.innerHTML += `<div id="card">
	<h2 id="venueName">${venue.venueName}</h2>

	<div class="venueCardBody">
		<div id="venueInfo">
		<p id="" class="venueHashtag">${venue.venueHashtag}</p>
		<p id="venueBio">${venue.venueBio}</p>
		</div>
<div class="cardButtons">
<div id="venueCardLeft"> 
		<button>menu</button>
		<p>location</p>
		<button>contact</button>
		</div>

		<div id="venueCardRight">
		<button>website</button>
		<p>hours</p>
		
		</div>
		<div className="social"><i class="fa-brands fa-facebook"></i>
		<i class="fab fa-instagram"></i></div>
		</div>
		
		
</div>

`;
});
