var map = L.map('map', {
    maxZoom: 5,
    minZoom: 0.005,
    crs: L.CRS.Simple,
    zoomControl: false
}).setView([1250, 1000], 0.005);

// Ajustez la taille totale de votre mur de photos
var w = 2000; // 40 photos * 100 pixels/photo
var h = 2500; // 50 photos * 100 pixels/photo
map.setMaxBounds(new L.LatLngBounds([0, 0], [h, w]));

// Supposons que chaque photo fasse 100x100 pixels.
var photoSize = 50;

function showImageInfo(){
    console.log('lu')
}

// Ajoutez vos photos à la carte
for (var i = 0; i < 40; i++) {
    for (var j = 0; j < 50; j++) {
        (function(i, j) {
            var imageUrl = `imgs/image-${i}_${j}.jpg`;
            L.imageOverlay(imageUrl, [
                [j * photoSize, i * photoSize],
                [(j + 1) * photoSize, (i + 1) * photoSize]
            ], {
                interactive: true // Assurez-vous que l'overlay est interactif
            })
            .addTo(map)
            .on('click', function(e) {
                console.log('Image clicked:', imageUrl);
                showImageInfo(imageUrl);
            });
        })(i, j);
    }
}
