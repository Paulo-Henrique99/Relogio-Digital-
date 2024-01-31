const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
const dataElement = document.getElementById('data');

function updateTime() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if (hr < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min;
    if (s < 10) s = '0' + s;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let dateString = dateToday.toLocaleDateString('pt-BR', options);
    dateString = dateString.toUpperCase();

    dataElement.textContent = dateString;
}

// Atualiza a cada segundo
setInterval(updateTime, 1000);

// Atualiza no carregamento da página
updateTime();
