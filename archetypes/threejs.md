+++
title = '{{ replace .File.ContentBaseName "-" " " | title }}'
date = {{ .Date }}
draft = true
type = 'simple'
tags = ['threejs']
+++


{{< threejs >}}
{{< js "/game/game.js" >}}
