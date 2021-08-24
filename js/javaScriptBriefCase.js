let tittleOneProjects = document.getElementById('titOne');
let tittleTwoProjects = document.getElementById('titTwo');
let textProject = document.getElementById('textPro');
let technologicProject = document.getElementById('tecnologic');
let image = document.getElementById('image');

class projects{
    titOne = "";
    titTwo = "";
    abstract = "";
    tecPro = "";
    urlLink = ""; 
    imgPro = "";  
    
    constructor(titOne,titTwo,abstract, tecPro, urlLink,imgPro){
        this.titOne = titOne;
        this.titTwo = titTwo;
        this.abstract = abstract;
        this.tecPro = tecPro;
        this.urlLink = urlLink;
        this.imgPro = imgPro;
    }
    
    changeComponent( ){
        
        tittleOneProjects.innerText = this.titOne;
        tittleTwoProjects.innerText = this.titTwo;
        textProject.innerText = this.abstract;
        technologicProject.innerText = this.tecPro;
        image.src = this.imgPro;
    }

}


/* first proyect*/
const titProy11 = ' Visiones';
const titProy12 = ' Integradas';
const textOneProyect =  'Visiones integradas es una empresa dedicada a a venta de seguros, asesoría en finanzas y ' + 
                        'servicios de outsourcing. Esta es una pagina web enfocada en la recuperación de leds a partir' +
                        'de talleres virtuales, por lo cual cuenta con un sistema incorporado de webinar, un sistema de ' +
                        'suscripción y un sistema automatizado de envió de correos. Cuanta además con un blog enfocado a ' +
                        'generar contenido de valor.';
const technologicsProyect1 = 'WordPress';
const urlDemoProyect1 = 'https://visionesintegradas.com/';
const imgDemoProyecto1 = 'img/visionesIntegradas.png';

/* second proyect*/
const titProy21 = 'Abba';
const titProy22 = 'Spa';
const textTwoProyect = 'Abba Spa es una empresa que presta sus servicios a modo de outsourcing a la multinacional ' +
                       'Skandia pensiones y cesantías. cuenta con un sistema de programación de citas, con integración '+
                       'de diferentes pasarelas de pago, un sistema E- comerce y un sistema de recordatorios para los clientes.';
const technologicsProyectTwo = 'WordPress';
const urlDemoProyect2 = 'https://www.abbaspa.com.co/';
const imgDemoProyecto2 = 'img/AbbaSpa.png';

/* third proyect */
const titProy31 = 'Sweet';
const titProy32 = 'Success';
const textTreeProyect = 'Sweet Succes es una galletería colombiana dedicada a la manufactura y comercialización de productos ' +
                        'alimenticios relacionados a la panificación en masa. cuenta con un sistema E-commerce completo, dos ' +
                        'sistemas de pago y una implementación de cotización de precios de envió.';

const technologicsProyectThird = 'Wordpress';
const urlDemoProyect3 = "https://quegalleta.com/";
const imgDemoProyect3 = 'img/Quegalleta.png';

/* forth proyect */ 
const titProy41 = 'Soy';
const titProy42 = 'Legado';
const textFourProyect = 'Soy Legado es una fundación de niños que presta sus servicios al norte de Bogotá, con el fin de apoyar ' +
                        'y orientar niños en condiciones de vulnerabilidad, esta pagina cuenta con un sistema de recaudo de ' +
                        'donaciones así como incorporación de respuesta como un botón de WhatsApp y respuestas de correo automatizadas.';
const technologicsProyectForth = 'Wordpress';
const urlDemoProyect4 = 'https://www.soylegado.org/';
const imgDemoProyect4 = 'img/soyLegado.png';

titPro1 = [titProy11,titProy21,titProy31,titProy41];
titPro2 = [titProy12,titProy22,titProy32,titProy42];
textPro = [textOneProyect,textTwoProyect,textTreeProyect,textFourProyect];
techProy = [technologicsProyect1,technologicsProyectTwo,technologicsProyectThird,technologicsProyectForth];
urlProject = [urlDemoProyect1,urlDemoProyect2,urlDemoProyect3,urlDemoProyect4];
imgProject = [imgDemoProyecto1,imgDemoProyecto2,imgDemoProyect3,imgDemoProyect4];

let projectsWeb = [];
for (i = 0; i < 4; i++){
    let project = {
        tit1 : '',
        tit2 : '',
        description : '',
        technologics : '',
        urlLink : '',
        image : ''
    }
    project.tit1 = titPro1[i];
    project.tit2 = titPro2[i];
    project.description = textPro[i];
    project.technologics = techProy[i];
    project.urlLink = urlProject[i];
    project.image = imgProject[i];
    projectsWeb.push(project);
}

let up = document.getElementById('up');
let down = document.getElementById('down');
let cont = 0;

up.addEventListener('click', ()=>{
    if(cont < projectsWeb.length -1){
        cont++;
        let objProject = projectsWeb[cont];
        let t1 = objProject.tit1;
        let t2 = objProject.tit2;
        let text = objProject.description;
        let techno = objProject.technologics;
        let url = objProject.urlLink;
        let img = objProject.image;
    
        card = new projects(t1,t2,text,techno,url,img);
        card.changeComponent();
        console.log(cont);
    } else{
        swal({
            title: "Proyectos Actuales",
            icon: "success",
          });
    }
    
    
});

down.addEventListener('click' , ()=>{
    if(cont > 0){
        cont--;
    let objProject = projectsWeb[cont];
    let t1 = objProject.tit1;
    let t2 = objProject.tit2;
    let text = objProject.description;
    let techno = objProject.technologics;
    let url = objProject.urlLink;
    let img = objProject.image;

    card = new projects(t1,t2,text,techno,url,img);
    card.changeComponent();
    console.log(cont);
    }else{
        swal({
            title: "Visiones Integradas",
            icon: "success",
          });
    }    
});
