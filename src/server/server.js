import express from "express";
import ReactDOM from "react-dom/server";
import { indexTemplate } from "./indexTemplate";
import { App } from "../APP.jsx";
import axios from "axios";
const app = express();

app.use("/static", express.static("./dist/client"));
app.get("/", (req, res) => {
  res.send(indexTemplate(ReactDOM.renderToString(App())));
});


app.get("/auth", (req, res) => {
  axios.post(
    'https://www.reddit.com/api/v1/access_token',
    `grant_type=autorization_code&code=${req.query.code}&redirect_uri=https//localhost:3000/auth`,
    { 
    auth:{ username: process.env.CLIENT_ID, password: 'AK0VgUvfSYgsvP2XcdoH8pBf_fpQxQ'},
    headers : { 'Conent-type' : 'application/x-www-form-urlencoded'}
    } 
  )

  //req.query.code;
.then(({data}) => {res.send 
  (indexTemplate(ReactDOM.renderToString(App()), data['access_token'] ));
      });
    });

  

app.listen(3000, () => {
  console.log("server started on port http://localhost:3000");
});
