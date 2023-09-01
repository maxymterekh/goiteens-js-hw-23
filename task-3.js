class Storage {
    constructor( array ) {
        this.items = array;
    };
    getItems() {
        return this.items;
    };

    addItem(item) {
        this.items.push(item);
    };

    removeItem(item) {
         for (let i = 0; i < this.items.length; i++) {
            if (this.items[i] === item) {
                this.items.splice(i, 1);
                break; 
            }
        }
    }
    
};


const storage = new Storage([
'Нанітоіди',
'Пролонгер',
'Залізні жупи',
'Антигравітатор',
]);
const items = storage.getItems();
console.table(items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор" ]
storage.addItem('Дроїд');
console.table(storage.items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор", "Дроїд" ]
storage.removeItem('Пролонгер');
console.table(storage.items); // [ "Нанітоіди", "Залізні жупи", "Антигравітатор", "Дроїд" ]
