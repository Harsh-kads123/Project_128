songs = "";
leftWristX = 0;
leftWristY = 0;


rightWristX = 0;
rightWristY = 0;

function setup()
{
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded()
{
    console.log("Pose Net is initialized");
}

function draw()
{
    image(video ,0,0,600,500);
}

function preload()
{
    songs = loadSound("music.mp3");
    songs = loadSound("music2.mp3");
}

function Play()
{
    songs.play();
    songs.setVolume(1);
    songs.rate(1);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX + "leftWristY = " + leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX + "rightWristY = " + rightWristY);
    }
}