import axios from 'axios';


const fetchData = (url) => {
  return axios.get(url).then(
    response => response.data
  ).catch(
    err => console.error(err)
  );
};

export default fetchData;
