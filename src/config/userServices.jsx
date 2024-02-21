import axios from 'axios';
import React from 'react'

const fetchAllUser = () => {
  return (
    axios.get("https://reqres.in/api/users?page=2")
  )
}

export { fetchAllUser };
