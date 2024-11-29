const mysql = require('mysql2');

// Configuración de la base de datos
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',            // Usuario de MySQL
  password: 'ed123',  // Asegúrate de poner la contraseña correcta aquí
  database: 'artelatino'   // Nombre de la base de datos
});

// Verifica la conexión a la base de datos
db.connect(err => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
  }
  console.log('Conexión exitosa a la base de datos');
});
