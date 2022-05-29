// 数组
let list: Array<string | number | object> = [1, 2, 3, 4, 'name'];
list = ['sdf', {}, 2, 4, 5, 7];

let list2: (string | number | object)[] = [1, 2, 3, 4, 'name'];
list2 = ['sdf', {}, 2, 4, 5, 7];

// 元组 Tuple
const list3: [string, number] = ['ss', 4];

function xx(a: string, b: number) {
  console.log(11111111);
  return [a, b];
}

xx('a', 2);

const someValue: any = 'sdf';
const strLen = (<string>someValue).length;

console.log(strLen + 4);

const list4: ReadonlyArray<number> = [1, 2, 3, 4, 5];

const xx3 = [...list4];
xx3[3] = 23;

interface SearchFunc {
  (source: { type: string; index: number }): boolean;
}

// const mySearch: SearchFunc = function (source: string, subString: string) {
//   const result = source.search(subString);
//   return result > -1;
// };
//
// console.log(mySearch('1', '2'));

const mySearch2: SearchFunc = (source) => {
  return true;
};

console.log(
  mySearch2({
    type: 'num',
    index: 3,
  })
);

interface SquareConfig {
  color?: string;
  width?: number;
  [propName: string]: any;
}
const sdfsdf = {
  color: 'sdf',
  width: 3,
  name: 'sdf',
};
const xx1: SquareConfig = sdfsdf;
