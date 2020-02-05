// import {WeatherResponseData} from '../models/weather-response-data';
//
// export const WEATHER_DATA: WeatherResponseData = {
//   cod: 200,
//   message: 0.0036,
//   cnt: 40,
//   list: [{
//     dt: 1485799200,
//     main: {
//       temp: 261.45,
//       temp_min: 259.086,
//       temp_max: 261.45,
//       pressure: 1023.48,
//       sea_level: 1045.39,
//       grnd_level: 1023.48,
//       humidity: 79,
//       temp_kf: 2.37
//     },
//     weather: [
//       {
//         id: 800,
//         main: 'Clear',
//         description: 'clear sky',
//         icon: '02n',
//       }
//     ],
//     clouds: {
//       all: 8
//     },
//     wind: {
//       speed: 4.77,
//       deg: 232.505
//     },
//     // snow: {},
//     sys: {
//       pod: 'n'
//     },
//     dt_txt: '2017-01-30 18:00:00'
//   }, {
//     dt: 1485810000,
//     main: {
//       temp: 261.41,
//       temp_min: 259.638,
//       temp_max: 261.41,
//       pressure: 1022.41,
//       sea_level: 1044.35,
//       grnd_level: 1022.41,
//       humidity: 76,
//       temp_kf: 1.78
//     },
//     weather: [
//       {
//         id: 800,
//         main: 'Clear',
//         description: 'clear sky',
//         icon: '01n'
//       }
//     ],
//     clouds: {
//       all: 32
//     },
//     wind: {
//       speed: 4.76,
//       deg: 240.503
//     },
//     // snow: {3h: 0.011},
//     sys: {
//       pod: 'n'
//     },
//     dt_txt: '2017-01-30 21:00:00'
//   }, {
//     dt: 1485820800,
//     main: {
//       temp: 261.76,
//       temp_min: 260.571,
//       temp_max: 261.76,
//       pressure: 1021.34,
//       sea_level: 1043.21,
//       grnd_level: 1021.34,
//       humidity: 84,
//       temp_kf: 1.18
//     },
//     weather: [
//       {
//         id: 600,
//         main: 'Snow',
//         description: 'light snow',
//         icon: '13n'
//       }
//     ],
//     clouds: {
//       all: 68
//     },
//     wind: {
//       speed: 4.71,
//       deg: 243
//     },
//     // snow: {3h: 0.058},
//     sys: {
//       pod: 'n'
//     },
//     dt_txt: '2017-01-31 00:00:00'
//   }, {
//     dt: 1485831600,
//     main: {
//       temp: 261.46,
//       temp_min: 260.865,
//       temp_max: 261.46,
//       pressure: 1019.95,
//       sea_level: 1041.79,
//       grnd_level: 1019.95,
//       humidity: 82,
//       temp_kf: 0.59
//     },
//     weather: [{id: 600, main: 'Snow', description: 'light snow', icon: '13n'}],
//     clouds: {all: 68},
//     wind: {speed: 4.46, deg: 244.5},
//     // snow: {3h: 0.05225},
//     sys: {pod: 'n'},
//     dt_txt: '2017-01-31 03:00:00'
//   }, {
//     dt: 1485842400,
//     main: {
//       temp: 260.981,
//       temp_min: 260.981,
//       temp_max: 260.981,
//       pressure: 1018.96,
//       sea_level: 1040.84,
//       grnd_level: 1018.96,
//       humidity: 81,
//       temp_kf: 0
//     },
//     weather: [{id: 600, main: 'Snow', description: 'light snow', icon: '13d'}],
//     clouds: {all: 80},
//     wind: {speed: 4.21, deg: 245.005},
//     // snow: {3h: 0.19625},
//     sys: {pod: 'd'},
//     dt_txt: '2017-01-31 06:00:00'
//   }, {
//     dt: 1485853200,
//     main: {
//       temp: 262.308,
//       temp_min: 262.308,
//       temp_max: 262.308,
//       pressure: 1018.1,
//       sea_level: 1039.77,
//       grnd_level: 1018.1,
//       humidity: 91,
//       temp_kf: 0
//     },
//     weather: [{id: 600, main: 'Snow', description: 'light snow', icon: '13d'}],
//     clouds: {all: 88},
//     wind: {speed: 4.1, deg: 249.006},
//     // snow: {3h: 0.535},
//     sys: {pod: 'd'},
//     dt_txt: '2017-01-31 09:00:00'
//   }, {
//     dt: 1485864000,
//     main: {
//       temp: 263.76,
//       temp_min: 263.76,
//       temp_max: 263.76,
//       pressure: 1016.86,
//       sea_level: 1038.4,
//       grnd_level: 1016.86,
//       humidity: 87,
//       temp_kf: 0
//     },
//     weather: [{id: 600, main: 'Snow', description: 'light snow', icon: '13d'}],
//     clouds: {all: 68},
//     wind: {speed: 3.87, deg: 254.5},
//     // snow: {3h: 0.21},
//     sys: {pod: 'd'},
//     dt_txt: '2017-01-31 12:00:00'
//   }, {
//     dt: 1485874800,
//     main: {
//       temp: 264.182,
//       temp_min: 264.182,
//       temp_max: 264.182,
//       pressure: 1016.19,
//       sea_level: 1037.77,
//       grnd_level: 1016.19,
//       humidity: 89,
//       temp_kf: 0
//     },
//     weather: [{id: 600, main: 'Snow', description: 'light snow', icon: '13n'}],
//     clouds: {all: 76},
//     wind: {speed: 3.67, deg: 257.001},
//     // snow: {3h: 0.1375},
//     sys: {pod: 'n'},
//     dt_txt: '2017-01-31 15:00:00'
//   }, {
//     dt: 1485885600,
//     main: {
//       temp: 264.67,
//       temp_min: 264.67,
//       temp_max: 264.67,
//       pressure: 1015.32,
//       sea_level: 1036.94,
//       grnd_level: 1015.32,
//       humidity: 86,
//       temp_kf: 0
//     },
//     weather: [{id: 600, main: 'Snow', description: 'light snow', icon: '13n'}],
//     clouds: {all: 88},
//     wind: {speed: 3.61, deg: 262.503},
//     // snow: {3h: 0.1425},
//     sys: {pod: 'n'},
//     dt_txt: '2017-01-31 18:00:00'
//   }, {
//     dt: 1485896400,
//     main: {
//       temp: 265.436,
//       temp_min: 265.436,
//       temp_max: 265.436,
//       pressure: 1014.27,
//       sea_level: 1035.76,
//       grnd_level: 1014.27,
//       humidity: 90,
//       temp_kf: 0
//     },
//     weather: [{id: 600, main: 'Snow', description: 'light snow', icon: '13n'}],
//     clouds: {all: 80},
//     wind: {speed: 3.67, deg: 266.5},
//     // snow: {3h: 0.1625},
//     sys: {pod: 'n'},
//     dt_txt: '2017-01-31 21:00:00'
//   }, {
//     dt: 1485907200,
//     main: {
//       temp: 266.104,
//       temp_min: 266.104,
//       temp_max: 266.104,
//       pressure: 1013.1,
//       sea_level: 1034.62,
//       grnd_level: 1013.1,
//       humidity: 90,
//       temp_kf: 0
//     },
//     weather: [{id: 600, main: 'Snow', description: 'light snow', icon: '13n'}],
//     clouds: {all: 80},
//     wind: {speed: 3.81, deg: 269.004},
//     // snow: {3h: 0.1025},
//     sys: {pod: 'n'},
//     dt_txt: '2017-02-01 00:00:00'
//   }, {
//     dt: 1485918000,
//     main: {
//       temp: 266.904,
//       temp_min: 266.904,
//       temp_max: 266.904,
//       pressure: 1011.96,
//       sea_level: 1033.47,
//       grnd_level: 1011.96,
//       humidity: 89,
//       temp_kf: 0
//     },
//     weather: [{id: 600, main: 'Snow', description: 'light snow', icon: '13n'}],
//     clouds: {all: 76},
//     wind: {speed: 4.26, deg: 274.002},
//     // snow: {3h: 0.12},
//     sys: {pod: 'n'},
//     dt_txt: '2017-02-01 03:00:00'
//   }, {
//     dt: 1485928800,
//     main: {
//       temp: 268.102,
//       temp_min: 268.102,
//       temp_max: 268.102,
//       pressure: 1011.23,
//       sea_level: 1032.62,
//       grnd_level: 1011.23,
//       humidity: 89,
//       temp_kf: 0
//     },
//     weather: [{id: 600, main: 'Snow', description: 'light snow', icon: '13d'}],
//     clouds: {all: 76},
//     wind: {speed: 4.4, deg: 283.501},
//     // snow: {3h: 0.13},
//     sys: {pod: 'd'},
//     dt_txt: '2017-02-01 06:00:00'
//   }, {
//     dt: 1485939600,
//     main: {
//       temp: 270.269,
//       temp_min: 270.269,
//       temp_max: 270.269,
//       pressure: 1010.85,
//       sea_level: 1032.1,
//       grnd_level: 1010.85,
//       humidity: 92,
//       temp_kf: 0
//     },
//     weather: [{id: 600, main: 'Snow', description: 'light snow', icon: '13d'}],
//     clouds: {all: 64},
//     wind: {speed: 4.53, deg: 297.5},
//     // snow: {3h: 0.1875},
//     sys: {pod: 'd'},
//     dt_txt: '2017-02-01 09:00:00'
//   }, {
//     dt: 1485950400,
//     main: {
//       temp: 270.585,
//       temp_min: 270.585,
//       temp_max: 270.585,
//       pressure: 1010.49,
//       sea_level: 1031.65,
//       grnd_level: 1010.49,
//       humidity: 89,
//       temp_kf: 0
//     },
//     weather: [{id: 600, main: 'Snow', description: 'light snow', icon: '13d'}],
//     clouds: {all: 76},
//     wind: {speed: 4.31, deg: 302.004},
//     // snow: {3h: 0.065},
//     sys: {pod: 'd'},
//     dt_txt: '2017-02-01 12:00:00'
//   }, {
//     dt: 1485961200,
//     main: {
//       temp: 269.661,
//       temp_min: 269.661,
//       temp_max: 269.661,
//       pressure: 1010.22,
//       sea_level: 1031.49,
//       grnd_level: 1010.22,
//       humidity: 89,
//       temp_kf: 0
//     },
//     weather: [{id: 600, main: 'Snow', description: 'light snow', icon: '13n'}],
//     clouds: {all: 68},
//     wind: {speed: 4.91, deg: 296.5},
//     // snow: {3h: 0.0825},
//     sys: {pod: 'n'},
//     dt_txt: '2017-02-01 15:00:00'
//   }, {
//     dt: 1485972000,
//     main: {
//       temp: 269.155,
//       temp_min: 269.155,
//       temp_max: 269.155,
//       pressure: 1009.95,
//       sea_level: 1031.3,
//       grnd_level: 1009.95,
//       humidity: 89,
//       temp_kf: 0
//     },
//     weather: [{id: 600, main: 'Snow', description: 'light snow', icon: '13n'}],
//     clouds: {all: 80},
//     wind: {speed: 5.7, deg: 310.501},
//     // snow: {3h: 0.11},
//     sys: {pod: 'n'},
//     dt_txt: '2017-02-01 18:00:00'
//   }, {
//     dt: 1485982800,
//     main: {
//       temp: 268.056,
//       temp_min: 268.056,
//       temp_max: 268.056,
//       pressure: 1011.21,
//       sea_level: 1032.49,
//       grnd_level: 1011.21,
//       humidity: 89,
//       temp_kf: 0
//     },
//     weather: [{id: 600, main: 'Snow', description: 'light snow', icon: '13n'}],
//     clouds: {all: 68},
//     wind: {speed: 5.56, deg: 333},
//     // snow: {3h: 0.225},
//     sys: {pod: 'n'},
//     dt_txt: '2017-02-01 21:00:00'
//   }, {
//     dt: 1485993600,
//     main: {
//       temp: 265.803,
//       temp_min: 265.803,
//       temp_max: 265.803,
//       pressure: 1013.79,
//       sea_level: 1035.06,
//       grnd_level: 1013.79,
//       humidity: 83,
//       temp_kf: 0
//     },
//     weather: [{id: 600, main: 'Snow', description: 'light snow', icon: '13n'}],
//     clouds: {all: 8},
//     wind: {speed: 4.8, deg: 355.004},
//     // snow: {3h: 0.03},
//     sys: {pod: 'n'},
//     dt_txt: '2017-02-02 00:00:00'
//   }, {
//     dt: 1486004400,
//     main: {
//       temp: 263.381,
//       temp_min: 263.381,
//       temp_max: 263.381,
//       pressure: 1015.66,
//       sea_level: 1037.16,
//       grnd_level: 1015.66,
//       humidity: 84,
//       temp_kf: 0
//     },
//     weather: [{id: 800, main: 'Clear', description: 'clear sky', icon: '01n'}],
//     clouds: {all: 0},
//     wind: {speed: 4.2, deg: 348.503},
//     // snow: {},
//     sys: {pod: 'n'},
//     dt_txt: '2017-02-02 03:00:00'
//   }, {
//     dt: 1486015200,
//     main: {
//       temp: 261.85,
//       temp_min: 261.85,
//       temp_max: 261.85,
//       pressure: 1017.63,
//       sea_level: 1039.22,
//       grnd_level: 1017.63,
//       humidity: 76,
//       temp_kf: 0
//     },
//     weather: [{id: 800, main: 'Clear', description: 'clear sky', icon: '01d}'],
//     clouds: {all: 0},
//     wind: {speed: 3.81, deg: 345.502},
//     // snow: {},
//     sys: {pod: 'd'},
//     dt_txt: '2017-02-02 06:00:00'
//   }, {
//     dt: 1486026000,
//     main: {
//       temp: 263.455,
//       temp_min: 263.455,
//       temp_max: 263.455,
//       pressure: 1019.32,
//       sea_level: 1040.84,
//       grnd_level: 1019.32,
//       humidity: 84,
//       temp_kf: 0
//     },
//     weather: [{id: 800, main: 'Clear', description: 'clear sky', icon: '01d'}],
//     clouds: {all: 0},
//     wind: {speed: 3.06, deg: 344.004},
//     // snow: {},
//     sys: {pod: 'd'},
//     dt_txt: '2017-02-02 09:00:00'
//   }, {
//     dt: 1486036800,
//     main: {
//       temp: 264.015,
//       temp_min: 264.015,
//       temp_max: 264.015,
//       pressure: 1020.41,
//       sea_level: 1041.88,
//       grnd_level: 1020.41,
//       humidity: 85,
//       temp_kf: 0
//     },
//     weather: [{id: 800, main: 'Clear', description: 'clear sky', icon: '01d'}],
//     clouds: {all: 0},
//     wind: {speed: 2.52, deg: 334.501},
//     // snow: {},
//     sys: {pod: 'd'},
//     dt_txt: '2017-02-02 12:00:00'
//   }, {
//     dt: 1486047600,
//     main: {
//       temp: 259.684,
//       temp_min: 259.684,
//       temp_max: 259.684,
//       pressure: 1021.52,
//       sea_level: 1043.21,
//       grnd_level: 1021.52,
//       humidity: 76,
//       temp_kf: 0
//     },
//     weather: [{id: 800, main: 'Clear', description: 'clear sky', icon: '01n'}],
//     clouds: {all: 0},
//     wind: {speed: 2.48, deg: 320.501},
//     // snow: {3h: 0.0024999999999999},
//     sys: {pod: 'n'},
//     dt_txt: '2017-02-02 15:00:00'
//   }, {
//     dt: 1486058400,
//     main: {
//       temp: 255.188,
//       temp_min: 255.188,
//       temp_max: 255.188,
//       pressure: 1022.09,
//       sea_level: 1044.09,
//       grnd_level: 1022.09,
//       humidity: 66,
//       temp_kf: 0
//     },
//     weather: [{id: 801, main: 'Clouds', description: 'few clouds', icon: '02n'}],
//     clouds: {all: 24},
//     wind: {speed: 1.23, deg: 283.003},
//     // snow: {},
//     sys: {pod: 'n'},
//     dt_txt: '2017-02-02 18:00:00'
//   }, {
//     dt: 1486069200,
//     main: {
//       temp: 255.594,
//       temp_min: 255.594,
//       temp_max: 255.594,
//       pressure: 1022.03,
//       sea_level: 1044.12,
//       grnd_level: 1022.03,
//       humidity: 64,
//       temp_kf: 0
//     },
//     weather: [{id: 802, main: 'Clouds', description: 'scattered clouds', icon: '03n'}],
//     clouds: {all: 48},
//     wind: {speed: 1.22, deg: 244.502},
//     // snow: {},
//     sys: {pod: 'n'},
//     dt_txt: '2017-02-02 21:00:00'
//   }, {
//     dt: 1486080000,
//     main: {
//       temp: 256.96,
//       temp_min: 256.96,
//       temp_max: 256.96,
//       pressure: 1021.8,
//       sea_level: 1043.77,
//       grnd_level: 1021.8,
//       humidity: 66,
//       temp_kf: 0
//     },
//     weather: [{id: 802, main: 'Clouds', description: 'scattered clouds', icon: '03n'}],
//     clouds: {all: 44},
//     wind: {speed: 1.23, deg: 237.506},
//     // snow: {},
//     sys: {pod: 'n'},
//     dt_txt: '2017-02-03 00:00:00'
//   }, {
//     dt: 1486090800,
//     main: {
//       temp: 258.109,
//       temp_min: 258.109,
//       temp_max: 258.109,
//       pressure: 1020.97,
//       sea_level: 1042.99,
//       grnd_level: 1020.97,
//       humidity: 77,
//       temp_kf: 0
//     },
//     weather: [{id: 803, main: 'Clouds', description: 'broken clouds', icon: '04n'}],
//     clouds: {all: 80},
//     wind: {speed: 1.21, deg: 234.502},
//     // snow: {},
//     sys: {pod: 'n'},
//     dt_txt: '2017-02-03 03:00:00'
//   }, {
//     dt: 1486101600,
//     main: {
//       temp: 259.533,
//       temp_min: 259.533,
//       temp_max: 259.533,
//       pressure: 1020.56,
//       sea_level: 1042.53,
//       grnd_level: 1020.56,
//       humidity: 76,
//       temp_kf: 0
//     },
//     weather: [{id: 803, main: 'Clouds', description: 'broken clouds', icon: '04d'}],
//     clouds: {all: 68},
//     wind: {speed: 1.21, deg: 229.509},
//     // snow: {},
//     sys: {pod: 'd'},
//     dt_txt: '2017-02-03 06:00:00'
//   }, {
//     dt: 1486112400,
//     main: {
//       temp: 263.438,
//       temp_min: 263.438,
//       temp_max: 263.438,
//       pressure: 1020.46,
//       sea_level: 1042.15,
//       grnd_level: 1020.46,
//       humidity: 84,
//       temp_kf: 0
//     },
//     weather: [{id: 803, main: 'Clouds', description: 'broken clouds', icon: '04d'}],
//     clouds: {all: 56},
//     wind: {speed: 1.51, deg: 242.503},
//     // snow: {},
//     sys: {pod: 'd'},
//     dt_txt: '2017-02-03 09:00:00'
//   }, {
//     dt: 1486123200,
//     main: {
//       temp: 264.228,
//       temp_min: 264.228,
//       temp_max: 264.228,
//       pressure: 1019.58,
//       sea_level: 1041.24,
//       grnd_level: 1019.58,
//       humidity: 89,
//       temp_kf: 0
//     },
//     weather: [{id: 803, main: 'Clouds', description: 'broken clouds', icon: '04d'}],
//     clouds: {all: 56},
//     wind: {speed: 1.58, deg: 242.503},
//     // snow: {},
//     sys: {pod: 'd'},
//     dt_txt: '2017-02-03 12:00:00'
//   }, {
//     dt: 1486134000,
//     main: {
//       temp: 261.153,
//       temp_min: 261.153,
//       temp_max: 261.153,
//       pressure: 1019.63,
//       sea_level: 1041.42,
//       grnd_level: 1019.63,
//       humidity: 80,
//       temp_kf: 0
//     },
//     weather: [{id: 800, main: 'Clear', description: 'clear sky', icon: '01n'}],
//     clouds: {all: 76},
//     wind: {speed: 1.21, deg: 198.501},
//     // snow: {3h: 0.0049999999999999},
//     sys: {pod: 'n'},
//     dt_txt: '2017-02-03 15:00:00'
//   }, {
//     dt: 1486144800,
//     main: {
//       temp: 258.818,
//       temp_min: 258.818,
//       temp_max: 258.818,
//       pressure: 1020.18,
//       sea_level: 1042.03,
//       grnd_level: 1020.18,
//       humidity: 73,
//       temp_kf: 0
//     },
//     weather: [{id: 803, main: 'Clouds', description: 'broken clouds', icon: '04n'}],
//     clouds: {all: 64},
//     wind: {speed: 1.21, deg: 209.002},
//     // snow: {},
//     sys: {pod: 'n'},
//     dt_txt: '2017-02-03 18:00:00'
//   }, {
//     dt: 1486155600,
//     main: {
//       temp: 257.218,
//       temp_min: 257.218,
//       temp_max: 257.218,
//       pressure: 1020.43,
//       sea_level: 1042.38,
//       grnd_level: 1020.43,
//       humidity: 65,
//       temp_kf: 0
//     },
//     weather: [{id: 802, main: 'Clouds', description: 'scattered clouds', icon: '03n'}],
//     clouds: {all: 44},
//     wind: {speed: 1.17, deg: 194.501},
//     // snow: {},
//     sys: {pod: 'n'},
//     dt_txt: '2017-02-03 21:00:00'
//   }, {
//     dt: 1486166400,
//     main: {
//       temp: 255.782,
//       temp_min: 255.782,
//       temp_max: 255.782,
//       pressure: 1020.57,
//       sea_level: 1042.75,
//       grnd_level: 1020.57,
//       humidity: 73,
//       temp_kf: 0
//     },
//     weather: [{id: 803, main: 'Clouds', description: 'broken clouds', icon: '04n'}],
//     clouds: {all: 56},
//     wind: {speed: 1.21, deg: 175.001},
//     // snow: {},
//     sys: {pod: 'n'},
//     dt_txt: '2017-02-04 00:00:00'
//   }, {
//     dt: 1486177200,
//     main: {
//       temp: 254.819,
//       temp_min: 254.819,
//       temp_max: 254.819,
//       pressure: 1020.99,
//       sea_level: 1043.11,
//       grnd_level: 1020.99,
//       humidity: 68,
//       temp_kf: 0
//     },
//     weather: [{id: 800, main: 'Clear', description: 'clear sky', icon: '01n'}],
//     clouds: {all: 44},
//     wind: {speed: 1.22, deg: 122.001},
//     // snow: {3h: 0.0049999999999999},
//     sys: {pod: 'n'},
//     dt_txt: '2017-02-04 03:00:00'
//   }, {
//     dt: 1486188000,
//     main: {
//       temp: 257.488,
//       temp_min: 257.488,
//       temp_max: 257.488,
//       pressure: 1021.31,
//       sea_level: 1043.48,
//       grnd_level: 1021.31,
//       humidity: 63,
//       temp_kf: 0
//     },
//     weather: [{id: 600, main: 'Snow', description: 'light snow', icon: '13d'}],
//     clouds: {all: 68},
//     wind: {speed: 2.13, deg: 155.501},
//     // snow: {3h: 0.04},
//     sys: {pod: 'd'},
//     dt_txt: '2017-02-04 06:00:00'
//   }, {
//     dt: 1486198800,
//     main: {
//       temp: 259.827,
//       temp_min: 259.827,
//       temp_max: 259.827,
//       pressure: 1021.81,
//       sea_level: 1043.67,
//       grnd_level: 1021.81,
//       humidity: 90,
//       temp_kf: 0
//     },
//     weather: [{id: 600, main: 'Snow', description: 'light snow', icon: '13d'}],
//     clouds: {all: 68},
//     wind: {speed: 2.07, deg: 170.005},
//     // snow: {3h: 0.03},
//     sys: {pod: 'd'},
//     dt_txt: '2017-02-04 09:00:00'
//   }, {
//     dt: 1486209600,
//     main: {
//       temp: 261.256,
//       temp_min: 261.256,
//       temp_max: 261.256,
//       pressure: 1021.31,
//       sea_level: 1043.05,
//       grnd_level: 1021.31,
//       humidity: 86,
//       temp_kf: 0
//     },
//     weather: [{id: 800, main: 'Clear', description: 'clear sky', icon: '01d'}],
//     clouds: {all: 76},
//     wind: {speed: 2.32, deg: 175.001},
//     // snow: {3h: 0.0049999999999999},
//     sys: {pod: 'd'},
//     dt_txt: '2017-02-04 12:00:00'
//   }, {
//     dt: 1486220400,
//     main: {
//       temp: 260.26,
//       temp_min: 260.26,
//       temp_max: 260.26,
//       pressure: 1021,
//       sea_level: 1042.96,
//       grnd_level: 1021,
//       humidity: 86,
//       temp_kf: 0
//     },
//     weather: [{id: 803, main: 'Clouds', description: 'broken clouds', icon: '04n'}],
//     clouds: {all: 56},
//     wind: {speed: 2.47, deg: 180.501},
//     // snow: {},
//     sys: {pod: 'n'},
//     dt_txt: '2017-02-04 15:00:00'
//   }],
//   city: {
//     id: 524901,
//     name: 'Moscow',
//     coord: {
//       lat: 55.7522,
//       lon: 37.6156
//     },
//     country: 'none'
//   }
// };

