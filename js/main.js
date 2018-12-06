var dp = jQuery;

dp(document).ready(function () {
    Grid.init();
    dp("#backtotop").backToTop();
    dp('.bg-about').parallax("10%", 1);
    var videobackground = new dp.backgroundVideo(dp('.bg-video'), {
        "align": "centerXY",
        "muted": "muted",
        "width": 1280,
        "height": 720,
        "path": "video/",
        "filename": "steven",
        "types": ["mp4", "ogg", "webm"]
    });
    var videobackground = new dp.backgroundVideo(dp('.home-video'), {
        "align": "centerXY",
        "muted": "muted",
        "width": 1280,
        "height": 720,
        "path": "video/",
        "filename": "cloud",
        "types": ["mp4", "ogg", "webm"]
    });
    dp(".animatez").waypoint(function (direction) {
        var effect = dp(this).attr('data-effect');
        dp(this).removeClass('animatez');
        dp(this).addClass('animated ' + effect);
    }, {offset: '70%'});
    dp(".sscroll").smoothScroll();
    dp("#sscroll_contact").smoothScroll({offset: 50});
    dp(".responsive-video").fitVids();
    if (dp.fn.backstretch) {
        var bg_image = dp(".home-image");
        var bg_image_src = bg_image.data("src");
        bg_image.backstretch(bg_image_src);
    }
});
