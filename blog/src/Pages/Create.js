import React from 'react'
import { TextField , Grid, Box, FormControl, MenuItem, Button} from '@mui/material'
import Paper from '@mui/material/Paper';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import useState from 'react'
  
export const Create = () => {

    const [title,setTitle] = React.useState("")
    const [desc,setdesc] =  React.useState('')
    const [author,setauthor] =  React.useState('')

    const authors = [
        {
          value: 'JK ROWLING',
          label: '$',
        },
        {
          value: 'EUR',
          label: '€',
        },
        {
          value: 'BTC',
          label: '฿',
        },
        {
          value: 'JPY',
          label: '¥',
        },
      ];
      const [currency, setCurrency] = React.useState('EUR');

      const handleChangecurrent = (event) => {
        setCurrency(event.target.value);
      };
    const [value, setValue] = React.useState('Controlled');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChangeagain = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handlesubmit =(e)=>{
    e.preventDefault();

    console.log('i am in submit')

  }
    return (
        <form onSubmit={handlesubmit}>
        <div>
                <Box sx={{ flexGrow: 1 }}>

        <Grid container spacing={2}>
  <Grid item xs={12}>
    <TextField
          required
          id="title"
          label="Required"
          defaultValue=""
          onChange={(e)=>setTitle(e.target.value)}
        />
    
  </Grid>
  <Grid item xs={12}>
  <TextField
          id="desc"
          label="Description"
          multiline
          maxRows={6}
          minRows={4}
          onChange={(e)=>setdesc(e.target.value)}
        />
  </Grid>
  <Grid item xs ={12 }>
  <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChangeagain('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
      </Grid>
      <Grid item xs={12}>
      <TextField
          id="outlined-select-currency"
          select
          label="Select"
          value={currency}
          onChange={(e)=>setauthor(e.target.value)}
          helperText="Please select your currency"
        >
          {authors.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
          </Grid >
          <Grid item xs={12}>
          <Button type="submit" > Submit </Button>
          </Grid>
</Grid>
{title}
{desc}
          </Box>
        </div>
    </form>
    )
}
