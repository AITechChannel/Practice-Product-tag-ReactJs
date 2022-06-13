import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@mui/material';
import countries from '../../data/countries';
function Countries({ formik }) {
    return (
        <FormControl margin="normal" size="small" fullWidth>
            <InputLabel id="country-select-label" error={formik.touched.country && Boolean(formik.errors.country)}>
                Your Country
            </InputLabel>
            <Select
                name="country"
                labelId="country"
                id="country"
                value={formik.values.country}
                label="Your Country"
                onChange={formik.handleChange}
                error={formik.touched.country && Boolean(formik.errors.country)}
            >
                {countries.map((e, i) => (
                    <MenuItem key={`country-${i}`} value={e.label}>
                        {e.code}, {e.label}, +{e.phone}
                    </MenuItem>
                ))}
            </Select>
            {formik.touched.country && Boolean(formik.errors.country) && (
                <FormHelperText error={formik.touched.country && Boolean(formik.errors.country)}>
                    Country is required
                </FormHelperText>
            )}
        </FormControl>
    );
}

export default Countries;
