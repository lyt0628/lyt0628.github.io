


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




function initStats(type){
    const panelType = (typeof type !== 'undefined' && type) && (!isNan(type)) ? parseInt(type) : 0;
    
    const stats = new Stats();

    stats.showPanel(panelType); // 0 fps, 1 ms, 2 mb, 3 custom
    document.body.append(stats.dom);
    return stats;
}
const stats = initStats();



const controls = new function(){
    this._ = 0.01;
    this.rotationSpeedX = 0.01;
    this.rotationSpeedY = 0.01;
}

const gui = new dat.GUI();
gui.add(controls, '_', 0, 0);
gui.add(controls, 'rotationSpeedX', 0, 0.5);
gui.add(controls, 'rotationSpeedY', 0, 0.5);




function initTrackballControls(camera, renderer) {
    var trackballControls = new THREE.TrackballControls(camera, renderer.domElement);
    trackballControls.rotateSpeed = 1.0;
    trackballControls.zoomSpeed = 1.2;
    trackballControls.panSpeed = 0.8;
    trackballControls.noZoom = false;
    trackballControls.noPan = false;
    trackballControls.staticMoving = true;
    trackballControls.dynamicDampingFactor = 0.3;
    trackballControls.keys = [65, 83, 68];

    return trackballControls;
}
const trackballControls = initTrackballControls(camera, renderer);
const clock =new THREE.Clock();


function onResize(){
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}
window.addEventListener('onResize', onResize);


function animate() {
    stats.update()
    trackballControls.update(clock.getDelta());

    requestAnimationFrame( animate );

    // 使用弧度值
    cube.rotation.x += controls.rotationSpeedX;
    cube.rotation.y += controls.rotationSpeedY;
    
    renderer.render( scene, camera );
    
}



animate();

