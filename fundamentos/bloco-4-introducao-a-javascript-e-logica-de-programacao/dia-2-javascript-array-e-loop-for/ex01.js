let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 0; i < numbers.length; i += 1) {

    for (let j = 0; j < numbers.length; j += 1) {

        let position = numbers[i];
        numbers[i] = numbers[j];
        numbers[j] = position;
    }
    console.log(position);
}