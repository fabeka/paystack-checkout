import { useState } from 'react';
import './App.css';
import {PaystackButton} from 'react-paystack';

function App() {

const publicKey = "pk_test_6194f5272611a8751ecf0ae8bd2cdc22c33e4146"
const amount = 1000000 // Remember, set in kobo!
const [email, setEmail] = useState("")
const [name, setName] = useState("")
const [phone, setPhone] = useState("")

const componentProps = {

  email,
  amount,
  currency: "GHs",
  metadata: {
    name,
    phone,
},
  publicKey,
  text: "Pay Now",
  onSuccess: () =>
     alert("Thanks for doing business with us! Come back soon!!"),
  onClose: () => alert("Wait! You need this oil, don't go!!!!"),

}
  return (
    <div className="App">
      
<div className="checkout-form">

<div className="checkout-field">

  <label>Name</label>
  <input
     type="text"
     id="name"
     value={name}
    onChange={(e) => setName(e.target.value)}
  />

</div>

<div className="checkout-field">

  <label>Email</label>
    <input
    type="text"
    id="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}

  />

</div>

<div className="checkout-field">

  <label>Phone</label>
    <input
     type="text"
     id="phone"
     value={phone}
    onChange={(e) => setPhone(e.target.value)}

  />

</div>

<PaystackButton className="paystack-button" {...componentProps} />

</div>
    </div>
  );
}

export default App;
