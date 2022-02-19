var sbar, sbutton, icontent, pcontent;
sbutton = document.getElementById("search_button");
sbar = document.getElementById("search_bar");
// fetch("http://ipwhois.app/json/"+sbar.value)
//     .then(res=>res.json())
//     .then((data) => {
//         document.getElementById("ip").innerHTML = "IP: "+ "<b>" + data.ip + "</b>";
//         document.getElementById("country").innerHTML =  "Country:  "+ "<b>" + data.country + "</b>";
//         document.getElementById("region").innerHTML = "Region: " + "<b>" + data.region + "</b>";
//         document.getElementById("city").innerHTML = "City: " + "<b>" + data.city + "</b>";
//         document.getElementById("org").innerHTML = "Organization: " + "<b>" + data.org + "</b>";
//         // image part
//         document.getElementById("flagimg").src=data.country_flag;
//         document.getElementById("flagimg").style.height ="auto";
//         document.getElementById("org").scrollIntoView()
//         // scrollTo(0, window.innerHeight)
// });

var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://ipwhois.app/json/", true);
    xhr.onload = function(){
        if(this.status == 200){
            var content = JSON.parse(this.responseText);
            document.getElementById("ip").innerHTML = "IP: "+ "<b>" + content.ip + "</b>";
            document.getElementById("country").innerHTML =  "Country:  "+ "<b>" + content.country + "</b>";
            document.getElementById("region").innerHTML = "Region: " + "<b>" + content.region + "</b>";
            document.getElementById("city").innerHTML = "City: " + "<b>" + content.city + "</b>";
            document.getElementById("org").innerHTML = "Organization: " + "<b>" + content.org + "</b>";
            // image part
            document.getElementById("flagimg").src=content.country_flag;
            document.getElementById("flagimg").style.height ="auto";
            document.getElementById("org").scrollIntoView()
        }
}
xhr.send();
sbutton.addEventListener("click", ()=>{
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://ipwhois.app/json/"+sbar.value, true);
    xhr.onload = function(){
        if(this.status == 200){
            var content = JSON.parse(this.responseText);
            document.getElementById("ip").innerHTML = "IP: "+ "<b>" + content.ip + "</b>";
            document.getElementById("country").innerHTML =  "Country:  "+ "<b>" + content.country + "</b>";
            document.getElementById("region").innerHTML = "Region: " + "<b>" + content.region + "</b>";
            document.getElementById("city").innerHTML = "City: " + "<b>" + content.city + "</b>";
            document.getElementById("org").innerHTML = "Organization: " + "<b>" + content.org + "</b>";
            // image part
            document.getElementById("flagimg").src=content.country_flag;
            document.getElementById("flagimg").style.height ="auto";
            document.getElementById("org").scrollIntoView()
        }
}
xhr.send();
})