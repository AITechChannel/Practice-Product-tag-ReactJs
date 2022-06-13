import {
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormHelperText,
    FormLabel,
    Radio,
    RadioGroup,
} from '@mui/material';
// import 'antd/dist/antd.css';
import classNames from 'classnames/bind';
import { useFormik } from 'formik';
import * as yup from 'yup';
import styles from './RadioList.module.scss';
const cx = classNames.bind(styles);

function RadioList({ formik }) {
    return (
        <div className={cx('radio-list-container')}>
            <FormControl margin="dense">
                <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="gender"
                    row
                    value={formik.values.gender}
                    onChange={formik.handleChange}
                >
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
                {formik.touched.gender && Boolean(formik.errors.gender) && (
                    <FormHelperText error={formik.touched.gender && Boolean(formik.errors.gender)}>
                        Gender is required
                    </FormHelperText>
                )}
            </FormControl>
        </div>
    );
}

export default RadioList;
