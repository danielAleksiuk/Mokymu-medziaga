# Gyvūnų prieglaudos backend

## Gyvūnų duomenys

Apie kiekvieną gyvūną pateikiama tokia informacija:

```
{
    "id": 1,
    "name": "Reksas",
    "age": 5,
    "breed": "Labradoras",
    "type": "Šuo",
    "vaccinated": true,
    "state": "Ieško namų",
    "features": ["draugiškas", "žaismingas", "geras su vaikais", "ilgo kailio"],
    "description": "Reksas yra labai draugiškas ir energingas šuo. Jis mėgsta žaisti su kamuoliuku ir bėgioti lauke. Reksas yra labai draugiškas su vaikais ir kitais gyvūnais. Jis jau yra paskiepytas ir laukia savo naujų šeimininkų."
}
```

Kiekvieno laukelio reikšmė ir duomenų tipas:

- **id** - nurodo unikalų gyvūno numerį, pateikiamas kaip `number`
- **name** - nurodo gyvūno vardą, pateikiamas kaip `string`
- **age** - nurodo gyvūno amžių, pateikiamas kaip `number`
- **breed** - nurodo gyvūno veislę, pateikiamas kaip `string`
- **type** - nurodo gyvūno rūšį (pvz `šuo`, `katė`), pateikiamas kaip `string`
- **vaccinated** - nurodo ar gyvūnas yra gavęs vakciną (bus `true` arba `false`), pateikiamas kaip `boolean`
- **state** - nurodo paieškos būseną (pvz `ieško namų` ar `suradęs namus`), pateikiamas kaip `string`
- **features** - nurodomos papildomos gyvūno savybės (pvz `trumpas kailis`, `draugiškas` ar kt.), pateikiamas kaip `array`
- **description** - nurodytas papildomas aprašymas apie gyvūną, pateikiamas kaip `string`

## Galimi šio API endpoints

### Gauti visus gyvūnus

```
GET /pets
```

Naudojimo pavyzdžiai:

```
GET http://localhost:7789/pets
```

### Gauti konkretų gyvūną pagal jo id

```
GET /pets/:id
```

`:id` - nurodo gyvūno unikalų id numerį, ši dalis yra dinaminė, kas reiškia, kad galima įstatyti bet kokį skaičių

Naudojimo pavyzdžiai:

```
GET http://localhost:7789/pets/1

GET http://localhost:7789/pets/2

GET http://localhost:7789/pets/3
```

### Gauti galimų filtrų sąrašą

```
GET /pets/filters-list
```

Naudojimo pavyzdžiai:

```
GET http://localhost:7789/pets/filters-list
```

### Filtruoti gyvūnus pagal nurodytus parametrus

```
/pets/filtered
```

Filtruoti galima pagal vieną ar kelis parametrus:

- **age** - nurodoma amžiaus reikšmė iki kurios (ir kurią įtraukiant bus parodyti atitinkantys gyvūnai), pavyzdžiui `age=5` rodytų gyvūnus, kurių amžius yra 5 ar mažesnis
- **type** - nurodoma rūšis, pagal kurią bus filtruojami gyvūnai, pavyzdžiui `type=šuo` rodytų tik šunis
- **breed** - nurodoma veislė, pagal kurią bus filtruojami gyvūnai, pavyzdžiui `breed=labradoras` rodytų tik labradorus
- **vaccinated** - nurodoma ar gyvūnas yra paskiepytas, pavyzdžiui `vaccinated=true` rodytų tik paskiepytus gyvūnus
- **state** - nurodoma paieškos būsena, pagal kurią bus filtruojami gyvūnai, pavyzdžiui `state=ieško_namų` rodytų tik tuos gyvūnus, kurie ieško namų
- **features** - nurodomos papildomos savybės, pagal kurias bus filtruojami gyvūnai, pavyzdžiui `features=draugiškas` rodytų tik tuos gyvūnus, kurie yra draugiški, taip pat galima nurodyti kelias savybes, pavyzdžiui `features=draugiškas,ilgo_kailio`

Filtravimo parametruose, kuriuose gali būti žodžių (pvz `state` ar `features`), kurie yra sudaryti iš kelių žodžių, žodžiai turi būti atskirti pabraukimu `_`, pavyzdžiui `ieško_namų`, `ilgo_kailio`.

Didžiosios ir mažosios raidės nėra svarbios, todėl `type=šuo` ir `type=Šuo` grąžintų tuos pačius rezultatus.

Filtrai rašomi gale adreso pridedant `?`, juos galima rašyti norima tvarka, o skirtingus filtrų parametrus galima jungti su `&` simboliu.

Naudojimo pavyzdžiai:

```
GET http://localhost:7789/pets/filtered?age=5&type=šuo&breed=labradoras&vaccinated=true&state=ieško_namų&features=draugiškas,ilgo_kailio

GET http://localhost:7789/pets/filtered?age=1

GET http://localhost:7789/pets/filtered?age=2

GET http://localhost:7789/pets/filtered?type=Šuo

GET http://localhost:7789/pets/filtered?type=Katė

GET http://localhost:7789/pets/filtered?type=katė

GET http://localhost:7789/pets/filtered?type=jūrų_kiaulytė

GET http://localhost:7789/pets/filtered?type=Šuo&age=1

GET http://localhost:7789/pets/filtered?type=Katė&age=5

GET http://localhost:7789/pets/filtered?breed=Labradoras

GET http://localhost:7789/pets/filtered?breed=škotų_terjeras

GET http://localhost:7789/pets/filtered?vaccinated=true

GET http://localhost:7789/pets/filtered?vaccinated=false

GET http://localhost:7789/pets/filtered?age=10&type=Šuo&breed=Labradoras&vaccinated=true

GET http://localhost:7789/pets/filtered?state=Ieško_namų

GET http://localhost:7789/pets/filtered?state=Suradęs_namus

GET http://localhost:7789/pets/filtered?features=draugiškas

GET http://localhost:7789/pets/filtered?features=mėgsta_glostymus

GET http://localhost:7789/pets/filtered?features=draugiškas,mėgsta_glostymus

GET http://localhost:7789/pets/filtered?features=ilgo_kailio,trumpo_kailio

GET http://localhost:7789/pets/filtered?features=draugiškas&age=2
```
