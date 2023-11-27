// to reverse string 
function reverseStr(str) {

    // it splits the string into a character
    var listOfChars = str.split('');
    // the character is reversed 
    var reverseListOfChars = listOfChars.reverse('');
    // the reverse character is joined together resulting in the reversed string
    var reverseStr = reverseListOfChars.join('');
    return reverseStr;
  
    // all the above steps can be written in a single line
  
    // var reverse = str.split('').reverse('').join('');
  
    // return reverse;
  }
  // to check the palindrome 
  function isPalindrome(str) {
  
    var reverse = reverseStr(str);
  
    return str === reverse;
  
    // if(str === reverse){
    //   return true;
    // }
    // else
    //   return false;
  };
  // to convert the date to string
  function convertDateToStr(date) {
  
    var dateStr = { day: '', month: '', year: '' };
  
    if (date.day < 10) {
      dateStr.day = '0' + date.day;
    }
    else {
      dateStr.day = date.day.toString();
    }
    if (date.month < 10) {
      dateStr.month = '0' + date.month;
    }
    else {
      dateStr.month = date.month.toString();
    }
    dateStr.year = date.year.toString();
    return dateStr;
    // return dateStr.day + '/' + dateStr.month + '/' + dateStr.year;
  }
  // below function is converting the date object in all formats
  function toGetDateInAllFormat(date) {
    var dateStr = convertDateToStr(date);
  
    var ddmmyyyy = dateStr.day + dateStr.month + dateStr.year;
  
    var mmddyyyy = dateStr.month + dateStr.day + dateStr.year;
  
    var yyyymmdd = dateStr.year + dateStr.month + dateStr.day;
  
    var mmddyy = dateStr.month + dateStr.day + dateStr.year.slice(-2);
  
    var yymmdd = dateStr.year.slice(-2) + dateStr.month + dateStr.day;
  
    return [ddmmyyyy, mmddyyyy, yyyymmdd, mmddyy, yymmdd];
  
  
  }
  // this function is to check the palindrome on all different types of dataformat
  function checkPalindromeForAllDataFormats(date) {
  
    var listOfPalindromes = toGetDateInAllFormat(date);
    var flag = false;
    for (var i = 0; i < listOfPalindromes.length; i++) {
      if (isPalindrome(listOfPalindromes[i])) {
        flag = true;
        break;
      }
    }
    return flag;
  
  }
  //to check leap year
  function isLeapYear(year) {
    if (year % 400 === 0) {
      return true;
    }
    else if (year % 100 === 0) {
      return false;
    }
    else if (year % 4 === 0) {
      return true;
    }
    else {
      return false;
    }
  }
  //to get the next date
  function getNextDate(date) {
    var day = date.day + 1;
    var month = date.month;
    var year = date.year;
  
    var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
    if (month === 2) {
      if (isLeapYear(year)) {
        if (day > 29) {
          day = 1;
          month++;
        }
      }
      else {
        if (day > 28) {
          day = 1;
          month++;
        }
  
      }
    }
    else {
      //month-1 give the correct index of the arrayf
      if (day > daysInMonth[month - 1]) {
        day = 1;
        month++;
      }
    }
  
    if (month > 12) {
      month = 1;
      year++;
    }
  
    return {
      day: day,
      month: month,
      year: year
    };
  
  }
  //get next date palindrome
  function getNextPalindromeDate(date) {
    var ctr = 0;
    var nextDate = getNextDate(date);
  
    while (1) {
      ctr++;
      var isPalindrome = checkPalindromeForAllDataFormats(nextDate);
      if (isPalindrome) {
        break;
        // Break statement stops the entire process of the loop. Continue statement only stops the current iteration of the loop
      }
      nextDate = getNextDate(nextDate);
    }
    return [ctr, nextDate];
  }
  //give input as date
  // var date = {
  //   day: 31,
  //   month: 12,
  //   year: 2020
  // }
  
  // console.log(getNextPalindromeDate(date));
  
  const dateInputRef = document.querySelector('#bday-input');
  const btn = document.querySelector('#show-btn');
  const resultValue = document.querySelector('#result');
  
  function clickHandler(e) {
  
    var bdayStr = dateInputRef.value;
  
    if (bdayStr !== '') {
      var listOfDate = bdayStr.split('-');
  
      var date = {
        day: Number(listOfDate[2]),
        month: Number(listOfDate[1]),
        year: Number(listOfDate[0])
      };
      var isPalindrome = checkPalindromeForAllDataFormats(date);
  
  
      if (isPalindrome) {
        resultValue.innerText = 'Horreh! your birthday is a palindrome ';
      }
      else {
        var [ctr, nextDate] = getNextPalindromeDate(date);
        resultValue.innerText = `The next palindrome date is       
        ${nextDate.day}-${nextDate.month}-${nextDate.year}, you missed it by ${ctr} days!`;
      }
    }
  }
  btn.addEventListener('click', clickHandler);
  
  // const firstIndex =0;
  // function automaticSlide(){
  //   setTimeout(automaticSlide, 2000);
  //   let pics;
  //   const img = document.querySelectorAll('img');
  //   for(pics=0; pics<img.length; pics++) {
  //     img[pics].style.display = "none";


  //   }
  //   firstIndex++;
  //   if(firstIndex>img.length){
  //     firstIndex = 1;

  //   }
  //   img[firstIndex-1].style.display= "block";
  // }
  // automaticSlide();