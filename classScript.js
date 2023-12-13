/*
 * Youtube (Clever Programmer): JavaScript Tutorial for Beginners - Full Course in 12 Hours (2022)
 * 
 * CHAPTER 15 -- Classes
 */

const nums = [1, 2, 3]
nums.push(4)
console.log('nums = ' + nums)

class Mobil {
    constructor(merek, warna, topSpeed) {
        /* USE of this.OBJECT_PROPERTY
            -> when object is created, 'this.' will become:
            -> OBJECT_NAME.OBJECT_PROPERTY ~~ e.g: (as 'ferrari').merek = (whatever value entered in constructor() parameter 'merek')
            -> SO 'this.' will REFER to the OBJECT that USE the PROPERTY
        */
        this.merek = merek
        this.warna = warna
        this.kecepatan = 0
        this.topSpeed = topSpeed
    }
    
    drive() {
        console.log('METHOD drive() is called: mobil jalan sejauh 2 km')
        this.kecepatan += 20
        console.log(`mobil jalan dengan kecepatan ${this.kecepatan} km/jam`)
    }

    brake() {
        console.log('METHOD brake() is called: mobil ngerem, kecepatan berkurang 10 km/jam')
        this.kecepatan -=  10
    }

    nolKeSeratus() {
        setTimeout(() => { //remember! 'setTimeout()' is asynchronous
            console.log('100 km/jam tercapai!')
            this.kecepatan = 100
            console.log('kecepatan AKHIR 100 km/jam = ' + this.kecepatan)
        })
    }
}

const ferrari = new Mobil('ferrari', 'merah', 250);

console.log("object 'ferrari': ", ferrari)
console.log("object 'ferrari' property 'warna':", ferrari.warna)
console.log("object 'ferrari' property 'topSpeed': " + ferrari.topSpeed)

console.log(`\nkecepatan AWAL ferrari = ${ferrari.kecepatan} km/jam`)
ferrari.drive()
// ferrari.brake() --> IF this is UNCOMMENTED, ferrari.kecepatan WILL be SET to 0
console.log('kecepatan AKHIR ferrari = ' + ferrari.kecepatan + ' km/jam')
ferrari.drive()
console.log(`kecepatan AKHIR ferrari = ${ferrari.kecepatan} km/jam`)
ferrari.nolKeSeratus()
ferrari.brake()
console.log('ferrari last speed after brake() = ' + ferrari.kecepatan + ' km/jam --> SHOULD APPEAR LAST')