cc.Class({
    extends: cc.Component,

    properties: {
       
        progress:{
            default: 1,
            type: 'Float',
            range: [0, 1, 0.1],
            slide: true,
            notify: function() {
                this._updateBarStatus();
            }
        },

        fillType:{
            type:cc.Sprite.FillType,
            default: cc.Sprite.FillType.HORIZONTAL,
            notify: function() {
                this._updateBarStatus();
            }
        },

        reverse: {
            default: false,
            notify: function() {
                this._updateBarStatus();
            },
            animatable: false
        }
    },

    // use this for initialization
    onLoad: function () {
        this.sprite = this.node.getComponent(cc.Sprite);
        this.sprite.type = cc.Sprite.Type.FILLED;
        this.sprite.fillType = cc.Sprite.FillType.HORIZONTAL;
        this._init();

        cc.loader.onProgress(function(v){
            cc.log(JSON.stringify(v));        
        })

        // this.schedule(()=>{
        //     var v = this.progress + 0.01;
        //     this.progress = v > 1 ? 0 : v;
        // }, 0.1);
    },


    _init: function() {
        if (!this.sprite) {
            this.sprite = this.node.getComponent(cc.Sprite);
        }

        switch (this.fillType) {
            case cc.Sprite.FillType.HORIZONTAL:
                this.sprite.fillType = cc.Sprite.FillType.HORIZONTAL;
                this.sprite.fillRange = this.reverse ? 0 : 1
                this.sprite.fillStart = this.reverse ? 1 : 0;
                break;
            case cc.Sprite.FillType.VERTICAL:
                this.sprite.fillType = cc.Sprite.FillType.VERTICAL;
                this.sprite.fillRange = this.reverse ? 0 : 1
                this.sprite.fillStart = this.reverse ? 1 : 0;
                break;
            case cc.Sprite.FillType.RADIAL:
                this.sprite.fillType = cc.Sprite.FillType.RADIAL;
                this.sprite.fillCenter = cc.p(0.5, 0.5);
                this.sprite.fillStart = 0.25;
                this.sprite.fillRange = 1
    
                break;  
        }
    },

    _updateBarStatus: function(){
        this._init(); 
        if (this.fillType === cc.Sprite.FillType.RADIAL) {
            this.sprite.fillRange = this.reverse ? this.progress : -this.progress;    
        } else {
            this.sprite.fillRange = this.reverse ? -this.progress : this.progress;    
        }
        
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
