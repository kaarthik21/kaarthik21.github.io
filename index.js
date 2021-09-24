
$(document).ready(function(){
    // Show hide popover
    $(".MENU").click(function(){
        $(this).find(".sidenav").slideToggle("fast");
    });
});
$(document).on("click", function(event){
    var $trigger = $(".MENU");
    if($trigger !== event.target && !$trigger.has(event.target).length){
        $(".sidenav").slideUp("fast");
    }            
});
