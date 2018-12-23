var eventCompatible = {
    getDocProp: function (prop_name) {
        return document.documentElement[prop_name] || document.body[prop_name]
    },
    addEvent: function (obj, event, func) {
        if (obj.addEventListener) {
            obj.addEventListener(event, func, false)
        } else if (obj.attachEvent) {
            obj.attachEvent('on' + event, func)
        } else {
            obj['on' + event] = func;
        }
    },
    removeEvent: function (obj, event, func) {
        if (obj.removeEventListener) {
            obj.removeEventListener(event, func, false)
        } else if (obj.detachEvent) {
            obj.detachEvent('on' + event, func)
        } else {
            obj['on' + event] = null;
        }
    },
    preventDefault: function (e) {
        if (e.preventDefault) {
            e.preventDefault();
        } else
            e.returnValue = false
    },
    stopPropagation: function (e) {
        if (e.stopPropagation) {
            e.stopPropagation()
        } else {
            e.cancelBubble = true
        }
    },
/*
    agentEvent: function (ancestor, event, aChild, func) {
        this.addEvent(ancestor, event, function (ev) {
            e = ev || event;
            var target = e.target || e.srcElement;
            for (; target !== e.currentTarget; target = target.parentNode) {
                if (target.nodeName == aChild[0].toUpperCase() && target.classList.contains(aChild[1])) {
                    func.call(target);
                    break
                }
            }
        })
    },
*/
    agentEvent:function(ancestor,eventName,aEl,func){
        this.addEvent(ancestor,eventName,function(ev){
            var e=ev||event;
            var target= e.target || e.srcElement;
            while (target!= e.currentTarget){
                if(target.nodeName==aEl[0].toUpperCase() && target.classList.contains(aEl[1])){
                    func.call(target);
                    break
                }
                target=target.parentNode;
            }
        })
    }
}