/* eslint-disable no-use-before-define */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import CommonService from "../common/CommonService";

export const useStyle = makeStyles({
  TableHead: {
    color: "white",
    backgroundColor: "#9c27b09e",
  },
  container: {
    width: "80%",
    marginLeft: "12rem",
    alignItems: "center",
  },
});
const List = () => {
  const classes = useStyle();
  const [user, setUser] = useState([]);

  const handleDelete = async (_id) => {
    CommonService.httpDelete(
      `http://103.206.139.86:5000/api/v1/users/${_id}`,
      true
    ).then((response) => {
      console.log("Successfully deleted user..!!", response);

      const newdata = user.filter((item) => {
        return item._id !== _id;
      });
      console.log("Deleted!!");
      setUser(newdata);
    });
  };

  useEffect(() => {
    getAllUserdata();
  }, []);

  const getAllUserdata = () => {
    CommonService.httpGet(`http://103.206.139.86:5000/api/v1/users`, true).then(
      (response) => {
        console.log(response.data.data.users);
        console.log(response.data.results);
        setUser(response.data.data.users);

        console.log("in api...");
      }
    );
  };

  return (
    <>
      <Box className={classes.container}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow style={{ backgroundColor: "#616161" }}>
                <TableCell align="center" className={classes.TableHead}>
                  Id
                </TableCell>
                <TableCell align="center" className={classes.TableHead}>
                  Name
                </TableCell>
                <TableCell align="center" className={classes.TableHead}>
                  Email
                </TableCell>
                <TableCell align="center" className={classes.TableHead}>
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {user.map((e) => {
                const { _id, name, email } = e;
                return (
                  <TableRow key={_id}>
                    <TableCell align="center">{_id}</TableCell>
                    <TableCell align="center">{name}</TableCell>
                    <TableCell align="center">{email}</TableCell>
                    <TableCell align="center">
                      <Tooltip title="Delete">
                        <IconButton onClick={() => handleDelete(_id)}>
                          <DeleteIcon color="primary" />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default List;
