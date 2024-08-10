$(document).ready(function() {
    // Initialize an empty array to store checked Amenity IDs
    let checkedAmenities = [];

    // Function to update the h4 tag with the list of checked amenities
    function updateCheckedAmenities() {
        const $amenitiesH4 = $('.amenities h4');
        if (checkedAmenities.length === 0) {
            $amenitiesH4.text('');
        } else {
            // Get the names of the checked amenities from the data-name attribute
            const checkedNames = checkedAmenities.map(id => {
                return $(`input[type="checkbox"][data-id="${id}"]`).data('name');
            }).join(', ');
            $amenitiesH4.text(checkedNames);
        }
    }

    // Event listener for checkbox changes
    $('input[type="checkbox"]').on('change', function() {
        const amenityId = $(this).data('id');
        if (this.checked) {
            // Add the checked Amenity ID to the array
            if (!checkedAmenities.includes(amenityId)) {
                checkedAmenities.push(amenityId);
            }
        } else {
            // Remove the unchecked Amenity ID from the array
            checkedAmenities = checkedAmenities.filter(id => id !== amenityId);
        }
        // Update the h4 tag with the current list of checked amenities
        updateCheckedAmenities();
    });
});
