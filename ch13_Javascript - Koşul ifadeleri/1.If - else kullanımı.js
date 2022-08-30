

const firstName = "çağla"
const userName = "çağlayilmaz"
const age = 20
const isStudent = true
const school = "university"

if (userName == "çağlayilmaz") {
    console.log("Merhaba Çağla")
} else {
    console.log("Kullanıcı Bulunamadı")
}

if (age === 20) {
    console.log("20 yasındasınız")
}

if (isStudent) {
    console.log("ögrencisiniz")
}

if (isStudent == true) {
    console.log("ögrencisiniz")
}

if (age >= 18) {
    if (school == "university") {
        console.log("Ehliyet alabilirsin")
    }
}

let id
if (typeof id != "undefined") {
    console.log("id: " + id)
} else {
    console.log("no id")
    console.log(typeof id)
}


if (age < 10) {
    console.log("kucuksun")
} else if (age < 20) {
    console.log("gencsin")
} else {
    console.log("yetiskinsin")
    
}
