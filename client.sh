openssl genrsa -out client-key.pem 2048
openssl req -new -sha256 -key client-key.pem -out client-csr.pem
openssl x509 -req -in client-csr.pem -signkey client-key.pem -out client-cert.pem
openssl pkcs12 -export -in client-cert.pem -inkey client-key.pem \
       -out client.pfx