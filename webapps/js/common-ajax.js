
function tzAjax(url, method, data, successCbk, errorCbk) {

    //url = apiHost+url;

    /*if(!host) {
     host = window.location.href;
     }*/
    //regex - url - http | https ://
    var host = '';
    var patt = new RegExp("^(http|https)");
    var res = patt.test(url);
    if (res) {
        host = url;
    }
    else {
        host = url;
    }
    $.ajax({
        statusCode: {
            425: function() {
                console.log( "Session Expired" );
            },
            427: function() {

                console.log( "Not in Session" );
            }
        }
    });
    $.ajax({

        url: url,
        method: method,
        data: data,

        //dataType: "json",
        success: function (result) {
            if (successCbk && typeof successCbk == "function") {
                successCbk(result)
            }
            else {
                console.log("Error in Ajax success callback")
            }
        },
        error: function(err){
            console.log("Err",err);
            if ( err.responseText === "Session Expired" && err.responseText === "Not in Session") {
            }
            else{
                console.log(err);
                //window.location.href = "/login"
            }
        }

    });
}


