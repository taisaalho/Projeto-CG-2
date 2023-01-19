import * as THREE from "./libs/three.module.js";
import { OrbitControls } from "./libs/OrbitControls.js";

let camera, scene, renderer;
let perna1;
let perna2;
let plano;
let corpo;
let controls;
let barrigaFrente;
let costas;
let barrigaDireita;
let barrigaEsquerda;
let cabeçaMain;
let mancha1;
let mancha2;
let miniMancha1;
let miniMancha2;
let boca;
let nariz;
let orelha1;
let orelha2;
let braço1;
let braço2;
let light;
let bum;
let c1;
let c2;
let c3;
let c4;
let b1, b2;
let animaçãoSaltar;
let animaçãoAndar;
let normal;

window.onload = function init() {
    scene = new THREE.Scene();

    //Camera
    const aspect = window.innerWidth / window.innerHeight;
    camera = new THREE.PerspectiveCamera(100, aspect, 0.1, 30);
    camera.position.y = 4;
    camera.position.z = 9;
    camera.position.x = -1;
    camera.lookAt(scene.position);

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor("#ADD8E6");
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    document.body.appendChild(renderer.domElement);

    controls = new OrbitControls(camera, renderer.domElement);

    //Mascote Panda
    //Group
    const Panda = new THREE.Group();
    const Cabeça = new THREE.Group();
    const Corpo = new THREE.Group();
    const Balde = new THREE.Group();

    //Plano
    let materialPlano = new THREE.MeshBasicMaterial({
        color: 0x90ee90,
        wireframe: false,
        side: THREE.DoubleSide,
    });
    let geometryPlano = new THREE.PlaneGeometry(15, 15);

    plano = new THREE.Mesh(geometryPlano, materialPlano);
    plano.rotation.x = Math.PI / 2;

    scene.add(plano);
    plano.position.set(-1, -0.8, 0);

    /* const axeHelperScene = new THREE.AxesHelper(2);
            scene.add(axeHelperScene);
            */

    //Ligth

    let light = new THREE.DirectionalLight({ color: 0x000000, intensity: 0.6 });
    light.position.set(0, 15, 10);
    light.castShadow = true;
    Panda.castShadow = true;
    plano.receiveShadow = true;
    scene.add(light);

    /* let ambientLight = new THREE.AmbientLight({
        color: 0x404040,
        intensity: 0.8,
    });
    scene.add(ambientLight);
    ambientLight.position.set(0, 15, 10); */

    const helperLight = new THREE.PointLightHelper(light, 1);
    scene.add(helperLight);


    //Pernas

    //Perna 1
    let materialPerna1 = new THREE.MeshPhongMaterial({
        color: 0x0e130e,
        wireframe: false,
    });
    let geometryPerna1 = new THREE.BoxGeometry(1, 1.5, 1); //coordenadas
    perna1 = new THREE.Mesh(geometryPerna1, materialPerna1);

    /* const axeHelper = new THREE.AxesHelper(2);
            perna1.add(axeHelper); */

    /* perna1.castShadow = perna1.receiveShadow = true;
    */
    Panda.add(perna1);

    perna1.position.set(-2, 0, 0);

    //Perna 2
    let materialPerna2 = new THREE.MeshPhongMaterial({
        color: 0x0e130e,
        wireframe: false,
    });
    let geometryPerna2 = new THREE.BoxGeometry(1, 1.5, 1); //coordenadas
    perna2 = new THREE.Mesh(geometryPerna2, materialPerna2);

    Panda.add(perna2);

    perna2.position.set(0, 0, 0);

    //Corpo

    //Main (Preto)
    let materialCorpo = new THREE.MeshPhongMaterial({ color: 0x0e130e });
    let geometryCorpo = new THREE.BoxGeometry(4, 3, 2);
    corpo = new THREE.Mesh(geometryCorpo, materialCorpo);

    Corpo.add(corpo);

    corpo.position.set(-1, 2, 0);

    //Barriga Frente (Branco)
    let materialCorpoFrente = new THREE.MeshPhongMaterial({ color: 0xffffff });
    let geometryCorpoFrente = new THREE.BoxGeometry(3, 2.5, 0.25);
    barrigaFrente = new THREE.Mesh(geometryCorpoFrente, materialCorpoFrente);

    /* Panda.add(barrigaFrente); */
    Corpo.add(barrigaFrente);

    barrigaFrente.position.set(-1, 2, 1);

    //Costas (Branco)
    let materialCostas = new THREE.MeshPhongMaterial({ color: 0xffffff });
    let geometryCostas = new THREE.BoxGeometry(3, 2.5, 0.25);
    costas = new THREE.Mesh(geometryCostas, materialCostas);

    Corpo.add(costas);

    costas.position.set(-1, 2, -1);

    //Barriga Direita (Branco)
    let materialBarrigaDireita = new THREE.MeshPhongMaterial({
        color: 0xffffff,
    });
    let geometryBarrigaDireita = new THREE.BoxGeometry(0.25, 2.5, 1.5);
    barrigaDireita = new THREE.Mesh(
        geometryBarrigaDireita,
        materialBarrigaDireita
    );

    Corpo.add(barrigaDireita);

    barrigaDireita.position.set(1, 2, 0);

    //Barriga Esquerda (Branco)
    let materialBarrigaEsquerda = new THREE.MeshPhongMaterial({
        color: 0xffffff,
    });
    let geometryBarrigaEsquerda = new THREE.BoxGeometry(0.25, 2.5, 1.5);
    barrigaEsquerda = new THREE.Mesh(
        geometryBarrigaEsquerda,
        materialBarrigaEsquerda
    );

    Corpo.add(barrigaEsquerda);

    barrigaEsquerda.position.set(-3, 2, 0);

    //Cabeça (Branco)
    let materialCabeçaMain = new THREE.MeshPhongMaterial({ color: 0xffffff });
    let geometryCabeçaMain = new THREE.BoxGeometry(4.5, 3.5, 4);
    cabeçaMain = new THREE.Mesh(geometryCabeçaMain, materialCabeçaMain);

    cabeçaMain.castShadow = cabeçaMain.receiveShadow = true;

    Cabeça.add(cabeçaMain);

    cabeçaMain.position.set(-1, 5.25, 0);

    //c1
    let materialC1 = new THREE.MeshPhongMaterial({ color: 0xffffff });
    let geometryC1 = new THREE.BoxGeometry(3.75, 0.25, 4);
    c1 = new THREE.Mesh(geometryC1, materialC1);

    Cabeça.add(c1);

    c1.position.set(-1, 7, 0);

    //c2
    let materialC2 = new THREE.MeshPhongMaterial({ color: 0xffffff });
    let geometryC2 = new THREE.BoxGeometry(0.25, 3.25, 4);
    c2 = new THREE.Mesh(geometryC2, materialC2);

    Cabeça.add(c2);

    c2.position.set(-3.25, 5.25, 0);

    //c3
    let materialC3 = new THREE.MeshPhongMaterial({ color: 0xffffff });
    let geometryC3 = new THREE.BoxGeometry(0.25, 3.25, 4);
    c3 = new THREE.Mesh(geometryC3, materialC3);

    Cabeça.add(c3);

    c3.position.set(1.25, 5.25, 0);

    //c4
    let materialC4 = new THREE.MeshPhongMaterial({ color: 0xffffff });
    let geometryC4 = new THREE.BoxGeometry(4.25, 3.25, 0.3);
    c4 = new THREE.Mesh(geometryC4, materialC4);

    Cabeça.add(c4);

    c4.position.set(-1, 5.25, -2);

    //Olhos

    //Mancha 1
    let materialMancha1 = new THREE.MeshPhongMaterial({ color: 0x0e130e });
    let geometryMancha1 = new THREE.BoxGeometry(1, 1, 0.5);
    mancha1 = new THREE.Mesh(geometryMancha1, materialMancha1);

    Cabeça.add(mancha1);

    mancha1.position.set(-2.5, 5.8, 1.8);

    //Mancha 2
    let materialMancha2 = new THREE.MeshPhongMaterial({ color: 0x0e130e });
    let geometryMancha2 = new THREE.BoxGeometry(1, 1, 0.5);
    mancha2 = new THREE.Mesh(geometryMancha2, materialMancha2);

    Cabeça.add(mancha2);

    mancha2.position.set(0.5, 5.8, 1.8);

    //Mini Mancha (Mancha Direita Cima)
    let materialMiniMancha1 = new THREE.MeshPhongMaterial({ color: 0x0e130e });
    let geometryMiniMancha1 = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    miniMancha1 = new THREE.Mesh(geometryMiniMancha1, materialMiniMancha1);

    Cabeça.add(miniMancha1);

    miniMancha1.position.set(0.5, 6.2, 1.8);

    //Mini Mancha (Mancha Esquerda Cima)
    let materialMiniMancha2 = new THREE.MeshPhongMaterial({ color: 0x0e130e });
    let geometryMiniMancha2 = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    miniMancha2 = new THREE.Mesh(geometryMiniMancha2, materialMiniMancha2);

    Cabeça.add(miniMancha2);

    miniMancha2.position.set(-2.5, 6.2, 1.8);

    //Boca
    let materialBoca = new THREE.MeshPhongMaterial({ color: 0xffffff });
    let geometryBoca = new THREE.BoxGeometry(1.7, 1.25, 3);
    boca = new THREE.Mesh(geometryBoca, materialBoca);

    Cabeça.add(boca);

    boca.position.set(-1, 4.2, 2);

    //Nariz
    let materialNariz = new THREE.MeshPhongMaterial({ color: 0x0e130e });
    let geometryNariz = new THREE.BoxGeometry(1, 0.4, 0.75);
    nariz = new THREE.Mesh(geometryNariz, materialNariz);

    Cabeça.add(nariz);

    nariz.position.set(-1, 4.75, 3.25);

    //Orelha

    //Orelha Direita
    let materialOrelha1 = new THREE.MeshPhongMaterial({ color: 0x0e130e });
    let geometryOrelha1 = new THREE.BoxGeometry(2, 2, 0.5);
    orelha1 = new THREE.Mesh(geometryOrelha1, materialOrelha1);

    Cabeça.add(orelha1);

    orelha1.position.set(-3.25, 6.5, 1);

    //Orelha Esquerda
    let materialOrelha2 = new THREE.MeshPhongMaterial({ color: 0x0e130e });
    let geometryOrelha2 = new THREE.BoxGeometry(2, 2, 0.5);
    orelha2 = new THREE.Mesh(geometryOrelha2, materialOrelha2);

    Cabeça.add(orelha2);

    orelha2.position.set(1.25, 6.5, 1);

    //Braços

    //Braço Direita
    let materialBraço1 = new THREE.MeshPhongMaterial({ color: 0x0e130e });
    let geometryBraço1 = new THREE.BoxGeometry(1.2, 2.25, 1);
    braço1 = new THREE.Mesh(geometryBraço1, materialBraço1);

    Panda.add(braço1);

    braço1.position.set(1.25, 1.95, 0);

    //Braço Esquerda
    let materialBraço2 = new THREE.MeshPhongMaterial({ color: 0x0e130e });
    let geometryBraço2 = new THREE.BoxGeometry(1.2, 2.25, 1);
    braço2 = new THREE.Mesh(geometryBraço2, materialBraço2);

    Panda.add(braço2);

    braço2.position.set(-3.25, 1.95, 0);

    //b1
    let materialB1 = new THREE.MeshPhongMaterial({ color: 0x0e130e });
    let geometryB1 = new THREE.BoxGeometry(1.2, 2.5, 0.75);
    b1 = new THREE.Mesh(geometryB1, materialB1);

    Panda.add(b1);

    b1.position.set(-3.25, 1.95, 0);

    //b2
    let materialB2 = new THREE.MeshPhongMaterial({ color: 0x0e130e });
    let geometryB2 = new THREE.BoxGeometry(1.2, 2.5, 0.75);
    b2 = new THREE.Mesh(geometryB2, materialB2);

    Panda.add(b2);

    b2.position.set(1.25, 1.95, 0);

    //Lil Bum
    let materialBum = new THREE.MeshPhongMaterial({ color: 0x0e130e });
    let geometryBum = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    bum = new THREE.Mesh(geometryBum, materialBum);

    Corpo.add(bum);

    bum.position.set(-1, 1.25, -1.25);


    //Base Balde
    let materialBaseBalde= new THREE.MeshPhongMaterial({ color: 0x808080 });
    let geometryBaseBalde = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    baseBalde = new THREE.Mesh(geometryBaseBalde, materialBaseBalde);

    Balde.add(baseBalde);

    bum.position.set(-1, 1.25, -1.25);  



    //Add Group
    scene.add(Panda);
    scene.add(Balde);



    // set the animation function: if `null` is passed it will stop any already ongoing animation
    renderer.setAnimationLoop(render);
    /* renderer.render(scene,camera) */

    Panda.add(Corpo);
    Panda.add(Cabeça);



};

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Movimentos
let movimento = 0;

