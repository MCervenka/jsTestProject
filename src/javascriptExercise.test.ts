test("our first exercise", () => {
  const newArray: string[] = [];
  newArray.push("Hello world");
  console.log("newArray value", newArray);
  expect(newArray[0]).toEqual("Hello world");
});

test("our function exercise", () => {
  function countToThree(startingPoint: number) {
    for (
      let currentNumber = startingPoint;
      currentNumber <= 3;
      currentNumber += 1
    ) {
      console.log("count ", currentNumber);
    }
  }
  countToThree(-4);
});
