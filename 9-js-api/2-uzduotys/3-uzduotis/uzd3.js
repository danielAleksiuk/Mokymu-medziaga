import axios from 'axios';


const getStoreProducts = async () => {
    try {
        const res = await axios.get(
            'https://pokeapi.co/api/v2/ability/10/'
        );

        console.log(res.data)
    } catch(error) {
        console.log(error);
    }
};

getStoreProducts();