const arrayA= [
    [
      {
        id: 1,
        nombres: 'Ezmeralda Bella',
        apellidos: 'Navarro Kondratenko',
        direccion: 'Thompson Junction 4868',
        correo_electronico: 'bkondratenko0@plala.or.jp',
        dni: 2147483647,
        edad: 33,
        fecha_creacion: '2023-11-06',
        telefono: 853,
        genero: 'Female'
      },
      {
        id: 2,
        nombres: 'Tybie Ekaterina',
        apellidos: 'McGooch McKinnell',
        direccion: 'Forster Park 00853 ',
        correo_electronico: 'emckinnell1@miibeian.gov.cn',
        dni: 773437681,
        edad: 22,
        fecha_creacion: '2023-05-18',
        telefono: 713,
        genero: 'Female'
      },
      {
        id: 3,
        nombres: 'Marie Brinn',
        apellidos: 'Seamark Widdall',
        direccion: 'Darwin Drive 016',
        correo_electronico: 'bwiddall2@independent.co.uk',
        dni: 2147483647,
        edad: 60,
        fecha_creacion: '2023-12-24',
        telefono: 825,
        genero: 'Female'
      }
    ],
    [
      'id INT NOT NULL PRIMARY KEY AUTO_INCREMEN',
      'nombres VARCHAR(50)',
      'apellidos VARCHAR(100)',
      'direccio VARCHAR(150)',
      'correo_electronico VARCHAR(100)',
      'dni INT',
      'edad INT(2)',
      'fecha_creacion DATE(10)',
      'telefono INT(10)',
      'genero VARCHAR(20)'
    ]
  ]

  const arrColumnas = [    
    'id',
    'nombres',
    'apellidos',
    'direccion',
    'correo_electronico',
    'dni',
    'edad',
    'fecha_creacion',    
    'telefono',
    'genero'
  ]

/*   sI FUNCIONA
let nuevoA = []
for (x of arrayA[0]) {
    console.log(x.id + ',' + x.nombres);
    nuevoA.push(x.id + ',' + x.nombres);
}

console.log(nuevoA);
console.log(nuevoA[2]);

 */


const nuevoArray = arrayA[0].map( (d) =>{
    return d.id + ',' + d.nombres +','+ d.apellidos +','+ d.direccion +','+
    d.correo_electronico+','+d.dni+','+d.edad+','+d.fecha_creacion+','+d.telefono+','+d.genero
});

console.log(nuevoArray);

let cab = "";
arrColumnas.forEach((dato) => cab+= dato+',');

console.log(cab);

/* const nuevoArray = myObj.map( (objUser) =>{
    return objUser.id +','+ objUser.nombres+ ','+ objUser.apellidos +',';
});
console.log(nuevoArray); */
