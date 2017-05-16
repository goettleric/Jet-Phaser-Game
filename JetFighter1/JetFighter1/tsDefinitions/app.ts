class DataConnectivity {
    LoadDB() {
       
        var connection = new ActiveXObject("ADODB.Connection");

        var connectionstring = "Data Source=(LocalDB)\MSSQLLocalDB;AttachDbFilename=C:\Users\Eric\Jet-Phaser-Game\JetFighter1\JetFighter1\App_Data\Database1.mdf;Integrated Security=True";
        connection.Open(connectionstring);
        var rs = new ActiveXObject("ADODB.Recordset");
        rs.Open("select * from player", connection);
        rs.MoveFirst();
        var span = document.createElement("span");
        span.style.color = "Blue";
        span.innerText = "  ID " + "  Name " + "   Score";
        document.body.appendChild(span);
        while (!rs.eof) {
            var span = document.createElement("span");
            span.style.color = "green";
            span.innerText = "\n " + rs.fields(0) + " |  " + rs.fields(1) + " |  " + rs.fields(2);
            document.body.appendChild(span);
            rs.MoveNext();
        }
        rs.close();
        connection.close();
    }
}
window.onload = () => {
    var obj = new DataConnectivity();
    var bttn = <HTMLButtonElement>document.getElementById("ShowData");
    bttn.onclick = function () {
        obj.LoadDB();
    }
};