const devuelveRandom = num => Math.floor(Math.random() * num);

const elementosMensaje = {
    lugar: ['Infierno', 'Paraíso', 'Abismo', 'Nirvana', 'Destino' ],
    carta: ['El mago', 'El sumo sacerdote', 'La muerte', 'El diablo', 'El mundo'],
    mensaje: ['permanecer a la espera de oportunidades mejores', 'romper con tu ruta habitual', 'mejorar tu forma energética', 'rezarle a Dios', 'ser un mejor compañero de viaje', 'perrial bien loco']
};

let mensajePersonal = [];

for(prop in elementosMensaje){
    let optionIndx = devuelveRandom(elementosMensaje[prop].length);

    switch(prop){
        case 'lugar':
            mensajePersonal.push(`Las puertas del ${elementosMensaje[prop][optionIndx]} se han abierto.`);
            break;
        case 'carta':
            mensajePersonal.push(`${elementosMensaje[prop][optionIndx]} te mira sentadx desde su trono espectral.`);
            break;
        case 'mensaje':
            mensajePersonal.push(`Hoy es el día para ${elementosMensaje[prop][optionIndx]}.`);
            break;

    }
}

const formatoMensaje = mensaje => {
   const formato = mensaje.join(' ');
   console.log(formato);

};

formatoMensaje(mensajePersonal);