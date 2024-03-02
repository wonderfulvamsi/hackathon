// versions would be a 1D array with either '0' or '1' as its elements.
// '0' indicates the version is bug-free and '1' indicates the version is buggy.
// (Ex - For input [0, 0, 1, 1, 1], the bug was introduced in version 2 and the function should return 1)

function lastBugFreeVersion(versions) {
  // 2 pointer approach
  left = 0
  right = versions.length-1
  while(left<=right){
    if(versions[left] == 1){
      res = left-1
      console.log(res)
      return res
    }
    if(versions[right] == 0){
      res = right
      console.log(res)
      return res
    }
    left+=1
    right-=1
  }
}

lastBugFreeVersion([0, 0, 1, 1, 1]);
