$(document).ready(function() {
    $.ajax({
        url: 'http://0.0.0.0:5001/api/v1/places_search/',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({}),
        success: function(data) {
            let placesSection = $('section.places');
            placesSection.empty(); // Clear existing places
            
            data.forEach(function(place) {
                let article = $('<article></article>');
                let title = $('<h2></h2>').text(place.name);
                let description = $('<p></p>').text(place.description.replace('Owner: ', ''));
                article.append(title).append(description);
                placesSection.append(article);
            });
        },
        error: function() {
            console.error('Failed to fetch places.');
        }
    });
});
