montageDefine("5fd1bbd","ui/moviepopup.reel/moviepopup.html",{text:'<!DOCTYPE html><html><head>\n    <meta http-equiv=content-type content="text/html; charset=utf-8">\n    <link rel=stylesheet type=text/css href=moviepopup.css>\n    <script src=http://www.youtube.com/player_api></script>\n    <script type=text/montage-serialization>{"owner":{"properties":{"element":{"#":"moviepopup"},"player":{"#":"iframe"}}},"closeButton":{"prototype":"matte/ui/button.reel","properties":{"element":{"#":"close-button"},"contenteditable":"true","dir":"ltr","draggable":"true","formenctype":"application/x-www-form-urlencoded","formmethod":"get","type":"button"},"listeners":[{"type":"action","listener":{"@":"owner"}}]},"date":{"prototype":"matte/ui/input-date.reel","properties":{"element":{"#":"date"},"contenteditable":"true","dir":"ltr","draggable":"true","type":"button"}}}</script>\n</head>\n<body>\n    <div data-montage-id=moviepopup class=moviepopup>\n        <button data-montage-id=close-button class="button button-close">\n            ✕\n        </button>\n        <iframe data-montage-id=iframe class=montage-youtube-player type=text/html width=100% height=100% frameborder=0 allowfullscreen=""></iframe>\n        ​\n        <input type=date data-montage-id=date>\n    </div>\n\n</body></html>'});