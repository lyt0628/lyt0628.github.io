

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );

camera.position.set( 0, 0, 5 );
camera.lookAt( 0, 0, 0 );

const scene = new THREE.Scene();


const loader = new THREE.GLTFLoader()
loader.load( '/game/model/monkey.glb', function ( gltf ) {

    gltf.scene.traverse(function(child){
	if(child.isMesh){
	    
	    child.material.emissive = child.material.color
	    child.material.emissiveMap = child.material.map
	}
    })


    scene.add( gltf.scene );
    renderer.render(scene, camera)

    console.log(gltf)

    
}, function ( xhr ) {
    console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
    
}, function ( error ) {
    console.error( error );

} );

