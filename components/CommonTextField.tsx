import TextField from "@material-ui/core/TextField";

const CommonTextField = ({ name, value, onChange }) => (
  <div className="py-4">
    <p>Enter {name}</p>
    <TextField
      placeholder={name}
      fullWidth
      required
      value={value}
      onChange={onChange}
      variant="outlined"
      className="bg-white"
    />
  </div>
);

export { CommonTextField };
