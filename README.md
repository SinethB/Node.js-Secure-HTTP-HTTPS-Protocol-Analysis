# Node.js Secure HTTP/HTTPS Protocol Analysis

## Description
This project implements a simple HTTP and HTTPS server in Node.js to demonstrate the differences between these two protocols. The aim is to analyze how each protocol handles data transmission and security, using Wireshark to capture and observe network traffic. 

### Key Features:
- Node.js HTTP server implementation.
- Node.js HTTPS server implementation with self-signed SSL certificates.
- Wireshark analysis for both HTTP and HTTPS traffic.
- Observations on the security benefits of HTTPS over HTTP.

## Project Structure
```bash
Node.js-Secure-HTTP-HTTPS-Protocol-Analysis
├── http_server.js    # HTTP server implementation
├── https_server.js   # HTTPS server implementation
├── server.key        # SSL private key (for HTTPS)
├── server.cert       # SSL certificate (for HTTPS)
├── package.json      # Project dependencies and scripts
└── README.md         # Project documentation
```
## Requirements
- Node.js (v14.x or later)
- Wireshark (for network packet analysis)
  
## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/nodejs-http-https-analysis.git
   cd nodejs-http-https-analysis
2. **Install dependencies: (Ensure you have Node.js installed)**
   ```bash
   npm install
3. **Run the HTTP server:**
   ```bash
   node http_server.js
  - The server will start on http://localhost:3000
4. Generate a self-signed certificate for HTTPS:
   ```bash
   openssl req -nodes -new -x509 -keyout server.key -out server.cert
   ```
5. **Run the HTTPS server:**
   ```
   node https_server.js
  - The server will start on https://localhost:3001
6. **Wireshark Analysis:**
    - Start Wireshark and capture packets on your network interface.
    - Use http or ssl filters to analyze the traffic for HTTP and HTTPS protocols, respectively.

## Wireshark Observations
- HTTP Traffic: Data is transmitted in plain text, exposing sensitive information.
- HTTPS Traffic: Data is encrypted using TLS, ensuring secure communication between the client and server.

## Conclusion
This project highlights the security differences between HTTP and HTTPS, emphasizing the necessity of HTTPS for protecting data in transit. The use of Wireshark to inspect traffic provides a clear visual understanding of how these protocols function at the network level.
