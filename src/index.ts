
function numFormat(num : number | string):string {
  const makeStr = num.toString()
  const digits = makeStr.trim().replace(/[^0-9]/g, '');
  let formatedNumber = ''
  if (digits.length === 10){
    formatedNumber = digits.replace(/(\d{3})(\d{3})(\d{4})/, "($1)-$2-$3");
  } else if (digits.length < 10) {
    return 'Too few numbers - Please supply 10 digits'
  } else if (digits.length > 10) {
    return 'Too many numbers - Please supply 10 digits'
  } else {
    return 'error, error, error something when wrong'
  }
  return formatedNumber
}

module.exports = {numFormat};

