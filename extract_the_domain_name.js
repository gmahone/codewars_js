function domainName(url){
  let subUrl = url.split("://");
  subUrl = subUrl[subUrl.length - 1];
  subUrl = subUrl.split("www.");
  subUrl = subUrl[subUrl.length - 1];
  subUrl = subUrl.split(".")[0];
  return subUrl;
}
