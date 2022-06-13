import { Checkbox, FormControl, FormControlLabel, FormHelperText, FormLabel, RadioGroup } from '@mui/material';
import classNames from 'classnames/bind';
import styles from './CheckBoxList.module.scss';
const cx = classNames.bind(styles);

function CheckBoxList({ formik, list }) {
    const handleChange = (e) => {
        const { checked, name } = e.target;
        if (checked) {
            formik.setFieldValue('skills', [...formik.values.skills, name]);
        } else {
            formik.setFieldValue(
                'skills',
                formik.values.skills.filter((v) => v !== name),
            );
        }
    };
    return (
        <FormControl margin="dense" sx={{ marginBottom: '16px' }} className={cx('checkbox-list-container')}>
            <FormLabel id="demo-radio-buttons-group-label2">Skills</FormLabel>
            <RadioGroup row className={cx('list-item')}>
                {list.map((item) => (
                    <FormControlLabel
                        key={`form-${item}`}
                        control={
                            <Checkbox
                                size="large"
                                id={item}
                                type="checkbox"
                                name={item}
                                checked={formik.values.skills.includes(item)}
                                onChange={handleChange}
                            />
                        }
                        label={item}
                    ></FormControlLabel>
                ))}
                {formik.touched.skills && Boolean(formik.errors.skills) && (
                    <FormHelperText error={formik.touched.skills && Boolean(formik.errors.skills)}>
                        You must have at least one skill
                    </FormHelperText>
                )}
            </RadioGroup>
        </FormControl>
    );
}

export default CheckBoxList;
