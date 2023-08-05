var lg=["HTML", "CSS", "JS"]
var gl=0
$(".button").click(function(){
    var gl1=gl++
    $("span").text(lg[gl])
    if(gl===2){
        gl=-1
    }
});