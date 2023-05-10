import TextField from '@mui/material/TextField';

export default function FormComment() {
  return (
    <TextField
      fullWidth
      label='Комментарий'
      rows={4}
      multiline
    />
  );
}
