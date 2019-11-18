import { __decorate } from "tslib";
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';
import CountUp from 'countup';
let CountTo = class CountTo extends Vue {
    constructor() {
        super(...arguments);
        this.counter = null;
    }
    get eleId() {
        return `count_to_${this._uid}`;
    }
    update(endVal) {
        this.counter.update(endVal);
    }
    click(event) {
        return event; // return的值即为事件回调函数的参数
    }
    // 这里写完后效果等同于：public click(event) { this.$emit('on-click', event) }
    render() {
        return class {
        } = 'count-up-wrap';
        on - click;
        {
            this.click;
        }
         >
            id;
        {
            this.eleId;
        }
         > /span>;
        {
            this.$slots.default;
        }
        /div>;
    }
    mounted() {
        this.counter = new CountUp(this.eleId, this.start, this.end, 0, 1, {});
        this.counter.start();
    }
};
__decorate([
    Prop({ type: Number, default: 0 })
], CountTo.prototype, "start", void 0);
__decorate([
    Prop(Number)
], CountTo.prototype, "end", void 0);
__decorate([
    Emit('on-click') // 这里的on-click即为自定义事件名
], CountTo.prototype, "click", null);
CountTo = __decorate([
    Component({
        name: 'CountTo'
    })
], CountTo);
export default CountTo;
//# sourceMappingURL=index.js.map