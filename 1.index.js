// 数组去重
// 方法一：循环
// let arr1 = [1, 1, 2, 3, 3, 2, 4, 5, 6, 4, 5, 6]
// let arr2 = []
// for (let i = 0; i < arr1.length; i++) {
//   let isRepeated = false
//   for (let j = 0; j < arr2.length; j++) {
//     if (arr2[j] === arr1[i]) {
//       isRepeated = true
//       break
//     }
//   }
//   if (!isRepeated) {
//     arr2.push(arr1[i])
//   }
// }
// console.log(arr2);
// 方法二：indexOf
// let arr1 = [1, 1, 2, 3, 3, 2, 4, 5, 6, 4, 5, 6]
// let arr2 = []
// for (let i = 0; i < arr1.length; i++) {
//   if (arr2.indexOf(arr1[i]) === -1) {
//     arr2.push(arr1[i])
//   }
// }
// console.log(arr2);

// 方法三：set
// let arr1 = [1, 1, 2, 3, 3, 2, 4, 5, 6, 4, 5, 6]
// let arr2 = [...new Set(arr1)]
// console.log(arr2);




// 遍历嵌套数组的每一个成员
// 广度优先搜索 (BFS)算法
// // let arr5 = [4, [5, 6], [7, 8], [9, 10]]
// let arr5 = [4, [5, 6], [7, 8], [9, 10], [1, [2, 3, [4, 5, [6, 7, [8, 9]]]]]]
// let arr6 = []
// for (let i = 0; i < arr5.length; i++) {
//   if (typeof arr5[i] === 'number') {
//     arr6.push(arr5[i])
//   } else {
//     for (let j = 0; j < arr5[i].length; j++) {
//       arr5.push(arr5[i][j])
//     }
//   }
// }
// console.log(arr6);


// 判断括号的合法性
// 合法的括号 '({[]})'  '[](){}'  '[()]{}'
// 不合法的括号   '[(])'
let str = '[()]{}'
// 思路：对称的就删掉
let newStr = ''
for (let i = 0; i < str.length; i++) {
  
}