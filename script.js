function getUserInput() {
    var userInput = document.getElementById("userInput").value;
    var giphyApiKey = "eb5502a33d0648a5ad409eb9386635be";
    var giphySearchEndpoint = `https://api.giphy.com/v1/gifs/search?q=${userInput}&rating=g&api_key=${giphyApiKey}`;
    var lastFmSearchEndpoint = `https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${userInput}&api_key=6695d8fb43ad82224d959969010b4faf&format=json`

    console.log(userInput);
    //lastFM
    var h;
    var song;
    var songPath
    fetch(lastFmSearchEndpoint)
        .then(function(data) {
            return data.json()
        })
        .then(function(json) {
            var trackNumber = Math.floor((Math.random() * 20) + 1);
            console.log(json)
                //pull out just the image link that wew want
            songPath = json.toptracks.track[trackNumber].name
            songLink = json.toptracks.track[trackNumber].url
                // make a new image in our html
            h = document.createElement("h2")
            song = document.createTextNode(songPath)
                // set the image's path
            document.body.appendChild(h);
            h.appendChild(song);
            //link
            var songLink = json.toptracks.track[trackNumber].url
            // var a = document.createElement("a")
            // var linkText = document.createTextNode(song);
            // a.appendChild(linkText);
            // a.setAttribute("href", songLink)
            // a.innerHTML = song;
            // document.body.appendChild(a)
                //test
                var newlink = document.createElement('a');
newlink.innerHTML = "Listen Here";
newlink.setAttribute('title', 'Google');
newlink.setAttribute('href', songLink);
newlink.setAttribute('target','blanks')
document.body.appendChild(newlink);

        })
    var img;
    var imgPath;
    var giphyData;
    //giphy
    fetch(giphySearchEndpoint)
        .then(function(data) {
            return data.json()
        })
        .then(function(json) {
            console.log("giph", json)
            giphyData = json.data
                //pull out just the image link that wew want
            imgPath = json.data[Math.floor((Math.random() * 24) + 1)].images.fixed_height.url
                // make a new image in our html
            img = document.createElement("img")
                // set the image's path
            img.setAttribute("src", imgPath)
            document.body.appendChild(img)
        })

}
