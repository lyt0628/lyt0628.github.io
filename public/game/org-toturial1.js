
// THREE 提供 CSS， WEBGL 几种渲染后端
// 显然WebGL 是最好的
const renderer = new THREE.WebGLRenderer();

// 设置近平面大小
renderer.setSize( window.innerWidth, window.innerHeight );

// 设置WebGL上下文
document.body.appendChild( renderer.domElement );



const scene = new THREE.Scene();


// 正平截头体矩阵
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );



// 几何结构, 是网格的属性
const geometry = new THREE.BoxGeometry( 1, 1, 1 );

// 材质
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );

// 顶点属性 + 颜色 = 网格模型
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;




function animate() {

    requestAnimationFrame( animate );

    // 使用弧度值
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    
    renderer.render( scene, camera );
    
}


animate();

