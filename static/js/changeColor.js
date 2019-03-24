function $(str){
    if(str.charAt(0)=="#"){
        return document.getElementById(str.substring(1));
    }else if(str.charAt(0)=="."){
        return document.getElementsByClassName(str.substring(1));
    }else{
        return document.getElementsByTagName(str);
    }
}

function getColor(){
    var str="#";
    for(var i=0;i<6;i++){
        str+=(parseInt(Math.random()*16)).toString(16);
    }
    return str;
}

