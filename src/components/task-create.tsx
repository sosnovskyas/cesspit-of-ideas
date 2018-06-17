import { Paper, TextField, Button } from "@material-ui/core";
import * as React from "react";
import { ChangeEvent } from "react";

interface ITaskCreateState {
  name: string;
}

export default class TaskCreate extends React.Component<
  { onClick(title: string): void },
  ITaskCreateState
> {
  state = {
    name: ""
  };

  private onClick = () => {
    this.props.onClick(this.state.name);
  };

  private _handleChange = (name: keyof ITaskCreateState) => (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    this.setState({
      [name]: event.target.value
    });
  };

  public render(): React.ReactElement<void> {
    return (
      <Paper>
        <TextField
          id="name"
          label="Name"
          value={this.state.name}
          onChange={this._handleChange("name")}
          margin="none"
        />
        <Button onClick={this.onClick}>{"Create"}</Button>
      </Paper>
    );
  }
}
