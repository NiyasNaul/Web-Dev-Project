
//https://www.youtube.com/watch?v=0LHxvxdRnYc
function getURL()
{
    var url1 = ""
    url1 = document.getElementById("vidUrl").value
    var mainurl = ""
    
    for (var i = 0; i < url1.length; i++) {

        if(url1[i] == "&")
        {
            break;
        }

        mainurl += url1[i]

        if(url1[i] == "/" && url1[i-1] == "m")
        {
            mainurl += "embed/"
            i += 8;
        }
        

     }

    var vid = document.getElementById("videoplayer");
    vid.src = mainurl;
}

