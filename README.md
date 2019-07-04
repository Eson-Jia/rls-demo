# TLS

## TLS/SSL 概念

 TLS/SSL 是 public/private key infrastructure(PKI).c/s端必须各自拥有私钥.

 私钥生成方式有多种，OpenSSL 命令行生成 2048-bit 的 RSA 私钥如下：

```bash
openssl genrsa -out ryans-key.pem 2048
```

