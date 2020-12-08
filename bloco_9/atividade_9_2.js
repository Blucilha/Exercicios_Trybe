const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const temperatura = Math.random() * 58;
  return Math.round(temperatura);
};

let random = getMarsTemperature;

const sendMarsTemperature = (temperature) => {
    setTimeout(() => {
        const frase = 'Mars temperature is: ' + temperature() + ' degree Celsius';
        console.log(frase);
    }, messageDelay());
}

sendMarsTemperature(random);
