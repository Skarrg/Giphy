$(document).ready(function () {

    var topics = ["anger", "sadness", "happiness", "fear", "disgust", "surprise"];

    function displayTheGifs() {

        var emotion = $(this).attr("data-name");
        var seekrit = "2pJIZ9daipQ499TILv5WfCwuxuPUZq2W"
        // fix this
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + emotion + "&" + seekrit;

        // also fix this
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {

            var imgurl = response.url;
            var gifDiv = $("<div class='emotion");
            var image = $("<img>").attr("src", imgurl)
            gifDiv.append(image);
            $('#imagezone').prepend(gifDiv);
        });


    }

    function buttonsCreate() {
        $("#buttonzone").empty();
        for (var i = 0; i < topics.length; i++) {
            var a = $("<button>");
            a.addClass("btn btn-primary emotion");
            a.attr("data-name", topics[i]);
            a.text(topics[i]);
            $('#buttonzone').append(a);
        }
    }
    
    $(document).on("click", ".emotion", displayTheGifs);
    buttonsCreate();
});

