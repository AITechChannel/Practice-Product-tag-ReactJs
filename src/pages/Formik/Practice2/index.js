import {
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormHelperText,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
} from '@mui/material';
import classNames from 'classnames/bind';
import { useFormik } from 'formik';
import { useState } from 'react';
import { MdContactPhone, MdEmail, MdPermIdentity, MdVisibility, MdVisibilityOff } from 'react-icons/md';
import CheckBoxList from './components/CheckBoxList';
import Countries from './components/Countries';
import RadioList from './components/RadioList';
import initialValues from './initialValues';
import styles from './Practice2.module.scss';
import validationSchema from './validationSchema';
const cx = classNames.bind(styles);

function Practice2() {
    const [showPassword, setShowPassword] = useState(false);
    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
            console.log(values);
        },
    });
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
        console.log(event);
    };
    return (
        <div className={cx('form-container')}>
            <form onSubmit={formik.handleSubmit}>
                <div className={cx('input-container-top')}>
                    <FormControl margin="normal" className={cx('input-item', 'firstName')}>
                        <InputLabel
                            htmlFor="outlined-adornment-first-name"
                            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                        >
                            First Name
                        </InputLabel>
                        <OutlinedInput
                            variant="outlined"
                            fullWidth
                            name="firstName"
                            label="First Name"
                            value={formik.values.firstName}
                            onChange={formik.handleChange}
                            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                            endAdornment={
                                <InputAdornment position="end" sx={{ marginRight: '12px' }}>
                                    <IconButton edge="end">
                                        <MdPermIdentity />
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                        <FormHelperText error={formik.touched.firstName && Boolean(formik.errors.firstName)}>
                            {formik.touched.firstName && formik.errors.firstName}
                        </FormHelperText>
                    </FormControl>

                    <FormControl margin="normal" className={cx('input-item', 'lastName')}>
                        <InputLabel
                            htmlFor="outlined-adornment-last-name"
                            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                        >
                            Last Name
                        </InputLabel>
                        <OutlinedInput
                            variant="outlined"
                            fullWidth
                            name="lastName"
                            label="Last Name"
                            value={formik.values.lastName}
                            onChange={formik.handleChange}
                            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                            endAdornment={
                                <InputAdornment position="end" sx={{ marginRight: '12px' }}>
                                    <IconButton edge="end">
                                        <MdPermIdentity />
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                        <FormHelperText error={formik.touched.lastName && Boolean(formik.errors.lastName)}>
                            {formik.touched.lastName && formik.errors.lastName}
                        </FormHelperText>
                    </FormControl>

                    <FormControl margin="normal" className={cx('input-item', 'email')}>
                        <InputLabel
                            htmlFor="outlined-adornment-email"
                            error={formik.touched.email && Boolean(formik.errors.email)}
                        >
                            Email
                        </InputLabel>
                        <OutlinedInput
                            variant="outlined"
                            fullWidth
                            name="email"
                            label="Email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            endAdornment={
                                <InputAdornment position="end" sx={{ marginRight: '12px' }}>
                                    <IconButton edge="end">
                                        <MdEmail />
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                        <FormHelperText error={formik.touched.email && Boolean(formik.errors.email)}>
                            {formik.touched.email && formik.errors.email}
                        </FormHelperText>
                    </FormControl>

                    <FormControl margin="normal" className={cx('input-item', 'phone-number')}>
                        <InputLabel
                            htmlFor="outlined-adornment-password"
                            error={formik.touched.phone && Boolean(formik.errors.phone)}
                        >
                            Phone number
                        </InputLabel>
                        <OutlinedInput
                            variant="outlined"
                            fullWidth
                            name="phone"
                            label="Phone number"
                            value={formik.values.phone}
                            onChange={formik.handleChange}
                            error={formik.touched.phone && Boolean(formik.errors.phone)}
                            endAdornment={
                                <InputAdornment position="end" sx={{ marginRight: '12px' }}>
                                    <IconButton edge="end">
                                        <MdContactPhone />
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                        <FormHelperText error={formik.touched.phone && Boolean(formik.errors.phone)}>
                            {formik.touched.phone && formik.errors.phone}
                        </FormHelperText>
                    </FormControl>

                    <FormControl margin="normal" className={cx('input-item', 'password')}>
                        <InputLabel
                            htmlFor="outlined-adornment-password"
                            error={formik.touched.password && Boolean(formik.errors.password)}
                        >
                            Password
                        </InputLabel>
                        <OutlinedInput
                            variant="outlined"
                            fullWidth
                            name="password"
                            label="Password"
                            type={!showPassword ? 'password' : 'text'}
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            endAdornment={
                                <InputAdornment position="end" sx={{ marginRight: '12px' }}>
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                        <FormHelperText error={formik.touched.password && Boolean(formik.errors.password)}>
                            {formik.touched.password && formik.errors.password}
                        </FormHelperText>
                    </FormControl>

                    <FormControl margin="normal" className={cx('input-item', 'confirm-password')}>
                        <InputLabel
                            htmlFor="outlined-adornment-confirm-password"
                            error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                        >
                            Confirm Password
                        </InputLabel>
                        <OutlinedInput
                            variant="outlined"
                            fullWidth
                            name="confirmPassword"
                            label="confirm Password"
                            type={!showPassword ? 'password' : 'text'}
                            value={formik.values.confirmPassword}
                            onChange={formik.handleChange}
                            error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                            endAdornment={
                                <InputAdornment position="end" sx={{ marginRight: '12px' }}>
                                    <IconButton
                                        aria-label="toggle confirmPassword visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                        <FormHelperText
                            error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                        >
                            {formik.touched.confirmPassword && formik.errors.confirmPassword}
                        </FormHelperText>
                    </FormControl>
                </div>
                <div className={cx('input-container-bottom')}>
                    <RadioList formik={formik} />
                    <Countries formik={formik} />

                    <CheckBoxList formik={formik} list={['ReactJS', 'NodeJS', 'PHP', 'Python']} nameList={'skills'} />

                    <FormControl>
                        <FormGroup>
                            <FormControlLabel
                                onChange={formik.handleChange}
                                control={<Checkbox name="reciveEmail" size="large" value={formik.values.reciveEmail} />}
                                label="Yes, I want to recicve notifycation to your email"
                            ></FormControlLabel>
                        </FormGroup>
                    </FormControl>

                    <FormControl>
                        <FormGroup>
                            <FormControlLabel
                                onChange={formik.handleChange}
                                control={<Checkbox name="term" size="large" value={formik.values.term} />}
                                label={
                                    <span>
                                        I agree to all <span style={{ color: 'blue' }}>Term, Privacy Policy </span> and
                                        <span style={{ color: 'blue' }}> Fees</span>
                                    </span>
                                }
                            ></FormControlLabel>
                        </FormGroup>
                        {formik.touched.term && Boolean(formik.errors.term) && (
                            <FormHelperText error={formik.touched.term && Boolean(formik.errors.term)}>
                                {formik.errors.term}
                            </FormHelperText>
                        )}
                    </FormControl>

                    <Button
                        sx={{ marginTop: '10px' }}
                        type="submit"
                        variant="contained"
                        color="primary"
                        className={cx('btn-primary', 'submit')}
                        size="large"
                    >
                        Submit
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default Practice2;
