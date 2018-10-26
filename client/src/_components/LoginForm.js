import React from 'react';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import '../static/main.css';
import Button from '@material-ui/core/Button';

const LoginForm = () => {
  return(
      <div>
          <Card className="container">
              <TextField
                  id="outlined-email-input"
                  label="Email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  margin="normal"
                  variant="outlined"
              />
              <TextField
                  id="outlined-password-input"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  margin="normal"
                  variant="outlined"
              />
          </Card>
          <Button variant="contained" color="primary">
              Primary
          </Button>
      </div>


  )
};

export default LoginForm;
