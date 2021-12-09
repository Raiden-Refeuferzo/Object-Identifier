status="";
object=[];
function preload()
{

}
function setup()
{
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status:Detecting Objects";
}
function modelLoaded()
{
    console.log("Model Loaded");
    status=true;
    objectDetector.detect(img,gotResults);
}
function gotResults(error,results)
{
    if(error)
    {
        console.log(error);
    }
    else
    {
        console.log(results);
        object=results;
    }
}
function draw()
{
    if(status != "")
        {
            for(i=0;i<object.length;i++)
            {
                document.getElementById("status").innerHTML="Status:Object Detected";
                fill("#374A67");
                noFill();
                var percent=floor(object[i].confidence*100);
                text(object[i].label+" "+percent+"%",object[i].x,object[i].y);
                stroke("#374A67");
                rect(object[i].x,object[i].y,object[i].width,object[i].height);

            }
        }
}