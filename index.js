// 数组的splice
// 在特定的位置删除一些元素
// let arr1 = [1, 2, 3, 4, 5, 6]
// arr1.splice(1, 3)
// console.log(arr1);  //[1,5,6]

// let arr2 = [1, 2, 3, 4, 5, 6]
// arr1.splice(1, 0)
// console.log(arr2);  //[1, 2, 3, 4, 5, 6]



// 在特定的位置增加一些元素
// let arr3 = [1, 2, 3, 4, 5, 6]
// arr3.splice(1, 0, 99, 123, 456, 789)
// console.log(arr3);  //[1, 99, 123, 456, 789, 2, 3, 4, 5, 6]

// // 在特定的位置替换一些元素
// let arr4 = [1, 2, 3, 4, 5, 6]
// arr4.splice(1, 1, 99, 123, 456, 789)
// console.log(arr4);  //[1, 99, 123, 456, 789, 3, 4, 5, 6]


// 使用splice模拟push
// let arr6 = [1, 2, 3]
// arr6.splice(arr6.length, 0, 4)
// console.log(arr6);  //[1, 2, 3, 4]
// // 使用splice模拟unshift
// let arr5 = [1, 2, 3]
// arr5.splice(0, 0, 0)
// console.log(arr5);  //[0, 1, 2, 3]


// 删除数组的元素
// splice、pop、shift、length
// let arr7 = [1, 2, 3]
// let item1 = arr7.pop()  // 删除尾部的元素
// console.log(arr7);  //[1,2]
// console.log(item1);  //[3]  返回被删除的数


// let arr8 = [1, 2, 3]
// let item2 = arr8.shift()   // 删除头部的元素
// console.log(arr8);  // [2,3]
// console.log(item2); // 1


// let arr9 = [1, 2, 3, 4, 5]
// arr9.length = 3   //用length改变数组长度来达到删除数组元素的效果
// console.log(arr9);  //[1,2,3]


// 对数组的成员重新赋值
// let arr10 = [1, 2, 3]
// arr10[0] = false
// arr10[1] = undefined
// arr10[2] = null
// console.log(arr10); //[false, undefined, null]


// 是否修改原数组?
// 以上就是对数组的增删改查
// 增  push、unshift、splice、数组[索引]=值
// 删  pop、shift、splice、数组.length = 小于原length的值
// 改  splice、数组[索引]=值
// 查  数组[索引]

// 增删改查这些操作的返回值是？
// push  返回增加元素后的数组的新长度
// unshift  返回增加元素后的数组的新长度
// splice 返回删除的元素组成的新数组 如果删除的个数为0则返回空数组
// pop  返回删除的元素
// shift  返回删除的元素

// 结论：前提：改变原数据 只要删除 一定返回删除的元素
//                      只要增加 一定返回增加后的长度


// 翻转数组
// let arr13 = [1, 2, 3]
// let arr14 = []
// for (let i = arr13.length - 1; i >= 0; i--) {
//   arr14.push(arr13[i])
// }
// console.log(arr14);
// // reverse
// let arr15 = [11, 22, 33]
// arr15.reverse()
// console.log(arr15); //[33, 22, 11]


// 金额格式化   '1000000000000' =》'1,000,000,000,000'
// let str = prompt('输入金额')
// let arr16 = str.split('').reverse()
// let arr17 = []
// let str2 = ''
// for (let i = 0; i < arr16.length; i++) {
//   if (i % 3 === 0 && i !== 0) {
//     arr17.unshift(',')
//     str2 = arr17[0] + str2
//   }
//   arr17.unshift(arr16[i])
//   str2 = arr17[0] + str2
// }
// document.write(`${str}格式化为了${str2}`)



// join


// 有一个任意的数字数组arr，随机取一个元素target，把小于等于target的元素放在数组的左边，把大于target的元素放在数组的右边
// let arr = [12, 11, 23, 1, 2, 12, 45, 56, 123, 1, 23, 78]
let arr = [12, 11, 23, 1, 2, 12, 45, 56, 123, 1, 23, 78]
let target = 23
let beforeArr = []
let backArr = []
for (let i = 0; i < arr.length; i++) {
  if (arr[i] <= target) {
    beforeArr.push(arr[i])
  } else {
    backArr.push(arr[i])
  }
}
let newArr = beforeArr.concat(backArr)
// console.log(beforeArr);
// console.log(backArr);
console.log(newArr);



