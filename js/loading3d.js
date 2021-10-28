import { GLFTLoader } from '/js/GLTFLoader.js';

//move build to js folder!!!!

const loader = new GLFTLoader();


loader.load( 'path/to/model.glb', function ( gltf ) {

	scene.add( gltf.scene );

}, undefined, function ( error ) {

	console.error( error );

} );