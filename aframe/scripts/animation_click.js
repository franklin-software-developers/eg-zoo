AFRAME.registerComponent('animation_click', {
    init: function() {
        let el = this.el; 
        this.toggleColor = function() {
            el.setAttribute('animation-mixer', "clip:loopRun");
            el.setAttribute('rotation', {x: 0, y: -33, z: 0});
            el.setAttribute('position', {x: 0.3, y: 0, z: 2.464});
            
        }
        this.el.addEventListener('click', this.toggleColor);
    },
    remove: function() {
        this.el.removeEventListener('click', this.toggleColor);
    }
})