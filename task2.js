const axios = require("axios");
const fs = require("fs");

const url = "https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json";

const getProvince = async () => {
  try {
    const response = await axios.get(url);
    const data = response.data;
    console.log(data);

    // save data to csv
    const header = "id,name\n";
    let csv = header;
    data.forEach((province) => {
      csv += `${province.id},${province.name}\n`;
    });

    fs.writeFileSync("province.csv", csv);
  } catch (error) {
    console.log(error);
  }
};

getProvince();
