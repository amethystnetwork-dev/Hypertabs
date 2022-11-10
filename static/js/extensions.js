/*
  _____                   _                _     _                                                                      
 |  __ \                 | |              | |   | |                                                                     
 | |__) |   ___    _ __  | |_    ___    __| |   | |__    _   _                                                          
 |  ___/   / _ \  | '__| | __|  / _ \  / _` |   | '_ \  | | | |                                                         
 | |      | (_) | | |    | |_  |  __/ | (_| |   | |_) | | |_| |                                                         
 |_|       \___/  |_|     \__|  \___|  \__,_|   |_.__/   \__, |                                                         
                                                          __/ |                                                         
                                                         |___/                                                          
                                _     _                     _       _   _          _                               _    
     /\                        | |   | |                   | |     | \ | |        | |                             | |   
    /  \     _ __ ___     ___  | |_  | |__    _   _   ___  | |_    |  \| |   ___  | |_  __      __   ___    _ __  | | __
   / /\ \   | '_ ` _ \   / _ \ | __| | '_ \  | | | | / __| | __|   | . ` |  / _ \ | __| \ \ /\ / /  / _ \  | '__| | |/ /
  / ____ \  | | | | | | |  __/ | |_  | | | | | |_| | \__ \ | |_    | |\  | |  __/ | |_   \ V  V /  | (_) | | |    |   < 
 /_/    \_\ |_| |_| |_|  \___|  \__| |_| |_|  \__, | |___/  \__|   |_| \_|  \___|  \__|   \_/\_/    \___/  |_|    |_|\_\
                                               __/ |                                                                    
                                              |___/                                                                     
*/

const _setInfo = setInfo;
class Tab {
  static async getActive() {
    return document.getElementById(getActiveFrameId()).contentDocument;
  }
  static async getList() {
    let children = document.querySelector(".chrome-tabs-content").children;
    for (child in children) {
      console.log(typeof child);
      if (typeof child === "number") {
        console.log(children[child].attributes);
      }
    }
  }
}
class Page {
  static async register(info) {
    let img = document.createElement("img");
    img.className = "extenico";
    img.src = info.icon64;
    img.setAttribute("onclick", info.name + ".Menu()");
    console.log(document.getElementById("extensionlist"));
    document.getElementById("extensionlist").appendChild(img);
  }
  static async showEx(details) {
    let ediv = document.createElement("div");
    ediv.style.width = "512px";
    ediv.style.height = "512px";
  }
  static async URL(tab) {}
  static async params(tab) {}
  static async frame(tab) {}
}
class Util {
  static formUrl(url) {
    let purl;
    try {
      purl = new URL(url);
      console.log(purl);
    } catch {
      alert(
        "An extension has caused an issue while making a web request! ",
        console.trace()
      );
    }
    return xor.encode(purl.origin + purl.pathname + purl.search);
  }
}
class Request {
  static async post(url, headers = {}, data) {
    url = Util.formUrl(url);
    console.log(url);
    let res = await fetch(prefix + url, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: headers,
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
    });
    return res;
  }
  static async get(url, headers = {}) {
    url = Util.formUrl(url);
    let res = await fetch(prefix + url, {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
      headers: headers,
      redirect: "follow",
      referrerPolicy: "no-referrer",
    });
    return res;
  }
  static async put(url, headers = {}, data = {}) {
    url = Util.formUrl(url);
    let res = await fetch(prefix+ url, {
      method: "PUT",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: headers,
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
    });
    return res;
  }
  //   finish this one
  static async delete(url, headers = {}, data = {}) {
    url = Util.formUrl(url);
    let res = await fetch(prefix + url, {
      method: "DELETE",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: headers,
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
    });
    return res;
  }
}
