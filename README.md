# Тестовое задание по Angular

## Задание
Есть открытое [погодное api](https://openweathermap.org/forecast5). Необходимо:
 * запросить данные
 * сгенерировать из полученных данных графики (используя любую библиотеку в виде multiline charts) для всех параметров, находящихся в “main” за весь временной период
 * для остальных параметров (weather, clouds, speed, snow) построить таблицу, используя bootstrap

Запрос для отображения данных:
``` bash
http://samples.openweathermap.org/data/2.5/forecast?id=524901&appid=b1b15e88fa797225412429c1c50c122a1
``` 

## Особенности работы
Сервер http://samples.openweathermap.org выдает ошибку связанную с CORS, поэтому по умолчанию в проекте используются замоканные данные. Чтобы использовать незамоканные данные в файле app.module.ts необходимо раскомментировать строку BACKEND_PROVIDERS и закомментировать BACKEND_MOCKS_PROVIDERS.

``` bash
 providers: [
    // BACKEND_PROVIDERS,
    BACKEND_MOCKS_PROVIDERS,
  ],
```  

Проблему с CORS можно решить путем поднятия прокси-сервера на nginx с необходимыми заголовками и отправки запроса не напрямую серверу http://samples.openweathermap.org, а через созданный прокси. 

При поднятии прокси-сервера также необходимо раскомментировать:
``` bash
// environments.ts 
// httpServer: 'http://api.weather.local'
```  

### Прокси сервер

Создание прокси-сервера:
``` bash
// /usr/local/etc/nginx/nginx.conf - для macos

server {
    listen  80;
    server_name api.weather.local;

    add_header 'Access-Control-Allow-Origin' '*';
    add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';
    add_header 'Access-Control-Allow-Headers' 'DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range';
    add_header 'Access-Control-Expose-Headers' 'Content-Length,Content-Range';

    location / {
        proxy_pass https://samples.openweathermap.org;
    }
}
```  

``` bash
// /etc/host - для macos

127.0.0.1   api.weather.local
```  

Перезапуск nginx с помощью команды:
``` bash
sudo nginx -s reload
``` 
