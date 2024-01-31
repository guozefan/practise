type infoKey = {
    title: String,
    text: String[],
    code_title: String,
    code: String
}

export const list: infoKey[] = [
    {
        title: 'forEach',
        text: [
            '用处: 循环数组 没有返回值',
            '语法: 数组名.forEach(function (item,index,arr) {})',
            'item: 数组每一项, index: 下标, arr: 数组本身'
        ],
        code_title:'手写forEach方法',
        code: `
Array.prototype.myForEach = function (fn) {
    let context = arguments[1] || window;

    if(typeof fn === 'function'){
        for (let i = 0; i < this.length; i++){
        fn.call(context, this[i], i, this)
        }
    }else {
        throw new Error('parameterl is not a function')
    }                                 
}`
    },
    {
        title: 'map',
        text: [
            '用处: 循环数组 有返回值, 需要return',
            '语法: 数组名.map(function (item,index,arr) {})',
            'item: 数组每一项, index: 下标, arr: 数组本身'
        ],
        code_title:'手写map方法',
        code: `Array.prototype.myMap = function (callback,arr = this.array) {
    const result = [];

    for (let i = 0; i < arr.length; i++){
            result.push(callback(arr[i], i, arr))
    }
    return result                           
}`
    },
    {
        title: 'some',
        text: [
            '语法: 数组名.some(function (item,index,arr),thisValue)',
            '例子:const arr = [10,20.50,60,70,80] const res = arr.some(item => item < 0)',
            'item: 数组每一项, index: 下标, arr: 数组本身,如果数组有元素满足条件返回true,后续不再检测,否则返回false,只有一个满足也会返回true'
        ],
        code_title:'手写some方法',
        code: `Array.prototype.mySome = function (callback, thisValue) {
    if (typeof callback  !== 'function'){
        throw new Error(不是一个函数) 
    }
    const arr = Object(this)
    let flag = false
    for (let i = 0; i < arr.length; i++) {
        const res = fn.call(thisValue, arr[i], i, arr)
        if (res) {
            return true
        }
    }
    return flag
}`
    },
    {
        title: 'every',
        text: [
            '语法: 数组名.every(function (item,index,arr),thisValue)',
            '例子:const arr = [10,20.50,60,70,80] const res = arr.every(item => item < 0)',
            'item: 数组每一项, index: 下标, arr: 数组本身,和some相反,数组中所有元素满足条件才会返回true,只要有一个不满足就会返回false'
        ],
        code_title:'手写every方法',
        code:  `Array.prototype.every = function (callback, arr = this.array) {
    let result = true;
    for (let i = 0; i < arr.length; i++) {
        if (!callback(arr[i], i, arr)) {
        result = false;
        break;
        }
    }
    return result;
}`
    },
    {
        title: 'filter',
        text: [
            '用处: 循环数组 有返回值, 需要return',
            '语法: 数组名.filter(function (item,index,arr),thisValue)',
            '例子:const arr = [10,20.50,60,70,80] const res = arr.filter(item => item < 0)',
            'item: 数组每一项, index: 下标, arr: 数组本身,返回满足条件的元素'
        ],
        code_title:'手写filter方法',
        code: `Array.prototype.filter = function (callback, arr = this.array) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
            const validate = callback(arr[i], i, arr)
        if (validate){
            result.push(arr[i])
        }
    }
    return result;
}`
    },
    {
        title: 'findIndex',
        text: [
            '用处: 查找数组中匹配的元素,找到返回所在下标，否则返回-1,如果有多个重复的,匹配到一个重复就会结束，不会查找后面的',
            '语法: 数组名.filter(function (item,index,arr),thisValue)',
            '例子:const arr = [10,20.50,60,70,80] const res = arr.findIndex(item => item < 0)',
            'item: 数组每一项, index: 下标, arr: 数组本身,返回满足条件的元素'
        ],
        code_title:'手写findIndex方法',
        code: `Array.prototype.findIndex = function (callback, arr = this.array) {
    let i = 0;
        while (i < arr.length){
        if(callback(arr[i], i, arr)){
                return i;  
        }
        i++;
    }
    return -1;
}`
    },
    {
        title: 'find',
        text: [
            '用处: 查找数组中匹配的第一个元素,找到返回所在元素，否则返回undefined',
            '语法: 数组名.find(function (item,index,arr),thisValue)',
            '例子:const arr = [10,20.50,60,70,80] const res = arr.find(item => item === 10)',
            'item: 数组每一项, index: 下标, arr: 数组本身,返回满足条件的元素'
        ],
        code_title:'手写find方法',
        code: `Array.prototype.find = function (callback, arr = this.array) {
    let i = 0;
        while (i < arr.length){
        if(callback(arr[i], i, arr)){
                return arr[i];  
        }
        i++;
    }
    return -1;
}`
    },
    
]