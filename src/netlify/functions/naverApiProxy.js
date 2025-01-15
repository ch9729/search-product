const fetch = require("node-fetch");

exports.handler = async (event) => {
  const query = event.queryStringParameters.query;

  const url = `https://openapi.naver.com/v1/search/shop.json?query=${query}`;

  const headers = {
    "X-Naver-Client-Id": process.env.REACT_APP_X_Naver_Client_Id,
    "X-Naver-Client-Secret": process.env.REACT_APP_X_Naver_Client_Secret,
  };

  try {
    const response = await fetch(url, { headers });
    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
