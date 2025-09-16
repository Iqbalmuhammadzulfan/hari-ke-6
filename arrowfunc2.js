const user ={
    name: 'Budi',
    sayHi: function(){
        console.log(`Halo, nama saya ${this.name}`);

        setTimeout(function(){
            console.log(`Setelah 1 detik, nama saya ${this.name}`);
        }, 1000);
    }
};

user.sayHi();