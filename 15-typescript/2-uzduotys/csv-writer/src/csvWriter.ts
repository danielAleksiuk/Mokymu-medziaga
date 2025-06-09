import {appendFileSync} from 'fs';


interface Mokejimas {
    id: number;
    suma: number;
    gavejas: string;
    paskirtis: string;
}

type MokejimuStulpeliai = 
('id' | 'suma' | 'gavejas' | 'paskirtis')[];

export class CSVWriter { 
    private csv: string;

    constructor(private stulpeliai: MokejimuStulpeliai) {
        this.csv = this.stulpeliai.join(',') + '\n';
    }

    pridetEilute(values: Mokejimas[]): void {
        const eilutes = values.map(v => this.formatuotiEilute(v))
        this.csv += eilutes.join('\n');
        console.log(this.csv);
    }

    private formatuotiEilute(m: Mokejimas): string {
        return this.stulpeliai.map(stul => m[stul]).join(',');
    }

    save(filename: string): void {{
        appendFileSync(filename, this.csv);
        this.csv = '\n';
    }}
}