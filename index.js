var lg=["HTML", "CSS", "JS"]
var gl=0
$("#BTN").click(function(){
    var gl1=gl++
    $(".BTN").text(lg[gl])
    if(gl===2){
        gl=-1
    }
});