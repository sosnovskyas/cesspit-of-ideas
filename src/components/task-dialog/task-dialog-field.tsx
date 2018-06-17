import { ChangeEvent } from "react";
import * as React from "react";
import { Grid, TextField, Typography } from "@material-ui/core";

interface ITaskDialogFieldProps {
  readonly id: string;
  readonly value: string;
  readonly label: string;
  readonly description: string;
  onChange(event: ChangeEvent<HTMLInputElement>): void;
}

export default function TaskDialogField(
  props: ITaskDialogFieldProps
): React.ReactElement<ITaskDialogFieldProps> {
  const { id, value, label, description, onChange } = props;
  return (
    <Grid container spacing={16}>
      <Grid item sm={12} md={6} style={{
        maxWidth: "100%",
        flexBasis: "100%"
      }}>
        <TextField
          fullWidth
          multiline
          id={id}
          value={value}
          label={label}

          onChange={onChange}
        />
      </Grid>
      <Grid item sm={12} md={6}>
        <Typography>{description}</Typography>
      </Grid>
    </Grid>
  );
}
