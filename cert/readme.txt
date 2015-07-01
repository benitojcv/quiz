set OPENSSL_CONF=C:\utils\OpenSSL-Win64\bin\openssl.cfg

c:\utils\OpenSSL-Win64\bin\openssl.exe genrsa -out quiz-benitojcv-key.pem

c:\utils\OpenSSL-Win64\bin\openssl.exe req -new -sha256 -key quiz-benitojcv-key.pem -out quiz-benitojcv-csr.pem

c:\utils\OpenSSL-Win64\bin\openssl.exe x509 -req -in quiz-benitojcv-csr.pem -signkey quiz-benitojcv-key.pem -out quiz-benitojcv-cert.pem
