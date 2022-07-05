import React from "react";
import "./Orders.css";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Collapse from "@mui/material/Collapse";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { useEffect } from "react";

export default function Orders({
  products,
  setProducts,
  subTotal,
  setSubTotal,
  resetProductAmounts,
}) {
  const [openState, setOpenState] = useState(false);

  return (
    <div className="home">
      <Sidebar
        products={products}
        setProducts={setProducts}
        subTotal={subTotal}
        setSubTotal={setSubTotal}
        resetProductAmounts={resetProductAmounts}
        openState={openState}
        setOpenState={setOpenState}
      />
      <Navbar />
      <BasicTable />
    </div>
  );
}

function BasicTable() {
  const [purchaseDetails, setPurchaseDetails] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  function getPurchaseDetails() {
    axios
      .get("http://localhost:3001/store/purchases")
      .then((response) => {
        // handle success
        let purchaseData = response.data.purchases;
        console.log("purchases array: ", purchaseData);
        setPurchaseDetails(purchaseData);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }

  useEffect(() => {
    getPurchaseDetails();
  }, []);

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#2c4047",
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  return (
    <React.Fragment>
      <Box
        component="form"
        sx={{ width: 7 / 10, mx: "auto", mt: 5 }}
        noValidate
        autoComplete="off"
      >
        <TextField
          fullWidth
          id="outlined-basic"
          label="Search for an order by email"
          variant="outlined"
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
      </Box>

      <TableContainer
        sx={{ width: 7 / 10, mx: "auto", mt: 3 }}
        component={Paper}
      >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Order #</StyledTableCell>
              <StyledTableCell align="right">Name</StyledTableCell>
              <StyledTableCell align="right">Email</StyledTableCell>
              <StyledTableCell align="right">Shopping Cart</StyledTableCell>
              <StyledTableCell align="right">Day Ordered</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {purchaseDetails
              .filter((purchase) =>
                purchase.user.email.toLowerCase().includes(searchInput)
              )
              .map((purchase, idx) => {
                return (
                  <Row key={idx} purchase={purchase} total={purchase.total} />
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
}

function Row({ purchase, total }) {
  const [expand, setExpand] = useState(false);

  return (
    <React.Fragment>
      <TableRow
        key={purchase.orderId}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell component="th" scope="row">
          {purchase.orderId}
        </TableCell>
        <TableCell align="right">{purchase.user.name}</TableCell>
        <TableCell align="right">{purchase.user.email}</TableCell>
        <TableCell align="right">
          <Button
            variant="contained"
            size="large"
            onClick={() => setExpand(!expand)}
            sx={{
              color: "white",
              backgroundColor: "#2c4047",
              ":hover": {
                bgcolor: "#2c4047", // theme.palette.primary.main
                color: "white",
              },
            }}
          >
            View
          </Button>
        </TableCell>
        <TableCell align="right">{purchase.createdAt}</TableCell>
      </TableRow>
      {/* Collapsable part */}
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={expand} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Shopping Cart
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Item ID</TableCell>
                    <TableCell>Quantity</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {purchase.shoppingCart.map((cart, idx) => (
                    <TableRow key={idx}>
                      <TableCell component="th" scope="row">
                        {cart.id}
                      </TableCell>
                      <TableCell>{cart.amount}</TableCell>
                    </TableRow>
                  ))}
                  <TableRow>
                    <TableCell>Total</TableCell>
                    <TableCell>{total}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}
