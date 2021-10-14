let outputText = []

const KentsThing= (inputstring) => {
    for (i =0; i < inputstring.length; i++){
    if (inputstring[i] === "a"){
    outputText.push("1")
    
        }
    if (inputstring[i] === "b"){
            outputText.push("$2")
            
    }if (inputstring[i] === "c"){
                    outputText.push("3")
                    
    }
    }
}
KentsThing("aabc")
console.log(outputText)
// b=2
// c=3
// d=4
// e=5
// f=6
// g=7
// h=8
// i=9
// j=10
// k=11
// l=12
// m=13
// n=14
// o=15
// p=16
// q=17
// r=18
// x=19
// t=20
// u=21
// v=22
// w=23
// x=24
// y=25
// z=26