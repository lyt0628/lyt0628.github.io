+++
title = 'Threejs Demo3'
summary = "展示 FPS 和 dat.gui.js"
date = 2024-06-01T17:34:19+08:00
type = 'three'
tags = ['threejs']
+++



<style>

#info {
		position: fixed;
		top: 10px;
		width: 300px;
		
		text-align: center;
		color: green;
		
		z-index: 100;
		display:block;
		margin-top: 100px;
		margin-left: 10px;
  }

</style>


<div id="info">
	S + LMB / 旋动或按住移动MMB ： 拉近拉远; D + LMB/按住RMB移动: 平移移动; 移动LMB: 旋转 
</div>



{{< js "/game/lib/three/three.js" >}}
{{< js "/game/lib/three/controls/TrackballControls.js" >}}
{{< js "/game/lib/util/Stats.js" >}}
{{< js "/game/lib/util/dat.gui.js" >}}
{{< js "/game/threejs_demo3.js" >}}
