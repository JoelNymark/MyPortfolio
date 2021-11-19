import * as THREE from 'https://threejs.org/build/three.module.js'; 
import { OrbitControls } from 'https://threejs.org/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://threejs.org/examples/jsm/loaders/GLTFLoader.js';

var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    scene.background = new THREE.Color(0x000000);
    var renderer = new THREE.WebGLRenderer({ canvas: myCanvas,antialias: true });
    renderer.setSize( window.innerWidth, window.innerHeight);
    // renderer.setViewport(1,1,500,500)

    // document.body.appendChild( renderer.domElement );
    // document.getElementsByTagName("canvas").appendChild( renderer.domElement )
    // Our Javascript will go here.
    var colors = new THREE.Color(0xff0000);

    var light = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(light);


    var light2 = new THREE.PointLight(0xffffff, 0.5);
    scene.add(light2);

    var loader2 = new THREE.GLTFLoader();

    var mesh3;

    loader2.load( './_models/truckhockV8.glb', function ( gltf ) {
        console.log(gltf);
        mesh3 = gltf.scene;
        console.log(mesh3.children[0]);
        mesh3.children[0].material = new THREE.MeshLambertMaterial();
        scene.add( mesh3 );
        // mesh.scale(0,0,0);
        mesh3.position.z = -3;
        mesh3.position.x = 0;
        
    }, undefined, function ( error ) {

        console.error( error );

    } );

    render();

    function render() {
    requestAnimationFrame(render);
    if (play===true){
    mesh3.rotation.x += 0.01;
    }
    // render the scene
    renderer.render(scene, camera);

    };

