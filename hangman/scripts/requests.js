const getPuzzle = async (wordCount) => {
    const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`) 
    
    if (response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error('Unable to get puzzle')
    }
}
    
const getCountry = async(countryCode) => {
    const response = await fetch ('//restcountries.eu/rest/v2/all')

    if(response.status === 200) {
        const country = await response.json()
        return country.find((country) => country.alpha2Code === countryCode)
    } else {
        throw new Error('Unable to get country')
    }
}
/*
location async training 
const getLocation = async() => {
    const response = await fetch('//ipinfo.io/5.173.225.29?token=63759fd6f3bdb0')
        
    if (response.status === 200) {
        return response.json()
             
        } else {
            throw new Error('Unable to fetch data')
        }
    }
    const getCountryOld = (countryCode) => {
    return fetch('//restcountries.eu/rest/v2/all').then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error('Unable to fetch data')
        }
    }).then((data) => {
        return data.find((country) => country.alpha2Code === countryCode)
    })
}

    */ 
const getLocationOld = () => {
    return fetch('//ipinfo.io/5.173.225.29?token=63759fd6f3bdb0').then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error('Unable to fetch data')
        }
    })
}

const getCurrentCountry = async() => {
    const location = getLocation()
    return getCountry(location.country)
    
}


//(wordCount) => new Promise((resolve, reject) => {
    // const request = new XMLHttpRequest()

    // request.addEventListener('readystatechange', (e) => {
    //     if (e.target.readyState === 4 && e.target.status === 200) {
    //         const data = JSON.parse(e.target.responseText)
    //         resolve(data.puzzle)
    //     } else if (e.target.readyState === 4) {
    //         reject('An error has taken place')
    //     }
    // })
