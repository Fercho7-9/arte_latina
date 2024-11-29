const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
const port = 3000;

// Middleware para manejar datos JSON
app.use(express.json());
app.use(cors());  // Esto permite que tu frontend Angular se conecte sin problemas

// Configuración de la base de datos
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'ed123',  // Asegúrate de que la contraseña es la correcta
  database: 'artelatino'
});

// Verifica la conexión a la base de datos
db.connect(err => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
  }
  console.log('Conexión exitosa a la base de datos');
});

// Ruta para verificar que el servidor está funcionando
app.get('/', (req, res) => {
  res.send('¡Servidor funcionando!');
});

// Ruta de login
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  
  // Aquí debes hacer la lógica para verificar el usuario en la base de datos
  const query = 'SELECT * FROM usuarios WHERE email = ? AND password = ?';
  db.query(query, [email, password], (err, results) => {
    if (err) {
      console.error('Error al realizar la consulta:', err);
      return res.status(500).json({ message: 'Error al realizar la consulta' });
    }

    if (results.length > 0) {
      res.status(200).json({ message: 'Login exitoso', user: results[0] });
    } else {
      res.status(401).json({ message: 'Usuario o contraseña incorrectos' });
    }
  });
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
