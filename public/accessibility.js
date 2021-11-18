// fetch accessibility {
const testAccessibility = async (e) => {
    e.preventDefault()

    const url = document.querySelector('#url').value 
    
    if(url === '') {
        alert('Please add a url')
    } else {
        setLoading()

        const response = await fetch(`/api/test?url=${url}`)

        if(response.status !== 200) {
            setLoading(false)
            alert('ups!')
        } else {
            const {issues} = await response.json()
            addIssuesToDOM(issues)
            setLoading(false)
        }
    }
}
// add issues to DOM
const addIssuesToDOM = (issues) => {
    console.log(issues)
}
// set loading state 

const setLoading = (isLoading = true) => {
    const loader = document.querySelector('.loader')
    if(isLoading) {
        loader.style.display = 'block'
    } else {
        loader.style.display = 'none'
    }
}

// escape HTML

document.querySelector('#form').addEventListener('submit', testAccessibility);