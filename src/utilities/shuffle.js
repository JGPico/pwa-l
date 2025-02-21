// combine and shuffle two arrays
const shuffle = () => {
    const assets = [
        { image: '/assets/duck.png' },
        { image: '/assets/lemon.png' },
        { image: '/assets/knight.png' },
        { image: '/assets/bear.png' },
        { image: '/assets/rum.png' },
        { image: '/assets/fencing.png' },
        { image: '/assets/squirrel.png' },
        { image: '/assets/carrot.png' }
    ];
    return [...assets, ...assets]
        .sort(() => Math.random() - 0.5)
        .map((card) => ({ ...card, id: Math.random() }));
};

export default shuffle;