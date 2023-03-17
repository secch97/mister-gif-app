const loadPage = (time, setAppLoaded) => {
     setTimeout(() => {
        setAppLoaded(true);
    }, time);
    return;
};

export {
    loadPage
};