function Storys(
    id,
    title,
    imageUrl,
    description
) {
    var sliders = `
<div class="slide selected selected_slide" style="height: 336px;">
    <h1>${title}</h1>
    <p><img alt="New York" src=${imageUrl}></p>
    <p>${description}</p>
</div>    
`;
    return sliders;
}




var map = L.map('map')
    .setView(init.coordinate, init.zoom);
var osm = new L.tileLayer(init.basemap, {
    attribution: init.attribution
}).addTo(map);

/* console.log(storysSliderContent.length); */

var displayer = document.getElementById('displayer');
var PageNumber = document.getElementById('number');
var appTitle = document.getElementById('title');
dsiplayer.innerHTML =`
<div class="slide selected selected_slide" style="height: 336px;">
    <h1>Commencer le diaporama</h1>
    <p><img alt="" src="dist/img/diaporama.png" style="height: 260px;width:260px;"></p>
    <p>Cliquez sur les deux flêche afin de commencer le diaporama.</p>
</div>    
`;
PageNumber.textContent = "Diapo N° : "+(0)+'/'+storysSliderContent.length;
appTitle.textContent = init.title;
/* dsiplayedSlide(0); */

var $i = -1;

function next() {
    $i = $i >= storysSliderContent.length - 1 ? 0 : $i + 1;
    //diplayer.textContent = geojson.features[i].properties.address;
    dsiplayedSlide($i);
    /* console.log($i) */
}

function prev() {
    $i = $i > 0 ? $i - 1 : storysSliderContent.length - 1;
    //diplayer.textContent = geojson.features[i].properties.address;
    dsiplayedSlide($i);
}

$(document).ready(function () {

    $('#next').on('click', next)

    $('#prev').on('click', prev)

});

function dsiplayedSlide(e) {

    map.setView(storysSliderContent[e].coordinate, storysSliderContent[e].zoom);

    console.log(storysSliderContent[e].title);

    dsiplayer.innerHTML = Storys(
        storysSliderContent[e].id,
        storysSliderContent[e].title,
        storysSliderContent[e].imageUrl,
        storysSliderContent[e].description

    );

    console.log((e+1)+'/'+storysSliderContent.length);
    PageNumber.textContent = "Diapo N° : "+(e+1)+'/'+storysSliderContent.length;

}
