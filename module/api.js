const baseURL = 'https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/bodies';

let bodies;

// fetch API
async function fetchBaseURL() {
    try {
        let response = await fetch(baseURL, {
            method: 'GET',
            headers: {
                'x-zocom':
                    'solaris-edVCa1E6zDZRztaq'
            },
        });
        let data = await response.json();
        bodies = data;
        console.log(bodies);

    } catch (error) {
        console.error("Error: ", error);
    }
}

export { fetchBaseURL }