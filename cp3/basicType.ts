/**
 * 스코프 문제로 인해 즉시 실행 함수 사용
 */
(() => {
  // string
  const name: string = "mayowall";

  // number
  const age: number = 26;

  // boolean
  const isLogin: boolean = true;

  // object
  const hobby: object = {
    name: "Climbing",
    duration: 10,
  };

  // array
  const family: Array<string> = ["Dad", "Mom"];
  const pet: string[] = ["Cat", "Lizard"]; // 더 직관적인 문법

  // tuple
  const tuple: [string, number] = ["string", 1];

  // any, null, undefined
  const any: any = "any type";
  const empty: null = null;
  const unExist: undefined = undefined;
})();
