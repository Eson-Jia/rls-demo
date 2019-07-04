# TLS

## TLS/SSL 概念

TLS/SSL 是 public/private key infrastructure(PKI).c/s端必须各自拥有私钥.

私钥生成方式有多种，OpenSSL 命令行生成 2048-bit 的 RSA 私钥如下：

```bash
openssl genrsa -out ryans-key.pem 2048
```

获取证书的第一步是创建证书签名请求（CSR）文件

openSSL　生成 CSR 文件的命令为

```bash
openssl req -new -sha256 -key ryans-key.pem -out ryans-csr.pem
```

一路回车，生成的　CSR　既可以发给　CA(Certificate Authority)　以生成签名，也可以用以生成自签名证书。

生成自签名证书的命令如下：

```bash
openssl x509 -req -in ryans-csr.pem -signkey ryans-key.pem -out ryans-cert.pem
```

openSSL 生成数字证书的命令为:

```bash
openssl pkcs12 -export -in ryans-cert.pem -inkey ryans-key.pem \
       -out ryans.pfx # -certfile ca-cert.pem 自签名暂且不加这句
# in: is the signed certificate
#inkey: is the associated private key
#certfile: is a concatenation of all Certificate Authority (CA) certs into a single file, e.g. cat ca1-cert.pem ca2-cert.pem > ca-cert.pem
```
