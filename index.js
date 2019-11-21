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

            var _methods = options[name].methods;
            var _desc = options[name].desc;

            for (let item in _methods) {

                target[item] = _methods[item].method;

                search_method_list.push({
                    category: _desc,
                    name: _methods[item].desc,
                    method: item
                })

            }

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

    NAITE.extend({

        numberMethods: {
            desc: '操作数字',
            methods: {
                add: {
                    desc: '数字相加',
                    method: function () {

                        // 传参转化为数组
                        var args = Array.prototype.slice.call(arguments);
                        if (args.length == 0) {
                            return 0
                        };

                        // 判断传入参数是否都为数字，否则抛出异常
                        for (var i = 0; i < args.length; i++) {
                            // 作为 0 处理
                            if (args[i] == undefined || args[i] == null || args[i] == "") {
                                args[i] = 0;
                            };

                            if (isNaN(args[i])) {
                                throw 'arguments[' + (i) + '] is not number';
                            };
                        };

                        // 获取小数点位数（10的倍数取值）
                        var pointLength = 0;

                        for (var i = 0; i < args.length.toString(); i++) {
                            if (i == 0) {
                                pointLength = args[i].toString().length;
                            } else if (args[i].toString().length > pointLength) {
                                pointLength = args[i].toString().length;
                            }
                        };

                        args = args.map(item => item = 10 ** pointLength * item);

                        // 计算结果
                        var result = 0;

                        for (var item of args) {
                            result += item;
                        };

                        return result / (10 ** pointLength)

                    }

                }
            }
        }

    });

    BOOT.J = NAITE;

})(window)