import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { PropsWithChildren } from 'react';

export default function InputWrapper ({
  children, isError, message }: PropsWithChildren<{
    isError: boolean, message: string | undefined }>): JSX.Element {
  return (
    <Box
      pb={3}
      sx={{
        position: 'relative'
      }}
    >
      {children}
      {isError && message &&
        <Typography
          variant='caption'
          sx={{
            position: 'absolute',
            color: '#ff0000',
            bottom: '3px',
            left: '0'
          }}
        >
        { message }
        </Typography>
      }
    </Box>
  );

}
