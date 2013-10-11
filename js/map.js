var map = L.mapbox.map('map', 'examples.map-y7l23tes')
	.setView([59.314838, 18.069763], 15);

// Set up the foursquare API
var pins = foursquare.settings = {
    /* foursquare API keys. See: https://foursquare.com/oauth/register */
    client_id: 'TBBQCOJODYFMHOV1HSRJSFH4AZI2MV2H1IGDWJTB30J1LYGZ',
    client_secret: 'SNOY0AJ312VC2TH5HHSRUEYYRSJXMCFEKU521FIP4K5UC5Y5',
    /* List ID. See: https://developer.foursquare.com/docs/explore#req=users/self/lists */
    list: '5257bc54498e08c238c10737',
    /* Search radius for nearby address matches */
    radius: 8046.72 // 5 miles in meters
};
