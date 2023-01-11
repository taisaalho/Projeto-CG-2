import * as THREE from './libs/three.module.js';
import {OrbitControls} from './libs/OrbitControls.js'

let camera,  scene,  renderer;
let perna1;
let plano;
let controls;


window.onload = function init() {
        scene = new THREE.Scene();
    
        // create a camera, which defines where we're looking at
        const aspect = window.innerWidth / window.innerHeight;
        camera = new THREE.PerspectiveCamera(100, aspect, 0.1, 10); // perspective camera
        camera.position.x = 0; // place the camera using world coordinates 
        camera.position.z = 0;
        camera.position.z = 5;
        camera.lookAt(scene.position);  //point the camera to the center of the scene

        // create a renderer: if no Canvas parameter  is passed, a new canvas element  will be created
        renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight); // set output canvas and viewport  size
        renderer.setClearColor("#F0F8FF"); // configure clear color (background color)
        
        // add the output of the renderer to an HTML element (adds a Canvas element  to the body)
        document.body.appendChild(renderer.domElement);
        
        controls = new OrbitControls(camera, renderer.domElement);
        
        //Mascote Panda

        //Plano
        let materialPlano = new THREE.MeshBasicMaterial({ color: 0x008000 , wireframe: false, side: THREE.DoubleSide });
        let geometryPlano = new THREE.PlaneGeometry( 10,10 );
        
        plano = new THREE.Mesh(geometryPlano,materialPlano);
        plano.rotation.x = Math.PI / 2;

        
        scene.add(plano);
        plano.position.x = 0;
        plano.position.y = 0;
        


        //Pernas
        let material = new THREE.MeshBasicMaterial( { color: 0x00ff00 ,wireframe: true} );
        let geometry = new THREE.BoxGeometry(1,2,1); //coordenadas
        perna1 = new THREE.Mesh(geometry,material);
        
        const axeHelper = new THREE.AxesHelper(2);
        perna1.add(axeHelper);

        perna1.position.x = 0;
        perna1.geometry.y = 0;
        scene.add(perna1);
        
        

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











   








