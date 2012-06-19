function setPageContentSize (bottomBarHeight) {
    var viewportSize = getViewPort();
    var v_Width = viewportSize[0];
    var v_Height = viewportSize[1];
    
//    var navBarHeight = 44;
    //    if (bottomBarHeight == undefined)
    //          bottomBarHeight = 44;
//    v_Height = v_Height- (navBarHeight);
//    $("#pagecontent").height(v_Height);
    $("#pagecontent").css('min-height', v_Height+5);
//    $(".navBar").width(v_Width);
//    alert(v_Height +","+ v_Width);    
}

function setHomePageSize () {
    var viewportSize = getViewPort();
    var v_Width = viewportSize[0];
    var v_Height = viewportSize[1];    
//    var navBarHeight = 44;
//    v_Height = v_Height- (navBarHeight);
    $("#homecontent").height(v_Height+5);
}

function setButtonGroupSize() {
    var o_Height = $("#o_List").height();
    var o_Width = $("#o_List").width();
    
    var o_Icon_Height = 0.7 * o_Height;
    var o_Icon_Width = .15 *o_Width;
    
    $(".b_Icon").height(o_Icon_Height);
    $(".b_Icon").width(o_Icon_Width);
}
