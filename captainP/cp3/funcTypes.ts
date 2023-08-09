(() => {
  // 함수 타입 지정 방법
  function repeater(word: string): string {
    return word;
  }

  // 매개변수와 인자
  repeater("hello");
  // repeater("hello", "world"); // 매개변수와 인자의 개수가 다르면 에러가 발생

  /**
   * 옵셔널 파라미터
   * 함수의 파라미터를 선택적으로 사용하고 싶을 때 사용
   */

  function greeting(name: string, title?: string) {
    console.log(`hello, ${title ? title : ""}${name}`);
  }

  greeting("owall"); // hello owall
  greeting("owall", "ms."); // hello, ms.owall
})();
