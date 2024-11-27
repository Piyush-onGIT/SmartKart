import { useEffect } from "react";
import url from '../urls.json';

const server = url.node_server

export async function checkLogin() {
  const token = localStorage.getItem('token')
  const response = await fetch(`${server}/checkLogin?token=${token}`, {
    method: "GET",
    credentials: "include"
  })
  const res = await response.json();
  if (res.ok) {
    return res.message
  }
  else {
    return null
  }
}