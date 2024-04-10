document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Code to handle form submission (e.g., sending email)
    alert('Your message has been sent!');
});
        // Initialize map with specified coordinates
        function initMap() {
            var latitude = parseFloat(document.getElementById('latitude').innerText);
            var longitude = parseFloat(document.getElementById('longitude').innerText);
            var location = {lat: latitude, lng: longitude};
  
            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 12,
                center: location
            });
  
            var marker = new google.maps.Marker({
                position: location,
                map: map
            });
        }