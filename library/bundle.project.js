require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"ProgressBar":[function(require,module,exports){
"use strict";
cc._RFpush(module, '229beVTDKpCZaPLAgj+xceJ', 'ProgressBar');
// gui\ProgressBar\ProgressBar.js

cc.Class({
    'extends': cc.Component,

    properties: {

        progress: {
            'default': 1,
            type: 'Float',
            range: [0, 1, 0.1],
            slide: true,
            notify: function notify() {
                this._updateBarStatus();
            }
        },

        fillType: {
            type: cc.Sprite.FillType,
            'default': cc.Sprite.FillType.HORIZONTAL,
            notify: function notify() {
                this._updateBarStatus();
            }
        },

        reverse: {
            'default': false,
            notify: function notify() {
                this._updateBarStatus();
            },
            animatable: false
        }
    },

    // use this for initialization
    onLoad: function onLoad() {
        this.sprite = this.node.getComponent(cc.Sprite);
        this.sprite.type = cc.Sprite.Type.FILLED;
        this.sprite.fillType = cc.Sprite.FillType.HORIZONTAL;
        this._init();

        cc.loader.onProgress(function (v) {
            cc.log(JSON.stringify(v));
        });

        // this.schedule(()=>{
        //     var v = this.progress + 0.01;
        //     this.progress = v > 1 ? 0 : v;
        // }, 0.1);
    },

    _init: function _init() {
        if (!this.sprite) {
            this.sprite = this.node.getComponent(cc.Sprite);
        }

        switch (this.fillType) {
            case cc.Sprite.FillType.HORIZONTAL:
                this.sprite.fillType = cc.Sprite.FillType.HORIZONTAL;
                this.sprite.fillRange = this.reverse ? 0 : 1;
                this.sprite.fillStart = this.reverse ? 1 : 0;
                break;
            case cc.Sprite.FillType.VERTICAL:
                this.sprite.fillType = cc.Sprite.FillType.VERTICAL;
                this.sprite.fillRange = this.reverse ? 0 : 1;
                this.sprite.fillStart = this.reverse ? 1 : 0;
                break;
            case cc.Sprite.FillType.RADIAL:
                this.sprite.fillType = cc.Sprite.FillType.RADIAL;
                this.sprite.fillCenter = cc.p(0.5, 0.5);
                this.sprite.fillStart = 0.25;
                this.sprite.fillRange = 1;

                break;
        }
    },

    _updateBarStatus: function _updateBarStatus() {
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

cc._RFpop();
},{}],"Toggle":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'b53d8EQr6RCMbJ7YRvPCr/B', 'Toggle');
// gui\Toggle\Toggle.js

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

cc._RFpop();
},{}]},{},["ProgressBar","Toggle"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L0NvY29zQ3JlYXRvci9yZXNvdXJjZXMvYXBwLmFzYXIvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsImFzc2V0cy9ndWkvUHJvZ3Jlc3NCYXIvUHJvZ3Jlc3NCYXIuanMiLCJhc3NldHMvZ3VpL1RvZ2dsZS9Ub2dnbGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICcyMjliZVZUREtwQ1phUExBZ2oreGNlSicsICdQcm9ncmVzc0JhcicpO1xuLy8gZ3VpXFxQcm9ncmVzc0JhclxcUHJvZ3Jlc3NCYXIuanNcblxuY2MuQ2xhc3Moe1xuICAgICdleHRlbmRzJzogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuXG4gICAgICAgIHByb2dyZXNzOiB7XG4gICAgICAgICAgICAnZGVmYXVsdCc6IDEsXG4gICAgICAgICAgICB0eXBlOiAnRmxvYXQnLFxuICAgICAgICAgICAgcmFuZ2U6IFswLCAxLCAwLjFdLFxuICAgICAgICAgICAgc2xpZGU6IHRydWUsXG4gICAgICAgICAgICBub3RpZnk6IGZ1bmN0aW9uIG5vdGlmeSgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVCYXJTdGF0dXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBmaWxsVHlwZToge1xuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlLkZpbGxUeXBlLFxuICAgICAgICAgICAgJ2RlZmF1bHQnOiBjYy5TcHJpdGUuRmlsbFR5cGUuSE9SSVpPTlRBTCxcbiAgICAgICAgICAgIG5vdGlmeTogZnVuY3Rpb24gbm90aWZ5KCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUJhclN0YXR1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIHJldmVyc2U6IHtcbiAgICAgICAgICAgICdkZWZhdWx0JzogZmFsc2UsXG4gICAgICAgICAgICBub3RpZnk6IGZ1bmN0aW9uIG5vdGlmeSgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVCYXJTdGF0dXMoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhbmltYXRhYmxlOiBmYWxzZVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge1xuICAgICAgICB0aGlzLnNwcml0ZSA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgdGhpcy5zcHJpdGUudHlwZSA9IGNjLlNwcml0ZS5UeXBlLkZJTExFRDtcbiAgICAgICAgdGhpcy5zcHJpdGUuZmlsbFR5cGUgPSBjYy5TcHJpdGUuRmlsbFR5cGUuSE9SSVpPTlRBTDtcbiAgICAgICAgdGhpcy5faW5pdCgpO1xuXG4gICAgICAgIGNjLmxvYWRlci5vblByb2dyZXNzKGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICBjYy5sb2coSlNPTi5zdHJpbmdpZnkodikpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyB0aGlzLnNjaGVkdWxlKCgpPT57XG4gICAgICAgIC8vICAgICB2YXIgdiA9IHRoaXMucHJvZ3Jlc3MgKyAwLjAxO1xuICAgICAgICAvLyAgICAgdGhpcy5wcm9ncmVzcyA9IHYgPiAxID8gMCA6IHY7XG4gICAgICAgIC8vIH0sIDAuMSk7XG4gICAgfSxcblxuICAgIF9pbml0OiBmdW5jdGlvbiBfaW5pdCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnNwcml0ZSkge1xuICAgICAgICAgICAgdGhpcy5zcHJpdGUgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2ggKHRoaXMuZmlsbFR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgY2MuU3ByaXRlLkZpbGxUeXBlLkhPUklaT05UQUw6XG4gICAgICAgICAgICAgICAgdGhpcy5zcHJpdGUuZmlsbFR5cGUgPSBjYy5TcHJpdGUuRmlsbFR5cGUuSE9SSVpPTlRBTDtcbiAgICAgICAgICAgICAgICB0aGlzLnNwcml0ZS5maWxsUmFuZ2UgPSB0aGlzLnJldmVyc2UgPyAwIDogMTtcbiAgICAgICAgICAgICAgICB0aGlzLnNwcml0ZS5maWxsU3RhcnQgPSB0aGlzLnJldmVyc2UgPyAxIDogMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgY2MuU3ByaXRlLkZpbGxUeXBlLlZFUlRJQ0FMOlxuICAgICAgICAgICAgICAgIHRoaXMuc3ByaXRlLmZpbGxUeXBlID0gY2MuU3ByaXRlLkZpbGxUeXBlLlZFUlRJQ0FMO1xuICAgICAgICAgICAgICAgIHRoaXMuc3ByaXRlLmZpbGxSYW5nZSA9IHRoaXMucmV2ZXJzZSA/IDAgOiAxO1xuICAgICAgICAgICAgICAgIHRoaXMuc3ByaXRlLmZpbGxTdGFydCA9IHRoaXMucmV2ZXJzZSA/IDEgOiAwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBjYy5TcHJpdGUuRmlsbFR5cGUuUkFESUFMOlxuICAgICAgICAgICAgICAgIHRoaXMuc3ByaXRlLmZpbGxUeXBlID0gY2MuU3ByaXRlLkZpbGxUeXBlLlJBRElBTDtcbiAgICAgICAgICAgICAgICB0aGlzLnNwcml0ZS5maWxsQ2VudGVyID0gY2MucCgwLjUsIDAuNSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zcHJpdGUuZmlsbFN0YXJ0ID0gMC4yNTtcbiAgICAgICAgICAgICAgICB0aGlzLnNwcml0ZS5maWxsUmFuZ2UgPSAxO1xuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgX3VwZGF0ZUJhclN0YXR1czogZnVuY3Rpb24gX3VwZGF0ZUJhclN0YXR1cygpIHtcbiAgICAgICAgdGhpcy5faW5pdCgpO1xuICAgICAgICBpZiAodGhpcy5maWxsVHlwZSA9PT0gY2MuU3ByaXRlLkZpbGxUeXBlLlJBRElBTCkge1xuICAgICAgICAgICAgdGhpcy5zcHJpdGUuZmlsbFJhbmdlID0gdGhpcy5yZXZlcnNlID8gdGhpcy5wcm9ncmVzcyA6IC10aGlzLnByb2dyZXNzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zcHJpdGUuZmlsbFJhbmdlID0gdGhpcy5yZXZlcnNlID8gLXRoaXMucHJvZ3Jlc3MgOiB0aGlzLnByb2dyZXNzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcbiAgICAvLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xuXG4gICAgLy8gfSxcbn0pO1xuXG5jYy5fUkZwb3AoKTsiLCJcInVzZSBzdHJpY3RcIjtcbmNjLl9SRnB1c2gobW9kdWxlLCAnYjUzZDhFUXI2UkNNYko3WVJ2UENyL0InLCAnVG9nZ2xlJyk7XG4vLyBndWlcXFRvZ2dsZVxcVG9nZ2xlLmpzXG5cbmNjLkNsYXNzKHtcbiAgICAnZXh0ZW5kcyc6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcblxuICAgICAgICBpc0NoZWNrZWQ6IHtcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnN3aXRjaE9uIHx8ICF0aGlzLnN3aXRjaE9mZiB8fCAhdGhpcy5zd2l0Y2hUaHVtYikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5zd2l0Y2hPbi5hY3RpdmUgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnN3aXRjaE9mZi5hY3RpdmUgPSAhdmFsdWU7XG5cbiAgICAgICAgICAgICAgICB2YXIgcHQgPSB0aGlzLnN3aXRjaFRodW1iLmdldFBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgcHQueCA9IHZhbHVlID8gKHRoaXMubm9kZS53aWR0aCAtIHRoaXMuc3dpdGNoVGh1bWIud2lkdGgpIC8gMiAtIDQgOiAodGhpcy5zd2l0Y2hUaHVtYi53aWR0aCAtIHRoaXMubm9kZS53aWR0aCkgLyAyICsgNDtcbiAgICAgICAgICAgICAgICB0aGlzLnN3aXRjaFRodW1iLnBvc2l0aW9uID0gcHQ7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCk9PntcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnN3aXRjaFRodW1iLnJ1bkFjdGlvbihjYy5tb3ZlVG8oMC4xLCBwdCkpO1xuICAgICAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnN3aXRjaE9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3dpdGNoT24uYWN0aXZlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgIHRoaXMuc3dpdGNoT24gPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3N3aXRjaE9uJyk7XG4gICAgICAgIHRoaXMuc3dpdGNoT2ZmID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdzd2l0Y2hPZmYnKTtcbiAgICAgICAgdGhpcy5zd2l0Y2hUaHVtYiA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnc3dpdGNoVGh1bWInKTtcblxuICAgICAgICB0aGlzLmlzQ2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAvL+eCueWHu+WQjuWIh+aNolxuICAgICAgICB0aGlzLnN3aXRjaFRodW1iLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuaXNDaGVja2VkID0gIV90aGlzLmlzQ2hlY2tlZDtcbiAgICAgICAgfSk7XG4gICAgfVxuXG59KTtcblxuY2MuX1JGcG9wKCk7Il19
