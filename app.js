$(document).ready(function () {
  //API key
  const giphyKey = ""; //Enter your API key here
  //placeholder
  $("form").submit((e) => {
    e.preventDefault();
    try {
      const query = $("#queryInput").val().replace(/ /g, "+");
      console.log(query);
      //fetch the gif
      returnGif(query);
      //reset the search bar
      $("#queryInput").val("");
    } catch (e) {
      alert("Invalid Search Term");
    }
  });

  //function to return gif
  async function returnGif(query) {
    const url = `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=${giphyKey}&limit=1`;
    const res = await axios.get(url);
    console.log;
    const newGif = $("<img>");
    newGif.attr("src", res.data.data[0].images.original.url);
    newGif.addClass("gif");
    prepend(newGif);
  }

  //append the gif
  const prepend = (gif) => {
    $("#results").prepend(gif);
  };

  //clear results
  $("#clear").on("click", () => {
    $("#results").empty();
  });
});
