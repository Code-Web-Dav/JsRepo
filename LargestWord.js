String = "Apple is a Fruit"

s = String.split(" ")
L = 0
Ans = ""
for(i=0;i<s.length;i++){
    if(s[i].length > L){
        L = s.length
        Ans = s[i]
    }
}
console.log(Ans)