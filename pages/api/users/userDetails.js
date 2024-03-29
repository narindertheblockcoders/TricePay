import axios from "axios";
// import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const {token} = req.body;
      console.log(token,"to get the token from api to show user Details")
      const id = req.body;
      console.log(id, "to send the id of the user to get the details");

      var config = {
        method: "post",
        url: "http://13.126.156.148:4000/api/v1/admin/getdetails",
        headers: {
          Authorization: `Bearer ${token} `,
        },data:id
      };
      await axios(config).then(function (response) {
        res.status(200).json({ data: response.data.data });
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({ Error: err });
    }
  }
}
