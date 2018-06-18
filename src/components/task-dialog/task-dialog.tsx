import * as React from "react";
import { ChangeEvent } from "react";
import {
  Dialog,
  AppBar,
  IconButton,
  Slide,
  Toolbar,
  Typography,
  Grid
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { ITask } from "../../modules/tasks/tasks-types";
import TaskDialogField from "./task-dialog-field";

interface ITaskItemDialogProps {
  readonly isOpen: boolean;
  readonly task?: ITask;
  onClose(): void;
}

interface ITaskItemDialogState extends Partial<ITask> {}

function Transition(props: any) {
  return <Slide direction="up" {...props} />;
}

export default class TaskDialog extends React.Component<
  ITaskItemDialogProps,
  ITaskItemDialogState
> {
  private readonly fields = {
    specific: {
      id: "specific",
      label: "S (specific) - Конкретность",
      description:
        "Цель по SMART должна быть конкретной, что увеличивает вероятность ее достижения. Понятие «Конкретный» означает, что при постановке цели точно определен результат, который Вы хотите достичь. Сформулировать конкретную цель поможет ответ на следующие вопросы:\n" +
        "\n" +
        "Какого результата я хочу достичь за счет выполнения цели и почему?\n" +
        "Кто вовлечен в выполнение цели?\n" +
        "Существуют ли ограничения или дополнительные условия, которые необходимы для достижения цели?\n" +
        "Всегда действует правило: одна цель — один результат. Если при постановке цели выяснилось, что в результате требуется достичь нескольких результатов, то цель должна быть разделена на несколько целей."
    },
    measurable: {
      id: "measurable",
      label: "M (measurable) - Измеримость",
      description:
        "Цель по SMART должна быть измеримой. На этапе постановки цели необходимо установить конкретные критерии для измерения процесса выполнения цели. В постановке измеримой цели помогут ответы на вопросы:\n" +
        "\n" +
        "Когда будет считаться, что цель достигнута?\n" +
        "Какой показатель будет говорить о том, что цель достигнута?\n" +
        "Какое значение у данного показателя должно быть для того, чтобы цель считалась достигнутой?"
    },
    achievable: {
      id: "achievable",
      label: "A (achievable) - Достижимость",
      description:
        "Цели по SMART должны быть достижимы, так как реалистичность выполнения задачи влияет на мотивацию исполнителя. Если цель не является достижимой — вероятность ее выполнения будет стремиться к 0. Достижимость цели определяется на основе собственного опыта с учетом всех имеющихся ресурсов и ограничений.\n" +
        "Ограничениями могут быть: временные ресурсы, инвестиции, трудовые ресурсы, знания и опыт исполнителя, доступ к информации и ресурсам, возможность принимать решения и наличие управленческих рычагов у исполнителя цели."
    },
    relevant: {
      id: "relevant",
      label: "R (relevant) - Релевантность/Значитмость",
      description:
        "Для определения значимости цели важно понимать, какой вклад решение конкретной задачи внесет в достижение глобальных стратегических задач компании. В постановке значимой цели поможет следующий вопрос: Какие выгоды принесет компании решение поставленной задачи? Если при выполнении цели в целом компания не получит выгоды — такая цель считается бесполезной и означает пустую трату ресурсов компании."
    },
    timeBound: {
      id: "timeBound",
      label: "T (Time bound) - Ограниченный во времени",
      description:
        "Цель по SMART должна быть ограничена по выполнению во времени, а значит должен быть определен финальный срок, превышение которого говорит о невыполнении цели. Установление временных рамок и границ для выполнения цели позволяет сделать процесс управления контролируемым. При этом временные рамки должны быть определены с учетом возможности достижения цели в установленные сроки."
    }
  };
  constructor(props: ITaskItemDialogProps) {
    super(props);
    this.state = {
      ...this.props.task
    };
  }

  public componentWillReceiveProps(nextProps: ITaskItemDialogProps) {
    this.setState({
      ...nextProps.task
    });
  }
  public render() {
    const { isOpen, task } = this.props;
    if (isOpen !== true) {
      return null;
    }

    const {
      specific,
      measurable,
      achievable,
      relevant,
      timeBound
    } = this.state;

    return (
      <Dialog
        fullScreen
        open={isOpen}
        onClose={this.props.onClose}
        TransitionComponent={Transition}
      >
        <AppBar position="sticky">
          <Toolbar>
            <IconButton
              color="inherit"
              onClick={this.props.onClose}
              aria-label="Close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="display1" color="inherit">
              {task.title}
            </Typography>
          </Toolbar>
        </AppBar>
        <Grid container direction="column" wrap="nowrap" spacing={24}>
          <Grid item>
            <TaskDialogField
              {...this.fields.specific}
              value={specific}
              onChange={this.onChange("specific")}
            />
          </Grid>
          <Grid item>
            <TaskDialogField
              {...this.fields.measurable}
              value={measurable}
              onChange={this.onChange("measurable")}
            />
          </Grid>
          <Grid item>
            <TaskDialogField
              {...this.fields.achievable}
              value={achievable}
              onChange={this.onChange("achievable")}
            />
          </Grid>
          <Grid item>
            <TaskDialogField
              {...this.fields.relevant}
              value={relevant}
              onChange={this.onChange("relevant")}
            />
          </Grid>
          <Grid item>
            <TaskDialogField
              {...this.fields.timeBound}
              value={timeBound}
              onChange={this.onChange("timeBound")}
            />
          </Grid>
        </Grid>
      </Dialog>
    );
  }

  private onChange = (name: keyof ITaskItemDialogState) => (
    value: ChangeEvent<HTMLInputElement>
  ) => {
    this.setState({ [name]: value.target.value });
  };
}
