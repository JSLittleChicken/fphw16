function generateKey(length,characters) {
    let result = '';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.random() * charactersLength);
    }
    return result;
}
let characters = 'abcdefghijklmnopqrstuvwxyz0123456789'
console.log(generateKey(16,characters))  
