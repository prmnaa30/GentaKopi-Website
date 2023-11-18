const drinkSelect = document.getElementById('drinks');
const iced = document.getElementById('iced');
const hot = document.getElementById('hot');

// .value digunakan untuk mendapatkan isi dari value
// pada input pilihan dengan id #drinks //
// eventListened 'change' akan memeriksa perubahan pilihan 
// saat memilih drink. //
drinks.addEventListener('change', changeOpt);
function changeOpt() {
    if (drinkSelect.value == 'None') {
        //jika None, maka tidak dapat memilih iced/hot
        document.getElementById('drink-type').disabled = true;
    }
    // untuk beverages yang hanya ada pilihan 'hot'
    else if (drinkSelect.value == 'Red-Eye' || drinkSelect.value == 'Hot-Chocolate') {
        document.getElementById('drink-type').disabled = false;
        iced.disabled = true; //pilihan iced jadi tidak bisa dipilih
        hot.disabled = false; //pilihan hot jadi bisa dipilih
        hot.selected = true; //pilihan hot akan langsung terpilih
    }
    // untuk beverages yang hanya ada pilihan 'iced'
    else if (
        drinkSelect.value == 'Affogato' || 
        drinkSelect.value == 'Cold-Brew-Coffee' ||
        drinkSelect.value == 'Nitro-Cold-Brew' ||
        drinkSelect.value == 'Frappucino' ||
        drinkSelect.value == 'Turkish-Coffee' ||
        drinkSelect.value == 'Matcha-Latte' ||
        drinkSelect.value == 'Squeezed-Lemonade' ||
        drinkSelect.value == 'Smoothies' ||
        drinkSelect.value == 'Italian-Soda' ||
        drinkSelect.value == 'Virgin-Mojito' ||
        drinkSelect.value == 'Mango-Tango' ||
        drinkSelect.value == 'Lemon-Tea'
        ) {
        document.getElementById('drink-type').disabled = false;
            hot.disabled = true; //pilihan hot jadi tidak bisa dipilih
            iced.disabled = false; //pilihan iced jadi bisa dipilih
            iced.selected = true; //pilihan iced akan langsung dipilih
        }
    // untuk beverages yang ada pilihan 'iced' dan 'hot'
    else {
        document.getElementById('drink-type').disabled = false;
        iced.disabled = false;
        hot.disabled = false;
    }
}