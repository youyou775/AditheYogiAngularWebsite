
    <?php

    //db credentials
    Define('server', 'sql109.epizy.com');
    Define('username', 'epiz_28383976');
    Define('password', 'y7fTQocguR');
    Define('dbname', 'epiz_28383976_adiYogaDB');

    //connection funcgtion 
    function connect()
    {
        $connect = mysqli_connect(server, username, password, dbname);

        if (!$connect) {
            die("Connection failed:" . mysqli_connect_error());
        }
        mysqli_set_charset($connect, "utf8");

        return $connect;
    }
    $con = connect();
