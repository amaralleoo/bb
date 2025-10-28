i = 0
let vet = []
do{
        msg = Number(prompt('digite  numeros. (digite 0 para encerrar)'))
         vet[i] = msg
         i++
}while (msg !==0)
    vet.pop()    

let par = []
let impar = []
let j = 0
let k = 0

for (i = 0; i < vet.length; i++){
     if (vet[i] % 2 == 0){
    par [j] = vet[i]
        j++
    }
    else if(vet[i] % 2 !== 0){
        impar[k] = vet[i]
        k++
    }
} 
console.log(`numeros pares ${par}`)
console.log(`numeros impares ${impar}`)