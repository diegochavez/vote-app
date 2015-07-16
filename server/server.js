Meteor.publish('Candidatos', function () {
    return Candidatos.find({});
});
Candidatos.allow({
    insert: function () {
        return true;
    },
    update: function () {
        return true;
    },
    remove: function () {
        return true;
    }
});

Meteor.startup(function () {
    if (Candidatos.find().count() === 0) {

        var candidatos = [
            {
                'nombre': 'Mario Estrada',
                'imagen': 'images/candidatos/presidente/mario-estrada.png',
                'edad': '65',
                'partido': 'UCN',
                'bio': 'Ingenieroa y exdiputado del Congreso. El 13 de mayo de 2013 fue proclamado precandidato presidencial por su partido. Participó en la elección presidencial de 2007 y quedó en sexto lugar. También participó en la elección presidencial de 2011, quedando en cuarto puesto. Fue diputado del Congreso desde el 14 de enero de 2000 hasta su renuncia en 2007.'
            },
            {
                'nombre': 'Roberto González Díaz Durán',
                'edad': '44',
                'imagen': 'images/candidatos/presidente/roberto-gonzalez.png',
                'partido': 'CREO/PU',
                'bio': 'Economista y exministro de Energía y Minas. El 8 de agosto de 2013 fue proclamado por su partido como el precandidato presidencial para la elección presidencial de 2015 y el10 de mayo de 2015 fue nominado oficialmente como candidato presidencial.'
            },
            {
                'nombre': 'Manuel Baldizón Méndez',
                'edad': '45',
                'imagen': 'images/candidatos/presidente/manuel-baldizon.png',
                'partido': 'LIDER',
                'bio': 'Abogado, empresario y exdiputado del Congreso. Fue proclamado como precandidato presidencial por su partido el 4 de julio de 2013 y como candidato oficial el 4 de mayo de 2015. '
            },
            {
                'nombre': 'Lizardo Sosa',
                'edad': '44',
                'imagen': 'images/candidatos/presidente/lizardo-sosa.png',
                'partido': 'TODOS',
                'bio': 'Sosa es un economista, que fungió como presidente del Banco de Guatemala de 2006 a 2010'
            },
            {
                'nombre': 'Luis Fernando Pérez',
                'edad': '46',
                'imagen': 'images/candidatos/presidente/luis-fernando-perez.png',
                'partido': 'PRI',
                'bio': 'Veterinario, administrador de Empresas y diputado del Congreso. Fue proclamado precandidato presidencial por su partido el 23 de noviembre de 2013. Inició su trayectoria política cuando fue electo diputado por el Frente Republicano Guatemalteco en 1999. '
            },
            {
                'nombre': 'Sandra Torres Casanova',
                'edad': '59',
                'imagen': 'images/candidatos/presidente/sandra-torres.png',
                'partido': 'UNE',
                'bio': 'Licenciada en Ciencias de Comunicación y ex primera dama de la Nación. El 13 de mayo de 2013, su partido la proclamó precandidata para la elección presidencial de 2015.'
            },
            {
                'nombre': 'Mario David García Velásquez',
                'edad': 'N/A',
                'imagen': 'images/candidatos/presidente/mario-garcia.png',
                'partido': 'PP',
                'bio': 'Originalmente, Alejandro Sinibaldi y Mauricio López Bonilla, ministro de Gobernación durante el gobierno de Otto Pérez Molina fueron postulados como el binomio presidencial del partido oficial.'
            },
            {
                'nombre': 'José Ángel López',
                'edad': 'N/A',
                'imagen': 'images/candidatos/presidente/jose-angel-lopez.png',
                'partido': 'EG',
                'bio': 'Presidente de Banrural desde 1998 a 2013; director de la Asociación Nacional del Café (Anacafé) durante 20 años, de 1986 a 2006.'
            },
            {
                'nombre': 'Jimmy Morales',
                'edad': '46',
                'imagen': 'images/candidatos/presidente/jimmy-morales.png',
                'partido': 'FCN Nación',
                'bio': 'Político, productor, escritor, director y actor de cine y televisión en Guatemala. Como político guatemalteco, participó en el año 2011 como candidato a alcalde en el municipio de Mixco, departamento de Guatemala, con el partido político Acción de Desarrollo Nacional (ADN), quedando en tercer lugar.'
            },
            {
                'nombre': 'Alejandro Giammattei Falla',
                'edad': '46',
                'imagen': 'images/candidatos/presidente/alejandro-giammattei.png',
                'partido': 'FUERZA',
                'bio': 'Político, escritor, y médico. Ha participado en anteriores elecciones: en 2007 obtuvo el tercer puesto y en 2011 —en que participó con muchas dificultades— obtuvo un bajo porcentaje de votos.'
            },
            {
                'nombre': 'Juan Gutiérrez',
                'edad': '59',
                'imagen': 'images/candidatos/presidente/juan-gutierrez.png',
                'partido': 'PAN',
                'bio': 'Gutiérrez es un empresario, político y economista guatemalteco, que ya fue candidato a la Presidencia de Guatemala durante las Elecciones generales de Guatemala de 2011, y es presidente y cofundador del grupo empresarial Xela Enterprises Ltd.'
            },
            {
                'nombre': 'Miguel Ángel Sandoval',
                'edad': 'N/A',
                'imagen': 'images/candidatos/presidente/miguel-angel-sandoval.png',
                'partido': 'URNG/WINAQ',
                'bio': 'Sandoval es un político de izquierda que participó en las elecciones generales de 2007.'
            },
            {
                'nombre': 'Aníbal García',
                'edad': '59',
                'imagen': 'images/candidatos/presidente/anibal-garcia.png',
                'partido': 'MNR',
                'bio': 'García fue proclamado vicepresidenciable por el partido Frente Amplio junto a Rigoberta Menchú Tum, en las elecciones de 2011.'
            },
            {
                'nombre': 'Zury Rios Sosa',
                'edad': '46',
                'imagen': 'images/candidatos/presidente/zury-rios.png',
                'partido': 'VIVA',
                'bio': 'Abogada y política guatemalteca, miembro del desaparecido partido FRG(hoy llamado PRI).59 Hija del general retirado y expresidente de Guatemala Efraín Ríos Montt y sobrina de Mario Enrique Ríos Montt.'
            }
        ];

        for (var i = 0; i < candidatos.length; i++)
            Candidatos.insert(candidatos[i]);

    }
});