const data = {
    get location() {
        return "This is a test"
    },
    set location(value) {
        value = value.trim()
    }
}

// code that uses the data object
data.location = "New York"
console.log(data.location)
console.log(data)