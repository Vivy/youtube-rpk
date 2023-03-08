const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '730b382e05msh4c2fdd900412523p17eab9jsn3aa142015e96',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const test = async () => {
  try {
    const something = await fetch('https://youtube-v31.p.rapidapi.com/search?q=music', options)
    console.log(something, 'adasdasdasdasdasdasdasd')
    const data = await something.json()
    console.log(data, 'data')
    return data

  } catch (error) {
    console.log(error, 'error')
  }
  // .then(response => response.json())
  // .then(response => console.log(response))
  // .catch(err => console.error(err));
}
