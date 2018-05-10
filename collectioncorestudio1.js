var URL = 'collectioncorestudio1.json';

var response;

var request = new XMLHttpRequest();
request.open('GET', URL);
request.responseType = 'json';
request.send();
request.onload = function () {
    response = request.response;

    /* THIS IS WHERE YOU GET THE IMAGE FROM JSON AND APPEND TO COLUMNS */
    /* THERE WILL BE ONE OF THESE FOR LOOPS FOR EACH COLUMN */
    for (var i = 0; i < response.black.images.length; i++) {
        makeImage(response.black.images[i], 'black', 'imagecolumn1');
    }

    for (var i = 0; i < response.blue.images.length; i++) {
        makeImage(response.blue.images[i], 'blue', 'imagecolumn3');
    }

        for (var i = 0; i < response.grey.images.length; i++) {
        makeImage(response.grey.images[i], 'grey', 'imagecolumn2');
    }

        for (var i = 0; i < response.lightblue.images.length; i++) {
        makeImage(response.lightblue.images[i], 'lightblue', 'imagecolumn4');
    }

        for (var i = 0; i < response.orange.images.length; i++) {
        makeImage(response.orange.images[i], 'orange', 'imagecolumn6');
    }

        for (var i = 0; i < response.red.images.length; i++) {
        makeImage(response.red.images[i], 'red', 'imagecolumn5');
    }

    for (var i = 0; i < response.yellow.images.length; i++) {
    makeImage(response.yellow.images[i], 'yellow', 'imagecolumn7');
    }
    /*
    for (var i = 0; i < response.COLOR.images.length; i++) {
        makeImage(response.COLOR.images[i], 'COLOR', 'imagecolumnNUMBER');
    }
    */

}


function makeImage(image_source, style, destination) {
    var img = document.createElement('img');
    img.src = image_source;
    img.classList = style;

    var append_location = document.getElementById(destination);

    append_location.appendChild(img);
}

var time = 0;

setInterval(function () {
    time += 10;
    console.log(time);
}, 10);


$(".column_trigger").mouseenter(function(){
    if (window.innerWidth > 770 && time > 3000) {
        $(this).find(".column").addClass("move")
    }
    //$(this).next(".column").addClass("move");

    // ONCE NESTING IS MADE THIS BECOMES THE SECOND LINE OF THE JQUERY FUNCTION
    //$(this).find(".column").addClass("move")

    //var selected = this.id.slice(-1);



   // var move_column = document.getElementById("column" + selected);
    // move_column.classList = "column move";

    // console.log(move_column);

    // var scroll_this = document.getElementById("imagecolumn" + selected);

    // scroll_this.style.zIndex = 3;

})


$(".column_trigger").mouseleave(function(){

    //$(this).next(".column").removeClass("move")

    // ONCE NESTING IS MADE THIS BECOMES THE SECOND LINE OF THE JQUERY FUNCTION
    $(this).find(".column").removeClass("move")

    // var selected = this.id.slice(-1);

    // var move_column = document.getElementById("column" + selected);
    // move_column.classList = "column";

    // console.log(move_column);

    // var scroll_this = document.getElementById("imagecolumn" + selected);

    // scroll_this.style.zIndex = 0;

})



$(".container").click(function(){

    // here is where you want to open the new photo window
    var popup = document.createElement("div");
    popup.classList.add("popup");

    document.body.insertAdjacentElement("afterbegin", popup);
    popup.style.opacity = 0;
    setTimeout(function () {
        popup.style.opacity = 1;
    }, 10);

    /* no clue why CSS isnt applying */

    // popup.style.height = "1000px";
    // popup.style.width = "1000px";
    // popup.style.zIndex = "20";
    // popup.style.position = "fixed";

    // var imageArray   this will get an array of all the images in this container

    var clicked_container = this.classList.item(2);
    var clicked_number = clicked_container.slice(-1);

    //var imageArray =

    // var desired_column = document.getElementById("imagecolumn" + clicked_number);

    console.log(response);

    var colors = ["none", response.black, response.grey, response.blue, response.lightblue, response.red, response.orange, response.yellow];

    var picked_color = colors[clicked_number];

    var imageArray = picked_color.images;

    console.log(imageArray);

    // then, create a div that opens above everything (it should have the css class that styles it)
    // somehow not working; we styled it earlier

    // then populate that div with the images (of the array that you just made)
    for (var i = 0; i < imageArray.length; i++) {
        var img = document.createElement("img");
        img.src = imageArray[i];
        popup.appendChild(img);
    }

    // the div that you created has an X button (or whatever functionality to get rid of it) that deletes 

    var exit = document.createElement("button");

    exit.classList.add("exit");
    //exit.style.top = 0;
    //exit.style.zIndex = 100;
    //exit.style.position = "absolute";
    exit.innerHTML = "X";
    exit.addEventListener("click", function() {
        popup.parentNode.removeChild(popup);
    })
    popup.appendChild(exit);

    // for the next container that someone clicks, it follows the same sequence

})

//setTimeout(function(){
    //$(".column").each(function(){
      //  $(this).removeClass("move");
   // });
//}, 1000);


setTimeout(function(){
    $("#column1").removeClass("move");
}, 400);

setTimeout(function(){
    $("#column2").removeClass("move");
}, 500);

setTimeout(function(){
    $("#column3").removeClass("move");
}, 600);

setTimeout(function(){
    $("#column4").removeClass("move");
}, 700);

setTimeout(function(){
    $("#column5").removeClass("move");
}, 800);

setTimeout(function(){
    $("#column6").removeClass("move");
}, 900);

setTimeout(function(){
    $("#column7").removeClass("move");
}, 1000);

