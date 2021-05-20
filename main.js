noseX=0;
noseY=0;
leftEyeX=0;
leftEyeY=0;

function preload()
{
    clown_nose = loadImage('https://i.postimg.cc/NjQPh7kx/clown-nose-1.jpg');
    wolf_glasses = loadImage('https://i.postimg.cc/7ZJHJ2R0/blue-tiger-eyes-adult-aviator-party-shades-ra26767f297f64c35931dea77e3604021-zz7zs-307.jpg')
    mustache = loadImage("https://i.postimg.cc/fLNZBypv/Moustache-PNG-Pic.png")
}

function setup()
{
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses)
}

function modelLoaded()
{
    console.log('PoseNet Is Initialized')
}

function draw()
{
    image(video,0,0,300,300);
    fill(255,0,0);
    stroke(255,0,0);
    //circle(noseX,noseY,20);
   // image(clown_nose , noseX , noseY , 30 , 30);
   // image(wolf_glasses , leftEyeX , leftEyeY , 100 , 30);
    image(mustache , noseX -25 , noseY +8 , 80 , 50);

}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x -10 ;
        noseY = results[0].pose.nose.y -10 ;
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
        lefteyeX = results[0].pose.leftEye.x -10 ;
        lefteyeY = results[0].pose.leftEye.y -10 ;
        console.log("left Eye x = " + results[0].pose.leftEye.x);
        console.log("left Eye y = " + results[0].pose.leftEye.y);
    }
}

function take_snapshot()
{
    save("Ekansh.png");
}