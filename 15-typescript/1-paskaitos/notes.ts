// tipai 
let skaicius: number = 1;
let eilute: string = 'pvz';
let betKoks: any = 'bet koks tipas';
let loginis: boolean = true;
let tustieji: undefined = undefined;

let skaiciuMasyvas: number[] = [1 , 2 ,3];

// custom tipai

    // 1 budas - interface
        interface Masina {
            modelis: string;
            metai: number;
            arParduota: boolean;
            extraInfo?: string;
        };

        let manoMasina: Masina = {
            modelis: 'Geriausia',
            metai: 2025,
            arParduota: false
        };
    // 2 budas - type
        type Lektuvas = {
            modelis: string;
            metai: number;
            arSkraido: boolean;
            info?: string; // klaustukas reiskia, kad field nera required
        };

        let manoLektuvelis: Lektuvas = {
            modelis: 'the best',
            metai: 2024,
            arSkraido: true
        }

        type Helicopteris = Lektuvas & {
            vietuSkaicius: number
        };

        type transportas = Lektuvas | Masina;


// funkcijos 

const suma = (): number => {
    return 10;
}

type Daugyba = (a: number, b: number) => number;

const daugyba:Daugyba = (a: number, b: number): number => {
    return a * b ;
}

// enum 

enum Masinos {
    audi = 'Audi',
    bmw = 'Bmw',
    toyota = 'Toyota'
};

enum Priority {
    Low = 1,
    Medium = 3,
    High = 5,
    Urgent = 10
}

enum FootbalTeamScore {
    lost = 0,
    win = 3,
    draw = 1
}

const finalScore = 
    5 * FootbalTeamScore.win + 4 * FootbalTeamScore.lost + 1 * FootbalTeamScore.draw

enum Languages {
    LT = 'lt',
    LV = 'lv'
}

enum TodoStatuses {
    completed, // 0
    inCompleted, //1 
    cancelled // 2
}

enum OrderStatus {
    payed,
    canceled,
    paused,
    waitingPayment
}

// url?filter=order_status = OrderStatus.paused

const VehicleStatus = [
    'go',
    'stop',
    'fail'
];

enum VehicleStatusEnum {
    go = 'Go',
    stop = 'Stop',
    fail = 'Fail'
}

// VehicleStatusEnum.

// Sets

const masynites =  new Set<Masina>();
masynites.add(
    {
        modelis: 'beveik Geriausia',
        metai: 2023,
        arParduota: false
    }
);

masynites.add({
    modelis: '',
    metai: 456,
    arParduota: true
});

// Generics 

function logData<T>(value: T): T {
    return value;
}

const eilute = logData<string>('eilute');
const skaicius = logData<number>(456);

function masyvas<T>(values: T[]): T {
    return values[0];
}

const objektas = masyvas<Masina>([]);