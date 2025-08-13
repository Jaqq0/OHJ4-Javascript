function muunnaLämpötila() {
            const lämpötila = parseFloat(document.getElementById('lämpötila').value);
            const muunnin = document.getElementById('lämpötilamuunnin').value;
            
            if (isNaN(lämpötila)) {
                document.getElementById('tulos').innerText = 'Syötä kelvollinen lämpötila.';
                return;
            }
            if (muunnin === "fahrenheit" && lämpötila < -459.67) {
                document.getElementById('tulos').innerText = 'Lämpötila ei voi olla absoluuttista nollapistettä kylmempi.';
                return;
            } else if (muunnin === "celsius" && lämpötila < -273.15) {
                document.getElementById('tulos').innerText = 'Lämpötila ei voi olla absoluuttista nollapistettä kylmempi.';
                return;
            }            
            let tulos;
            if (muunnin === 'fahrenheit') {
                tulos = (lämpötila - 32) * 5 / 9; 
                document.getElementById('tulos').innerText = `${lämpötila} °F on ${tulos.toFixed(2)} °C`;
            } else {
                tulos = (lämpötila * 9 / 5) + 32;
                document.getElementById('tulos').innerText = `${lämpötila} °C on ${tulos.toFixed(2)} °F`;
            }

            document.getElementById('lämpötila').value = '';
        }