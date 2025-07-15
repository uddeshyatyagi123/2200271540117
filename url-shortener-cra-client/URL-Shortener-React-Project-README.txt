
URL Shortener React Project - Documentation
==========================================

Overview:
---------
This is a React-based URL Shortener application built using Create React App and Material UI.
It supports user authentication via a public API before allowing access to URL shortening features.

Project Structure:
------------------
- public/
  - index.html
- src/
  - App.js
  - index.js
  - pages/
    - AuthPage.js
    - UrlShortenerPage.js

Setup Instructions:
-------------------
1. Extract the project zip.
2. Open the project folder in your terminal or VS Code.
3. Run the following commands:

   npm install
   npm start

4. The app will start at: http://localhost:3000

Authentication Page:
---------------------
- Located at `/` (homepage)
- Fields:
  - Email
  - Name
  - Roll Number
  - Access Code
  - Client ID
  - Client Secret
- Submitting valid credentials retrieves a token from:
  http://20.244.56.144/evaluation-service/auth
- On success, the user is redirected to `/shortener`.

URL Shortener Page:
-------------------
- Placeholder at `/shortener` for actual shortening features.
- You can implement URL shortening logic here (Form + Result Display).

Important Notes:
----------------
- CORS policy may block direct calls to the API. Ensure the API server allows your origin.
- If needed, use CRA's proxy by adding the following to package.json:
  "proxy": "http://20.244.56.144"
  And use relative API paths.

Contact:
--------
Developed by: Uddeshya Tyagi
Email: uddeshya22154051@akgec.ac.in
