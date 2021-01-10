const processData = async() => {
    throw new Error('something went wrong')
    return 12
}

processData().then((data) => {
    console.log('data', data)
}).catch((err) => {
    console.log('error', err)
})