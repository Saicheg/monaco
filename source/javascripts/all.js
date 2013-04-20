//= require_tree .

function animate(tagId, alfa, step) {
    div = document.getElementById(tagId);
    var items = new Array();
    for (c = i = 0; i < div.childNodes.length; i++) {
        if (div.childNodes[i].tagName == "IMG") {
            items[c] = div.childNodes[i];
            c++;
        }
    }
    last = items[items.length - 1];
    next = items[items.length - 2];
    last.style.opacity = alfa / 100;
    last.style.filter = "progid:DXImageTransform.Microsoft.Alpha(opacity=" + alfa + ")";
    last.style.filter = "alpha(opacity=" + alfa + ")";

    if ((alfa - step) > 0) {
        setTimeout("animate('" + tagId + "'," + (alfa - step) + "," + step + ");", 50);
    } else {
        next.style.opacity = 1;
        next.style.filter = "progid:DXImageTransform.Microsoft.Alpha(opacity=100)";
        next.style.filter = "alpha(opacity=100)";
        tmp = last;
        div.removeChild(last);
        div.insertBefore(tmp, items[0]);
        tmp.style.opacity = 1;
        tmp.style.filter = "progid:DXImageTransform.Microsoft.Alpha(opacity=100)";
        tmp.style.filter = "alpha(opacity=100)";

        <!-- to change seconds-->
        setTimeout("slideSwitch('" + tagId + "',1000)", 4000);
        <!-- to change seconds -->
    }
}
function slideSwitch(tagId, speed) {
    div = document.getElementById('slideshow');
    if(div != null) {
      if (div.style.visibility != "visible") {
          div.style.visibility = "visible";
      }
      items = div.getElementsByTagName('img');
      if (items.length > 0) {
          animate(tagId, 100, 10);
      }
    }
}
setTimeout("slideSwitch('slideshow',1000);", 2000);

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-18924105-1']);
_gaq.push(['_trackPageview']);

$(function(){
  $('#gallery a').lightBox();
}());

(function () {
    var ga = document.createElement('script');
    ga.type = 'text/javascript';
    ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(ga, s);
})();

$(function(){
    var dateRegExp = /(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), {0,1}(January|February|March|April|May|June|July|August|September|October|November|December) \d{1,2}, {0,1}\d{4}/

    $("#policiesCheckBox").change(function(){
      $("#requestTable").toggle()
    });

    $("#field-321809a2e8bce35").attr("readonly", "readonly");

    $("#field-1d28e38940b442e, #field-868ca07448b9bc4").datepicker({
        showOn: "button",
        buttonImage: "images/calendar.gif",
        buttonImageOnly: true,
        dateFormat: 'DD, MM dd, yy'
    });

    $("form :submit").click(function(event){
        event.preventDefault();
        if(dateRegExp.test($("#field-1d28e38940b442e").val()) && dateRegExp.test($("#field-868ca07448b9bc4").val())) {
            $(this).parents("form").submit();
        }
        else {
            alert("Dates format is wrong!\nExample: Tuesday, January 31, 2012 ");
        }
    });

    $("#field-1d28e38940b442e, #field-868ca07448b9bc4").change(function() {
        if (document.getElementById('field-1d28e38940b442e').value != '' && document.getElementById('field-868ca07448b9bc4').value != '') {
            var arrDate = new Date(document.getElementById('field-1d28e38940b442e').value);
            var depDate = new Date(document.getElementById('field-868ca07448b9bc4').value);
            var days = Math.round((depDate - arrDate) / 86400000);
            if (days > 0) {
                if (days < 15) {
                    document.getElementById('field-321809a2e8bce35').value = days;
                }
                else {
                    alert('Maximum number of days is 14!');
                    document.getElementById('field-321809a2e8bce35').value = '';
                }
            }
            else {
                alert('Check your days!');
                document.getElementById('field-321809a2e8bce35').value = '';
            }

        }
    });
});
