v = "aaabtybv"
var B = {}
console.log(Object.keys(B))
for(i=0;i<v.length;i++){
    if(v[i] in Object.keys(B)){
        B[v[i]]+=1
    }else{
        B[v[i]]=1
    }
}
console.log(B)