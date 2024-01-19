type infoKey = {
    title: String,
    text: String[],
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
        code: ''
    },
    {
        title: 'map',
        text: [
            '用处: 循环数组 有返回值, 需要return',
            '语法: 数组名.map(function (item,index,arr) {})',
            'item: 数组每一项, index: 下标, arr: 数组本身'
        ],
        code: ''
    },
    {
        title: 'some',
        text: [
            '语法: 数组名.some(function (item,index,arr),thisValue)',
            '例子:const arr = [10,20.50,60,70,80] const res = arr.some(item => item < 0)',
            'item: 数组每一项, index: 下标, arr: 数组本身,如果数组有元素满足条件返回true,后续不再检测,否则返回false,只有一个满足也会返回true'
        ],
        code: ''
    },
    {
        title: 'every',
        text: [
            '语法: 数组名.every(function (item,index,arr),thisValue)',
            '例子:const arr = [10,20.50,60,70,80] const res = arr.every(item => item < 0)',
            'item: 数组每一项, index: 下标, arr: 数组本身,和some相反,数组中所有元素满足条件才会返回true,只要有一个不满足就会返回false'
        ],
        code: ''
    },
    {
        title: 'filter',
        text: [
            '用处: 循环数组 有返回值, 需要return',
            '语法: 数组名.filter(function (item,index,arr),thisValue)',
            '例子:const arr = [10,20.50,60,70,80] const res = arr.filter(item => item < 0)',
            'item: 数组每一项, index: 下标, arr: 数组本身,返回满足条件的元素'
        ],
        code: ''
    },
    {
        title: 'findIndex',
        text: [
            '用处: 查找数组中匹配的元素,找到返回所在下标，否则返回-1,如果有多个重复的,匹配到一个重复就会结束，不会查找后面的',
            '语法: 数组名.filter(function (item,index,arr),thisValue)',
            '例子:const arr = [10,20.50,60,70,80] const res = arr.findIndex(item => item < 0)',
            'item: 数组每一项, index: 下标, arr: 数组本身,返回满足条件的元素'
        ],
        code: ''
    },
    
]