/**
 * Created by MiliGao on 2017/12/29.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var animal = /** @class */ (function () {
    function animal(name) {
        this.name = name;
    }
    animal.prototype.introduce = function () {
        console.log("my name is " + this.name);
    };
    return animal;
}());
var dog = /** @class */ (function (_super) {
    __extends(dog, _super);
    function dog(name) {
        return _super.call(this, name) || this;
    }
    dog.prototype.instroduce = function () {
        console.log("from subClass: my name is " + this.name); // protected 成员在派生类中仍然可以访问。
    };
    return dog;
}(animal));
var horse = new animal('horse');
var dog1 = new dog('dog');
dog1.introduce();