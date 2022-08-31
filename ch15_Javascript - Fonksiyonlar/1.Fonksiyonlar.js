

// function merhaba() {
//     console.log("Merhaba");
// }
// merhaba();


// function merhaba(name,age) {
//     console.log(`Merhaba ${name}, ${age} yaşındasın`);
// }
// merhaba("serdar",22);


// function yasHesapla(dogumYili) {
//     return 2022 - dogumYili;
// }
// let yas = yasHesapla(2000);
// console.log(yas)


function yasHesapla(dogumYili) {
    return 2022 - dogumYili;
}
function ehliyetAlabilme(dogumYili,isim) {
    let yas = yasHesapla(dogumYili);
    let ehliyet = 18 - yas;
    if(ehliyet>0){
        console.log(`${isim} Ehliyet almana ${ehliyet} kadar yıl kaldı`);
    } else {
        console.log("Ehliyet alabilirsin");
    }
}

ehliyetAlabilme(2004,"serdar");


