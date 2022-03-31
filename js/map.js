function iniciarMap(){
    var coord = {lat: -34.6483967, lng: -58.7875255};
    var map = new google.maps.Map(document.getElementById('map'),{
        zoom: 10,
        center: coord 
    });
    var marker = new google.maps.Marker({
        position: coord,
        map: map
    })

}