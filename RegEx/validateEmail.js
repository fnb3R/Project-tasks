// Напишете регулярен израз, който да валидира email адрес. Адресът трябва да позволява букви, цифри, долна черта, точка и знакът плюс преди @ и валиден домейн след @. Домейнът задължително трябва да завършва с точка последвана от поне 2 букви: Пример: john_smith@example.info, test001+simple@gmail.com, ivan.petrov@abv.bg, my_unique_mail.01+comment@sub.domain.example.com и т.н.

function validateEmail(email) {
    
    const regex = /^[A-Za-z0-9._+]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    return regex.test(email);
}

// тестове
console.log(validateEmail("john_smith@example.info"));             // true
console.log(validateEmail("test001+simple@gmail.com"));            // true
console.log(validateEmail("ivan.petrov@abv.bg"));                  // true
console.log(validateEmail("my_unique_mail.01+comment@sub.domain.example.com")); // true
console.log(validateEmail("invalid-email@com"));                   // false домейнът няма точка и 2 букви
console.log(validateEmail("@example.com"));                        // false липсва име преди @
console.log(validateEmail("my_email@domain."));                    // false липсва букви след .
console.log(validateEmail("myemail@domain.c"));                    // false само една буква след .
