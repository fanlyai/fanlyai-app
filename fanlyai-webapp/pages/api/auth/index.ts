import { getIronSession } from "iron-session";
import type { NextApiRequest, NextApiResponse } from "next";
import {
  SessionData,
  defaultSession,
  sessionOptions,
} from "../../../libs/auth";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getIronSession<SessionData>(req, res, sessionOptions);
  if (req.method === "POST") {
    const {
     
      username = "",
      password = "",
    } = (await req.body) as {
 
      username: string;
      password: string;
    };
    try {
      const response = await axios.post("http://localhost:3001/auth/login", {

        username,
        password,
      });
      const accessToken = response.data.access_token;
      session.isLoggedIn = true;
      const usernameData = response.data.username;
      
      session.username = usernameData;
      session.token = accessToken;
      await session.save();
      res.status(200).json(session);
    } catch (error) {
      console.error("Login error:", error);
      session.isLoggedIn = false;
      await session.save();
      res.status(200).json(defaultSession);
    }
   
    return;
  }
  if (req.method === "GET") {
    if (session.isLoggedIn !== true) {
      res.status(200).json(defaultSession);
    } else {
      res.status(200).json(session);
    }
    return;
  }
  if (req.method === "DELETE") {
    session.destroy();
    res.status(200).json(defaultSession);
    return;
  }
}
