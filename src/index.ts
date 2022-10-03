
function numFormat(num : number | string):string {
  // converts what was received into a string
  const makeStr = num.toString()
  // removes everything (symbols and chars) and only keeps numbers
  const digits = makeStr.trim().replace(/[^0-9]/g, '');
  let formatedNumber = ''
  // checks that the input is 10 digits
  if (digits.length === 10){
    // format the string to (xxx)-xxx-xxxx
    formatedNumber = digits.replace(/(\d{3})(\d{3})(\d{4})/, "($1)-$2-$3");
    // if length is less than 10 numbers
  } else if (digits.length < 10) {
    return 'Too few numbers - Please supply 10 digits'
    // if length is greater than 10 numbers
  } else if (digits.length > 10) {
    return 'Too many numbers - Please supply 10 digits'
    // if something else went wrong
  } else {
    return 'error, error, error something when wrong'
  }
  return formatedNumber
}

module.exports = {numFormat};