import {WeatherResponseData} from '../models/weather-response-data';

export const WEATHER_DATA: WeatherResponseData = {
  code: 200,
  message: 0.0036,
  cnt: 40,
  list: [{
    dt: 1485799200,
    main: {
      temp: 261.45,
      tempMin: 259.086,
      tempMax: 261.45,
      pressure: 1023.48,
      seaLevel: 1045.39,
      grndLevel: 1023.48,
      humidity: 79,
      tempKf: 2.37
    },
    weather: [
      {
        id: 800,
        main: 'Clear',
        description: 'clear sky',
        icon: '02n',
      }
    ],
    clouds: {
      all: 8
    },
    wind: {
      speed: 4.77,
      deg: 232.505
    },
    snow: null,
    sys: {
      pod: 'n'
    },
    dtTxt: '2017-01-30 18:00:00'
  }, {
    dt: 1485810000,
    main: {
      temp: 261.41,
      tempMin: 259.638,
      tempMax: 261.41,
      pressure: 1022.41,
      seaLevel: 1044.35,
      grndLevel: 1022.41,
      humidity: 76,
      tempKf: 1.78
    },
    weather: [
      {
        id: 800,
        main: 'Clear',
        description: 'clear sky',
        icon: '01n'
      }
    ],
    clouds: {
      all: 32
    },
    wind: {
      speed: 4.76,
      deg: 240.503
    },
    snow: {volume: 0.011},
    sys: {
      pod: 'n'
    },
    dtTxt: '2017-01-30 21:00:00'
  }, {
    dt: 1485820800,
    main: {
      temp: 261.76,
      tempMin: 260.571,
      tempMax: 261.76,
      pressure: 1021.34,
      seaLevel: 1043.21,
      grndLevel: 1021.34,
      humidity: 84,
      tempKf: 1.18
    },
    weather: [
      {
        id: 600,
        main: 'Snow',
        description: 'light snow',
        icon: '13n'
      }
    ],
    clouds: {
      all: 68
    },
    wind: {
      speed: 4.71,
      deg: 243
    },
    snow: {volume: 0.058},
    sys: {
      pod: 'n'
    },
    dtTxt: '2017-01-31 00:00:00'
  }, {
    dt: 1485831600,
    main: {
      temp: 261.46,
      tempMin: 260.865,
      tempMax: 261.46,
      pressure: 1019.95,
      seaLevel: 1041.79,
      grndLevel: 1019.95,
      humidity: 82,
      tempKf: 0.59
    },
    weather: [{id: 600, main: 'Snow', description: 'light snow', icon: '13n'}],
    clouds: {all: 68},
    wind: {speed: 4.46, deg: 244.5},
    snow: {volume: 0.05225},
    sys: {pod: 'n'},
    dtTxt: '2017-01-31 03:00:00'
  }, {
    dt: 1485842400,
    main: {
      temp: 260.981,
      tempMin: 260.981,
      tempMax: 260.981,
      pressure: 1018.96,
      seaLevel: 1040.84,
      grndLevel: 1018.96,
      humidity: 81,
      tempKf: 0
    },
    weather: [{id: 600, main: 'Snow', description: 'light snow', icon: '13d'}],
    clouds: {all: 80},
    wind: {speed: 4.21, deg: 245.005},
    snow: {volume: 0.19625},
    sys: {pod: 'd'},
    dtTxt: '2017-01-31 06:00:00'
  }, {
    dt: 1485853200,
    main: {
      temp: 262.308,
      tempMin: 262.308,
      tempMax: 262.308,
      pressure: 1018.1,
      seaLevel: 1039.77,
      grndLevel: 1018.1,
      humidity: 91,
      tempKf: 0
    },
    weather: [{id: 600, main: 'Snow', description: 'light snow', icon: '13d'}],
    clouds: {all: 88},
    wind: {speed: 4.1, deg: 249.006},
    snow: {volume: 0.535},
    sys: {pod: 'd'},
    dtTxt: '2017-01-31 09:00:00'
  }, {
    dt: 1485864000,
    main: {
      temp: 263.76,
      tempMin: 263.76,
      tempMax: 263.76,
      pressure: 1016.86,
      seaLevel: 1038.4,
      grndLevel: 1016.86,
      humidity: 87,
      tempKf: 0
    },
    weather: [{id: 600, main: 'Snow', description: 'light snow', icon: '13d'}],
    clouds: {all: 68},
    wind: {speed: 3.87, deg: 254.5},
    snow: {volume: 0.21},
    sys: {pod: 'd'},
    dtTxt: '2017-01-31 12:00:00'
  }, {
    dt: 1485874800,
    main: {
      temp: 264.182,
      tempMin: 264.182,
      tempMax: 264.182,
      pressure: 1016.19,
      seaLevel: 1037.77,
      grndLevel: 1016.19,
      humidity: 89,
      tempKf: 0
    },
    weather: [{id: 600, main: 'Snow', description: 'light snow', icon: '13n'}],
    clouds: {all: 76},
    wind: {speed: 3.67, deg: 257.001},
    snow: {volume: 0.1375},
    sys: {pod: 'n'},
    dtTxt: '2017-01-31 15:00:00'
  }, {
    dt: 1485885600,
    main: {
      temp: 264.67,
      tempMin: 264.67,
      tempMax: 264.67,
      pressure: 1015.32,
      seaLevel: 1036.94,
      grndLevel: 1015.32,
      humidity: 86,
      tempKf: 0
    },
    weather: [{id: 600, main: 'Snow', description: 'light snow', icon: '13n'}],
    clouds: {all: 88},
    wind: {speed: 3.61, deg: 262.503},
    snow: {volume: 0.1425},
    sys: {pod: 'n'},
    dtTxt: '2017-01-31 18:00:00'
  }, {
    dt: 1485896400,
    main: {
      temp: 265.436,
      tempMin: 265.436,
      tempMax: 265.436,
      pressure: 1014.27,
      seaLevel: 1035.76,
      grndLevel: 1014.27,
      humidity: 90,
      tempKf: 0
    },
    weather: [{id: 600, main: 'Snow', description: 'light snow', icon: '13n'}],
    clouds: {all: 80},
    wind: {speed: 3.67, deg: 266.5},
    snow: {volume: 0.1625},
    sys: {pod: 'n'},
    dtTxt: '2017-01-31 21:00:00'
  }, {
    dt: 1485907200,
    main: {
      temp: 266.104,
      tempMin: 266.104,
      tempMax: 266.104,
      pressure: 1013.1,
      seaLevel: 1034.62,
      grndLevel: 1013.1,
      humidity: 90,
      tempKf: 0
    },
    weather: [{id: 600, main: 'Snow', description: 'light snow', icon: '13n'}],
    clouds: {all: 80},
    wind: {speed: 3.81, deg: 269.004},
    snow: {volume: 0.1025},
    sys: {pod: 'n'},
    dtTxt: '2017-02-01 00:00:00'
  }, {
    dt: 1485918000,
    main: {
      temp: 266.904,
      tempMin: 266.904,
      tempMax: 266.904,
      pressure: 1011.96,
      seaLevel: 1033.47,
      grndLevel: 1011.96,
      humidity: 89,
      tempKf: 0
    },
    weather: [{id: 600, main: 'Snow', description: 'light snow', icon: '13n'}],
    clouds: {all: 76},
    wind: {speed: 4.26, deg: 274.002},
    snow: {volume: 0.12},
    sys: {pod: 'n'},
    dtTxt: '2017-02-01 03:00:00'
  }, {
    dt: 1485928800,
    main: {
      temp: 268.102,
      tempMin: 268.102,
      tempMax: 268.102,
      pressure: 1011.23,
      seaLevel: 1032.62,
      grndLevel: 1011.23,
      humidity: 89,
      tempKf: 0
    },
    weather: [{id: 600, main: 'Snow', description: 'light snow', icon: '13d'}],
    clouds: {all: 76},
    wind: {speed: 4.4, deg: 283.501},
    snow: {volume: 0.13},
    sys: {pod: 'd'},
    dtTxt: '2017-02-01 06:00:00'
  }, {
    dt: 1485939600,
    main: {
      temp: 270.269,
      tempMin: 270.269,
      tempMax: 270.269,
      pressure: 1010.85,
      seaLevel: 1032.1,
      grndLevel: 1010.85,
      humidity: 92,
      tempKf: 0
    },
    weather: [{id: 600, main: 'Snow', description: 'light snow', icon: '13d'}],
    clouds: {all: 64},
    wind: {speed: 4.53, deg: 297.5},
    snow: {volume: 0.1875},
    sys: {pod: 'd'},
    dtTxt: '2017-02-01 09:00:00'
  }, {
    dt: 1485950400,
    main: {
      temp: 270.585,
      tempMin: 270.585,
      tempMax: 270.585,
      pressure: 1010.49,
      seaLevel: 1031.65,
      grndLevel: 1010.49,
      humidity: 89,
      tempKf: 0
    },
    weather: [{id: 600, main: 'Snow', description: 'light snow', icon: '13d'}],
    clouds: {all: 76},
    wind: {speed: 4.31, deg: 302.004},
    snow: {volume: 0.065},
    sys: {pod: 'd'},
    dtTxt: '2017-02-01 12:00:00'
  }, {
    dt: 1485961200,
    main: {
      temp: 269.661,
      tempMin: 269.661,
      tempMax: 269.661,
      pressure: 1010.22,
      seaLevel: 1031.49,
      grndLevel: 1010.22,
      humidity: 89,
      tempKf: 0
    },
    weather: [{id: 600, main: 'Snow', description: 'light snow', icon: '13n'}],
    clouds: {all: 68},
    wind: {speed: 4.91, deg: 296.5},
    snow: {volume: 0.0825},
    sys: {pod: 'n'},
    dtTxt: '2017-02-01 15:00:00'
  }, {
    dt: 1485972000,
    main: {
      temp: 269.155,
      tempMin: 269.155,
      tempMax: 269.155,
      pressure: 1009.95,
      seaLevel: 1031.3,
      grndLevel: 1009.95,
      humidity: 89,
      tempKf: 0
    },
    weather: [{id: 600, main: 'Snow', description: 'light snow', icon: '13n'}],
    clouds: {all: 80},
    wind: {speed: 5.7, deg: 310.501},
    snow: {volume: 0.11},
    sys: {pod: 'n'},
    dtTxt: '2017-02-01 18:00:00'
  }, {
    dt: 1485982800,
    main: {
      temp: 268.056,
      tempMin: 268.056,
      tempMax: 268.056,
      pressure: 1011.21,
      seaLevel: 1032.49,
      grndLevel: 1011.21,
      humidity: 89,
      tempKf: 0
    },
    weather: [{id: 600, main: 'Snow', description: 'light snow', icon: '13n'}],
    clouds: {all: 68},
    wind: {speed: 5.56, deg: 333},
    snow: {volume: 0.225},
    sys: {pod: 'n'},
    dtTxt: '2017-02-01 21:00:00'
  }, {
    dt: 1485993600,
    main: {
      temp: 265.803,
      tempMin: 265.803,
      tempMax: 265.803,
      pressure: 1013.79,
      seaLevel: 1035.06,
      grndLevel: 1013.79,
      humidity: 83,
      tempKf: 0
    },
    weather: [{id: 600, main: 'Snow', description: 'light snow', icon: '13n'}],
    clouds: {all: 8},
    wind: {speed: 4.8, deg: 355.004},
    snow: {volume: 0.03},
    sys: {pod: 'n'},
    dtTxt: '2017-02-02 00:00:00'
  }, {
    dt: 1486004400,
    main: {
      temp: 263.381,
      tempMin: 263.381,
      tempMax: 263.381,
      pressure: 1015.66,
      seaLevel: 1037.16,
      grndLevel: 1015.66,
      humidity: 84,
      tempKf: 0
    },
    weather: [{id: 800, main: 'Clear', description: 'clear sky', icon: '01n'}],
    clouds: {all: 0},
    wind: {speed: 4.2, deg: 348.503},
    snow: null,
    sys: {pod: 'n'},
    dtTxt: '2017-02-02 03:00:00'
  }, {
    dt: 1486015200,
    main: {
      temp: 261.85,
      tempMin: 261.85,
      tempMax: 261.85,
      pressure: 1017.63,
      seaLevel: 1039.22,
      grndLevel: 1017.63,
      humidity: 76,
      tempKf: 0
    },
    weather: [{id: 800, main: 'Clear', description: 'clear sky', icon: '01d'}],
    clouds: {all: 0},
    wind: {speed: 3.81, deg: 345.502},
    snow: null,
    sys: {pod: 'd'},
    dtTxt: '2017-02-02 06:00:00'
  }, {
    dt: 1486026000,
    main: {
      temp: 263.455,
      tempMin: 263.455,
      tempMax: 263.455,
      pressure: 1019.32,
      seaLevel: 1040.84,
      grndLevel: 1019.32,
      humidity: 84,
      tempKf: 0
    },
    weather: [{id: 800, main: 'Clear', description: 'clear sky', icon: '01d'}],
    clouds: {all: 0},
    wind: {speed: 3.06, deg: 344.004},
    snow: null,
    sys: {pod: 'd'},
    dtTxt: '2017-02-02 09:00:00'
  }, {
    dt: 1486036800,
    main: {
      temp: 264.015,
      tempMin: 264.015,
      tempMax: 264.015,
      pressure: 1020.41,
      seaLevel: 1041.88,
      grndLevel: 1020.41,
      humidity: 85,
      tempKf: 0
    },
    weather: [{id: 800, main: 'Clear', description: 'clear sky', icon: '01d'}],
    clouds: {all: 0},
    wind: {speed: 2.52, deg: 334.501},
    snow: null,
    sys: {pod: 'd'},
    dtTxt: '2017-02-02 12:00:00'
  }, {
    dt: 1486047600,
    main: {
      temp: 259.684,
      tempMin: 259.684,
      tempMax: 259.684,
      pressure: 1021.52,
      seaLevel: 1043.21,
      grndLevel: 1021.52,
      humidity: 76,
      tempKf: 0
    },
    weather: [{id: 800, main: 'Clear', description: 'clear sky', icon: '01n'}],
    clouds: {all: 0},
    wind: {speed: 2.48, deg: 320.501},
    snow: {volume: 0.0024999999999999},
    sys: {pod: 'n'},
    dtTxt: '2017-02-02 15:00:00'
  }, {
    dt: 1486058400,
    main: {
      temp: 255.188,
      tempMin: 255.188,
      tempMax: 255.188,
      pressure: 1022.09,
      seaLevel: 1044.09,
      grndLevel: 1022.09,
      humidity: 66,
      tempKf: 0
    },
    weather: [{id: 801, main: 'Clouds', description: 'few clouds', icon: '02n'}],
    clouds: {all: 24},
    wind: {speed: 1.23, deg: 283.003},
    snow: null,
    sys: {pod: 'n'},
    dtTxt: '2017-02-02 18:00:00'
  }, {
    dt: 1486069200,
    main: {
      temp: 255.594,
      tempMin: 255.594,
      tempMax: 255.594,
      pressure: 1022.03,
      seaLevel: 1044.12,
      grndLevel: 1022.03,
      humidity: 64,
      tempKf: 0
    },
    weather: [{id: 802, main: 'Clouds', description: 'scattered clouds', icon: '03n'}],
    clouds: {all: 48},
    wind: {speed: 1.22, deg: 244.502},
    snow: null,
    sys: {pod: 'n'},
    dtTxt: '2017-02-02 21:00:00'
  }, {
    dt: 1486080000,
    main: {
      temp: 256.96,
      tempMin: 256.96,
      tempMax: 256.96,
      pressure: 1021.8,
      seaLevel: 1043.77,
      grndLevel: 1021.8,
      humidity: 66,
      tempKf: 0
    },
    weather: [{id: 802, main: 'Clouds', description: 'scattered clouds', icon: '03n'}],
    clouds: {all: 44},
    wind: {speed: 1.23, deg: 237.506},
    snow: null,
    sys: {pod: 'n'},
    dtTxt: '2017-02-03 00:00:00'
  }, {
    dt: 1486090800,
    main: {
      temp: 258.109,
      tempMin: 258.109,
      tempMax: 258.109,
      pressure: 1020.97,
      seaLevel: 1042.99,
      grndLevel: 1020.97,
      humidity: 77,
      tempKf: 0
    },
    weather: [{id: 803, main: 'Clouds', description: 'broken clouds', icon: '04n'}],
    clouds: {all: 80},
    wind: {speed: 1.21, deg: 234.502},
    snow: null,
    sys: {pod: 'n'},
    dtTxt: '2017-02-03 03:00:00'
  }, {
    dt: 1486101600,
    main: {
      temp: 259.533,
      tempMin: 259.533,
      tempMax: 259.533,
      pressure: 1020.56,
      seaLevel: 1042.53,
      grndLevel: 1020.56,
      humidity: 76,
      tempKf: 0
    },
    weather: [{id: 803, main: 'Clouds', description: 'broken clouds', icon: '04d'}],
    clouds: {all: 68},
    wind: {speed: 1.21, deg: 229.509},
    snow: null,
    sys: {pod: 'd'},
    dtTxt: '2017-02-03 06:00:00'
  }, {
    dt: 1486112400,
    main: {
      temp: 263.438,
      tempMin: 263.438,
      tempMax: 263.438,
      pressure: 1020.46,
      seaLevel: 1042.15,
      grndLevel: 1020.46,
      humidity: 84,
      tempKf: 0
    },
    weather: [{id: 803, main: 'Clouds', description: 'broken clouds', icon: '04d'}],
    clouds: {all: 56},
    wind: {speed: 1.51, deg: 242.503},
    snow: null,
    sys: {pod: 'd'},
    dtTxt: '2017-02-03 09:00:00'
  }, {
    dt: 1486123200,
    main: {
      temp: 264.228,
      tempMin: 264.228,
      tempMax: 264.228,
      pressure: 1019.58,
      seaLevel: 1041.24,
      grndLevel: 1019.58,
      humidity: 89,
      tempKf: 0
    },
    weather: [{id: 803, main: 'Clouds', description: 'broken clouds', icon: '04d'}],
    clouds: {all: 56},
    wind: {speed: 1.58, deg: 242.503},
    snow: null,
    sys: {pod: 'd'},
    dtTxt: '2017-02-03 12:00:00'
  }, {
    dt: 1486134000,
    main: {
      temp: 261.153,
      tempMin: 261.153,
      tempMax: 261.153,
      pressure: 1019.63,
      seaLevel: 1041.42,
      grndLevel: 1019.63,
      humidity: 80,
      tempKf: 0
    },
    weather: [{id: 800, main: 'Clear', description: 'clear sky', icon: '01n'}],
    clouds: {all: 76},
    wind: {speed: 1.21, deg: 198.501},
    snow: {volume: 0.0049999999999999},
    sys: {pod: 'n'},
    dtTxt: '2017-02-03 15:00:00'
  }, {
    dt: 1486144800,
    main: {
      temp: 258.818,
      tempMin: 258.818,
      tempMax: 258.818,
      pressure: 1020.18,
      seaLevel: 1042.03,
      grndLevel: 1020.18,
      humidity: 73,
      tempKf: 0
    },
    weather: [{id: 803, main: 'Clouds', description: 'broken clouds', icon: '04n'}],
    clouds: {all: 64},
    wind: {speed: 1.21, deg: 209.002},
    snow: null,
    sys: {pod: 'n'},
    dtTxt: '2017-02-03 18:00:00'
  }, {
    dt: 1486155600,
    main: {
      temp: 257.218,
      tempMin: 257.218,
      tempMax: 257.218,
      pressure: 1020.43,
      seaLevel: 1042.38,
      grndLevel: 1020.43,
      humidity: 65,
      tempKf: 0
    },
    weather: [{id: 802, main: 'Clouds', description: 'scattered clouds', icon: '03n'}],
    clouds: {all: 44},
    wind: {speed: 1.17, deg: 194.501},
    snow: null,
    sys: {pod: 'n'},
    dtTxt: '2017-02-03 21:00:00'
  }, {
    dt: 1486166400,
    main: {
      temp: 255.782,
      tempMin: 255.782,
      tempMax: 255.782,
      pressure: 1020.57,
      seaLevel: 1042.75,
      grndLevel: 1020.57,
      humidity: 73,
      tempKf: 0
    },
    weather: [{id: 803, main: 'Clouds', description: 'broken clouds', icon: '04n'}],
    clouds: {all: 56},
    wind: {speed: 1.21, deg: 175.001},
    snow: null,
    sys: {pod: 'n'},
    dtTxt: '2017-02-04 00:00:00'
  }, {
    dt: 1486177200,
    main: {
      temp: 254.819,
      tempMin: 254.819,
      tempMax: 254.819,
      pressure: 1020.99,
      seaLevel: 1043.11,
      grndLevel: 1020.99,
      humidity: 68,
      tempKf: 0
    },
    weather: [{id: 800, main: 'Clear', description: 'clear sky', icon: '01n'}],
    clouds: {all: 44},
    wind: {speed: 1.22, deg: 122.001},
    snow: {volume: 0.0049999999999999},
    sys: {pod: 'n'},
    dtTxt: '2017-02-04 03:00:00'
  }, {
    dt: 1486188000,
    main: {
      temp: 257.488,
      tempMin: 257.488,
      tempMax: 257.488,
      pressure: 1021.31,
      seaLevel: 1043.48,
      grndLevel: 1021.31,
      humidity: 63,
      tempKf: 0
    },
    weather: [{id: 600, main: 'Snow', description: 'light snow', icon: '13d'}],
    clouds: {all: 68},
    wind: {speed: 2.13, deg: 155.501},
    snow: {volume: 0.04},
    sys: {pod: 'd'},
    dtTxt: '2017-02-04 06:00:00'
  }, {
    dt: 1486198800,
    main: {
      temp: 259.827,
      tempMin: 259.827,
      tempMax: 259.827,
      pressure: 1021.81,
      seaLevel: 1043.67,
      grndLevel: 1021.81,
      humidity: 90,
      tempKf: 0
    },
    weather: [{id: 600, main: 'Snow', description: 'light snow', icon: '13d'}],
    clouds: {all: 68},
    wind: {speed: 2.07, deg: 170.005},
    snow: {volume: 0.03},
    sys: {pod: 'd'},
    dtTxt: '2017-02-04 09:00:00'
  }, {
    dt: 1486209600,
    main: {
      temp: 261.256,
      tempMin: 261.256,
      tempMax: 261.256,
      pressure: 1021.31,
      seaLevel: 1043.05,
      grndLevel: 1021.31,
      humidity: 86,
      tempKf: 0
    },
    weather: [{id: 800, main: 'Clear', description: 'clear sky', icon: '01d'}],
    clouds: {all: 76},
    wind: {speed: 2.32, deg: 175.001},
    snow: {volume: 0.0049999999999999},
    sys: {pod: 'd'},
    dtTxt: '2017-02-04 12:00:00'
  }, {
    dt: 1486220400,
    main: {
      temp: 260.26,
      tempMin: 260.26,
      tempMax: 260.26,
      pressure: 1021,
      seaLevel: 1042.96,
      grndLevel: 1021,
      humidity: 86,
      tempKf: 0
    },
    weather: [{id: 803, main: 'Clouds', description: 'broken clouds', icon: '04n'}],
    clouds: {all: 56},
    wind: {speed: 2.47, deg: 180.501},
    snow: null,
    sys: {pod: 'n'},
    dtTxt: '2017-02-04 15:00:00'
  }],
  city: {
    id: 524901,
    name: 'Moscow',
    coord: {
      lat: 55.7522,
      lon: 37.6156
    },
    country: 'none'
  }
};