//Andar
function andar(){
    if (movimento == 0) {
      perna1.rotation.x += (2 * Math.PI) / 180;
      perna2.rotation.x -= (2 * Math.PI) / 180;
    
      braço1.rotation.x += (2 * Math.PI) / 180;
      b2.rotation.x += (2 * Math.PI) / 180;
    
      braço2.rotation.x -= (2 * Math.PI) / 180;
      b1.rotation.x -= (2 * Math.PI) / 180;
    
      /* Corpo.position.x += 0.05; */
    
      corpo.position.y += 0.005;
      costas.position.y += 0.005;
      barrigaDireita.position.y += 0.005;
      barrigaEsquerda.position.y += 0.005;
      barrigaFrente.position.y += 0.005;
      bum.position.y += 0.005;
    
      cabeçaMain.position.y += 0.005;
      c1.position.y += 0.005;
      c2.position.y += 0.005;
      c3.position.y += 0.005;
      c4.position.y += 0.005;
      boca.position.y += 0.005;
      nariz.position.y += 0.005;
      orelha1.position.y += 0.005;
      orelha2.position.y += 0.005;
      mancha1.position.y += 0.005;
      mancha2.position.y += 0.005;
      miniMancha1.position.y += 0.005;
      miniMancha2.position.y += 0.005;
    
      console.log("b2.rotation.x");
      console.log(perna1.rotation.x);
    
      if (perna1.rotation.x >= 0.48869219055841223) {
        movimento = 1;
      }
    }
    
    if (movimento == 1) {
      perna1.rotation.x -= (2 * Math.PI) / 180;
      perna2.rotation.x += (2 * Math.PI) / 180;
    
      console.log(perna1.rotation.x);
      console.log("trás");
    
      braço2.rotation.x += (2 * Math.PI) / 180;
      b1.rotation.x += (2 * Math.PI) / 180;
    
      braço1.rotation.x -= (2 * Math.PI) / 180;
      b2.rotation.x -= (2 * Math.PI) / 180;
    
      corpo.position.y -= 0.005;
      costas.position.y -= 0.005;
      barrigaDireita.position.y -= 0.005;
      barrigaEsquerda.position.y -= 0.005;
      barrigaFrente.position.y -= 0.005;
      bum.position.y -= 0.005;
    
      cabeçaMain.position.y -= 0.005;
      c1.position.y -= 0.005;
      c2.position.y -= 0.005;
      c3.position.y -= 0.005;
      c4.position.y -= 0.005;
      boca.position.y -= 0.005;
      nariz.position.y -= 0.005;
      orelha1.position.y -= 0.005;
      orelha2.position.y -= 0.005;
      mancha1.position.y -= 0.005;
      mancha2.position.y -= 0.005;
      miniMancha1.position.y -= 0.005;
      miniMancha2.position.y -= 0.005;
    
      /* console.log(braço1.rotation.x) */
      console.log(b2.rotation.x);
    
      if (perna1.rotation.x <= -0.48869219055841223) {
        movimento = 0;
      }
    }
};


