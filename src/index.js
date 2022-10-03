function numFormat(num) {
    var makeStr = num.toString();
    var digits = makeStr.trim().replace(/[^0-9]/g, '');
    var formatedNumber = '';
    if (digits.length === 10) {
        formatedNumber = digits.replace(/(\d{3})(\d{3})(\d{4})/, "($1)-$2-$3");
    }
    else if (digits.length < 10) {
        return 'Too few numbers - Please supply 10 digits';
    }
    else if (digits.length > 10) {
        return 'Too many numbers - Please supply 10 digits';
    }
    else {
        return 'error, error, error something when wrong';
    }
    return formatedNumber;
}
module.exports = { numFormat: numFormat };
