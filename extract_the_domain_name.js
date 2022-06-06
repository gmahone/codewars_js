function domainName(url){
  let subUrl = url.split("://");
  subUrl = subUrl[subUrl.length - 1];
  subUrl = subUrl.split("www.");
  subUrl = subUrl[subUrl.length - 1];
  subUrl = subUrl.split(".")[0];
  return subUrl;
}

// other solutions

// solution with replaces then split
function domainName(url){
  url = url.replace("https://", '');
  url = url.replace("http://", '');
  url = url.replace("www.", '');
  return url.split('.')[0];
};

// direct return of replaces with split
function domainName(url){
  return  url.replace('http://', '')
             .replace('https://', '')
             .replace('www.', '')
             .split('.')[0];
}

// regex solution
function domainName(url){
  return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
}
