const apiKey = "zInF0zt7xgMzMiTrRPWdbhsZRxdahoLTRgTPKBwE";

        fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
            .then(response => response.json())
            .then(data => {
                document.getElementById("title").innerText = data.title;
                document.getElementById("image").src = data.url;
                document.getElementById("description").innerText = data.explanation;
            })
            .catch(error => console.error("Terjadi kesalahan:", error));