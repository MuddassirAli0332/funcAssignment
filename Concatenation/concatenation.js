
var btn = document.getElementById('btnAdd')
btn.addEventListener('click', addLine);

// var t = "my " +  "country " + "name " + "is " + "PK";
var i = 0;


var a = "my ";
a = a + "country";
a = a + "name ";
a = a + "is ";
a = a + "pakistan";


console.log(i);

console.log(a);

function addLine() {
    i = i + 1;
    var tbody = document.getElementById('datatable');
    var str = "<tr><td>" + i + "</td><td>Ali</td><td>test@test.com</td><td>01234rree</td></tr>";
    tbody.innerHTML = tbody.innerHTML + str;
    // tbody.append(str);
}

// var str = "<tr><td>Ali</td><td>test@test.com</td><td>01234rree</td></tr>";
// str = str + "<tr><td>Ali</td><td>test@test.com</td><td>01234rree</td></tr>";
// str = str + "<tr><td>Ali</td><td>test@test.com</td><td>01234rree</td></tr>";
// str = str + "<tr><td>Ali</td><td>test@test.com</td><td>01234rree</td></tr>";
// str = str + "<tr><td>Ali</td><td>test@test.com</td><td>01234rree</td></tr>";
// str = str + "<tr><td>Ali</td><td>test@test.com</td><td>01234rree</td></tr>";

// var tbody = document.getElementById('datatable');
// tbody.innerHTML = str;



