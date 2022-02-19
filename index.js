var sbar, sbutton, icontent, pcontent;
sbutton = document.getElementById("search_button");
sbar = document.getElementById("search_bar");
icontent = document.getElementById("i_content").childNodes;
pcontent = document.getElementById("p_content").childNodes;

fetch("http://ipwhois.app/json/"+sbar.value+"?objects=country,city,ip,country_flag")
    .then(res=>res.json())
    .then((data) => {
        pcontent[0].innerHTML = "IP: "+ "<b>" + data.ip + "</b>";
        pcontent[1].innerHTML = "Country:  "+ "<b>" + data.country + "</b>";
        pcontent[2].innerHTML = "City: " + "<b>" + data.city + "</b>";
        // image part
        icontent[0].src=data.country_flag;
        icontent[0].style.height ="auto";
        pcontent[2].scrollIntoView()
        // scrollTo(0, window.innerHeight)
});

sbutton.addEventListener("click", ()=>{
    fetch("http://ipwhois.app/json/"+sbar.value+"?objects=country,city,ip,country_flag")
    .then(res=>res.json())
    .then((data) => {
        pcontent[0].innerHTML = "IP: "+ "<b>" + data.ip + "</b>";
        pcontent[1].innerHTML = "Country:  "+ "<b>" + data.country + "</b>";
        pcontent[2].innerHTML = "City: " + "<b>" + data.city + "</b>";
        // image part
        icontent[0].src=data.country_flag;
        icontent[0].style.height ="auto";
        pcontent[2].scrollIntoView()
        // scrollTo(0, window.innerHeight)
    });
})