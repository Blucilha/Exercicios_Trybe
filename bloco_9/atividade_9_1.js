const demorar = (callBack) => {
    setTimeout(() =>{
        callBack();
    }, 3000);
}

demorar(getPlanet);
