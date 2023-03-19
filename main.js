function preload(){

}

function setup()
{
    canvas = createCanvas(640, 480);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide()
}


function draw()
{
    image(video, 125, 125, 250, 250)

    fill("Chartreuse")
    rect(75, 75, 25, 400)

    rect(75, 75, 400, 25)

    rect(450, 75, 25, 400)

    rect(75, 450, 400, 25)
}

function take_snapshot()
{
    save("bday_picture.png")
}
function filter_tint()
{
    tint_colour = document.getElementById("colour_name").value
}



