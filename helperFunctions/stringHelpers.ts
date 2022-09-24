const getUUID=()=> { // Public Domain/MIT
    var d = new Date().getTime();//Timestamp
    var d2 = 0
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16;//random number between 0 and 16
      if(d > 0){//Use timestamp until depleted
        r = (d + r)%16 | 0;
        d = Math.floor(d/16);
      } else {//Use microseconds since page-load if supported
        r = (d2 + r)%16 | 0;
        d2 = Math.floor(d2/16);
      }
      return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
  }

  const isNOTNullOrUndefined = (value: any): boolean => {
    return !isNullOrUndefined(value);
  };
  
   const isNullOrUndefined = (value: any): boolean => {
      return value === null || value === undefined || value === '' || value === 'null' || value === 'undefined';
  };
  
   const removeExtraSpacesFromString = (str: string) => {
    if (isNullOrUndefined(str)) {
      return str
    }else{
      return str.replace(/\s+/g, ' ').trim()
    }
  };

  const capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.toLowerCase().slice(1);
  };

  const startsWithChar = (str: string, ch: string) => {
    return str.length > 0 && str[0] === ch;
  };

  const getAlphanumericString = (text: string) => {
    return text.replace(/[^\w ]/, '').replace(/[^A-Z0-9]+/gi, '');
  };
  
  const parseStringToOnlyLettersAndNumbers = (text: string) => {
    return text.replace(/[^a-zA-Z0-9]+/gi, '');
  };

  const isEmailAddressValid = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const getRupeesSymbol = () => {
    return '₹';
  };

  //To generate random boolean value
const randomBoolean = () => Math.random() > 0.5