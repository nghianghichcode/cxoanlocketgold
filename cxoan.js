let obj = JSON.parse($response.body);
obj.subscriber.entitlements = {
    "premium": {
        "expires_date": "2099-12-31T23:59:59Z",
        "product_identifier": "com.example.premium",
        "purchase_date": "2020-01-01T00:00:00Z"
    }
};
$response.body = JSON.stringify(obj);
$done({body: $response.body});
