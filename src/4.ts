/* Мій будинок (MyHouse): Створіть клас MyHouse, який успадковується від абстрактного класу House. Реалізуйте метод openDoor у цьому класі. Якщо ключ, переданий цьому методу, збігається з ключем, збереженим як key, то двері відчиняються.

Після реалізації всіх класів створіть об'єкти для кожного класу та спробуйте відтворити сценарій, в якому людина приходить додому.

Наприклад, ось так:
*/

class Key{
    private signature: number;
    public getSignature(): number{
        return this.signature;
    };

    constructor() {
        this.signature=Math.random();
    }
}

class Person{
    public getKey(): Key{
        return this.key;
    };
    constructor(private key:Key) {}
}

abstract class House{
    constructor(protected key: Key) { }
    protected tenants: Person[];
    protected door: boolean;
    public comeIn(person:Person): boolean {
        if (this.door === true) {
            this.tenants.push(person)
        } 
        return this.door;
    };
    public abstract openDoor(key:Key): void;
};

class MyHouse extends House{
    public openDoor(key:Key) {
        if (key === this.key) {
            this.door=true ;
        }
        return this.door;
    }
}


const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export { };

/*
Ключ (Key): Створіть клас Key. У нього має бути одна приватна властивість signature, яка генерується випадково при створенні об'єкта цього класу (наприклад Math.random()). Також цей клас повинен мати метод getSignature, який повертає значення властивості signature.

Людина (Person): Створіть клас Person. Конструктор цього класу приймає об'єкт класу Key і зберігає їх у приватному властивості key. Клас Person повинен мати метод getKey, який повертає збережений ключ.

Дім (House): Створіть абстрактний клас House. Цей клас має дві властивості: door, яка може бути відкрита (true), або закрита (false), і key, яка зберігає об'єкт класу Key. У цьому класі також повинен бути метод comeIn, який додає об'єкт класу Person у масив tenants, якщо door відкрита. Ваш абстрактний клас House також повинен мати абстрактний метод OpenDoor, який приймає об'єкт класу Key.
*/