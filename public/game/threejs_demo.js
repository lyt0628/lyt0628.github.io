
import * as THREE from 'three'




let renderer, scene, camera, axes;


function init() {
    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.setClearColor(new THREE.Color(0x000000));
    document.body.appendChild( renderer.domElement );

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 1000 );
    
    camera.position.set(-30,40,30);
    camera.lookAt(scene.position);
    
    axes = new THREE.AxesHelper(20);
    scene.add(axes);


    const plane = createPlane();
    scene.add(plane);

    const cube = createCube();
    scene.add(cube);

    const sphere = createSphere();
    scene.add(sphere); // sphere is too far so we cannot see it

}




function createPlane(){
    const planeGeometry = new THREE.PlaneGeometry(60, 30);
    const planeMaterial = new THREE.MeshBasicMaterial({
	color: 0xAAAAAA
    });
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.position.set(15, 0, 0);
    plane.rotation.x = -0.5 * Math.PI;
    return plane;  
}

function createCube(){
    const cubeGeometry = new THREE.BoxGeometry(4, 4, 4);
    const cubeMaterial = new THREE.MeshBasicMaterial({
	color: 0xFF0000,
	wireframe: true
    });
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.position.set(-4, 3, 0);
    return cube;  
}


function createSphere(){
    const sphereGeometry = new THREE.SphereGeometry(4, 20, 20);
    const sphereMaterial = new THREE.MeshBasicMaterial({
	color: 0x7777EE,
	wireframe: true
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.position.set(20, 4, 2);
    return sphere;  
}

function createSpotLight(){
    const spotLight = new THREE.SpotLight(0xFFFFFF);
    spotLight.position.set(-40, 40, -15);
    spotLight.castShadow = true;
    spotLight.shadow.mapSize = new THREE.Vector2(1024, 1024);
    spotLight.shadow.camera.far = 130;
    spotLight.shadow.camera.newr = 40;
    return spotLight;
}

init()

renderer.render(scene, camera);

