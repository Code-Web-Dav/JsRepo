Name = "malayalam"

function isPali(Str){
    f = ""
    for(i=Str.length-1;i>=0;i--){
        f+=Str[i]
    }
    if(f==Str){
        return true
    }else{
        return false
    }
}
if(isPali(Name)){
    console.log(Name + " is Palindrome !")
}else{
    console.log(Name + " is Not Palindrome")
}
if(isPali("Computer")){
    console.log("Computer" + " is Palindrome !")
}else{
    console.log( "Computer"+ " is Not Palindrome")
}