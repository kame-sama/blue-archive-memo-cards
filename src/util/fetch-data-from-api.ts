interface ApiResponse {
  _id: string;
  name: string;
  names: {
    firstName: string;
    lastName: string;
    japanName: string;
    _id: string;
  };

  age: string;
  school: string;
  birthday: string;
  photoUrl: string;
  imageSchool: string;
}

async function fetchDataFromApi(): Promise<Character[]> {
  const url = `https://api-blue-archive.vercel.app/api/character/random?count=12`;
  const options = {
    method: 'GET',
    mode: 'cors',
  } as const;
  const response = await fetch(url, options);
  const result = await response.json();
  const data = result.data;
  const formattedData = data.map((d: ApiResponse) => {
    return {
      id: d._id,
      firstName: d.names.firstName,
      lastName: d.names.lastName,
      japanName: d.names.japanName,
      imgUrl: d.photoUrl,
    };
  });
  return formattedData;
}

export default fetchDataFromApi;
