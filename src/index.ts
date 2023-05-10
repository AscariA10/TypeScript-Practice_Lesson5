// 1st task

function getPromise(): Promise<(string | number)[]> {
   return new Promise(resolve => {
      resolve(['Text', 50]);
   });
}

getPromise().then(data => {
   console.log(data);
});

// 2nd task

type AllType = {
   name: string;
   position: number;
   color: string;
   weight: number;
};

function compare(
   top: Pick<AllType, 'name' | 'color'>,
   bottom: Pick<AllType, 'position' | 'weight'>
): AllType {
   return {
      name: top.name,
      color: top.color,
      position: bottom.position,
      weight: bottom.weight,
   };
}

// 3rd task

function merge<T extends object, U extends object>(objA: T, objB: U) {
   return Object.assign({}, objA, objB);
}

// 4th task

class Component<T> {
   constructor(public props: T) {}
}

interface IPropse {
   title: string;
}

class Page extends Component<IPropse> {
   pageInfo() {
      console.log(this.props.title);
   }
}
