var sbar, sbutton, icontent, pcontent;
sbutton = document.getElementById("search_button");
sbar = document.getElementById("search_bar");
fetch("http://ipwhois.app/json/"+sbar.value)
    .then(res=>res.json())
    .then((data) => {
        document.getElementById("ip").innerHTML = "IP: "+ "<b>" + data.ip + "</b>";
        document.getElementById("country").innerHTML =  "Country:  "+ "<b>" + data.country + "</b>";
        document.getElementById("region").innerHTML = "Region: " + "<b>" + data.region + "</b>";
        document.getElementById("city").innerHTML = "City: " + "<b>" + data.city + "</b>";
        document.getElementById("org").innerHTML = "Organization: " + "<b>" + data.org + "</b>";
        // image part
        document.getElementById("flagimg").src=data.country_flag;
        document.getElementById("flagimg").style.height ="auto";
        document.getElementById("flagimg").scrollIntoView()
        // scrollTo(0, window.innerHeight)
});


sbutton.addEventListener("click", ()=>{
    fetch("http://ipwhois.app/json/"+sbar.value)
    .then(res=>res.json())
    .then((data) => {
        document.getElementById("ip").innerHTML = "IP: "+ "<b>" + data.ip + "</b>";
        document.getElementById("country").innerHTML =  "Country:  "+ "<b>" + data.country + "</b>";
        document.getElementById("region").innerHTML = "Region: " + "<b>" + data.region + "</b>";
        document.getElementById("city").innerHTML = "City: " + "<b>" + data.city + "</b>";
        // image part
        document.getElementById("flagimg").src=data.country_flag;
        document.getElementById("flagimg").style.height ="auto";
        document.getElementById("flagimg").scrollIntoView()
        // scrollTo(0, window.innerHeight)
});
})