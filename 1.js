var id_list = ["c1", "c2", "c3", "c4", "c5", "c6","c7" ,"c8"]

function change(btn) {
    var p = document.getElementById(btn) ;
    if (p.className == "red") {
        p.classList.replace("red", "blue");
    } else if (p.className == "blue") {
        p.classList.replace("blue", "green");
    } else if (p.className == "green") {
        p.classList.replace("green", "clear");
    } else {
        p.classList.replace("clear", "red") ;
    }
}

function cal() {
    var x = ["","","","","","","","",""]
    var y = 0
    for (let i = 1; i < 9; i++) {
        p = document.getElementById("c" + i) ;
        if (p.className == "red") {
            x[i-1] = "+" ;
            y += 1000 ;
        } else if (p.className == "blue") {
            x[i-1] = "*" ;
            y += 100 ;
        } else if (p.className == "green") {
            x[i-1] = "/" ;
            y += 10 ;
        } else {
            y += 1;
        }
    }
    ans = "1" + x[0] + "2" + x[1] + "3" + x[2] + "4" + x[3] + "5" + x[4] + "6" + x[5] + "7" + x[6] + "8" + x[7] + "9"
    var z = ("0000" + y).slice(-4) ;
    document.getElementById("display").value = z + "" + Math.floor(eval(ans)) ;
    if (document.getElementById('display').value == 2321100) {
        q = document.getElementById("display");
        q.classList.add("win")
        alert("Clear! クリアツイートはこれをどうにかしてもろて \n https://is.gd/TUN1wV " ) ;
    } else {
        q = document.getElementById("display") ;
        q.classList.remove("win")
    }
}
