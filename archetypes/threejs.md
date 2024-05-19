+++
title = '{{ replace .File.ContentBaseName "-" " " | title }}'
date = {{ .Date }}
draft = true
type = 'threejs'
tags = ['threejs']
+++


{{< js "/game/game.js" >}}