//I need to loop venues array and return a card for each object.
//this new array of cards needs to be pushed to a container in the dom as innerHTML

const body = document.querySelector('body');

//I will need to dynamically ceate each venue from response data fectched as JSON and push each object into venues array
let venues = [
	{
		venueName: 'BAREFOOT BUDDHA',
		venueId: 0,
		venueLocation: 'Havensight',
		venuePhoneNumber: '+1 (340)777-3668',
		venueCategory: 'EAT/DRINK',
		venueHashtag:
			'#coffee, #tea, #eats, #gifts, #drinks, #localcrafts, #pastries, #vegan, #vegetarian',
		venueBio:
			'Small vibrant cafe that serves coffees, teas, kombucha, tasty salads, sandwiches and wraps, and a wonderful variety of scratch made pastries.',
		venueWebsiteUrl: 'barefootbuddha.com',
		venueSchedule: [{ open: '' }, { close: '' }],
	},
	{
		venueName: 'STIR IT UP',
		venueId: 1,
		venueLocation: 'Havensight',
		venuePhoneNumber: '+1 (340)777-3668',
		venueCategory: 'EAT/DRINK',
		venueHashtag: '#coffee, #tea, #eats, #kombucha, #catering',
		venueBio:
			'Small vibrant cafe that serves coffees, teas, kombucha, and a wonderful variety of scratch made pastries.',
		venueWebsiteUrl: 'stiritupvi.com',
		venueSchedule: [{ open: '' }, { close: '' }],
	},
	{
		venueName: 'AMALIA CAFE',
		venueId: 2,
		venueLocation: 'Charlotte Amalie/Waterfront',
		venuePhoneNumber: '+1 (340) 714-7373',
		venueCategory: 'EAT/DRINK',
		venueHashtag: '#spanish cuisine, #outdoor seating, #wine, #tapas',
		venueBio:
			'A charming old world Spanish cafe, located in the lovely Plam Passage Building. This family owned and run by Randolph and Helga Maynard, "serves a varied selection of Spanish favorites." ',
		venueWebsiteUrl: 'https://www.amaliacafe.com',
		venueSchedule: [{ open: '' }, { close: '' }],
	},
	{
		venueName: 'TAP AND STILL',
		venueId: 3,
		venueLocation: 'Havensight and Redhook',
		venuePhoneNumber: '(340) 244-4540, (340) 642-2337',
		venueCategory: 'EAT/DRINK',
		venueHashtag:
			'#craftbeer, #eats, #gifts, #bar, #rum, #beer, #spirits, #burgers, #milkshakes, #adultmilkshakes, #wings, #sportsbar',
		venueBio:
			'A local brewery with 3 locations between St. Thomas in Havensight and Redhook, and one location in Cruz Bay, St. John.',
		venueWebsiteUrl: 'tapstill.com',
		venueSchedule: [{ open: '' }, { close: '' }],
	},
	{
		venueName: 'THE SMOKING ROOSTER',
		venueId: 4,
		venueLocation: 'Havensight',
		venuePhoneNumber: '+1 (340) 715-2625',
		venueCategory: 'EAT/DRINK',
		venueHashtag:
			'#BBQ, #eats, #gifts, #craft beer,#rum, #shop, #rubs, #sauces, #catering',
		venueBio:
			'Dockside smokehouse and rum bar. Simply smoked meats with house made rubs and sauces, served with a side of rum.',
		venueWebsiteUrl: 'http://www.thesmokingrooster.com/',
		venueSchedule: [{ open: '' }, { close: '' }],
	},
	{
		venueName: 'GLADYS CAFE',
		venueId: 5,
		venueLocation: 'Charlotte Amalia/Royal Dane Mall',
		venuePhoneNumber: '(340) 774-6604',
		venueCategory: 'EAT/DRINK',
		venueHashtag:
			'#coffee, #eats, #gifts, #localcrafts, #local hotsauce, #breakfast, #lunch, #dinner',
		venueBio:
			'A local staple for decades, Gladys Cafe offers great local specials and continental fare',
		venueWebsiteUrl: 'gladyscafe.com',
		venueSchedule: [{ open: '' }, { close: '' }],
	},
	{
		venueName: 'DOGHOUSE PUB',
		venueId: 6,
		venueLocation: 'Havensight',
		venuePhoneNumber: '(340) 513-8586',
		venueCategory: 'EAT/DRINK',
		venueHashtag:
			'#beer, #eats, #bingo, #games, #darts, #housedrinks, #shots, #sportsbar, #wings, #barfood',
		venueBio:
			'Happening bar in Havensight. Great bar food, lively atmosphere, great bartenders, and good service with an attitude.',
		venueWebsiteUrl: '',
		venueSchedule: [{ open: '' }, { close: '' }],
	},
	{
		venueName: 'DELI DECK',
		venueId: 7,
		venueLocation: 'Havensight',
		venuePhoneNumber: '(340) 776-9943',
		venueCategory: 'EAT/DRINK',
		venueHashtag: '#coffee, #eats, #gifts, #breakfast, #lunch',
		venueBio:
			'Our friendly environment is ideal for celebrating special occasions, hosting a business lunch or gathering for a delicious meal with friends and family.',
		venueWebsiteUrl: 'delideckvi.com',
		venueSchedule: [{ open: '' }, { close: '' }],
	},
	{
		venueName: 'NAGEES VEGETARIAN',
		venueId: 8,
		venueLocation: "Anna's Retreat",
		venuePhoneNumber: '(340) 775-6243',
		venueCategory: 'EAT/DRINK',
		venueHashtag: '#vegetarian, #eats, #lunch, #catering',
		venueBio:
			'Our friendly environment is ideal for celebrating special occasions, hosting a business lunch or gathering for a delicious meal with friends and family.',
		venueWebsiteUrl:
			'https://www.instagram.com/nageevegetarian/?utm_source=ig_profile_share&igshid=xikdfbh9mcq7',
		venueSchedule: [{ open: '' }, { close: '' }],
	},
	{
		venueName: 'RANCHO LATINO',
		venueId: 9,
		venueLocation: 'Vitraco Mall',
		venuePhoneNumber: '(340) 774-8909',
		venueCategory: 'EAT/DRINK',
		venueHashtag:
			'#latinfood, #caribbeanfood, #eats, #lunch, #dinner, #sehablaespanol, #bar, #takeout',
		venueBio:
			'Latin and Caribbean food and drinks with great service from a very friendly and efficient staff.',
		venueWebsiteUrl: '',
		venueSchedule: [{ open: '' }, { close: '' }],
	},
	{
		venueName: 'MAFOLIE HOTEL',
		venueId: 10,
		venueLocation: 'Mafolie Hill',
		venuePhoneNumber: '(340) 774-2790',
		venueCategory: 'EAT/DRINK',
		venueHashtag: '#view, #eats, #dinner',
		venueBio:
			'Enticing menu of island favorites, including steak, pasta dishes, and seafood specialties. Our world-famous view of spectacular Charlotte Amalie, Hassel Island and the harbor.',
		venueWebsiteUrl: 'www.mafolie.com/',
		venueSchedule: [{ open: '' }, { close: '' }],
	},
	{
		venueName: 'FRENCH QUARTER BISTRO',
		venueId: 11,
		venueLocation: 'Frenchtown',
		venuePhoneNumber: '(340) 774-6539',
		venueCategory: 'EAT/DRINK',
		venueHashtag:
			'#creole, #cajun, #caribbeanfood, #eats, #lunch, #dinner #wine, #bar',
		venueBio:
			'We invite you to come to taste our cuisine at French Quarter Bistro.  We are not re-inventing Creole and Cajun cuisine, only sharpening it!',
		venueWebsiteUrl: 'www.frenchquarterbistrovi.com',
		venueSchedule: [{ open: '' }, { close: '' }],
	},
	{
		venueName: 'XO BISTRO',
		venueId: 12,
		venueLocation: 'Red Hook',
		venuePhoneNumber: '(340) 779-2069',
		venueCategory: 'EAT/DRINK',
		venueHashtag:
			'#latinfood, #caribbeanfood, #eats, #lunch, #dinner, #sehablaespanol, #bar, #takeout',
		venueBio:
			'We serve lunch and dinner 7 days a week. Join us for our chef specials. We are located in the first floor of Red Hook Plaza, accross the street from American Yacht Harbor',
		venueWebsiteUrl: 'www.xobistro.net',
		venueSchedule: [{ open: '' }, { close: '' }],
	},
	{
		venueName: 'LANNAI AT LIMETREE',
		venueId: 13,
		venueLocation: 'Frenchman Bay',
		venuePhoneNumber: '(340) 774-4884',
		venueCategory: 'EAT/DRINK',
		venueHashtag:
			'#panasian, #bar, #eats, #lunch, #dinner, #beachbar, #beer, #wine, #cocktails, #brunch',
		venueBio:
			'Pan Asian, Pacific Rim cuisine and great service at a beautiful beachside restaurant. ',
		venueWebsiteUrl: 'http://www.lanaivi.com/',
		venueSchedule: [{ open: '' }, { close: '' }],
	},
	{
		venueName: 'CAFE AMICI',
		venueId: 14,
		venueLocation: 'AH RIISE MALL',
		venuePhoneNumber: '(340) 779-9000',
		venueCategory: 'EAT/DRINK',
		venueHashtag:
			'#italianfood, #happyhour, #eats, #lunch, #dinner, #craftcocktails, #bar, #takeout',
		venueBio:
			'Old world meditteranean charm with island friendly service housed in a beautiful centuries old architectural gem. We offer daily specials, happy hours, great pastas, pizzas, and amazing salads. Come and make some new friends.',
		venueWebsiteUrl: 'https://cafeamicistthomas.com/',
		venueSchedule: [{ open: '' }, { close: '' }],
	},
	{
		venueName: "VIRGILIO'S",
		venueId: 15,
		venueLocation: 'Charlotte Amalie',
		venuePhoneNumber: '(340) 776-4920',
		venueCategory: 'EAT/DRINK',
		venueHashtag:
			'#italianfood, #sicilian, #eats, #lunch, #dinner, #craftcocktails, #bar, #takeout',
		venueBio:
			'At Virgilio’s we will pamper your palettes with an array of homemade pastas (Grandma’s recipes) complimented with numerous sauces.  ',
		venueWebsiteUrl: 'https://cafeamicistthomas.com/',
		venueSchedule: [{ open: '' }, { close: '' }],
	},
	{
		venueName: 'SIBS ON THE MOUNTAIN',
		venueId: 16,
		venueLocation: '33-5 Estate Elizabeth, St Thomas 00802',
		venuePhoneNumber: '(340) 774-8967',
		venueCategory: 'EAT/DRINK',
		venueHashtag:
			'#food, #happyhour, #eats, #lunch, #dinner, #cocktails, #bar, #takeout',
		venueBio:
			'Iconic, long standing, family operated bar and restaurant, where the drinks are flowing, the food is sizzling and your friends are holding a seat for you',
		venueWebsiteUrl:
			'https://sibs-mountain-cafe.business.site/?utm_source=gmb&utm_medium=referral',
		venueSchedule: [{ open: '' }, { close: '' }],
	},
	{
		venueName: 'BLUE ELEVEN',
		venueId: 17,
		venueLocation: 'AH RIISE MALL',
		venuePhoneNumber: '(340) 777-2511',
		venueCategory: 'EAT/DRINK',
		venueHashtag:
			'#finedining, #caribbeanfood, #eats, #dinner, #craftcocktails, #bar, #wine, #tastingmenu',
		venueBio:
			'Come try on of our tasting menus. We offer 7, 9, or 11 courses. Chef Benji and his team are redifing Caribbean cuisine.',
		venueWebsiteUrl: 'https://www.blue11vi.com',
		venueSchedule: [{ open: '' }, { close: '' }],
	},
	{
		venueName: 'OCEANA',
		venueId: 18,
		venueLocation: '#8 Honduras Villa Olga Frenchtown',
		venuePhoneNumber: '(340) 774-4262',
		venueCategory: 'EAT/DRINK',
		venueHashtag:
			'#italianfood, #happyhour, #dinner, #craftcocktails, #bar, #oceanside',
		venueBio:
			"Our restaurant is regarded as one of the island’s most iconic locations for dining. Our raison d'être is to combine culinary excellence with superb service and an exquisite setting,",
		venueWebsiteUrl: 'https://www.oceanavi.com',
		venueSchedule: [{ open: '' }, { close: '' }],
	},
	{
		venueName: 'OLD STONE FARMHOUSE',
		venueId: 19,
		venueLocation: 'Mahogany Run',
		venuePhoneNumber: '(340) 777-6277',
		venueCategory: 'EAT/DRINK',
		venueHashtag:
			'#finedining, #caribbeaninspired, #dinner, #craftcocktails, #bar, #wine',
		venueBio:
			'The Old Stone Farmhouse features seafood, steakhouse and vegetarian menus inspired by local Caribbean ingredients. ',
		venueWebsiteUrl: 'https://www.oldstonefarmhouse.net',
		venueSchedule: [{ open: '' }, { close: '' }],
	},
	{
		venueName: 'SUNSET GRILLE',
		venueId: 20,
		venueLocation: '6280 Estate Nazareth, Secret Harbor',
		venuePhoneNumber: '(340) 779-9000',
		venueCategory: 'EAT/DRINK',
		venueHashtag:
			'#happyhour, #breakfast, #lunch, #dinner, #beachside, #bar, ',
		venueBio:
			'Beachside grille with a variety of influences and flavors, from the Caribbean, to Latin America, and Asia.',
		venueWebsiteUrl: 'https://www.sunsetgrillevi.com',
		venueSchedule: [{ open: '' }, { close: '' }],
	},
	{
		venueName: 'THE EASTERLY',
		venueId: 21,
		venueLocation: 'Red Hook',
		venuePhoneNumber: '(340) 714-1000',
		venueCategory: 'EAT/DRINK',
		venueHashtag:
			'#seafood, #oyestes, #eats, #dinner, #craftcocktails, #bar',
		venueBio:
			'The restaurant and bar take on a Bohemian-island vibe. The menu is ocean focused, with ceviches, crudos, octopus, shellfish & lobster and whole grilled fish as mainstays.',
		venueWebsiteUrl: 'https://www.theeasterlystthomas.com',
		venueSchedule: [{ open: '' }, { close: '' }],
	},
	{
		venueName: 'PRIME',
		venueId: 22,
		venueLocation: 'Paradise Point',
		venuePhoneNumber: '(340) 690-2191',
		venueCategory: 'EAT/DRINK',
		venueHashtag:
			'#steakhouse, #dinner, #craftcocktails, #bar, #views, #wine',
		venueBio:
			'Prime at Paradise Point is a contemporary steakhouse concept. Our culinary approach is driven by providing delicious traditional meals using the freshest, highest quality ingredients available locally and globally.',
		venueWebsiteUrl: 'https://www.primeusvi.com',
		venueSchedule: [{ open: '' }, { close: '' }],
	},
	{
		venueName: 'WHISKEY BUSINESS BAR AND GRILL',
		venueId: 23,
		venueLocation: 'Tillets Garden Annas Retreat',
		venuePhoneNumber: '(340) 715-5220',
		venueCategory: 'EAT/DRINK',
		venueHashtag:
			'#americanfood, #happyhour, #eats, #lunch, #dinner, #whiskey, #bar, #livemusic',
		venueBio:
			'American bar and grill located in Annas Retreat. Daily specials and live music. Check out our Facebook page. ',
		venueWebsiteUrl: 'https://www.facebook.com/whiskeybusinessvi/',
		venueSchedule: [{ open: '' }, { close: '' }],
	},
	{
		venueName: 'DUFFYS LOVE SHACK',
		venueId: 24,
		venueLocation: 'Red Hook',
		venuePhoneNumber: '(340) 779-2080',
		venueCategory: 'EAT/DRINK',
		venueHashtag:
			'#italianfood, #happyhour, #eats, #lunch, #dinner, #craftcocktails, #bar, #takeout',
		venueBio:
			"We're not a restaurant ... we're a bar that serves great food. Wings, nachos, fish tacos. Great grub, generous portions.",
		venueWebsiteUrl: 'https://www.duffysloveshack.com',
		venueSchedule: [{ open: '' }, { close: '' }],
	},
	{
		venueName: 'ISLAND TIME PUB',
		venueId: 25,
		venueLocation: 'Red Hook',
		venuePhoneNumber: '(340) 774-2929',
		venueCategory: 'EAT/DRINK',
		venueHashtag:
			'#harborside, #happyhour, #eats, #lunch, #dinner, #bar, #takeout',
		venueBio:
			'Harborfront operation featuring a full bar & a large pizza selection in an easygoing environment.',
		venueWebsiteUrl: '',
		venueSchedule: [{ open: '' }, { close: '' }],
	},
	{
		venueName: 'CARIBBEAN SALOON',
		venueId: 26,
		venueLocation: 'American Yacht Harbor Red Hook',
		venuePhoneNumber: '(340) 775-7060',
		venueCategory: 'EAT/DRINK',
		venueHashtag:
			'#harborside, #happyhour, #eats, #lunch, #dinner, #bar, #takeout',
		venueBio:
			'Specializing in Signature Steaks and serving many local favorites, pleasing all appetites and budgets. Large Cafe and Gourmet Pizza menus until 1am. ',
		venueWebsiteUrl: 'http://caribbeansaloon.com/',
		venueSchedule: [{ open: '' }, { close: '' }],
	},
	{
		venueName: 'BERNIES BAR AND GRILL',
		venueId: 27,
		venueLocation: 'American Yacht Harbor Red Hook',
		venuePhoneNumber: '(340) 201-5603',
		venueCategory: 'EAT/DRINK',
		venueHashtag:
			'#harborside, #happyhour, #eats, #lunch, #dinner, #bar, #takeout',
		venueBio:
			"Bernie's is a bar with beer on tap,a great happy hour ,cold drinks and delicious food!",
		venueWebsiteUrl: 'https://www.facebook.com/berniesusvi/',
		venueSchedule: [{ open: '' }, { close: '' }],
	},
	{
		venueName: 'PANGEA',
		venueId: 28,
		venueLocation: '6400 estate Smith Bay, St Thomas 00802',
		venuePhoneNumber: '(340) 690-0963',
		venueCategory: 'EAT/DRINK',
		venueHashtag:
			'#sustainable, #eats, #zeroplastic, #kitchengarden #dinner, #bar. #fartofork',
		venueBio:
			'We are a sustainable restaurant that supports local farming fishing. We are very passionnate about health of our planet. Come enjoy enjoy al fresco dining and a chic bar atmosphere',
		venueWebsiteUrl: 'https://www.pangeavi.com/',
		venueSchedule: [{ open: '' }, { close: '' }],
	},
	{
		venueName: '3 PALMS RESTAURANT',
		venueId: 29,
		venueLocation: 'American Yacht Harbor, Red Hook',
		venuePhoneNumber: '(340) 643-3429',
		venueCategory: 'EAT/DRINK',
		venueHashtag:
			'#harborside, #craftcocktails, #eats, #dinner, #bar, #winelist',
		venueBio:
			"We refuse to compromise on quality in our restaurant. That's why we source our fresh seafood and produce from local farmers and fishermen.",
		venueWebsiteUrl: 'https://3palmsvi.com/',
		venueSchedule: [{ open: '' }, { close: '' }],
	},
	{
		venueName: 'SAPPHIRE BEACH BAR',
		venueId: 30,
		venueLocation: '16-1-10, Smith Bay Rd, St Thomas 00802',
		venuePhoneNumber: '',
		venueCategory: 'EAT/DRINK',
		venueHashtag:
			'#beachside, #happyhour, #eats, #lunch, #dinner, #bar, #takeout',
		venueBio:
			'Sand, salt, sunshine. Come enjoy our tacos, burgers, salads, salads, and sandwiches, while you sip on frozen libations on one of the most iconic beaches in St.Thomas.',
		venueWebsiteUrl: '',
		venueSchedule: [{ open: '' }, { close: '' }],
	},
	{
		venueName: 'ISLAND TIME PUB',
		venueId: 31,
		venueLocation: 'Red Hook',
		venuePhoneNumber: '(340) 774-2929',
		venueCategory: 'EAT/DRINK',
		venueHashtag:
			'#harborside, #happyhour, #eats, #lunch, #dinner, #bar, #takeout',
		venueBio:
			'Harborfront operation featuring a full bar & a large pizza selection in an easygoing environment.',
		venueWebsiteUrl: '',
		venueSchedule: [{ open: '' }, { close: '' }],
	},
	{
		venueName: 'SHORELINE BAR AND GRILL',
		venueId: 32,
		venueLocation: '84WM+7CW, Smith Bay, St Thomas 00802',
		venuePhoneNumber: '(340) 775-7200',
		venueCategory: 'EAT/DRINK',
		venueHashtag:
			'#beachside, #happyhour, #eats, #lunch, #dinner, #bar, #breakfast',
		venueBio:
			'Enjoy a variety of different menu options from Mussels and Fish Tacos to an incredible Cuban Sandwich. Have a coffee to end your night or stay for the late night Happy Hour',
		venueWebsiteUrl: '',
		venueSchedule: [{ open: '' }, { close: '' }],
	},
	{
		venueName: 'THE GREENHOUSE',
		venueId: 33,
		venueLocation: 'Charlotte Amalie, Waterfront',
		venuePhoneNumber: '(340) 774-7998',
		venueCategory: 'EAT/DRINK',
		venueHashtag:
			'#harborside, #happyhour, #eats, #lunch, #dinner, #bar, #takeout',
		venueBio:
			'Harborfront operation featuring a full bar & extensive food menu offering fresh Angus beef and lobster. Daily specials available.',
		venueWebsiteUrl: '',
		venueSchedule: [{ open: '' }, { close: '' }],
	},
	{
		venueName: 'GREENGOS CARIBBEAN CANTINA',
		venueId: 34,
		venueLocation: '34-35 Dronnongens Gade “Hibiscus Alley” Charlotte Amalie',
		venuePhoneNumber: '(340) 714-8282',
		venueCategory: 'EAT/DRINK',
		venueHashtag:
			'#mexicancuisine, #happyhour, #eats, #lunch, #latelunch, #bar, #tequila',
		venueBio:
			'Located in a historic Dutch building on the waterfront, Greengos serves authentic Sonoran style Mexican Food with over 300 100% Agave Tequilas in stock.',
		venueWebsiteUrl: '',
		venueSchedule: [{ open: '' }, { close: '' }],
	},
	{
		venueName: 'STONEHOUSE CAFE',
		venueId: 35,
		venueLocation: "5332 Raddet's Gade, Charlotte Amalie",
		venuePhoneNumber: '(340) 777-3000',
		venueCategory: 'EAT/DRINK',
		venueHashtag:
			'#livemusic #eats, #lunch, #dinner, #bar, #takeout',
		venueBio:
			'Located in downtownl, Charlotte Amalie, come visit for great food, great service. Catch our daily specials. Live music on Fridays.',
		venueWebsiteUrl: 'https://stonehousecafe.myncrsilver.com/',
		venueSchedule: [{ open: '' }, { close: '' }],
	},
	{
		venueName: 'PETITE PUMP ROOM',
		venueId: 36,
		venueLocation: '3400 Veterans Dr, Charlotte Amalie',
		venuePhoneNumber: '(340) 776-2976',
		venueCategory: 'EAT/DRINK',
		venueHashtag:
			'#caribbeanfood, #waterfront, #eats, #lunch, #latelunch, #bar, #breakfast',
		venueBio:
			'The Pump Room is preferred by islanders & visitors for its authentic local food & great friendly service. We have both indoor and outdoor seating with breathtaking views of the Charlotte Amalie Harbor.  ',
		venueWebsiteUrl: '',
		venueSchedule: [{ open: '' }, { close: '' }],
	},
	{
		venueName: 'SEA LA VIE',
		venueId: 37,
		venueLocation: 'Frenchtown',
		venuePhoneNumber: '(340) 693-7808',
		venueCategory: 'EAT/DRINK',
		venueHashtag:
			'#frenchfood, #steaks, #eats, #lunch, #dinner, #bar, #wine',
		venueBio:
			'French Bistro in The Heart of Frenchtown',
		venueWebsiteUrl: '',
		venueSchedule: [{ open: '' }, { close: '' }],
	},
	{
		venueName: 'PIZZA AMORÉ',
		venueId: 38,
		venueLocation: '34-35 Dronnongens Gade “Hibiscus Alley” Charlotte Amalie',
		venuePhoneNumber: '(340) 714-8282',
		venueCategory: 'EAT/DRINK',
		venueHashtag:
			'#newyorkstylepizza, #lunch, #latelunch, #takeout',
		venueBio:
			'Located in Havensight, our pizzeria serves up big New York style pizza with big taste.',
		venueWebsiteUrl: 'https://www.pizzaamorestthomasvi.com/home',
		venueSchedule: [{ open: '' }, { close: '' }],
	},
	{
		venueName: 'TWISTT 340',
		venueId: 39,
		venueLocation: 'Yacht Haven Grande',
		venuePhoneNumber: '(340) 423-3400',
		venueCategory: 'EAT/DRINK',
		venueHashtag:
			'#caribbeanfood, #tapas, #eats, #lunch, #dinner, #bar, #craftcocktails #brunch',
		venueBio:
			'This locally-owned restaurant was passionately planned and is currently cherished by Dimitri & Tamra James.  As the name implies, the owners are always looking for new ways to dish up old traditional island favorites.',
		venueWebsiteUrl: '',
		venueSchedule: [{ open: '' }, { close: '' }],
	},
	{
		venueName: '13 RESTAURANT',
		venueId: 40,
		venueLocation: 'Yacht Haven Grande',
		venuePhoneNumber: '(340) 774-6800',
		venueCategory: 'EAT/DRINK',
		venueHashtag:
			'#southerncuisine, #lunch, #eats, #dinner, #craftcocktails, #bar, #mintjulep',
		venueBio:
			'Southern cuisine with an island flair. We have a great cocktail menu to enhance our harborside location in the classy Yacht Haven Grande in St. Thomas.',
		venueWebsiteUrl: '',
		venueSchedule: [{ open: '' }, { close: '' }],
	},
	{
		venueName: 'NORTHSIDE GRIND',
		venueId: 41,
		venueLocation: "6200 Magen's Bay Rd, St Thomas 00802",
		venuePhoneNumber: '(340) 642-2421',
		venueCategory: 'EAT/DRINK',
		venueHashtag:
			'#coffee, #coldbrew, #eats, #lunch, #breakfast, #breakfastburritos, #sandwiches',
		venueBio:
			'Northside Grind has been open since September of 2019. We have many offerings to better serve St. Thomas including a full service Deli, smoothies, Ice, and even a light convenience store! ',
		venueWebsiteUrl: '',
		venueSchedule: [{ open: '' }, { close: '' }],
	},
	{
		venueName: "DENTON'S ISLAND STEAKHOUSE",
		venueId: 42,
		venueLocation: 'Lannai,Limetree beach,Frenchman Bay',
		venuePhoneNumber: '(340) 714-8282',
		venueCategory: 'EAT/DRINK',
		venueHashtag:
			'#ribeye, #happyhour, #eats, #lunch, #latelunch, #bar, #tequila',
		venueBio:
			"Exclusive Steakhouse and Fresh Seafood by Executive Chef Matt Denton. Specialty is our House Aged Ribeye. All steak's are paired perfectly with there sides.",
		venueWebsiteUrl: '',
		venueSchedule: [{ open: '' }, { close: '' }],
	},
	{
		venueName: 'CARIBBEAN FISH MARKET',
		venueId: 43,
		venueLocation: '34-35 Dronnongens Gade “Hibiscus Alley” Charlotte Amalie',
		venuePhoneNumber: '340-714-7874 ',
		venueCategory: 'EAT/DRINK',
		venueHashtag:
			'#mexicancuisine, #happyhour, #eats, #lunch, #latelunch, #bar, #tequila',
		venueBio:
			'',
		venueWebsiteUrl: 'https://www.caribbeanfishmarketvi.com',
		venueSchedule: [{ open: '' }, { close: '' }],
	},
	{
		venueName: 'GREENGOS CARIBBEAN CANTINA',
		venueId: 44,
		venueLocation: '34-35 Dronnongens Gade “Hibiscus Alley” Charlotte Amalie',
		venuePhoneNumber: '(340) 714-8282',
		venueCategory: 'EAT/DRINK',
		venueHashtag:
			'#mexicancuisine, #happyhour, #eats, #lunch, #latelunch, #bar, #tequila',
		venueBio:
			'Located in a historic Dutch building on the waterfront, Greengos serves authentic Sonoran style Mexican Food with over 300 100% Agave Tequilas in stock.',
		venueWebsiteUrl: '',
		venueSchedule: [{ open: '' }, { close: '' }],
	},
	{
		venueName: 'ENKAI SUSHI',
		venueId: 45,
		venueLocation: 'Yacht Haven Grande',
		venuePhoneNumber: '(340) 774-6254',
		venueCategory: 'EAT/DRINK',
		venueHashtag:
			'#sushi, #happyhour, #eats, #lunch, #bar, #craftcocktails,#sake',
		venueBio:
			'We have provided artisan sushi, craft cocktails, and a unique dining experience to the island of St. Thomas, U.S. Virgin Islands since 2009. Come visit us!',
		venueWebsiteUrl: 'http://www.enkaisushibar.com',
		venueSchedule: [{ open: '' }, { close: '' }],
	},
	{
		venueName: 'PESCE ITALIAN',
		venueId: 46,
		venueLocation: 'American Yacht Harbor, Redhook',
		venuePhoneNumber: '(340) 714-7874',
		venueCategory: 'EAT/DRINK',
		venueHashtag:
			'#italian, #happyhour, #eats, #bar',
		venueBio:
			'Step outside of St. Thomas and into the Italian countryside when you dine at PESCE iTALiAN. Fresh seafood, handmade pasta, local ingredients',
		venueWebsiteUrl: 'https://www.pescevi.com/',
		venueSchedule: [{ open: '' }, { close: '' }],
	},
	{
		venueName: 'GREENGOS CARIBBEAN CANTINA',
		venueId: 47,
		venueLocation: '34-35 Dronnongens Gade “Hibiscus Alley” Charlotte Amalie',
		venuePhoneNumber: '(340) 714-8282',
		venueCategory: 'EAT/DRINK',
		venueHashtag:
			'#mexicancuisine, #happyhour, #eats, #lunch, #latelunch, #bar, #tequila',
		venueBio:
			'Located in a historic Dutch building on the waterfront, Greengos serves authentic Sonoran style Mexican Food with over 300 100% Agave Tequilas in stock.',
		venueWebsiteUrl: '',
		venueSchedule: [{ open: '' }, { close: '' }],
	},
	{
		venueName: 'GREENGOS CARIBBEAN CANTINA',
		venueId: 48,
		venueLocation: '34-35 Dronnongens Gade “Hibiscus Alley” Charlotte Amalie',
		venuePhoneNumber: '(340) 714-8282',
		venueCategory: 'EAT/DRINK',
		venueHashtag:
			'#mexicancuisine, #happyhour, #eats, #lunch, #latelunch, #bar, #tequila',
		venueBio:
			'Located in a historic Dutch building on the waterfront, Greengos serves authentic Sonoran style Mexican Food with over 300 100% Agave Tequilas in stock.',
		venueWebsiteUrl: '',
		venueSchedule: [{ open: '' }, { close: '' }],
	},
	{
		venueName: 'GREENGOS CARIBBEAN CANTINA',
		venueId: 49,
		venueLocation: '34-35 Dronnongens Gade “Hibiscus Alley” Charlotte Amalie',
		venuePhoneNumber: '(340) 714-8282',
		venueCategory: 'EAT/DRINK',
		venueHashtag:
			'#mexicancuisine, #happyhour, #eats, #lunch, #latelunch, #bar, #tequila',
		venueBio:
			'Located in a historic Dutch building on the waterfront, Greengos serves authentic Sonoran style Mexican Food with over 300 100% Agave Tequilas in stock.',
		venueWebsiteUrl: '',
		venueSchedule: [{ open: '' }, { close: '' }],
	},
	{
		venueName: 'GREENGOS CARIBBEAN CANTINA',
		venueId: 50,
		venueLocation: '34-35 Dronnongens Gade “Hibiscus Alley” Charlotte Amalie',
		venuePhoneNumber: '(340) 714-8282',
		venueCategory: 'EAT/DRINK',
		venueHashtag:
			'#mexicancuisine, #happyhour, #eats, #lunch, #latelunch, #bar, #tequila',
		venueBio:
			'Located in a historic Dutch building on the waterfront, Greengos serves authentic Sonoran style Mexican Food with over 300 100% Agave Tequilas in stock.',
		venueWebsiteUrl: '',
		venueSchedule: [{ open: '' }, { close: '' }],
	},
	{
		venueName: 'GREENGOS CARIBBEAN CANTINA',
		venueId: 51,
		venueLocation: '34-35 Dronnongens Gade “Hibiscus Alley” Charlotte Amalie',
		venuePhoneNumber: '(340) 714-8282',
		venueCategory: 'EAT/DRINK',
		venueHashtag:
			'#mexicancuisine, #happyhour, #eats, #lunch, #latelunch, #bar, #tequila',
		venueBio:
			'Located in a historic Dutch building on the waterfront, Greengos serves authentic Sonoran style Mexican Food with over 300 100% Agave Tequilas in stock.',
		venueWebsiteUrl: '',
		venueSchedule: [{ open: '' }, { close: '' }],
	},
	{
		venueName: 'GREENGOS CARIBBEAN CANTINA',
		venueId: 52,
		venueLocation: '34-35 Dronnongens Gade “Hibiscus Alley” Charlotte Amalie',
		venuePhoneNumber: '(340) 714-8282',
		venueCategory: 'EAT/DRINK',
		venueHashtag:
			'#mexicancuisine, #happyhour, #eats, #lunch, #latelunch, #bar, #tequila',
		venueBio:
			'Located in a historic Dutch building on the waterfront, Greengos serves authentic Sonoran style Mexican Food with over 300 100% Agave Tequilas in stock.',
		venueWebsiteUrl: '',
		venueSchedule: [{ open: '' }, { close: '' }],
	},
	{
		venueName: 'GREENGOS CARIBBEAN CANTINA',
		venueId: 53,
		venueLocation: '34-35 Dronnongens Gade “Hibiscus Alley” Charlotte Amalie',
		venuePhoneNumber: '(340) 714-8282',
		venueCategory: 'EAT/DRINK',
		venueHashtag:
			'#mexicancuisine, #happyhour, #eats, #lunch, #latelunch, #bar, #tequila',
		venueBio:
			'Located in a historic Dutch building on the waterfront, Greengos serves authentic Sonoran style Mexican Food with over 300 100% Agave Tequilas in stock.',
		venueWebsiteUrl: '',
		venueSchedule: [{ open: '' }, { close: '' }],
	},
	{
		venueName: 'GREENGOS CARIBBEAN CANTINA',
		venueId: 54,
		venueLocation: '34-35 Dronnongens Gade “Hibiscus Alley” Charlotte Amalie',
		venuePhoneNumber: '(340) 714-8282',
		venueCategory: 'EAT/DRINK',
		venueHashtag:
			'#mexicancuisine, #happyhour, #eats, #lunch, #latelunch, #bar, #tequila',
		venueBio:
			'Located in a historic Dutch building on the waterfront, Greengos serves authentic Sonoran style Mexican Food with over 300 100% Agave Tequilas in stock.',
		venueWebsiteUrl: '',
		venueSchedule: [{ open: '' }, { close: '' }],
	},
];

venues.forEach((venue) => {
	body.innerHTML += `<div id="card">
	<h3 id="venueName">${venue.venueName}</h3>

	<div class="venueCardBody">
		<div id="venueInfo">
		<p id="" class="venueHashtag">${venue.venueHashtag}</p>
		<p id="venueBio">${venue.venueBio}</p>
		</div>
<div class="cardButtons">
<div id="venueCardLeft"> 
		<button>menu</button>
		<br /><br />
		
		<button>contact</button>
		</div>

		<div id="venueCardRight">
		<button>website</button>
		
		
		</div>
		<div className="social"><i class="fa-brands fa-facebook"></i>
		<i class="fab fa-instagram"></i></div>
		</div>
		<p>location</p>
		<p>hours</p>
		
		
</div>

`;
});
