let navbar = document.querySelector('.navbar')

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    loginForm.classList.remove('active');
    searchForm.classList.remove('active');
}

let loginForm = document.querySelector('.login-form')

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

let searchForm = document.querySelector('.search-form')

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
    searchForm.classList.remove('active');
}

let themeBtn = document.querySelector('#theme-btn');

themeBtn.onclick = () =>{
    themeBtn.classList.toggle('fa-sun');

    if(themeBtn.classList.contains('fa-sun')){
        document.body.classList.add('active');
    }else{
        document.body.classList.remove('active');
    }

};

var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 5500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});

function initMap() {
    // Specify the latitude and longitude of the center point for your map
    const center = { lat: 40.7128, lng: -74.0060 }; // Replace with your desired coordinates
  
    // Create a map object and specify the element to display the map (in this case, 'map')
    const map = new google.maps.Map(document.getElementById('map'), {
      center,
      zoom: 8, // Adjust the zoom level as needed
    });
  
    // Add markers for travel destinations
    const destinations = [
      { name: 'Destination 1', coordinates: { lat: 40.7128, lng: -74.0060 } }, // Replace with your destinations
      { name: 'Destination 2', coordinates: { lat: 41.8781, lng: -87.6298 } },
      // Add more destinations as needed
    ];
  
    destinations.forEach((destination) => {
      const marker = new google.maps.Marker({
        position: destination.coordinates,
        map,
        title: destination.name,
      });
  
      // You can customize the marker icon if needed
      // marker.setIcon('path/to/custom-marker.png');
  
      // Add an info window to the marker with additional information
      const infoWindow = new google.maps.InfoWindow({
        content: `<h3>${destination.name}</h3>`,
      });
  
      marker.addListener('click', () => {
        infoWindow.open(map, marker);
      });
    });
  }
  