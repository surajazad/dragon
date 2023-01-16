console.log("Hi...VS&co Genie Content Script Loads");

function buildSearchKey(searchQuery) {
    if(searchQuery.indexOf("red") !=-1 || searchQuery.indexOf("redbra") !=-1 ) {
        return "redbras";
    } 
    if(searchQuery.indexOf("bras") !=-1 || searchQuery.indexOf("bra") !=-1 ) {
        return "bras";
    }
    if(searchQuery.indexOf("panty") !=-1 || searchQuery.indexOf("panties") !=-1 ) {
        return "panties";
    }
    if(searchQuery.indexOf("lingerie") !=-1 || searchQuery.indexOf("lingerie") !=-1 ) {
        return "lingerie";
    }  
    if(searchQuery.indexOf("vs") !=-1 || searchQuery.indexOf("victorias") !=-1 ) {
        return "vs";
    }  
    if(searchQuery.indexOf("pink") !=-1 || searchQuery.indexOf("PINK") !=-1 ) {
        return "pink";
    }  
    if(searchQuery.indexOf("beauty") !=-1 || searchQuery.indexOf("BEAUTY") !=-1 ) {
        return "beauty";
    }  
    if(searchQuery.indexOf("sleep") !=-1 || searchQuery.indexOf("sleepwear") !=-1 ) {
        return "sleepwear";
    }  
    if(searchQuery.indexOf("valentine") !=-1 || searchQuery.indexOf("valentines") !=-1 ) {
        return "valentine";
    }  
    if(searchQuery.indexOf("gifts") !=-1 || searchQuery.indexOf("gift") !=-1 ) {
        return "gift";
    }
    return null;  
}

chrome.runtime.sendMessage({ data: document.title }, function (response) {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    const searchQuery = params.q || params.oq || "default";
    const query= buildSearchKey(searchQuery);
    if(query) {
     var iframe = document.createElement("iframe");
    const sourceURL = 'https://voluble-kitsune-4003ac.netlify.app/?q='+query;
    iframe.setAttribute("src", sourceURL);
    iframe.setAttribute("loading", "lazy");
    iframe.setAttribute("style", "border:solid; width:300px; height:250px; display: block; position: absolute;top: 150px;right: -30px;border-radius: 10px; transform: translate3d(0, -50%, 0);box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);z-index: 9999;");
    iframe.setAttribute("scrolling", "yes");
    iframe.setAttribute("frameborder", "0");
    document.body.appendChild(iframe);
    }
});
