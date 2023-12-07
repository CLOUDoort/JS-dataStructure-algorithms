/*
다중 포인터 - averagePair
averagePair라는 함수를 작성합니다. 정렬된 정수 배열과 목표 평균이 주어졌을 때, 배열에 쌍의 평균이 목표 평균과 같은 값의 쌍이 있는지 확인합니다. 목표 평균과 일치하는 쌍이 두 개 이상 있을 수 있습니다.

보너스 제약조건:

Time: O(N)

Space: O(1)

예시 인풋:

averagePair([1,2,3],2.5) // true
averagePair([1,3,3,5,6,7,10,12,19],8) // true
averagePair([-1,0,3,4,5,6], 4.1) // false
averagePair([],4) // false
*/

function averagePair(arr, ave) {
  if (arr.length === 0) return false;

  const target = ave * 2;
  let st = 0;
  let en = arr.length - 1;

  while (st <= en) {
    if (arr[st] + arr[en] === target) return true;
    if (arr[st] + arr[en] < target) st++;
    else en--;
  }
  return false;
}
