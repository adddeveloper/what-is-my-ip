var sbar, sbutton, content, img;
img = document.createElement("img")
sbutton = document.getElementById("search_button");
sbar = document.getElementById("search_bar");
content = document.getElementById("content");

sbutton.addEventListener("click", ()=>{
    fetch("http://ipwhois.app/json/"+sbar.value+"?objects=country,city,ip,country_flag")
    .then(res=>res.json())
    .then((data) => {
        content.textContent = data.country +""+ data.ip +""+ data.city;
        console.log(data);
        img.src=data.country_flag;
    });
    document.body.appendChild(img)
})