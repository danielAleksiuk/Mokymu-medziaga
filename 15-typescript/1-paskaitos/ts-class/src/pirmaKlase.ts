type Base = 'clasic' | 'thick' | 'thin' | 'garlic';

class Food {
    public isCooking = false;
    cook = () => {
        this.isCooking = true;
    }

    cooked = () => {
        this.isCooking = false;
    }
}

export class Pizza extends Food{
    public title: string;
    private price: number;
    protected base: Base = 'garlic';
    topping: string[] = [];

    constructor(title: string, price: number) {
        super();
        this.title = title;
        this.price = price;
    }

    countPrice = () => {
        if (this.base === 'garlic') {
            this.price *=5;
        }
    }
}