document.addEventListener("keypress", (w) => {
  if ("w" == w.key) {
    animaçãoAndar = true;}
});


//Saltar
function saltar(){
    if (movimento == 0) {
        perna1.position.y += 0.02;
        perna2.position.y += 0.02;
    
        braço1.rotation.z += (2 * Math.PI) / 180;
        b2.rotation.z += (2 * Math.PI) / 180;
    
        braço2.rotation.z -= (2 * Math.PI) / 180;
        b1.rotation.z -= (2 * Math.PI) / 180;
    
        corpo.position.y += 0.005;
        costas.position.y += 0.005;
        barrigaDireita.position.y += 0.005;
        barrigaEsquerda.position.y += 0.005;
        barrigaFrente.position.y += 0.005;
        bum.position.y += 0.005;
    
        cabeçaMain.position.y += 0.005;
        c1.position.y += 0.005;
        c2.position.y += 0.005;
        c3.position.y += 0.005;
        c4.position.y += 0.005;
        boca.position.y += 0.005;
        nariz.position.y += 0.005;
        orelha1.position.y += 0.005;
        orelha2.position.y += 0.005;
        mancha1.position.y += 0.005;
        mancha2.position.y += 0.005;
        miniMancha1.position.y += 0.005;
        miniMancha2.position.y += 0.005;
    
        console.log(b1.rotation.z);
        //-0.698131700797732
        if (b2.rotation.z >= 0.698131700797732){
            movimento = 1
        };
    };
    if (movimento == 1){
        perna1.position.y -= 0.02;
        perna2.position.y -= 0.02;
    
        braço1.rotation.z -= (2 * Math.PI) / 180;
        b2.rotation.z -= (2 * Math.PI) / 180;
    
        braço2.rotation.z += (2 * Math.PI) / 180;
        b1.rotation.z += (2 * Math.PI) / 180;
    
        corpo.position.y -= 0.005;
        costas.position.y -= 0.005;
        barrigaDireita.position.y -= 0.005;
        barrigaEsquerda.position.y -= 0.005;
        barrigaFrente.position.y -= 0.005;
        bum.position.y -= 0.005;
    
        cabeçaMain.position.y -= 0.005;
        c1.position.y -= 0.005;
        c2.position.y -= 0.005;
        c3.position.y -= 0.005;
        c4.position.y -= 0.005;
        boca.position.y -= 0.005;
        nariz.position.y -= 0.005;
        orelha1.position.y -= 0.005;
        orelha2.position.y -= 0.005;
        mancha1.position.y -= 0.005;
        mancha2.position.y -= 0.005;
        miniMancha1.position.y -= 0.005;
        miniMancha2.position.y -= 0.005;
    
        if (b2.rotation.z <= -0.698131700797732){
            movimento = 0
        }
    };
    
    };


