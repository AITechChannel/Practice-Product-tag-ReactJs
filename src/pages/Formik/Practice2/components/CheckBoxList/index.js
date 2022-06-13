import { Checkbox, FormControl, FormControlLabel, FormHelperText, FormLabel, RadioGroup } from '@mui/material';
import classNames from 'classnames/bind';
import styles from './CheckBoxList.module.scss';
const cx = classNames.bind(styles);

function CheckBoxList({ formik }) {
    const tags = ['one', 'two', 'three'];

    const handleChange = (e) => {
        const { checked, name } = e.target;
        if (checked) {
            formik.setFieldValue('tags', [...formik.values.tags, name]);
        } else {
            formik.setFieldValue(
                'tags',
                formik.values.tags.filter((v) => v !== name),
            );
        }
    };
    return (
        <FormControl className={cx('checkbox-list-container')}>
            <FormLabel id="demo-radio-buttons-group-label2">Skills</FormLabel>
            <RadioGroup row className={cx('list-item')}>
                {tags.map((tag) => (
                    <FormControlLabel
                        key={`form-${tag}`}
                        control={
                            <Checkbox
                                size="large"
                                id={tag}
                                type="checkbox"
                                name={tag}
                                checked={formik.values.tags.includes(tag)}
                                onChange={handleChange}
                            />
                        }
                        label={tag}
                    ></FormControlLabel>
                ))}
                {formik.touched.tags && Boolean(formik.errors.tags) && (
                    <FormHelperText error={formik.touched.tags && Boolean(formik.errors.tags)}>
                        You must have at least one skill
                    </FormHelperText>
                )}
            </RadioGroup>
        </FormControl>
    );
}

export default CheckBoxList;
