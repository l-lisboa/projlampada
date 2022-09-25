const turnOn = document.getElementById ('turnOn');
const lamp = document.getElementById ('lamp');

function isLampBroken () {
    return lamp.src.indexOf ('quebrada') > -1
}

function buttonOff () {
    if (turnOn.id == 'turnOn'){
        turnOn.id = 'turnOff';
        turnOn.textContent = 'Desligar';
        lampOn ();
    } 
        else {
            turnOn.id = 'turnOn';
            turnOn.textContent = 'Ligar';
            lampOff ();
        }

}

function lampOn () {
    if ( !isLampBroken () ) {
        lamp.src = './img/ligada.jpg';
    }
    }

function lampOff () {
    if ( !isLampBroken () ) {
        lamp.src = './img/desligada.jpg';
    }
}

function lampbroken () {
    lamp.src = './img/quebrada.jpg';
}

turnOn.addEventListener ('click', buttonOff);
lamp.addEventListener ('mouseover', lampOn);
lamp.addEventListener ('mouseleave', lampOff);
lamp.addEventListener ('dblclick', lampbroken);

turnOn.addEventListener (onecl)