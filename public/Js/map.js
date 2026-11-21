mapboxgl.accessToken = window.mapToken;

const map = new mapboxgl.Map({
    container: 'map',
    style: "mapbox://styles/mapbox/streets-v12",
    center: window.coordinates,
    zoom: 9
});

const marker = new mapboxgl.Marker({ color: "red" })
    .setLngLat(window.coordinates)
    .setPopup(
        new mapboxgl.Popup({ offset: 25 })
            .setText(`${window.listingTitle} - Exact location provided after booking`)
    )
    .addTo(map);