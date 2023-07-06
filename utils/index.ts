export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': '353e3b06d8msh5aa1ada53357b71p198fc2jsn65781fbf7220',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
        headers
    })

    return await response.json()
}