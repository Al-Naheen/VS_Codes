function sockMerchant(n, ar) {
    let res= 0;
    ar.sort((x,y)=> x-y)
    for(let i=0; i<n; i++){
        if(ar[i]==ar[i+1])
        res+=1;
    }
    console.log(res)
 }

 sockMerchant(4,[2,2,3,1])