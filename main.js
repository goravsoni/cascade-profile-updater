var request = require('request');
const prompt = require('prompt-sync')();
var validate, options, starPage, widgetView, unassumeIdentity;
const campus = 'csueastbay';
var continueBool = 'Y';

const JSessionID = prompt('Enter your session ID:');
validateSession();
function validateSession() {
    validate = {
        'method': 'POST',
        'url': 'https://'+campus+'.cascadecms.com/ajax/dashboard/overview.act?id=',
        'headers': {
            'Accept': 'application/json, text/javascript, */*; q=0.01',
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept-Language': 'en-US,en;q=0.9',
            'Connection': 'keep-alive',
            'Content-Type': 'application/json',
            'Cookie': 'JSESSIONID='+ JSessionID,
            'Host': ''+campus+'.cascadecms.com',
            'Origin': 'https://'+campus+'.cascadecms.com',
            'Referer': 'https://'+campus+'.cascadecms.com/home.act ',
            'sec-ch-ua': '\\"Google Chrome\\";v=\\"93\\", \\" Not;A Brand\\";v=\\"99\\", \\"Chromium\\";v=\\"93\\"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '\\"Windows\\" ',
            'Sec-Fetch-Dest': 'empty ',
            'Sec-Fetch-Mode': 'cors ',
            'Sec-Fetch-Site': 'same-origin ',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Safari/537.36 ',
            'X-Requested-With': 'XMLHttpRequest'
        },
        body: JSON.stringify({"layout":{}})

    };
    request(validate, function (error, response) {
        if (error || !(response.statusCode == 200)) {
            console.log('❌ Session ID Invalid! Please try again later.')
            endSession();
        } else {
            console.log("✔ Session validated.");
            setGet();
        }
    });

}


