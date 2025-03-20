const Komp7 = () => {
    let antraste = 'objektu masyvas';

    let links = [
        { id: 1, url: '/', title: 'pradzia'},
        { id: 2, url: 'https://www.delfi.lt/', title: 'delfi'},
        { id: 3, url: 'https://www.15min.lt/', title: '15 min'},
        { id: 4, url: 'https://www.nba.com/', title: 'nba'}
    ];

    return (
        <div>
            <h2>{antraste}</h2>
            <ul>
                {
                    links.map(link => <li key={link.id}><a href={link.url}>{link.title}</a></li>)
                }
            </ul>
            
        </div>
    )
};

export default Komp7;