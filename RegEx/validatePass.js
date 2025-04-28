// Напишете регулярен израз, който да валидира парола. Паролата може да съдържа малки, големи букви, цифри, специални символи и шпация и да е между 8 и 64 символа.Бонус условие: Да се провери и че в паролата има поне една малка буква, поне една голяма буква и поне една цифра.

function validatePassword(password) {
   
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+\[\]{}|;:,.<>?/~\s]{8,64}$/;

    return regex.test(password);
}

//тестове
console.log(validatePassword("Password123"));       // true 
console.log(validatePassword("Passw0rd!"));         // true 
console.log(validatePassword("password"));          // false няма голяма буква или цифра
console.log(validatePassword("PASSWORD123!"));      // false няма малка буква
console.log(validatePassword("12345!@#"));          // false няма малка и голяма буква
console.log(validatePassword("Passw0rd_with_space ")); // true съдържа шпация
console.log(validatePassword("P@ssw0rd"));          // true
console.log(validatePassword("short"));             //твърде кратка
