function password(obj) {
    if (!obj.hasOwnProperty("birthYear")) {
        return "invalid"
    }
    else {

        const lengthOfBirthYear = obj.birthYear;
        const forLength = lengthOfBirthYear.toString()

        if (!obj.hasOwnProperty("name") || !obj.hasOwnProperty("birthYear") || !obj.hasOwnProperty("siteName")) {
            return "invalid"
        }
        else if (forLength.length < 4) {
            return "invalid"
        }
        else {
            const userName = obj.name;
            const userBirthYear = obj.birthYear;

            const visitedSiteName = obj.siteName;

            const firstLetter = visitedSiteName.charAt(0);
            const firstLetterCapitalize = firstLetter.toUpperCase();
            const remainingLetters = visitedSiteName.slice(1);
            const capitalizeName = firstLetterCapitalize + remainingLetters;

            const userPassword = `${capitalizeName}#${userName}@${userBirthYear}`

            return userPassword;
        }
    }

}


console.log(password( { name: "toky", birthYear: 200, siteName: "Facebook" } ))