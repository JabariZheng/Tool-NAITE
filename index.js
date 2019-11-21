(function (BOOT) {
    var NAITE = function () {
        return new NAITE.prototype.init();
    };

    // 所有方法的名称和方法名的集合（包含原型和实例） 后续开发
    var search_method_list = [];

    NAITE.prototype = {
        constructor: 'NAITE',

        version: '0.0.1',
        descript: '常用工具合集',

        init: function () {

            return this
        },
    }

    // 实现 extend 方法

    NAITE.extend = NAITE.prototype.extend = function (options) {

        var target = this;

        for (let name in options) {

            target[name] = options[name].method;

        };

        return target
    }


    // 搜索方法（未完成，后续开发）
    NAITE.search = function (text) {

        var allNames = search_method_list.map(item => item.category + "：" + item.name + "，调用方法：J." + item.method + "(a,b,c.....)");

        console.log(allNames);

    }

    // NAITE.prototype.extend({

    // });

    // NAITE.extend({

    // });

    BOOT.J = NAITE;

})(window)