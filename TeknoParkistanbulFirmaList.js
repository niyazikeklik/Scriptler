var element = document.getElementsByClassName('firma-list')[0].children;
linkler = "";
for (let index = 0; element.length; index++)
    link = element[index].children[0].href
    linkler += link + ", ";
    console.log(index + ". "+link);
}
