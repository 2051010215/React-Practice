import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import { fetchAllUser } from '../config/userServices'
const ExmapleBody1 = () => {
  const [listUser, setListUser] = useState([]);

  useEffect(() => {
    getAllUser();
  }, [])

  const getAllUser = async () => {
    let res = await fetchAllUser();
    if (res && res.data && res.data.data) {
      setListUser(res.data.data)
    }
  }
  console.log(listUser);
  return (<>
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {listUser && listUser.length >0 &&
            listUser.map((item, index) => {
              return (
                <tr key={`user-${index}`}>
                  <td>{item.id}</td>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td>{item.email}</td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
    </div>
  </>)

}

export default ExmapleBody1;