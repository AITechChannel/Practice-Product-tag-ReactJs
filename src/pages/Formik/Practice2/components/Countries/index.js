import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import countries from '../../data/countries';
function Countries({ formik }) {
    return (
        <FormControl margin="normal" size="small" fullWidth>
            <InputLabel id="demo-simple-select-label">Your Country</InputLabel>
            <Select
                name="country"
                labelId="country"
                id="country"
                value={formik.values.country}
                label="Your Country"
                onChange={formik.handleChange}
            >
                {countries.map((e, i) => (
                    <MenuItem key={`country-${i}`} value={e.label}>
                        {e.code}, {e.label}, +{e.phone}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}

export default Countries;
