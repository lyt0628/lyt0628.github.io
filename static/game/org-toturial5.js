import * as THREE from 'three'

let renderer, scene, camera;

let line;
const MAX_POINTS = 500;
let drawCount = 2; // draw the first 2 points, only

init();
animate();


function init(){
 
    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 1000 );
    camera.position.set(0, 0, 1000)

    // 封装了WebGL VBO的数据结构
    const geometry = new THREE.BufferGeometry();
    

    //  每个顶点 3个坐标值
    const positions = new Float32Array( MAX_POINTS * 3 );
    // 设置着色器的 postion， 告知着色器的格式
    geometry.setAttribute( 'position', new THREE.BufferAttribute( positions, 3 ) );


    drawCount = 2; // draw the first 2 points, only
    geometry.setDrawRange( 0, drawCount );

    const material = new THREE.LineBasicMaterial( { color: 0xff0000 } );


    line = new THREE.Line( geometry, material );
    scene.add( line );

    updatePosition();

    renderer.render(scene, camera);
  
}



function updatePosition(){
    // 拿到着色器中的属性
    const positionAttribute = line.geometry.getAttribute( 'position' );

    let x = 0, y = 0, z = 0;
    for ( let i = 0; i < positionAttribute.count; i ++ ) {
    
	positionAttribute.setXYZ( i, x, y, z );
    
	x += ( Math.random() - 0.5 ) * 30;
	y += ( Math.random() - 0.5 ) * 30;
	z += ( Math.random() - 0.5 ) * 30;
    }

}



function animate() {
    requestAnimationFrame( animate );
    drawCount = (drawCount + 1) % MAX_POINTS;

    line.geometry.setDrawRange( 0, drawCount );

    if( drawCount === 0 ){
	updatePosition(); // 重新从 （0，0，0） 开始设置顶点
	line.geometry.attributes.position.needsUpdate = true; // 强制更新顶点 position, 刷新 THREE 的缓存

	line.material.color.setHSL(Math.random(), 1 , 0.5);
    }
    
    renderer.render( scene, camera );
}

