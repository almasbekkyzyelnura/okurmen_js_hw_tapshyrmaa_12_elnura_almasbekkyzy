$(document).ready(function () {
    $('#paragraph').text('Салам дуйно!').css('color', 'black').css('font-size', '38px');
});






let newElement = $("<p>").html("Бул код динамикалык турдо тузулду");
$("body").append(newElement);






$("li").each(function (index) {
    console.log(index + ":" + $(this).text());
    $("li").addClass("List-item");
});







$(function () {
    $("a").attr("target", "_blank");
    for (let i = 0; i < nums.length; i++) {
        elements[i].setAttribute("target", "_blank");
        
    }
    
});