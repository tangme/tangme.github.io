(function(window) {
    function PageObj() {
        this.$selfinfoTab;
        this.$selfinfoMainDiv;
        this.$projectTab;
        this.$projectMainDiv;
    }
    PageObj.prototype = {
        constructor: PageObj
    }
    window.PageObj = new PageObj();
})(window);

$.fn.extend({
    animateCss: function(animationName, callback) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
            if (callback) {
                callback();
            }
        });
        return this;
    }
});

$(document).ready(function() {
    PageObj.$selfinfoTab = $("#selfinfo-tab");
    PageObj.$selfinfoMainDiv = $("#selfinfoMainDiv");
    PageObj.$projectTab = $("#project-tab");
    PageObj.$projectMainDiv = $("#projectMainDiv");


    PageObj.$projectTab.click(function() {
        if (!$(this).hasClass("selectedTab")) {
            $(this).addClass("selectedTab");
            PageObj.$selfinfoTab.removeClass("selectedTab");
            PageObj.$selfinfoMainDiv.stop(true,true);
            PageObj.$projectMainDiv.stop(true,true);
            PageObj.$selfinfoMainDiv.animateCss("fadeOutRight", function() {
                PageObj.$selfinfoMainDiv.css("display", "none");
                PageObj.$projectMainDiv.css("display", "block");
                PageObj.$projectMainDiv.animateCss("fadeInLeft");
            });
        }

    });
    PageObj.$selfinfoTab.click(function() {
        if (!$(this).hasClass("selectedTab")) {
            $(this).addClass("selectedTab");
            PageObj.$projectTab.removeClass("selectedTab");
            PageObj.$selfinfoMainDiv.stop(true,true);
            PageObj.$projectMainDiv.stop(true,true);
            PageObj.$projectMainDiv.animateCss("fadeOutLeft", function() {
                PageObj.$projectMainDiv.css("display", "none");
                PageObj.$selfinfoMainDiv.css("display", "block");
                PageObj.$selfinfoMainDiv.animateCss("fadeInRight");
            });
        }

    });
    $("#guideTab").sticky({
            topSpacing: 0,
            zIndex:9
    });
    new WOW().init();
});