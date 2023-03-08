const apiURL =
  "https://gist.githubusercontent.com/AlexDudar/9c1b0e29f51f7ba1c59170b896b3043c/raw/7ec689b1a38345ca635bd0d929b6942fa76848ab/api.json";

export const fetchFlights = () =>
  fetch(apiURL).then((response) => {
    if (!response.ok) {
      return Promise.reject(response);
    }
    return response.json();
  });
