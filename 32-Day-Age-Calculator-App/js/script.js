const inputs = document.getElementsByTagName('input');
const form = document.getElementById('form');
const results = document.getElementsByTagName('span');
const error__messages = document.getElementsByTagName('small');
const labels = document.getElementsByTagName('label');

document.addEventListener("DOMContentLoaded", () => {
    form.addEventListener('submit', function( event ){
        event.preventDefault();

        const date = {
            year: +inputs[2].value,
            month: +inputs[1].value,
            day: +inputs[0].value
        }

        if( isBirthDateValid( date ) ){
            calculateAge( date.year, date.month, date.day );
        }
    });
});


const isBirthDateValid = ( date ) => {
    let bool = true;

    if( !isValidYear( date.year ) ){
        showHiddeAlerts( 2, true, date.year );
        bool = false
    } else {
        showHiddeAlerts( 2, false );
    }

    if( !isValidMonth( date.month ) ){
        showHiddeAlerts( 1, true, date.month );
        bool = false
    } else {
        showHiddeAlerts( 1, false );
    }

    if( !isValidDay( date.day ) ){
        showHiddeAlerts( 0, true, date.day );
        bool = false;
    } else {
        showHiddeAlerts( 0, false );
    }

    if( !isDateValid( date.day, date.month, date.year ) ){
        showHiddeAlerts( 0, true, date.day );
        bool = false;
    } else {
        showHiddeAlerts( 0, false );
    }

    const birth = new Date( date.year, date.month -1, date.day );
    const now = new Date(  );

    if( birth > now ){
        [0,1,2].forEach( (elem, i) => showHiddeAlerts( i, true, 1 ) );
        bool = false
    }

    return bool;
}

const isValidYear = ( year ) => {
    const date = new Date();
    return date.getFullYear() >= year && year > 0
}

const isValidMonth = ( month ) => {
    return 1 <= month && month <= 12;
}

const isValidDay = ( day ) => {
    return 1<= day && day <= 31
}

const isDateValid = ( day, month, year ) => {       
    const lastDayOfMonth = new Date( year, month, 0 ).getDate();

    return lastDayOfMonth >= day && day > 0;
}

const calculateAge = ( yearBirth, monthBirth, dayBirth ) => {
    const currentDate = new Date();
    const userBirthDate = new Date( yearBirth, monthBirth, dayBirth );
    
    //!Calculando la diferencia entre años, meses y dias
    const year = currentDate.getUTCFullYear() - userBirthDate.getFullYear();
    const month = (currentDate.getMonth() +1) - userBirthDate.getMonth();
    const day = (currentDate.getUTCDate() - userBirthDate.getUTCDate())

    const { dayUpdated, monthUpdated } = calcDayNew( day, month, currentDate ) ;

    const { montResult, yearResult } = calcMonth( monthUpdated, year );
    
    updateResults( dayUpdated, montResult, yearResult );
}


const calcMonth = (month , year) => {
    if( month < 0 ){
        year = year -1;
        return {montResult: 12 + month, yearResult: year};
    }
    return {montResult: month, yearResult: year};
}

const calcDayNew = ( dayUpdated, monthUpdated, currentDate ) => {
    if( dayUpdated < 0 ){
        monthUpdated = monthUpdated  -1;

        return {dayUpdated: new Date(currentDate.getFullYear(), currentDate.getMonth() +1, 0).getUTCDate() + dayUpdated, monthUpdated};
    }else {
        return { dayUpdated, monthUpdated }
    }
}

const updateResults = ( day, month, year ) => {
    results[2].innerHTML= day;
    results[1].innerHTML= month;
    results[0].innerHTML= year;
}

const showHiddeAlerts = ( index, bool, value=0 ) => {
    const messageOptions = [ 'a valid day', 'a valid month', 'in the post' ];
    const messageEmptyInput = 'This field is required';
    let messageShow = ''

    if( bool ){
        inputs[index].classList.add('input__error');
        error__messages[index].classList.add('show__small');
        labels[index].classList.add('label__error');

        value > 0 ? messageShow = `Must be ${ messageOptions[index] }` : messageShow = messageEmptyInput

        error__messages[index].innerHTML = messageShow
    } else {
        inputs[index].classList.remove('input__error');
        error__messages[index].classList.remove('show__small');
        labels[index].classList.remove('label__error');
    }
}