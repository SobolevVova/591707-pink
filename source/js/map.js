ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map("map", {
    center: [59.938631, 30.323055],
    zoom: 16,
    controls: []
  });

  myMap.behaviors.disable("scrollZoom");
  myMap.controls.add("zoomControl", {
    position: {
      top: 15,
      left: 15
    }
  })
}
