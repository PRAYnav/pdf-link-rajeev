const params = new URLSearchParams(window.location.search);
const code = params.get("code");

if (!code) {
    document.body.innerHTML = "<h2>No book code supplied.</h2>";
    throw new Error();
}

fetch("links.csv")
.then(response => response.text())
.then(text => {

    const rows = text.trim().split("\n");

    for (let i = 1; i < rows.length; i++) {

        const cols = rows[i].split(",");

        if (cols[0].trim() === code.trim()) {

            window.location.href = cols[1].trim();

            return;
        }
    }

    document.body.innerHTML="<h2>Book not found.</h2>";

});
