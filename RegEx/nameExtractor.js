// Напишете регулярен израз, който да извлече собственото и фамилното име и да го изпише във формат "Фамилия, Собствено".

function extractName(fullName) {
    // Разделям имената по интервали
    const parts = fullName.trim().split(/\s+/);

    if (parts.length < 2) {
        return "Невалиден формат на име.";
    }

    let firstName = parts[0];
    let lastName = parts[parts.length - 1];

    // Ако първата част съдържа тире, я оставям (пример: Ана-Мария)
    // Ако втората част е само една буква + точка, я пропускаме
    if (parts.length === 3 && /^[A-ZА-Я]\.$/u.test(parts[1])) {
        // имаме инициал, първото име е parts[0], фамилията е parts[2]
        lastName = parts[2];
    } else if (parts.length === 3) {
        // нормални три думи, първото име е parts[0], фамилията е parts[2]
        lastName = parts[2];
    } else if (parts.length === 2) {
        // само две думи: първо и фамилно име
        lastName = parts[1];
    }

    return `${lastName}, ${firstName}`;
}

// Примерни тестове
console.log(extractName("Иван Петров Димитров"));       // Димитров, Иван
console.log(extractName("Стоян М. Георгиев"));           // Георгиев, Стоян
console.log(extractName("Георги Стоянов"));              // Стоянов, Георги
console.log(extractName("Ана-Мария Димитрова Петкова")); // Петкова, Ана-Мария
console.log(extractName("НекоректноИме"));               // Невалиден формат име.

