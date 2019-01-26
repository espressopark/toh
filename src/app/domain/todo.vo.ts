export class TodoVo {
  todo_id: number;
  isFinished: boolean;
  todo: string;
  created: string;
  updated: string;

  isEdited: boolean; // 폼 수정: 정의를 안해주었으니, undefined
}
