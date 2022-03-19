var sbar, sbutton, icontent, pcontent;
sbutton = document.getElementById("search_button");
sbar = document.getElementById("search_bar");
fetch("https://ipwhois.app/json/"+sbar.value)
    .then(res=>res.json())
    .then((data) => {
        var content = data;
        document.getElementById("ip").innerHTML = "IP: "+ "<b>" + content.ip + "</b>";
        document.getElementById("country").innerHTML =  "Country:  "+ "<b>" + content.country + "</b>";
        document.getElementById("region").innerHTML = "Region: " + "<b>" + content.region + "</b>";
        document.getElementById("city").innerHTML = "City: " + "<b>" + content.city + "</b>";
        document.getElementById("org").innerHTML = "Organization: " + "<b>" + content.org + "</b>";
        // image part
        document.getElementById("flagimg").src=content.country_flag;
        document.getElementById("flagimg").style.height ="auto";
        document.getElementById("org").scrollIntoView()
});

sbutton.addEventListener("click", ()=>{
    fetch("https://ipwhois.app/json/"+sbar.value)
    .then(res=>res.json())
    .then((data) => {
        var content = data;
        document.getElementById("ip").innerHTML = "IP: "+ "<b>" + content.ip + "</b>";
        document.getElementById("country").innerHTML =  "Country:  "+ "<b>" + content.country + "</b>";
        document.getElementById("region").innerHTML = "Region: " + "<b>" + content.region + "</b>";
        document.getElementById("city").innerHTML = "City: " + "<b>" + content.city + "</b>";
        document.getElementById("org").innerHTML = "Organization: " + "<b>" + content.org + "</b>";
        // image part
        document.getElementById("flagimg").src=content.country_flag;
        document.getElementById("flagimg").style.height ="auto";
        document.getElementById("org").scrollIntoView()
    });
})