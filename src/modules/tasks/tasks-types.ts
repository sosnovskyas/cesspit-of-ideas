export type TTaskUuid = string;

export interface ITask {
  readonly uuid?: TTaskUuid;
  readonly title: string;
  readonly finished: boolean;

  // SMART
  readonly specific: string;
  readonly measurable: string;
  readonly achievable: string;
  readonly relevant: string;
  readonly timeBound: string;
}
