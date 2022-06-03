function mdProcessorBuilder(destination)
{
    
    function mdCallback()
    {
        var text = this.responseText;
        var html = converter.makeHtml(text);
        outerhtml = html;
        destination.innerHTML = html;
    }
    return mdCallback;
}

function mdLoader(route, location)
{
    var req = new XMLHttpRequest();
    req.addEventListener("load", mdProcessorBuilder(location));
    req.open("GET", route);
    req.send();
}

var converter = new showdown.Converter();
var index = document.getElementById("about");
var dest = document.getElementById("subpage-body");