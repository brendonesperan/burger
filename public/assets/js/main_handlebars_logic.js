// You have to wait until the DOM is fully loaded to add the logic - use function for this
$(function() {
    $("#submit").on("click", function(event) {
        event.preventDefault();
        console.log("submit button works");
        // Create new burger object to be stored in db
        var newBurger = {
            "name": $("#new-burger").val().trim(),
            "eat-burger": false
        }
        console.log(newBurger);

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
            console.log("created new burger");
            // Reload the page to get the updated list
            location.reload();
            }
        );
    });

    $("#eat-burger").on("click", function(event) {
        event.preventDefault();
        console.log("Eat-burger button works");
        var id = $(this).data("id");

        // Send the DELETE request.
        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
            }).then(function() {
            console.log("deleted burger", id);
            // Reload the page to get the updated list
            location.reload();
            }
        );
    })
})