
let renderer, scene, camera;

function init() {
    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.setClearColor(new THREE.Color(0x000000));

    // 我们需要阴影
    renderer.shadowMap.enabled = true;
    document.body.appendChild( renderer.domElement );

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 1000 );
    
    camera.position.set(-30,40,30);
    camera.lookAt(scene.position);


    const spotLight = createSpotLight();
    scene.add(spotLight);
    const ambienLight = new THREE.AmbientLight(0x353535);
    scene.add(ambienLight);
    
    const cube = createCube();
    scene.add(cube);

    const plane = createPlane();
    scene.add(plane);


}






function createCube(){
    const cubeGeometry = new THREE.BoxGeometry(4, 4, 4);
    const cubeMaterial = new THREE.MeshLambertMaterial({
	color: 0xFF0000,
    });
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.position.set(-4, 3, 0);

    cube.reciveShadow = true;
    cube.castShadow = true;
    return cube;  
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


function createPlane(){
      // create the ground plane
    var planeGeometry = new THREE.PlaneGeometry(60, 20);
    var planeMaterial = new THREE.MeshLambertMaterial({
      color: 0xAAAAAA
    });
    var plane = new THREE.Mesh(planeGeometry, planeMaterial);

    // rotate and position the plane
    plane.rotation.x = -0.5 * Math.PI;
    plane.position.set(15, 0, 0);
    plane.receiveShadow = true;
    return plane;
}

init();

renderer.render(scene, camera);
