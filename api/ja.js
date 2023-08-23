
const prime = async()=>{
    const response = await fetch("http://20.244.56.144/numbers/primes");
    const data = await response.json();
    return data;
 }

 const fibo = async()=>{
    const response = await fetch("http://20.244.56.144/numbers/fibo");
    const data = await response.json();
    return data;
 }
 const odd = async()=>{
    const response = await fetch("http://20.244.56.144/numbers/odd");
    const data = await response.json();
    return data;
 }
 const rand = async()=>{
    const response = await fetch("http://20.244.56.144/numbers/rand");
    const data = await response.json();
    return data;
 }

 