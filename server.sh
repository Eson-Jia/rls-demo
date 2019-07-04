openssl genrsa -out server-key.pem 2048
openssl req -new -sha256 -key server-key.pem -out server-csr.pem
openssl x509 -req -in server-csr.pem -signkey server-key.pem -out server-cert.pem
openssl pkcs12 -export -in server-cert.pem -inkey server-key.pem \
       -out server.pfx