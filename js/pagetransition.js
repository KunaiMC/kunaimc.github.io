$(document).ready(function(){
    console.log("Welcome to my JS, brave traveler.");
    console.log("Don't ask.");
    console.log("this is cool I guess...");
    console.log("Made with love for KunaiMC by nekekii <3");
    $("#social").html('<img src="images/youtube.png" id="youtube"><img src="images/twitter.png" id="tw"><img src="images/namemc.jpg" id="mc"><img src="images/osu.png" id="osu"><img src="images/discord.png" id="discord">');
    $("#text").css("top", "-100vh");
    $("#text").animate({top: '25vh'}, 1000);

    $("#youtube").click(function(){
        //disable for mobile
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
          window.location.href = "https://www.youtube.com/c/KunaiMC";
        }else{
          $("#text").animate({left: '-100vw'}, 1000, function(){
            console.log("Have a nice day! See you on YouTube.");
            window.location.href = "https://www.youtube.com/c/KunaiMC";
          });
        }
    });

    $("#tw").click(function(){
        //disable for mobile
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
          window.location.href = "https://twitter.com/kunaiyt";
        }else{
          $("#text").animate({top: '100vw'}, 1000, function(){
            console.log("Have a nice day! See you on Twitter.");
            window.location.href = "https://twitter.com/kunaiyt";
          });
        }
    });

    $("#mc").click(function(){
        //disable for mobile
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
          window.location.href = "https://namemc.com/profile/Koyano";
        }else{
          $("#text").animate({top: '100vw'}, 1000, function(){
            console.log("Have a nice day! See you on Twitter.");
            window.location.href = "https://namemc.com/profile/Koyano";
          });
        }
    });

    $("#osu").click(function(){
        //disable for mobile
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
          window.location.href = "https://osu.ppy.sh/u/Kunay";
        }else{
          $("#text").animate({top: '100vw'}, 1000, function(){
            console.log("Have a nice day! See you on Twitter.");
            window.location.href = "https://osu.ppy.sh/u/Kunay";
          });
        }
    });

    $("#discord").click(function(){
        //disable for mobile
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
          window.location.href = "https://discord.gg/DS8HTn6";
        }else{
          $("#text").animate({left: '100vw'}, 1000, function(){
            console.log("Have a nice day! See you on Discord.");
            window.location.href = "https://discord.gg/DS8HTn6";
          });
        }
    });
});
