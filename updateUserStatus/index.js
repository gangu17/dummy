let cb;
const result = require('./result');

try {
    const getConstant = require('./constant')();
    // const callback = function (err, data) {
    //     console.log('callback called+++++++++++++++++++++++++++++++++');
    //     console.log(err, data);
    // };
    // const event = {
    //     "resource": "/settings/geofence",
    //     "path": "/settings/geofence",
    //     "httpMethod": "POST",
    //     "headers": {
    //         "Accept": "application/json, text/plain, */*",
    //         "Accept-Encoding": "gzip, deflate, br",
    //         "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8",
    //         "Authorization": "eyJraWQiOiJwc0Mwakpxd2V5RCtVM3FYenB2RVZ4SEI3NXdKYUVUcVwvZlNrTitaWExSbz0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJlMDhjYWMzOC1lMjEzLTQ0NzQtODdjNi0wMDc2NDUzOWQ2NDkiLCJkZXZpY2Vfa2V5IjoiYXAtc291dGgtMV82OGE5NjJiYi1mNWEyLTRjNDktODAxYS0yMzViOGFjNjIwNzAiLCJldmVudF9pZCI6IjQ2YmVhM2Q5LTQ2ODMtNDQyMi05MDExLTAxNzVkN2Q0YmQxYyIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE1NjA3NjgxODYsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb21cL2FwLXNvdXRoLTFfQVFKSnBoRXg0IiwiZXhwIjoxNTYwODUzNTMyLCJpYXQiOjE1NjA4NDk5MzIsImp0aSI6ImY5YjljNWZkLTdjNGUtNGQyMS05MDkzLTZlMjZlOTFlMDU0MyIsImNsaWVudF9pZCI6IjUzdDBwbm1zMXE2ZmN1MmpocjVuNG9hY3QzIiwidXNlcm5hbWUiOiJlMDhjYWMzOC1lMjEzLTQ0NzQtODdjNi0wMDc2NDUzOWQ2NDkifQ.fljLBi1ae1oneVg-lw1ZLbvGQ3GGLstQw0e9nmxax8EES_MbZ263ToJVZBdMS4SbsT2dx0gPEz973zwwS-pBtZcn-qdpKBkDYNV0fHgj5EAjUAFiWKSsopMbBNa2VKn0_3SYxOgX8Mc8A38Mi1jjElG6MqR2leqp4wbGH7onHtAARcoSg_QX-saKFP_W8KNzcMI1ZoGrgrK-soq3AVXGXP-QwLSEWdW24tNLnU1Zp7GmIlH8dbFrRllz3j7OvSDM68hjCObkAZ0PbfDaAsRkKWhJL6nJClididXrT0PQixfNQ-Tj2p4Hua8U0U0Hwo1EI02ifnSwkDIIaRpLtv_gtg",
    //         "CloudFront-Forwarded-Proto": "https",
    //         "CloudFront-Is-Desktop-Viewer": "true",
    //         "CloudFront-Is-Mobile-Viewer": "false",
    //         "CloudFront-Is-SmartTV-Viewer": "false",
    //         "CloudFront-Is-Tablet-Viewer": "false",
    //         "CloudFront-Viewer-Country": "IN",
    //         "content-type": "application/json",
    //         "Host": "1hobsh741g.execute-api.ap-south-1.amazonaws.com",
    //         "origin": "http://localhost:4200",
    //         "Referer": "http://localhost:4200/settings",
    //         "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.92 Safari/537.36",
    //         "Via": "2.0 de1d98485474718d947eca452f319884.cloudfront.net (CloudFront)",
    //         "X-Amz-Cf-Id": "KCevBBvUo7VZqbQLDLW0TcfWmxv313zCz1AfXnvcZnVDmGP5tKrJqg==",
    //         "X-Amzn-Trace-Id": "Root=1-5d08af14-acd1ec57c3090c888705dbb7",
    //         "X-Forwarded-For": "106.51.73.130, 64.252.145.159",
    //         "X-Forwarded-Port": "443",
    //         "X-Forwarded-Proto": "https"
    //     },
    //     "multiValueHeaders": {
    //         "Accept": [
    //             "application/json, text/plain, */*"
    //         ],
    //         "Accept-Encoding": [
    //             "gzip, deflate, br"
    //         ],
    //         "Accept-Language": [
    //             "en-GB,en-US;q=0.9,en;q=0.8"
    //         ],
    //         "Authorization": [
    //             "eyJraWQiOiJwc0Mwakpxd2V5RCtVM3FYenB2RVZ4SEI3NXdKYUVUcVwvZlNrTitaWExSbz0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJlMDhjYWMzOC1lMjEzLTQ0NzQtODdjNi0wMDc2NDUzOWQ2NDkiLCJkZXZpY2Vfa2V5IjoiYXAtc291dGgtMV82OGE5NjJiYi1mNWEyLTRjNDktODAxYS0yMzViOGFjNjIwNzAiLCJldmVudF9pZCI6IjQ2YmVhM2Q5LTQ2ODMtNDQyMi05MDExLTAxNzVkN2Q0YmQxYyIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE1NjA3NjgxODYsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb21cL2FwLXNvdXRoLTFfQVFKSnBoRXg0IiwiZXhwIjoxNTYwODUzNTMyLCJpYXQiOjE1NjA4NDk5MzIsImp0aSI6ImY5YjljNWZkLTdjNGUtNGQyMS05MDkzLTZlMjZlOTFlMDU0MyIsImNsaWVudF9pZCI6IjUzdDBwbm1zMXE2ZmN1MmpocjVuNG9hY3QzIiwidXNlcm5hbWUiOiJlMDhjYWMzOC1lMjEzLTQ0NzQtODdjNi0wMDc2NDUzOWQ2NDkifQ.fljLBi1ae1oneVg-lw1ZLbvGQ3GGLstQw0e9nmxax8EES_MbZ263ToJVZBdMS4SbsT2dx0gPEz973zwwS-pBtZcn-qdpKBkDYNV0fHgj5EAjUAFiWKSsopMbBNa2VKn0_3SYxOgX8Mc8A38Mi1jjElG6MqR2leqp4wbGH7onHtAARcoSg_QX-saKFP_W8KNzcMI1ZoGrgrK-soq3AVXGXP-QwLSEWdW24tNLnU1Zp7GmIlH8dbFrRllz3j7OvSDM68hjCObkAZ0PbfDaAsRkKWhJL6nJClididXrT0PQixfNQ-Tj2p4Hua8U0U0Hwo1EI02ifnSwkDIIaRpLtv_gtg"
    //         ],
    //         "CloudFront-Forwarded-Proto": [
    //             "https"
    //         ],
    //         "CloudFront-Is-Desktop-Viewer": [
    //             "true"
    //         ],
    //         "CloudFront-Is-Mobile-Viewer": [
    //             "false"
    //         ],
    //         "CloudFront-Is-SmartTV-Viewer": [
    //             "false"
    //         ],
    //         "CloudFront-Is-Tablet-Viewer": [
    //             "false"
    //         ],
    //         "CloudFront-Viewer-Country": [
    //             "IN"
    //         ],
    //         "content-type": [
    //             "application/json"
    //         ],
    //         "Host": [
    //             "1hobsh741g.execute-api.ap-south-1.amazonaws.com"
    //         ],
    //         "origin": [
    //             "http://localhost:4200"
    //         ],
    //         "Referer": [
    //             "http://localhost:4200/settings"
    //         ],
    //         "User-Agent": [
    //             "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.92 Safari/537.36"
    //         ],
    //         "Via": [
    //             "2.0 de1d98485474718d947eca452f319884.cloudfront.net (CloudFront)"
    //         ],
    //         "X-Amz-Cf-Id": [
    //             "KCevBBvUo7VZqbQLDLW0TcfWmxv313zCz1AfXnvcZnVDmGP5tKrJqg=="
    //         ],
    //         "X-Amzn-Trace-Id": [
    //             "Root=1-5d08af14-acd1ec57c3090c888705dbb7"
    //         ],
    //         "X-Forwarded-For": [
    //             "106.51.73.130, 64.252.145.159"
    //         ],
    //         "X-Forwarded-Port": [
    //             "443"
    //         ],
    //         "X-Forwarded-Proto": [
    //             "https"
    //         ]
    //     },
    //     "queryStringParameters": null,
    //     "multiValueQueryStringParameters": null,
    //     "pathParameters": null,
    //     "stageVariables": null,
    //     "requestContext": {
    //         "resourceId": "48dhnm",
    //         "authorizer": {
    //             "principalId": "{\"sub\":\"e08cac38-e213-4474-87c6-00764539d649\",\"role\":1,\"_id\":\"5c2c6dbc316bff593dc859cf\"}",
    //             "integrationLatency": 18
    //         },
    //         "resourcePath": "/settings/geofence",
    //         "httpMethod": "POST",
    //         "extendedRequestId": "beBLLFtMhcwFuvg=",
    //         "requestTime": "18/Jun/2019:09:29:56 +0000",
    //         "path": "/Development/settings/geofence",
    //         "accountId": "786724127547",
    //         "protocol": "HTTP/1.1",
    //         "stage": "Development",
    //         "domainPrefix": "1hobsh741g",
    //         "requestTimeEpoch": 1560850196328,
    //         "requestId": "a2808ebf-91ab-11e9-b963-1bf6258d5470",
    //         "identity": {
    //             "cognitoIdentityPoolId": null,
    //             "accountId": null,
    //             "cognitoIdentityId": null,
    //             "caller": null,
    //             "sourceIp": "106.51.73.130",
    //             "principalOrgId": null,
    //             "accessKey": null,
    //             "cognitoAuthenticationType": null,
    //             "cognitoAuthenticationProvider": null,
    //             "userArn": null,
    //             "userAgent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.92 Safari/537.36",
    //             "user": null
    //         },
    //         "domainName": "1hobsh741g.execute-api.ap-south-1.amazonaws.com",
    //         "apiId": "1hobsh741g"
    //     },
    //     "body": "{\"name\":\"asmaasa\",\"team\":\"5c2c6e131ebf6850eb1dbf8f\",\"driver\":\"5ce2753411c9900153fa9437\",\"description\":\"xsdeff\",\"address\":\"[{\\\"lat\\\":13.007196091920676,\\\"lng\\\":77.73451160676268},{\\\"lat\\\":13.01806754922015,\\\"lng\\\":77.75322269685057},{\\\"lat\\\":13.007865118441334,\\\"lng\\\":77.76420902497557},{\\\"lat\\\":12.995487835768282,\\\"lng\\\":77.74635624177245},{\\\"lat\\\":13.000338466053464,\\\"lng\\\":77.73485492951659},{\\\"lat\\\":13.005189001531503,\\\"lng\\\":77.73365329987791}]\"}",
    //     "isBase64Encoded": false
    // };
   exports.handler = (event, context, callback) => {
       console.log('Event', JSON.stringify(event));
     //   console.log('context', JSON.stringify(context));
       context.callbackWaitsForEmptyEventLoop = false;

        cb = callback;
        getConstant.then(() => {
            //imports
            const db = require('./db').connect();
            const geofence = require('./geofence');
            const helper = require('./util');

            //trigger
            if (helper.checkFromTrigger(cb, event)) return;

            //check for principal
            const principals = helper.getPrincipals(cb, event);
            if (!principals) return;

            //connect to db
            return db.then(() => geofence.saveGeofence(event, cb, principals));

        }).catch((err) => {
            console.log(err);
            result.sendServerError(cb)
        });
   };


    } catch (err) {
    console.error('error +++', err);
    result.sendServerError(cb);
}