document.addEventListener('keypress', (j) => {
    if ("j" == j.key){
        animaçãoSaltar = true;}
       /*  movimento = 0 */
});


//Normal
function PosiçãoNormal(){
    perna1.rotation.x = 0;
    perna2.rotation.x = 0;
    perna1.position.y = 0;
    perna2.position.y = 0;
    braço1.rotation.x = 0;
    b1.rotation.x = 0;
    braço2.rotation.x = 0;
    b2.rotation.x = 0;
    braço1.rotation.z = 0;
    b1.rotation.z = 0;
    braço2.rotation.z = 0;
    b2.rotation.z = 0;
    barrigaDireita.position.y = 2;
    corpo.position.y = 2;
    barrigaEsquerda.position.y = 2;
    barrigaFrente.position.y = 2;
    costas.position.y = 2;
    cabeçaMain.position.y = 5.25;
    c1.position.y = 7;
    c2.position.y = 5.25;
    c3.position.y = 5.25;
    c4.position.y = 5.25;
    boca.position.y = 4.2;
    nariz.position.y = 4.75;
    orelha1.position.y = 6.5;
    orelha2.position.y = 6.5;
    mancha1.position.y = 5.8;
    mancha2.position.y = 5.8;
    miniMancha1.position.y = 6.2;
    miniMancha2.position.y = 6.2;
    bum.position.y = 1.25;

    /* movimento = 0; */
}; 


document.addEventListener("keypress", (m) => {
    if ("m" == m.key){
        normal = true;
    }
});


function balde(){

};


function render() {
    if (animaçãoSaltar){
        saltar();
    }; 

    if (animaçãoAndar) {
        andar();
    }

    if (normal){
        PosiçãoNormal();
    }



  renderer.render(scene, camera);
  controls.update();
};
