
// let arr = [1, 2, 3, 7, 5]
// let n = 5;
// let s = 12;
// console.log(subarraySum(arr,n,s))
// function subarraySum(arr, n, s)
// {
//     //your code here
//     let  sum = 0;
//     BigInt(sum)
//     let l = 0, r = 0;

//     for (let i = 0; i < n; i++) {
//         sum += arr[i];
//         r++
//         if (sum > s && r > l) {
//             while (sum > s) {
//                 sum -= arr[l];
//                 l++;
//             }
//         }
//         if (sum == s && l <r) {
//             return [l+1,r].join(" ")
//         }
//     }
//     return -1;
// }


0 1 2 3 4 5
3 1 8 9 10 2
         0 1 2 3 4 5 
left =  -1 0 -1 -1 -1 4
right=   2 2 3 4 -1 -1

res= 8 3 9 10 -1 10