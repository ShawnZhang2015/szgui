cc.Class({
    'extends': cc.Component,

    properties: {

        isChecked: {
            set: function set(value) {
                if (!this.switchOn || !this.switchOff || !this.switchThumb) {
                    return;
                }

                this.switchOn.active = value;
                this.switchOff.active = !value;

                var pt = this.switchThumb.getPosition();
                pt.x = value ? (this.node.width - this.switchThumb.width) / 2 - 4 : (this.switchThumb.width - this.node.width) / 2 + 4;
                this.switchThumb.position = pt;
                // this.scheduleOnce(()=>{
                // this.switchThumb.runAction(cc.moveTo(0.1, pt));
                // });
            },

            get: function get() {
                if (!this.switchOn) {
                    return false;
                }
                return this.switchOn.active;
            }
        }
    },

    // use this for initialization
    onLoad: function onLoad() {
        var _this = this;

        this.switchOn = this.node.getChildByName('switchOn');
        this.switchOff = this.node.getChildByName('switchOff');
        this.switchThumb = this.node.getChildByName('switchThumb');

        this.isChecked = false;
        //点击后切换
        this.switchThumb.on(cc.Node.EventType.TOUCH_END, function () {
            _this.isChecked = !_this.isChecked;
        });
    }

});