// combine and shuffle two arrays
const shuffle = () => {
    const assets = [
        { image: '/assets/css.png' }
    ];
    return [...assets, ...assets]
        .sort(() => Math.random() - 0.5)
        .map((card) => ({ ...card, id: Math.random() }));
};

export default shuffle;