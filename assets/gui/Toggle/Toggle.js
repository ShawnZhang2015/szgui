cc.Class({
    extends: cc.Component,

    properties: {
        
        isChecked:{
            default: false,
            type: Boolean,
            notify: function() {
                this._updateStatus();
            },
        },
    },

    _initNode: function() {
        if (!this.switchOn) {
            this.switchOn = this.node.getChildByName('switchOn');    
        }

        if (!this.switchOff) {
            this.switchOff = this.node.getChildByName('switchOff');    
        }

        if (!this.switchThumb ) {
            this.switchThumb = this.node.getChildByName('switchThumb');    
        } 
    },

    _updateStatus: function() {
        if (this._isSwitching) {
            return;
        }
        this._isSwitching = true;

        this._initNode();      
        
        this.switchOn.active = true;
        this.switchOff.active = true;
     
        var pt1 = this.switchThumb.getPosition();
        pt1.x = this.isChecked  ? (this.node.width - this.switchThumb.width) / 2 
                                : (this.switchThumb.width - this.node.width) / 2;

        var pt2 = cc.p(this.isChecked ? -4 : 4, pt1.y);
        var callfunc = cc.callFunc(()=>{
            this.switchOn.active = this.isChecked;
            this.switchOff.active = !this.isChecked;
        });
        var sequence = cc.sequence(cc.moveTo(0.05, pt1), callfunc, cc.moveBy(0.2, pt2), cc.callFunc(()=>{
            this._isSwitching = false;
        }));               
        this.switchThumb.runAction(sequence);
    },

    // use this for initialization
    onLoad: function () {
        this._initNode();
        this._isSwitching = false;
        //点击后切换
        this.switchThumb.on(cc.Node.EventType.TOUCH_END, () => {
            this.isChecked = !this.isChecked;
        });
    },

});
