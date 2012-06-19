// When ready...
window.addEventListener("load",function() {
    // Set a timeout...
    setTimeout(function(){
        // Hide the address bar!
        window.scrollTo(0, 1);
    }, 0);
});
function getViewPort() { 
    var viewPortWidth;
    var viewPortHeight;

    // the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight
    if (typeof window.innerWidth != 'undefined') {
        viewPortWidth = window.innerWidth,
        viewPortHeight = window.innerHeight
    }

    // IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
    else if (typeof document.documentElement != 'undefined'
        && typeof document.documentElement.clientWidth !=
        'undefined' && document.documentElement.clientWidth != 0) {
        viewPortWidth = document.documentElement.clientWidth,
        viewPortHeight = document.documentElement.clientHeight
    }

    // older versions of IE
    else {
        viewPortWidth = document.getElementsByTagName('body')[0].clientWidth,
        viewPortHeight = document.getElementsByTagName('body')[0].clientHeight
    }
    return [viewPortWidth, viewPortHeight];
}

function goBack() {
    window.location.history.go(-1);
}

function logout() {
    if(typeof(Storage)!=="undefined")
    {
        if(localStorage.consumerId) {
            localStorage.consumerId = '';
            localStorage.consumerName = '';
            localStorage.showIdentity = '';
            alert('Logged out successfully');
        } else {
            window.location = 'settings.html';
        }
    }                
}

function loadIndicator () {
    $("body").append('<div id="loader" style="height: 15px; width: 128px;">'+
        '<img src="img/loading-bars.gif"/>'+
        '</div>');
    jQuery.fn.center = function () {
        this.css("position","absolute");
        this.css("top", Math.max(0, (($(window).height() - this.outerHeight()) / 2) + 
            $(window).scrollTop()) + "px");
        this.css("left", Math.max(0, (($(window).width() - this.outerWidth()) / 2) + 
            $(window).scrollLeft()) + "px");
        return this;
    }
    $("#loader").center();    
    $("#loader").hide();
    
}

function showIndicator() {
    $("body").append('<div id="back_loader" class="modalOverlay">');
    $("#loader").show();  
}

function hideIndicator() {
    $('.modalOverlay').remove();
    $("#loader").hide();    
}

function loadPopupBox () {
    $(".pagecontent").append('<div id="popup_box">'+
        '<a id="popupBoxClose"><img src="img/close.png" style="width:20px; height:20px;" /></a>'+
        '<ul class="popupmenu"><li><a href="appointment.html">Appointment</a></li>'+
        '<li><a href="prescription.html">Prescription</a></li>'+
        '<li><a href="services.html">Services</a></li>'+
        '<li><a href="contactUs.html">Contact Us</a></li>'+
        '<li><a href="reviews.html">Reviews</a></li>'+
        '<li><a href="#" onclick="logout()">Logout</a></li>'+
        '</ul></div>');
    var viewportSize = getViewPort();
    var v_Width = viewportSize[0];
    var v_Height = viewportSize[1];

//    $("#popup_box").css({
//        'left':0.2*v_Width
//    });
    $("#popup_box").css({
        'top':0.3*v_Height
    });
    
    $('#popupBoxClose').click( function() {
        unloadPopupBox();
    });
		
    $('.pagecontent').click( function() {
        unloadPopupBox();
    });

}
function unloadPopupBox() {	// TO Unload the Popupbox
    $('#popup_box').fadeOut("slow");
//                    $("#pagecontent").css({ // this is just for style		
//                        "opacity": "1"  
//                    }); 
}	
		
function showPopupBox() {	// To Load the Popupbox
    $('#popup_box').fadeIn("slow");
//                    $("#pagecontent").css({ // this is just for style
//                        "opacity": "0.3"  
//                    }); 		
}            
