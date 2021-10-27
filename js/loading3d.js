import { GLFTLoader } from '/js/GLTFLoader.js';

const loader = new GLFTLoader();


loader.load( 'path/to/model.glb', function ( gltf ) {

	scene.add( gltf.scene );

}, undefined, function ( error ) {

	console.error( error );

} );