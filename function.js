// program identifikasi golongan suhu udara

function golonganSuhu(suhu) {
    if (suhu < 0) {
        return 'sangat dingin';
    } else if (suhu >= 0 && suhu <= 10) {
        return 'dingin';
    } else if (suhu >= 11 && suhu <= 20) {
        return 'sejuk';
    } else if (suhu >= 21 && suhu <= 25) {
        return 'nyaman';
    } else if (suhu >= 26 && suhu <= 30) {
        return 'hangat';
    } else if (suhu >= 31 && suhu <= 35) {
        return 'panas';
    } else {
        return 'sangat panas';
    }
}

const suhu = 24;
console.info(`${suhu} derajat Celsius tergolong ${golonganSuhu(suhu)}`);

// tes tes coba push