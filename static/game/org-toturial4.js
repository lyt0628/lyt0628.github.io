
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );



const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );


scene.add( cube );

// 关闭自动顶点数据更新
cube.matrixAutoUpdate = false;
cube.updateMatrix();

camera.position.z = 5;


function animate() {
    requestAnimationFrame( animate );

    // 使用弧度值
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;



    // 刷新顶点
    cube.updateMatrix();
    renderer.render( scene, camera );
    
}

animate();

