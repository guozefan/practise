<template>
  <Header />
  <Sidebar />
  <Main />
</template>
<script setup lang="ts">
// let nums1 = [1, 2, 3, 0, 0, 0],
//   m = 3,
//   nums2 = [2, 5, 6],
//   n = 3;

// var merge = function (nums1, m, nums2, n) {
//   let p1 = 0,
//     p2 = 0;
//   const sorted = new Array(m + n).fill(0);

//   let cur;
//   while (p1 < m || p2 < m) {
//     if (p1 === m) {
//       cur = nums2[p2++];
//       console.log(p1, p2, cur);
//     } else if (p2 === n) {
//       cur = nums1[p1++];
//       console.log(p1, p2, cur);
//     } else if (nums1[p1] < nums2[p2]) {
//       cur = nums1[p1++];
//       console.log(p1, p2, cur);
//     } else {
//       cur = nums2[p2++];
//       console.log(p1, p2, cur);
//     }
//   }
//   console.log(sorted);
// };
// merge(nums1, m, nums2, n);
</script>
<style scoped lang="scss"></style>
