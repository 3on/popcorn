montageDefine("3d5d36e","ui/scroller.reel/scroller.html",{text:'<!DOCTYPE html><html><head>\n    <meta charset=utf-8>\n    <link rel=stylesheet href=scroller.css>\n    <script type=text/montage-serialization>{"scrollbars":{"prototype":"ui/scroll-bars.reel","properties":{"element":{"#":"scrollbars"}}},"translateComposer1":{"prototype":"montage/composer/translate-composer","properties":{"component":{"@":"owner"},"minTranslateX":0,"minTranslateY":0,"invertAxis":true,"stealChildrenPointer":true},"bindings":{"translateX":{"<->":"@owner.scrollX"},"translateY":{"<->":"@owner.scrollY"},"maxTranslateX":{"<-":"@owner._maxTranslateX"},"maxTranslateY":{"<-":"@owner._maxTranslateY"},"axis":{"<-":"@owner.axis"},"hasMomentum":{"<-":"@owner.hasMomentum"}},"listeners":[{"type":"translateStart","listener":{"@":"owner"}},{"type":"translateEnd","listener":{"@":"owner"}}]},"owner":{"prototype":"ui/scroller.reel","properties":{"_content":{"#":"content"},"element":{"#":"montage-scroller"},"_scrollBars":{"@":"scrollbars"}}}}</script>\n</head>\n<body>\n    <div data-montage-id=montage-scroller class=matte-Scroller>\n        <div data-montage-id=scrollbars></div>\n        <div data-montage-id=content class=matte-Scroller-content>\n            <div data-param=*></div>\n        </div>\n    </div>\n\n\n</body></html>'});