function setGet() {
    const NETID = prompt('Enter staff\'s netID:');
    const STARPAGEID = prompt('Enter staff\'s page id:');
    options = {
        'method': 'GET',
        'url': 'https://'+campus+'.cascadecms.com/assumeIdentity.act?id=' + NETID,
        'headers': {
            'Accept': 'application/json, text/javascript, */*; q=0.01',
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept-Language': 'en-US,en;q=0.9',
            'Connection': 'keep-alive',
            'Content-Type': 'application/json',
            'Cookie': 'JSESSIONID=' + JSessionID,
            'Host': ''+campus+'.cascadecms.com',
            'Origin': 'https://'+campus+'.cascadecms.com',
            'Referer': 'https://'+campus+'.cascadecms.com/home.act ',
            'sec-ch-ua': '\\"Google Chrome\\";v=\\"93\\", \\" Not;A Brand\\";v=\\"99\\", \\"Chromium\\";v=\\"93\\"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '\\"Windows\\" ',
            'Sec-Fetch-Dest': 'empty ',
            'Sec-Fetch-Mode': 'cors ',
            'Sec-Fetch-Site': 'same-origin ',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Safari/537.36 ',
            'X-Requested-With': 'XMLHttpRequest'
        }
    };

    starPage = {
        'method': 'POST',
        'url': 'https://'+campus+'.cascadecms.com/ajax/entitystar/create.act',
        'headers': {
            'Accept': 'application/json, text/javascript, */*; q=0.01',
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept-Language': 'en-US,en;q=0.9',
            'Connection': 'keep-alive',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Cookie': 'JSESSIONID=' + JSessionID,
            'Host': ''+campus+'.cascadecms.com',
            'Origin': 'https://'+campus+'.cascadecms.com',
            'Referer': 'https://'+campus+'.cascadecms.com/home.act ',
            'sec-ch-ua': '\\"Google Chrome\\";v=\\"93\\", \\" Not;A Brand\\";v=\\"99\\", \\"Chromium\\";v=\\"93\\"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '\\"Windows\\" ',
            'Sec-Fetch-Dest': 'empty ',
            'Sec-Fetch-Mode': 'cors ',
            'Sec-Fetch-Site': 'same-origin ',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Safari/537.36 ',
            'X-Requested-With': 'XMLHttpRequest'
        },
        form: {
            'id': STARPAGEID,
            'type': 'page'
        }
    };
    widgetView = {
        'method': 'POST',
        'url': 'https://'+campus+'.cascadecms.com/ajax/dashboard/overview.act?id=',
        'headers': {
            'Accept': 'application/json, text/javascript, */*; q=0.01',
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept-Language': 'en-US,en;q=0.9',
            'Connection': 'keep-alive',
            'Content-Type': 'application/json',
            'Cookie': 'JSESSIONID=' + JSessionID,
            'Host': ''+campus+'.cascadecms.com',
            'Origin': 'https://'+campus+'.cascadecms.com',
            'Referer': 'https://'+campus+'.cascadecms.com/home.act ',
            'sec-ch-ua': '\\"Google Chrome\\";v=\\"93\\", \\" Not;A Brand\\";v=\\"99\\", \\"Chromium\\";v=\\"93\\"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '\\"Windows\\" ',
            'Sec-Fetch-Dest': 'empty ',
            'Sec-Fetch-Mode': 'cors ',
            'Sec-Fetch-Site': 'same-origin ',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Safari/537.36 ',
            'X-Requested-With': 'XMLHttpRequest'
        },
        body: JSON.stringify({
            "layout": {
                "type": "jqui",
                "params": {
                    "columns": 3,
                    "locations": {
                        "549": "2",
                        "582": "3",
                        "967": "1",
                        "hilldash-welcome-widget": "1"
                    },
                    "widgets": [
                        "hilldash-welcome-widget",
                        "967",
                        "549",
                        "582"
                    ]
                }
            },
            "siteId": "5c3975267f0000012daf82576362fab6",
            "id": "" + NETID,
            "widgets": {
                "549": {
                    "id": "549",
                    "type": "myContent",
                    "title": "My Content",
                    "params": {
                        "siteId": "5c3975267f0000012daf82576362fab6"
                    }
                },
                "582": {
                    "id": "582",
                    "type": "msgs",
                    "title": "Notifications",
                    "params": {
                        "siteId": "5c3975267f0000012daf82576362fab6"
                    }
                },
                "967": {
                    "id": "967",
                    "type": "mySites",
                    "title": "My Sites",
                    "params": {
                        "siteId": "5c3975267f0000012daf82576362fab6"
                    }
                }
            }
        })

    };

    unassumeIdentity = {
        'method': 'GET',
        'url': 'https://'+campus+'.cascadecms.com/unassumeIdentity.act',
        'headers': {
            'Accept': 'application/json, text/javascript, */*; q=0.01',
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept-Language': 'en-US,en;q=0.9',
            'Connection': 'keep-alive',
            'Content-Type': 'application/json',
            'Cookie': 'JSESSIONID=' + JSessionID,
            'Host': ''+campus+'.cascadecms.com',
            'Origin': 'https://'+campus+'.cascadecms.com',
            'Referer': 'https://'+campus+'.cascadecms.com/home.act ',
            'sec-ch-ua': '\\"Google Chrome\\";v=\\"93\\", \\" Not;A Brand\\";v=\\"99\\", \\"Chromium\\";v=\\"93\\"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '\\"Windows\\" ',
            'Sec-Fetch-Dest': 'empty ',
            'Sec-Fetch-Mode': 'cors ',
            'Sec-Fetch-Site': 'same-origin ',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Safari/537.36 ',
            'X-Requested-With': 'XMLHttpRequest'
        }
    };
    httpRequest();
}


function httpRequest() {
    // Assume Identity
    request(options,  function (error, response) {
        if (error || !(response.statusCode == 200)) {
            console.log("❌ Staff ID invalid! Please try again later.");
            endSession();
        }
        console.log('✔ Staff Identified');
        if (!error && response.statusCode == 200) {
            // Star's Page
            request(starPage,  function (error, response) {
                if (error || !(response.statusCode == 200)){
                    console.log("❌ PageId Invalid! Please try again later.");
                    endSession();
                }
                console.log('Staring page...');
                if (!error && response.statusCode == 200) {
                    // Change Widget view
                    request(widgetView,  function (error, response) {
                        if (error || !(response.statusCode == 200)) {
                            console.log("❌ Error updating view! Please try again later.");
                            endSession();
                        }
                        console.log('✔ Updated widget view');
                        if (!error && response.statusCode == 200) {
                            // UnAssume Identity
                            request(unassumeIdentity,  function (error, response) {
                                if (error || !(response.statusCode == 200)) {
                                    console.log("❌ Error unassuming identity! Please try again later.");
                                    endSession();
                                };
                                console.log('✔ Success!');
                                continueBool = prompt('Another staff? Y or N: ');
                                continueBool = continueBool.toUpperCase();
                                if(continueBool == 'N') {
                                    endSession();
                                }else{
                                    setGet();
                                }
                            });
                        }
                    });
                }
            });
        }
    });
}
function endSession() {
    console.log('Ending session...');
    process.exit(1)
}




