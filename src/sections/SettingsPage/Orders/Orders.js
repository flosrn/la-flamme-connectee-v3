import React, { useState, useEffect } from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/styles";
import axios from "axios";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Grid,
  FormControlLabel,
  Checkbox,
  Typography,
  Button,
  Divider,
  colors
} from "@material-ui/core";
import getHost from "server/api/get-host";
import GridContainer from "../../../../components/Grid/GridContainer";
import GridItem from "../../../../components/Grid/GridItem";

const useStyles = makeStyles(theme => ({
  root: {},
  gridItem: {
    display: "flex",
    flexDirection: "column"
  },
  card: {},
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10
  },
  orderId: {
    fontWeight: "bold"
  },
  cardLeft: {
    "& img": {
      width: 100
    }
  }
}));

const Orders = props => {
  const { user, className, ...rest } = props;
  const classes = useStyles();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get(`${getHost()}/orders/${user._id}`)
      .then(response => {
        console.log("response : ", response);
        setOrders(response.data.data.orders);
      })
      .catch(error => {
        console.log("error : ", error);
      });
  }, []);

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardHeader title="Mes commandes" />
      <Divider />
      <CardContent>
        <form>
          <GridContainer>
            <GridItem className={classes.gridItem}>
              {orders.length > 0 &&
                orders.map(order => (
                  <Card className={classes.card} key={order._id}>
                    <div className={classes.cardHeader}>
                      <div className={classes.orderId}>#{order.orderId}</div>
                      <div>
                        statut:{" "}
                        <Link href="#">
                          <a> {order.status}</a>
                        </Link>
                      </div>
                    </div>
                    <CardContent>
                      <div className={classes.cardLeft}>
                        <img src={order.products[0].custom.images[0]} alt="img" />
                        {order.products[0].custom.name}
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </GridItem>
          </GridContainer>
        </form>
      </CardContent>
      <Divider />
    </Card>
  );
};

export default Orders;
