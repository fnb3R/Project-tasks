// Напишете регулярен израз, който да валидира формата на locale. Форматът е две малки букви за код на език и евентуално последвани от долна черта и две големи букви за код на държава. Например: fr, en_US, bg_BG, en_UK, de, de_SW.
function validateLocale(locale) {

    const regex = /^[a-z]{2}(_[A-Z]{2})?$/;

    return regex.test(locale);
}

// тест
console.log(validateLocale("fr"));        
console.log(validateLocale("en_US"));    
console.log(validateLocale("bg_BG"));    
console.log(validateLocale("en_UK"));    
console.log(validateLocale("de"));       
console.log(validateLocale("de_SW"));    
console.log(validateLocale("en_uk"));    
console.log(validateLocale("en-US"));    
console.log(validateLocale("en123"));    
