$(document).ready(function () {

    var topics = ["anger", "sadness", "happiness", "fear", "disgust", "surprise"];

    function displayTheGifs() {
        $('#imagezone').empty();
        var emotion = $(this).attr("data-name");
        var seekrit = "2pJIZ9daipQ499TILv5WfCwuxuPUZq2W"
        // fix this
        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=" + seekrit + "&q=" + emotion + "&limit=10";

        // also fix this
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {

            var results = response.data;
            console.log(response);
            console.log(queryURL);
            for (var i = 0; i < results.length; i++) {
                var imgurl = results[i].images.fixed_height.url;
                var gifDiv = $("<div class='emotion'>");
                var image = $("<img>").attr("src", imgurl);
                var p = $("<p>").text("Rating: " + results[i].rating);
                gifDiv.append(image);
                gifDiv.append(p);
                $('#imagezone').prepend(gifDiv);
            }
        });


    }

    function buttonsCreate() {
        $("#buttonzone").empty();
        for (var i = 0; i < topics.length; i++) {
            var a = $("<button>");
            a.addClass("btn btn-primary emotion " + topics[i]);
            a.attr("data-name", topics[i]);
            a.text(topics[i]);
            $('#buttonzone').append(a);
        }
    }

    $(document).on("click", ".emotion", displayTheGifs);
    buttonsCreate();
});

