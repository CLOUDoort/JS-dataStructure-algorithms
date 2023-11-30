# Big-O notation

알고리즘의 성능을 측정하기 위해 Big-O notation을 사용한다.

## Time Complexity

코드 실행의 정확한 시간을 초(second)로 측정하는 것에는 여러 문제가 있다.

- 사양이 다른 머신마다 실행 시간이 다르게 나올 수 있다.
- 사양이 같은 머신이라도 실행 시간이 다르게 나올 수 있다.
- 비교하는 알고리즘들이 실행 시간이 매우 짧은 알고리즘이라면 정밀한 비교가 힘들다.

> 어떤 머신을 사용하든 코드의 연산 갯수는 변하지 않기 때문에 코드 실행 시간을 비교하는 대신 컴퓨터가 처리해야하는 연산 갯수를 센다.

- 알고리즘의 실질적인 run-time을 비교하는 것이 아니라 연산 갯수를 세는 방식을 사용하기 때문에 하드웨어 또는 소프트웨어의 환경에 상관없이 데이터나 사용자의 증가율에 따른 성능을 예측할 수 있다.

> Big-O notation을 사용하여 입력의 크기와 실행 시간의 상관관계를 비교할 수 있다.

- Big-O notation은 최악의 실행 시간을 의미한다.
- 정확한 연산 갯수를 세는 것은 중요하지 않다. 중요한 것은 큰 그림을 보는 것이다.

### Example

차수가 가장 높은 것을 기준으로 하고, 상수를 포함한 그 이외의 것들은 유의미한 변화를 주지 않기 때문에 생략한다.

O(2n + 2) => O(n)
O(500) => O(1)
O(13n^2 + 10n + 50) => O(n^2)

- O(1) Constant Complexity
  - n의 값이 아무리 커져도 연산 갯수는 고정되어 있는 경우 실행 시간은 변하지 않는다.
- O(logN) Logarithm Complexity
- O(n) Linear Complexity
  - 연산 갯수가 n인 경우 n의 값이 커질수록 실행 시간도 길어진다.
- O(NlogN) Logarithm Complexity
- O(n^2) Quadratic Complexity
  - n이 커질 수록 실행시간은 n^2만큼 길어진다.
  - 대표적으로 이중 for문이 있다.

# Space Complexity

입력값을 제외하고 알고리즘 자체가 필요로 하는 공간을 측정한다.

- booleans, numbers, undefined, null은 입력의 크기와 상관없이 모두 constant space이다.
- string은 O(n)의 공간이 필요하다.
- reference type인 array와 object는 O(n)의 공간이 필요하다.
