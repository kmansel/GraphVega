import React from "react";
import {
  Row,
  Col
} from "react-bootstrap";
import {
  TextField,
  IconButton,
  Card,
  CardContent,
} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

// React function to display stock quote. 
const Quote = props => {

  const setColor = () => {
		return props.quote.change >= 0 ? 'text-success' : 'text-danger';
  };

  const setSign = () => {
    return props.quote.change >= 0 ? '+':'';
  }

  return(
    <Card>
      <CardContent>
        <Row>
          <Col sm={{span:8}}>
          <h4 style={{ display: 'inline' }}>
            <b>{props.quote.description}</b>
          </h4>
          &nbsp;
          <h5 style={{ display: 'inline' }}>({props.quote.symbol})</h5>
          &emsp;
          <h4 style={{ display: 'inline' }}>{props.quote.last}</h4>
          &nbsp;&nbsp;
          <h5 className={setColor()} style={{ display: 'inline' }}>
            {setSign()}{props.quote.change}
          </h5>
          &nbsp;&nbsp;
          <h5 className={setColor()} style={{ display: 'inline' }}>
            ({setSign()}{props.quote.change_percentage}%)
          </h5>
          </Col>
          <Col sm={{span:4}}>
            <IconButton color="secondary" >
              <RemoveIcon onClick={props.removeStock}/>
            </IconButton>
            <TextField
              size="small"
              value={props.quantity}
              defaultValue={0}
              onChange={props.onStockQuantityChange}
              label="# of shares" 
              variant="outlined" 
            />
            <IconButton color="primary">
              <AddIcon onClick={props.addStock}/>
            </IconButton>
          </Col>
        </Row>
      </CardContent>
    </Card>
  )
  

}

export default Quote;