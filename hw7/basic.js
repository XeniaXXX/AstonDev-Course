function pattern(n) {
    validateNum(n);
    let stringRes = '';

    for (let i = 1; i <= n; i++) {
        let str = '';
        str = str.padStart(n-i);

        for (let j = 1; j < i; j++) {
            str += j;
        }

        stringRes += str
        str = '';

        for (let j = 0; j < i; j++) {
            str += i-j;
        }
        stringRes += str
        stringRes += '\n';
        str = '';
    }

    for (let i = n-1; i > 0; i--) {
        let str = '';
        str = str.padStart(n-i);

        for (let j = 1; j < i; j++) {
            str += j;
        }

        stringRes += str
        str = '';

        for (let j = 0; j < i; j++) {
            str += i-j;
        }
        stringRes += str
        stringRes += '\n';
        str = '';
    }
    console.log(stringRes);
}

pattern(5);

function validateNum(n) {
    if (n < 1) {
        console.log('Error input number');
        return;
    }
    if (n == 1) {
        console.log('1');
        return;
    }
}