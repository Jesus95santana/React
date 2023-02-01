const [email, newEmail] = useState();

// handleChange1
const handleChange = function(event) {
  const newEmail = event.target.value;
  setEmail(newEmail)
}

// handleChange2
const handleChange = function(event) {
  setEmail(event.target.value);
}

// handleChange3 using object destructing for functions
const handleChange = function({target}) {
  setEmail(target.value);
}
