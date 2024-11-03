delete $request.headers['Authorization'];
$done({headers: $request.headers});
