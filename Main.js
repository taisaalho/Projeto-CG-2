import * as THREE from './libs/three.module.js';
import {OrbitControls} from './libs/OrbitControls.js'

let camera,  scene,  renderer;
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



window.onload = function init() {
        scene = new THREE.Scene();
    
        // create a camera, which defines where we're looking at
        const aspect = window.innerWidth / window.innerHeight;
        camera = new THREE.PerspectiveCamera(100, aspect, 0.1, 30); 
        camera.position.y = 4; 
        camera.position.z = 9;
        camera.position.x = -1;
        camera.lookAt(scene.position);  

        renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight); 
        renderer.setClearColor("#ADD8E6"); 
                
        document.body.appendChild(renderer.domElement);

        controls = new OrbitControls(camera, renderer.domElement);

        
        //Mascote Panda

        /* //Plano
        let materialPlano = new THREE.MeshBasicMaterial({ color: 0x90ee90 , wireframe: false, side: THREE.DoubleSide });
        let geometryPlano = new THREE.PlaneGeometry(8,8);
        
        plano = new THREE.Mesh(geometryPlano,materialPlano);
        plano.rotation.x = Math.PI / 2;

        
        scene.add(plano);
        plano.position.set(0,0,0); */
        

        /* const axeHelperScene = new THREE.AxesHelper(2);
        scene.add(axeHelperScene);
        */
       
       //Ligth
       
       let light = new THREE.PointLight({color: 0x000000, intensity: 0.8});
       light.position.set(0,15,10);
       light.castShadow = true;
       scene.add(light);
       
       let ambientLight = new THREE.AmbientLight( {color: 0x404040, intensity: 0.8} );
       scene.add(ambientLight);
       ambientLight.position.set(0,15,10);

       const helperLight = new THREE.PointLightHelper(light,1);
       scene.add(helperLight);
    

      

        //Group
        const Panda = new THREE.Group;


        //Pernas
        let materialPerna1 = new THREE.MeshStandardMaterial( { color: 0x0e130e ,wireframe: false} );
        let geometryPerna1 = new THREE.BoxGeometry(1,1.5,1); //coordenadas
        perna1 = new THREE.Mesh(geometryPerna1,materialPerna1);
        
        /* const axeHelper = new THREE.AxesHelper(2);
        perna1.add(axeHelper); */

        /* perna1.castShadow = perna1.receiveShadow = true;
 */
        Panda.add(perna1);

        perna1.position.set(-2,0,0);

        let materialPerna2 = new THREE.MeshStandardMaterial( { color: 0x0e130e ,wireframe: false} );
        let geometryPerna2 = new THREE.BoxGeometry(1,1.5,1); //coordenadas
        perna2 = new THREE.Mesh(geometryPerna2,materialPerna2);
        
        /* const axeHelper2 = new THREE.AxesHelper(2);
        perna2.add(axeHelper2); */

        Panda.add(perna2);

        perna2.position.set(0,0,0);
        

        //Corpo

        //Main (Preto)
        let materialCorpo = new THREE.MeshStandardMaterial( { color: 0x0e130e});
        let geometryCorpo = new THREE.BoxGeometry(4,3,2);
        corpo = new THREE.Mesh(geometryCorpo,materialCorpo);

        Panda.add(corpo);

        corpo.position.set(-1,2,0);


        //Barriga Frente (Branco)
        let materialCorpoFrente = new THREE.MeshStandardMaterial({color: 0xffffff});
        let geometryCorpoFrente = new THREE.BoxGeometry(3,2.5,0.25);
        barrigaFrente = new THREE.Mesh(geometryCorpoFrente,materialCorpoFrente);

        Panda.add(barrigaFrente);

        barrigaFrente.position.set(-1,2,1);


        //Costas (Branco)
        let materialCostas = new THREE.MeshStandardMaterial({color: 0xffffff});
        let geometryCostas = new THREE.BoxGeometry(3,2.5,0.25);
        costas = new THREE.Mesh(geometryCostas,materialCostas);

        Panda.add(costas);

        costas.position.set(-1,2,-1);


        //Barriga Direita (Branco)
        let materialBarrigaDireita = new THREE.MeshStandardMaterial({color: 0xffffff});
        let geometryBarrigaDireita = new THREE.BoxGeometry(0.25,2.5,1.5);
        barrigaDireita = new THREE.Mesh(geometryBarrigaDireita,materialBarrigaDireita);

        Panda.add(barrigaDireita);

        barrigaDireita.position.set(1,2,0);



        //Barriga Esquerda (Branco)
        let materialBarrigaEsquerda = new THREE.MeshStandardMaterial({color: 0xffffff});
        let geometryBarrigaEsquerda = new THREE.BoxGeometry(0.25,2.5,1.5);
        barrigaEsquerda = new THREE.Mesh(geometryBarrigaEsquerda,materialBarrigaEsquerda);

        Panda.add(barrigaEsquerda);

        barrigaEsquerda.position.set(-3,2,0);


        //Cabeça (Branco)
        let materialCabeçaMain = new THREE.MeshStandardMaterial({color: 0xffffff});
        let geometryCabeçaMain = new THREE.BoxGeometry(5,3.5,4);
        cabeçaMain = new THREE.Mesh(geometryCabeçaMain,materialCabeçaMain);

        cabeçaMain.castShadow =  cabeçaMain.receiveShadow = true;

        Panda.add(cabeçaMain);

        cabeçaMain.position.set(-1,5.25,0)


        //Olhos 

        //Mancha 1
        let materialMancha1 = new THREE.MeshStandardMaterial({color: 0x0e130e});
        let geometryMancha1 = new THREE.BoxGeometry(1,1,0.5);
        mancha1 = new THREE.Mesh(geometryMancha1,materialMancha1);

        Panda.add(mancha1);

        mancha1.position.set(-2.5,5.8,1.8)


        //Mancha 2
        let materialMancha2 = new THREE.MeshStandardMaterial({color: 0x0e130e});
        let geometryMancha2 = new THREE.BoxGeometry(1,1,0.5);
        mancha2 = new THREE.Mesh(geometryMancha2,materialMancha2);

        Panda.add(mancha2);

        mancha2.position.set(0.5,5.8,1.8)


        //Mini Mancha (Mancha Direita Cima)
        let materialMiniMancha1 = new THREE.MeshStandardMaterial({color: 0x0e130e});
        let geometryMiniMancha1 = new THREE.BoxGeometry(0.5,0.5,0.5);
        miniMancha1 = new THREE.Mesh(geometryMiniMancha1,materialMiniMancha1);

        Panda.add(miniMancha1);

        miniMancha1.position.set(0.5,6.2,1.8)


        //Mini Mancha (Mancha Esquerda Cima)
        let materialMiniMancha2 = new THREE.MeshStandardMaterial({color: 0x0e130e});
        let geometryMiniMancha2 = new THREE.BoxGeometry(0.5,0.5,0.5);
        miniMancha2 = new THREE.Mesh(geometryMiniMancha2,materialMiniMancha2);

        Panda.add(miniMancha2);

        miniMancha2.position.set(-2.5,6.2,1.8)


        //Boca
        let materialBoca = new THREE.MeshStandardMaterial({color: 0xffffff});
        let geometryBoca = new THREE.BoxGeometry(1.5,1.25,3);
        boca = new THREE.Mesh(geometryBoca,materialBoca);

        Panda.add(boca);

        boca.position.set(-1,4.2,2)


        //Nariz
        let materialNariz = new THREE.MeshStandardMaterial({color: 0x0e130e});
        let geometryNariz = new THREE.BoxGeometry(1,0.4,0.75);
        nariz = new THREE.Mesh(geometryNariz,materialNariz);

        Panda.add(nariz);

        nariz.position.set(-1,4.75,3.25)


        //Orelha

        //Orelha Direita
        let materialOrelha1 = new THREE.MeshStandardMaterial({color: 0x0e130e});
        let geometryOrelha1 = new THREE.BoxGeometry(2,2,0.5);
        orelha1 = new THREE.Mesh(geometryOrelha1,materialOrelha1);
        
        Panda.add(orelha1);

        orelha1.position.set(-3.25,6.5,1);


        //Orelha Esquerda
        let materialOrelha2 = new THREE.MeshStandardMaterial({color: 0x0e130e});
        let geometryOrelha2 = new THREE.BoxGeometry(2,2,0.5);
        orelha2 = new THREE.Mesh(geometryOrelha2,materialOrelha2);
        
        Panda.add(orelha2);

        orelha2.position.set(1.25,6.5,1);


        //Braços

        //Braço Direita
        let materialBraço1 = new THREE.MeshStandardMaterial({color: 0x0e130e});
        let geometryBraço1 = new THREE.BoxGeometry(1.5,2.25,1.2);
        braço1 = new THREE.Mesh(geometryBraço1,materialBraço1);

        Panda.add(braço1);

        braço1.position.set(1.25,1.95,0);


        //Braço Esquerda
        let materialBraço2 = new THREE.MeshStandardMaterial({color: 0x0e130e});
        let geometryBraço2 = new THREE.BoxGeometry(1.5,2.25,1.2);
        braço2 = new THREE.Mesh(geometryBraço2,materialBraço2);

        Panda.add(braço2);

        braço2.position.set(-3.25,1.95,0);


        //Lil Bum
        let materialBum = new THREE.MeshStandardMaterial({color: 0x0e130e});
        let geometryBum = new THREE.BoxGeometry(0.5,0.5,0.5);
        bum = new THREE.Mesh(geometryBum,materialBum);

        Panda.add(bum);

        bum.position.set(-1,1.25,-1.25);




        
        scene.add(Panda);

        // set the animation function: if `null` is passed it will stop any already ongoing animation
        renderer.setAnimationLoop(render); 
        /* renderer.render(scene,camera) */
        }
        
        function render() {
            // rotate the cube around its axes
            /* perna1.rotation.y += 0.01;
            perna1.rotation.z += 0.01; */
        
            renderer.render(scene, camera); 
            controls.update();
        }











   








