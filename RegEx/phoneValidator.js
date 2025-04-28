// Напишете регулярен израз, който да валидира телефонен номер. Валидни телефони трябва да започват или със код +359 или 0, а телефонът да има поне 6 цифри и максимум 9
function validatePhoneNumber(phoneNumber) {
    const regex = /^(?:\+359|0)\d{6,9}$/;

    return regex.test(phoneNumber);
}

// Примери
console.log(validatePhoneNumber("+359888123456")); // true
console.log(validatePhoneNumber("029881234"));     // true
console.log(validatePhoneNumber("+35982502010"));  // true
console.log(validatePhoneNumber("0878136033"));    // true
console.log(validatePhoneNumber("0888123"));       // true
console.log(validatePhoneNumber("+35988"));        // false твърде кратък
console.log(validatePhoneNumber("1888123456"));    // false не започва с 0 или +359
console.log(validatePhoneNumber("+35988812345678")); // false твърде дълъг
