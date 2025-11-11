function fn_Valform() {
    var sMsg = "";

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    var emailPattern = /^[a-z0-9][a-z0-9_\.-]*[a-z0-9]@[a-z0-9][a-z0-9_\.-]*[a-z0-9]\.[a-z]{2,4}$/;

    if (name === "") {
        sMsg += "\n* Anda belum mengisi nama";
    }

    if (email === "") {
        sMsg += "\n* Anda belum mengisi email";
    } else if (!emailPattern.test(email)) {
        sMsg += "\n* Format email tidak valid";
    }

    if (message === "") {
        sMsg += "\n* Anda belum mengisi pesan";
    }

    if (sMsg !== "") {
        alert("Peringatan:\n" + sMsg);
        return false;
    } else {
        return true;
    }
}
