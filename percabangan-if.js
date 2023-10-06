// program memeriksa data buah dalam suatu array

const fruits = ['apel', 'mangga', 'jeruk', 'anggur', 'semangka', 'nanas'];

// if
if (fruits.includes('anggur')){
    console.info('Buah anggur ada dalam array');
}

// else if
if (fruits.includes('persik')){
    console.info('Buah persik ada dalam array');
} else if (fruits.includes('apel')){
    console.info('Buah apel ada dalam array');
} else if (fruits.includes('lemon')){
    console.info('Buah lemon ada dalam array');
} else {
    console.info('Maaf tidak ada buah persik, apel, atau lemon dalam array.!');
}

// nested if
if (fruits.includes('lemon')){
    console.info('Buah lemon ada dalam array');
} else {
    if (fruits.includes('berry')){
        console.info('Buah berry ada dalam array');
    } else {
        console.info('Buah lemon dan berry tidak ada dalam array!');
    }
}