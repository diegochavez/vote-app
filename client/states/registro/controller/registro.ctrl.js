app.controller('RegistroCtrl', ['$scope', '$meteorCollection', '$ionicModal', '$rootScope', '$cordovaDevice',
    function ($scope, $meteorCollection, $ionicModal, $rootScope, $cordovaDevice) {

  document.addEventListener("deviceready", function () {
	$scope.divice = $cordovaDevice.getUUID();
  }, false);

  	$scope.genders = [{type:'H', title:'Hombre'},{type:'M', title:'Mujer'}];

  	$scope.grades = [
  	{id:1, title:'Primaria'},
  	{id:2, title:'Secundaria'},
  	{id:3, title:'Bachillerato'},
  	{id:4, title:'Universidad'}
  	];

  	$scope.departamentos = [
    { id: 1, title : 'Alta Verapaz', 'municipios': [
	    {id:1,title:'Chahal'},
	    {id:2,title:'Lanquín'},
	    {id:3,title:'San Juan Chamelco'},
	    {id:4,title:'Santa María Cahabón'},
	    {id:5,title:'Tucurú'},
	    {id:6,title:'Chisec'},
	    {id:7,title:'Panzós'},
	    {id:8,title:'San Pedro Carchá'},
	    {id:9,title:'Senahú'},
	    {id:10,title:'Cobán'},
	    {id:11,title:'Raxruhá'},
	    {id:12,title:'Santa Catalina La Tinta'},
	    {id:13,title:'Tactic'},
	    {id:14,title:'Fray Bartolomé de las Casas'},
	    {id:15,title:'San Cristóbal Verapaz'},
	    {id:16,title:'Santa Cruz Verapaz'},
	    {id:17,title:'Tamahú'}
    ] },
    { id: 2,  title: 'El Progreso', 'municipios': [
	    {id:1,title:'El Jícaro'},
	    {id:2,title:'San Antonio La Paz'},
	    {id:3,title:'Guastatoya'},
	    {id:4,title:'San Cristóbal Acasaguastlán'},
	    {id:5,title:'Morazán'},
	    {id:6,title:'Sanarate'},
	    {id:7,title:'San Agustín Acasaguastlán'},
	    {id:8,title:'Sansare'}
    ] },
    { id: 3,  title: 'Izabal', 'municipios': [
	    {id:1,title:'El Estor'},
	    {id:2,title:'Puerto Barrios'},
	    {id:3,title:'Livingston'},
	    {id:4,title:'Los Amates'},
	    {id:5,title:'Morales'}
    ] },
    { id: 4,  title: 'Quetzaltenango', 'municipios': [
		{id:1,title:'Almolonga'},
		{id:2,title:'Coatepeque'},
		{id:3,title:'Flores Costa Cuca'},
		{id:4,title:'Olintepeque'},
		{id:5,title:'San Carlos Sija'},
		{id:6,title:'San Mateo'},
		{id:7,title:'Cabricán'},
		{id:8,title:'Colomba'},
		{id:9,title:'Génova'},
		{id:10,title:'Palestina de Los Altos'},
		{id:11,title:'San Francisco La Unión'},
		{id:12,title:'San Miguel Sigüilá'},
		{id:13,title:'Cajolá'},
		{id:14,title:'Concepción Chiquirichapa'},
		{id:15,title:'Huitán'},
		{id:16,title:'Quetzaltenango'},
		{id:17,title:'San Juan Ostuncalco'},
		{id:18,title:'Sibilia'},
		{id:19,title:'Cantel'},
		{id:20,title:'El Palmar'},
		{id:21,title:'La Esperanza'},
		{id:22,title:'Salcajá'},
		{id:23,title:'San Martín Sacatepéquez'},
		{id:24,title:'Zunil'}
    ] },
    { id: 5,  title: 'San Marcos', 'municipios': [
	    {id:1,title:'Ayutla'},
	    {id:2,title:'El Quetzal'},
	    {id:3,title:'Ixchiguán'},
	    {id:4,title:'Ocós'},
	    {id:5,title:'San Cristóbal Cucho'},
	    {id:6,title:'San Miguel Ixtahuacán'},
	    {id:7,title:'Sibinal'},
	    {id:8,title:'Tejutla'},
	    {id:9,title:'Catarina'},
	    {id:10,title:'El Rodeo'},
	    {id:11,title:'La Reforma'},
	    {id:12,title:'Pajapita'},
	    {id:13,title:'San José Ojetenam'},
	    {id:14,title:'San Pablo'},
	    {id:15,title:'Sipacapa'},
	    {id:16,title:'Comitancillo'},
	    {id:17,title:'El Tumbador'},
	    {id:18,title:'Malacatán'},
	    {id:19,title:'Río Blanco'},
	    {id:20,title:'San Lorenzo'},
	    {id:21,title:'San Pedro Sacatepéquez'},
	    {id:22,title:'Tacaná'},
	    {id:23,title:'Concepción Tutuapa'},
	    {id:24,title:'Esquipulas Palo Gordo'},
	    {id:25,title:'Nuevo Progreso'},
	    {id:26,title:'San Antonio Sacatepéquez'},
	    {id:27,title:'San Marcos'},
	    {id:28,title:'San Rafael Pie de La Cuesta'},
	    {id:29,title:'Tajumulco'}
    ] },
    { id: 6,  title: 'Totonicapán', 'municipios': [
	    {id:1,title:'Momostenango'},
	    {id:1,title:'San Francisco El Alto'},
	    {id:1,title:'San Andrés Xecul'},
	    {id:1,title:'Santa Lucía La Reforma'},
	    {id:1,title:'San Bartolo'},
	    {id:1,title:'Santa María Chiquimula'},
	    {id:1,title:'San Cristóbal Totonicapán'},
	    {id:1,title:'Totonicapán'}
    ] },
    { id: 7,  title: 'Baja Verapaz', 'municipios': [
	    {id:1,title:'Cubulco'},
	    {id:2,title:'Salamá'},
	    {id:3,title:'Granados'},
	    {id:4,title:'San Jerónimo'},
	    {id:5,title:'Purulhá'},
	    {id:6,title:'San Miguel Chicaj'},
	    {id:7,title:'Rabinal'},
	    {id:8,title:'Santa Cruz el Chol'}
    ] },
    { id: 8,  title: 'Escuintla', 'municipios': [
	    {id:1,title:'Escuintla'},
	    {id:2,title:'La Gomera'},
	    {id:3,title:'San José'},
	    {id:4,title:'Tiquisate'},
	    {id:5,title:'Guanagazapa'},
	    {id:6,title:'Masagua'},
	    {id:7,title:'San Vicente Pacaya'},
	    {id:8,title:'Iztapa'},
	    {id:9,title:'Nueva Concepción'},
	    {id:10,title:'Santa Lucía Cotzumalguapa'},
	    {id:11,title:'La Democracia'},
	    {id:12,title:'Palín'},
	    {id:13,title:'Siquinalá'}
    ] },
    { id: 9,  title: 'Jalapa', 'municipios': [
	    {id:1,title:'Jalapa'},
	    {id:2,title:'San Luis Jilotepeque'},
	    {id:3,title:'Mataquescuintla'},
	    {id:4,title:'San Manuel Chaparrón'},
	    {id:5,title:'Monjas'},
	    {id:6,title:'San Pedro Pinula'},
	    {id:7,title:'San Carlos Alzatate'}
    ] },
    { id: 10, title: 'Quiché', 'municipios': [
	    {id:1,title:'Canillá'},
	    {id:2,title:'Chichicastenango'},
	    {id:3,title:'Joyabaj'},
	    {id:4,title:'Sacapulas'},
	    {id:5,title:'San Juan Cotzal'},
	    {id:6,title:'Zacualpa'},
	    {id:7,title:'Chajul'},
	    {id:8,title:'Chinique'},
	    {id:9,title:'Nebaj'},
	    {id:10,title:'San Andrés Sajcabajá'},
	    {id:11,title:'San Pedro Jocopilas'},
	    {id:12,title:'Chicamán'},
	    {id:13,title:'Cunén'},
	    {id:14,title:'Pachalum'},
	    {id:15,title:'San Antonio Ilotenango'},
	    {id:16,title:'Santa Cruz del Quiché'},
	    {id:17,title:'Chiché'},
	    {id:18,title:'Ixcán'},
	    {id:19,title:'Patzité'},
	    {id:20,title:'San Bartolomé Jocotenango'},
	    {id:21,title:'Uspantán'}
    ] },
    { id: 11, title: 'Santa Rosa', 'municipios': [
	    {id:1,title:'Barberena'},
	    {id:2,title:'Guazacapán'},
	    {id:3,title:'San Juan Tecuaco'},
	    {id:4,title:'Santa Rosa de Lima'},
	    {id:5,title:'Casillas'},
	    {id:6,title:'Nueva Santa Rosa'},
	    {id:7,title:'San Rafaél Las Flores'},
	    {id:8,title:'Taxisco'},
	    {id:9,title:'Chiquimulilla'},
	    {id:10,title:'Oratorio'},
	    {id:11,title:'Santa Cruz Naranjo'},
	    {id:12,title:'Cuilapa'},
	    {id:13,title:'Pueblo Nuevo Viñas'},
	    {id:14,title:'Santa María Ixhuatán'}
    ] },
    { id: 12, title: 'Zacapa', 'municipios': [
	    {id:1,title:'Cabañas'},
	    {id:2,title:'La Unión'},
	    {id:3,title:'Usumatlán'},
	    {id:4,title:'Estanzuela'},
	    {id:5,title:'Río Hondo'},
	    {id:6,title:'Zacapa'},
	    {id:7,title:'Gualán'},
	    {id:8,title:'San Diego'},
	    {id:9,title:'Huité'},
	    {id:10,title:'Teculután'}
    ] },
    { id: 13, title: 'Chimaltenango', 'municipios': [
	    {id:1,title:'Acatenango'},
	    {id:2,title:'Patzicía'},
	    {id:3,title:'San José Poaquil'},
	    {id:4,title:'Santa Cruz Balanyá'},
	    {id:5,title:'Chimaltenango'},
	    {id:6,title:'Patzún'},
	    {id:7,title:'San Juan Comalapa'},
	    {id:8,title:'Tecpán'},
	    {id:9,title:'El Tejar'},
	    {id:10,title:'Pochuta'},
	    {id:11,title:'San Martín Jilotepeque'},
	    {id:12,title:'Yepocapa'},
	    {id:13,title:'Parramos'},
	    {id:14,title:'San Andrés Itzapa'},
	    {id:15,title:'Santa Apolonia'},
	    {id:16,title:'Zaragoza'}
    ] },
    { id: 14, title: 'Guatemala', 'municipios': [
	    {id:1,title:'Amatitlán'},
	    {id:2,title:'Guatemala'},
	    {id:3,title:'San José Pinula'},
	    {id:4,title:'San Pedro Sacatepéquez'},
	    {id:5,title:'Villa Nueva'},
	    {id:6,title:'Chinautla'},
	    {id:7,title:'Mixco'},
	    {id:8,title:'San Juan Sacatepéquez'},
	    {id:9,title:'San Raymundo'},
	    {id:10,title:'Chuarrancho'},
	    {id:11,title:'Palencia'},
	    {id:12,title:'San Miguel Petapa'},
	    {id:13,title:'Santa Catarina Pinula'},
	    {id:14,title:'Fraijanes'},
	    {id:15,title:'San José del Golfo'},
	    {id:16,title:'San Pedro Ayampuc'},
	    {id:17,title:'Villa Canales'}
    ] },
    { id: 15, title: 'Jutiapa', 'municipios': [
	    {id:1,title:'Agua Blanca'},
	    {id:2,title:'Conguaco'},
	    {id:3,title:'Jerez'},
	    {id:4,title:'Quesada'},
	    {id:5,title:'Zapotitlán'},
	    {id:6,title:'Asunción Mita'},
	    {id:7,title:'El Adelanto'},
	    {id:8,title:'Jutiapa'},
	    {id:9,title:'San José Acatempa'},
	    {id:10,title:'Atescatempa'},
	    {id:11,title:'El Progreso'},
	    {id:12,title:'Moyuta'},
	    {id:13,title:'Santa Catarina Mita'},
	    {id:14,title:'Comapa'},
	    {id:15,title:'Jalpatagua'},
	    {id:16,title:'Pasaco'},
	    {id:17,title:'Yupiltepeque'}
    ] },
    { id: 16, title: 'Retalhuleu', 'municipios': [
	    {id:1,title:'Champerico'},
	    {id:2,title:'San Andrés Villa Seca'},
	    {id:3,title:'Santa Cruz Muluá'},
	    {id:4,title:'El Asintal'},
	    {id:5,title:'San Felipe'},
	    {id:6,title:'Nuevo San Carlos'},
	    {id:7,title:'San Martín Zapotitlán'},
	    {id:8,title:'Retalhuleu'},
	    {id:9,title:'San Sebastián'}
    ] },
    { id: 17, title: 'Sololá', 'municipios': [
	    {id:1,title:'Concepción'},
	    {id:2,title:'San Antonio Palopó'},
	    {id:3,title:'San Marcos La Laguna'},
	    {id:4,title:'Santa Catarina Palopó'},
	    {id:5,title:'Santa María Visitación'},
	    {id:6,title:'Nahualá'},
	    {id:7,title:'San José Chacayá'},
	    {id:8,title:'San Pablo La Laguna'},
	    {id:9,title:'Santa Clara La Laguna'},
	    {id:10,title:'Santiago Atitlán'},
	    {id:11,title:'Panajachel'},
	    {id:12,title:'San Juan La Laguna'},
	    {id:13,title:'San Pedro La Laguna'},
	    {id:14,title:'Santa Cruz La Laguna'},
	    {id:15,title:'Sololá'},
	    {id:16,title:'San Andrés Semetabaj'},
	    {id:17,title:'San Lucas Tolimán'},
	    {id:18,title:'Santa Catarina Ixtahuacan'},
	    {id:19,title:'Santa Lucía Utatlán'}
    ] },
    { id: 18, title: 'Chiquimula', 'municipios': [
	    {id:1,title:'Camotán'},
	    {id:2,title:'Ipala'},
	    {id:3,title:'San Jacinto'},
	    {id:4,title:'Chiquimula'},
	    {id:5,title:'Jocotán'},
	    {id:6,title:'San José La Arada'},
	    {id:7,title:'Concepción Las Minas'},
	    {id:8,title:'Olopa'},
	    {id:9,title:'San Juan Ermita'},
	    {id:10,title:'Esquipulas'},
	    {id:11,title:'Quezaltepeque'}
    ] },
    { id: 19, title: 'Huehuetenango', 'municipios': [

	    {id:1,title:'Aguacatán'},
	    {id:2,title:'Cuilco'},
	    {id:3,title:'La Libertad'},
	    {id:4,title:'San Gaspar Ixchil'},
	    {id:5,title:'San Mateo Ixtatán'},
	    {id:6,title:'San Rafael La Independencia'},
	    {id:7,title:'Santa Ana Huista'},
	    {id:8,title:'Santiago Chimaltenango'},
	    {id:9,title:'Chiantla'},
	    {id:10,title:'Huehuetenango'},
	    {id:11,title:'Malacatancito'},
	    {id:12,title:'San Ildefonso Ixtahuacán'},
	    {id:13,title:'San Miguel Acatán'},
	    {id:14,title:'San Rafael Petzal'},
	    {id:15,title:'Santa Bárbara'},
	    {id:16,title:'Tectitán'},
	    {id:17,title:'Colotenango'},
	    {id:18,title:'Jacaltenango'},
	    {id:19,title:'Nentón'},
	    {id:20,title:'San Juan Atitán'},
	    {id:21,title:'San Pedro Necta'},
	    {id:22,title:'San Sebastián Coatán'},
	    {id:23,title:'Santa Cruz Barillas'},
	    {id:24,title:'Todos Santos Cuchumatánes'},
	    {id:25,title:'Concepción Huista'},
	    {id:26,title:'La Democracia'},
	    {id:27,title:'San Antonio Huista'},
	    {id:28,title:'San Juan Ixcoy'},
	    {id:29,title:'San Pedro Soloma'},
	    {id:30,title:'San Sebastián'},
	    {id:31,title:'Santa Eulalia'},
	    {id:32,title:'Unión Cantinil'}

    ] },
    { id: 20, title: 'Petén', 'municipios': [
	    {id:1,title:'Dolores'},
	    {id:2,title:'Melchor de Mencos'},
	    {id:3,title:'San Francisco'},
	    {id:4,title:'Sayaxché'},
	    {id:5,title:'Flores'},
	    {id:6,title:'Poptún'},
	    {id:7,title:'San José'},
	    {id:8,title:'La Libertad'},
	    {id:9,title:'San Andrés'},
	    {id:10,title:'San Luis'},
	    {id:11,title:'Las Cruces'},
	    {id:12,title:'San Benito'},
	    {id:13,title:'Santa Ana'}
    ] },
    { id: 21, title: 'Sacatepéquez', 'municipios': [
	    {id:1,title:'Alotenango'},
	    {id:2,title:'Magdalena Milpas Altas'},
	    {id:3,title:'San Lucas Sacatepéquez'},
	    {id:4,title:'Santa María de Jesús'},
	    {id:5,title:'La Antigua Guatemala'},
	    {id:6,title:'Pastores'},
	    {id:7,title:'San Miguel Dueñas'},
	    {id:8,title:'Santiago Sacatepéquez'},
	    {id:9,title:'Ciudad Vieja'},
	    {id:10,title:'San Antonio Aguas Calientes'},
	    {id:11,title:'Santa Catarina Barahona'},
	    {id:12,title:'Santo Domingo Xenacoj'},
	    {id:13,title:'Jocotenango'},
	    {id:14,title:'San Bartolomé Milpas Altas'},
	    {id:15,title:'Santa Lucía Milpas Altas'},
	    {id:16,title:'Sumpango'}
    ] },
    { id: 22, title: 'Suchitepéquez', 'municipios': [
	    {id:1,title:'Chicacao'},
	    {id:2,title:'Pueblo Nuevo'},
	    {id:3,title:'San Bernardino'},
	    {id:4,title:'San Juan Bautista'},
	    {id:5,title:'Santa Bárbara'},
	    {id:6,title:'Cuyotenango'},
	    {id:7,title:'Río Bravo'},
	    {id:8,title:'San Francisco Zapotitlán'},
	    {id:9,title:'San Lorenzo'},
	    {id:10,title:'Santo Domingo'},
	    {id:11,title:'Mazatenango'},
	    {id:12,title:'Samayac'},
	    {id:13,title:'San Gabriel'},
	    {id:14,title:'San Miguel Panán'},
	    {id:15,title:'Santo Tomás La Unión'},
	    {id:16,title:'Patulul'},
	    {id:17,title:'San Antonio'},
	    {id:18,title:'San José El Ídolo'},
	    {id:19,title:'San Pablo Jocopilas'},
	    {id:20,title:'Zunilito'}
    ] },
    ];

	$scope.getMunicipios = function(departamento){
		if(!_.isEmpty(departamento)){
			return departamento.municipios;
		}else{
			return [];
		}
	};

	$scope.submitForm = function(form){
		if(form.$valid){
			console.warn('this is a valid form');
		}else{
			console.warn('this is an invalid form');
		}
	};






}]
);