function hasher(targetString){
    let hashedValue,unicodeArray=[],hashedString="";
    for(let k=0;k<3;k++){
    for(let i=0;i<targetString.length;i++){
          let unicodeValue=targetString.charCodeAt(i);
          let hashMeta = (i+(2+k))*(i+1+k*(k-1));
          hashedValue = unicodeValue+hashMeta;
          console.log(hashedValue);
          unicodeArray[i] = hashedValue;
        if(hashedValue>64&&hashedValue<97)
            hashedValue+=32;
        else if(hashedValue>122){
            hashedValue-=32;
        }
        console.log(hashedValue);
        hashedString += String.fromCharCode(hashedValue);
    }
}
    console.log(hashedString);
    return hashedString;
}

// hasher("sev47@");

export default function authenticator(targetString,hashedString){
    let target = hasher(targetString);

    if(target == hashedString) console.log(true);
    else console.log(false);
}

 authenticator("sev47@","lzpy~o");