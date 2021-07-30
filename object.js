/* 
====================================
materi object
====================================
*/ 

// object : tipe data
// properti dan method

// cara 1
let object = {
    age : 23,
    name : "afis", 
    salam() {
        return "helo nama saya afis"
    }
}

// console.log(object)

// memanggil atau menggunakan value di object
console.log(object.name)
console.log(object["name"])

// kita coba assign properti dengan value baru
object.name = "pratama"

// menghapus properti dan juga valuenya
delete object.name

// kita membuat properti baru dengan value
object.fullname = "afista pratama"

// console.log(object.salam())


/* 
====================================
pass by value sama pass by reference
====================================
*/ 

let obj = {
    name : "afis",
    age : 23
}

// pass by reference

let obj2 = obj

// pass by value
let obj2 = {...obj}

// obj2.name = "pratama"

// passing by reference
// ketika si object utamanya diubah, maka yg memakai referensinya akan ikut berubah


// passing by value
// kita memberikan value ke object yang mau minta datanya
// ketika si object utamanya diubah, object yang memakai referensi object utama tidak akan berubah
// using spread operator atau three dot (...)

console.log(obj)
console.log(obj2)

/* 
====================================
Looping object
====================================
*/ 

let kelas = {
    name : "fantastic falkor",
    total : 20,
    platform : "zoom",
    pria : 18,
    wanita : 2,
    jamkelas : "09-00 - 17.00"
}

let kaki = {
    jariKaki : 5,
    posisiKaki : "bawah"
}

let tangan = {
    jariTangan : 5,
    posisiTangan : "atas"
}

// join two object with target kaki join with tangan
Object.assign(tangan, kaki)

console.log(tangan)


for (let properti in kelas) {
    console.log(kelas[properti])
    // kelas[name]
    // kelas[total]
    // kelas[platform].. dll
}

/* 
====================================
using this
====================================
*/ 

let object = {
    age : 23,
    name : "afis", 
    salam() {
        return "helo nama saya " + this.name
    },
    umur() {
        return "umur saya, " + this.age
    },
    tahunlahir() {
        return 2020 - this.age
    }
}

let object2 = {
    age : 17,
    name : "dimas",
    salam() {
        return "helo nama saya " + this.name
    },
}

console.log(object.salam())
console.log(object2.salam())
console.log(object.tahunlahir())

/* 
====================================
array of object
====================================
*/ 

let data = [
    {
        age : 17,
        name : "dimas",
    }, 
    {
        name : "afis",
        age : 23,
    }, 
    {
        name : "Hamdi",
        age : 12,
    }
]

// SHOW "dimas"
console.log(data[0].name)

for (let i = 0 ; i < data.length ; i++) {
    for (let properti in data[i]) {
        console.log(data[i][properti])
    }
}

// expect looping :
// 17
// "dimas"
// 23
// "afis"
// 12
// "hamdi"

/*
======================
latihan array of onject
======================
*/

let data = [
    {
        name : "afis",
        jenisKelamin : "L"
    },
    {
        name : "fathya",
        jenisKelamin : "P"
    },    
    {
        name : "ihsan",
        jenisKelamin : "L"
    },    
    {
        name : "ysuril",
        jenisKelamin : "L"
    },
]

// diubah menjadi lebih informatif
/*
{
    lakiLaki : 3,
    perempuan: 1,
}
*/

// SOLVE

let hasil = {}

let lakiLaki = 0
let perempuan = 0

for (let i = 0 ; i < data.length ;i++) {
    if (data[i].jenisKelamin === "L") {
        lakiLaki++
    } else {
        perempuan++
    }
}

hasil.lakiLaki = lakiLaki
hasil.perempuan = perempuan

console.log(hasil)



