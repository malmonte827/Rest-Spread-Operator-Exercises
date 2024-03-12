// Question 1
const filterOutOdds = (...numbers) => numbers.filter(num => num % 2 === 0);

// Question 2
const findMin = (...nums) => nums.reduce((acc, currVal) => acc < currVal ? acc : currVal)

// Question 3
const mergeObject = (obj1, obj2) => ({...obj1, ...obj2});

// Question 4
const doubleAndReturnArgs =(arr, ...nums) => [...arr, ...nums.map(val => val * 2)]

// Question 5
const removeRandom = (...items) => {
    let randomIdx = Math.floor(Math.random() * items.length);
    return [...items.toSpliced(randomIdx, 1)]
}

//Question 6
const extend = (array1, array2) => [...array1, ...array2]

//Question 7
const addKeyVal = (obj, key, val) => {
    let newObj = { ...obj }
    newObj[key] = val;
    return newObj;
}

//Question 8
const removeKey = (obj, key) => {
    let newObj = { ...obj }
    delete newObj[key]
    return newObj;
}

//Question 9
const combine = (obj1, obj2) =>{ return {...obj1, ...obj2};
}

//Question10
const update = (obj, key, val) => {
    let newObj = { ...obj }
    newObj[key] = val;
    return newObj;
}