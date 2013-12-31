var http = require('http'),
    assert = require('assert'); // node core module for testing return values
    
var opts = { 
    host: 'localhost',
    port: 3000,
    path: '/send',
    method: 'POST',
    headers: { 'content-type':'application/x-www-form-urlencoded'}
}

// create new http request
var req = http.request(opts, function(res){
    res.setEncoding('utf8');
    
    var data = '';
    res.on('data', function(d){
        data += d;
    });
    
    res.on('end', function(){
        assert.strictEqual(data, {status: 'ok', message:'tweet recieved!'})
    });
});

req.write('tweet=test');
req.end();
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    