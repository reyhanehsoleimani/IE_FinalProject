// Reshapes the 1D functions to 2D function. Used in pagination to break a list of items into many smaller slices.
export const reshape = <T extends any>(arr: T[], col: number):T[][] => {
    const newArr = [];
    while (arr.length) newArr.push(arr.splice(0, col));
    return newArr;
};


export const range = (len: number) => {
    let length = len < 0 ? 0 : len
    let list = []
    for (let i = 0; i < length; i++) {
        list.push(i)
    }
    return list
}