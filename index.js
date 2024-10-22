class adventureClass {
    constructor(name, age, tipe) {
        this.name = name
        this.age = age
        this.tipe = tipe
        this.weapon = "none"
    }
    attack(){
        switch (true) {
            case this.tipe == "mago":
                this.weapon = "Magia"
                break;
            case this.tipe == "guerreiro":
                this.weapon = "Espada"
                break;
            case this.tipe == "monge":
                this.weapon = "Artes Marciais"
                break;
            case this.tipe == "ninja":
                this.weapon = "Shuriken"
                break;
        
            default:
                this.weapon = "none"
                break;
        }

        console.log(`o ${this.tipe} ${this.name} atacou usando ${this.weapon}`)
    }
}

let adventure = new adventureClass("Merlin", "100+", "mago")
let adventure2 = new adventureClass("Link", "17", "guerreiro")
let adventure3 = new adventureClass("Desconhecido", "???", "monge")
let adventure4 = new adventureClass("Genji", "37", "ninja")

adventure.attack()
adventure2.attack()
adventure3.attack()
adventure4.attack()