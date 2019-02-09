import { Component, OnInit } from '@angular/core';
import {TodoVo} from '../domain/todo.vo';
import {HeroService} from '../hero.service';
import {PageVo} from '../domain/PageVo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  // 1.REST api 테스터
  // 2. 테스트 결과 확인후 객체 정의
  // 3. 서비스에서 호출 함수 생성
  // 4. 뷰에서 모델 생성
  // 5. 뷰 바인딩

  todoList: TodoVo[];

  newTodo = new TodoVo(); // 할일 추가하기 위한 모델

  tempMap = new Map<number, TodoVo>();

  pageVo = new PageVo(); // default 파라미터가 설정되어 있어서 생량 가능

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getTodoList();
  }

  getTodoList() {
    /*    this.heroService.getTodoList()
          .subscribe(data => {
            console.log(data);
            this.todoList = data;
          });*/

    const start_index = (this.pageVo.pageIndex - 1) * this.pageVo.pageSize;

    this.heroService.getPagedTodoList(start_index, this.pageVo.pageSize)
      .subscribe(body => {
        this.todoList = body.data;
        this.pageVo.totalCount = body.total;
      });
  }
  pageRefresh() {
    // pageIndex는 이미 양방향바인딩으로 인해서 갱신이 되었다.
    this.getTodoList();
  }

  addTodo() {
    // this.newTodo 가 request의 바디로 날아가는데, 투두의 속성외에 나마지 속성은 어떻게 되는가? -> undefined 되는데, 자동으로 빠짐.
    // 바디에 데이터를 보낼때, stringy를 해야하는가? -> 안해도 된다.
    // content-type 을 명시해야 하는가? -> 자동으로 된다.
    // this.heroService.addTodo(this.newTodo)
    this.heroService.addTodo(this.newTodo)
      .subscribe(data => {
        console.log(data);
        // 입력폼 초기화
        this.newTodo = new TodoVo();
        // 추가된 데이터를 맨위로 올려서 뷰 갱신
        this.todoList.unshift(data);
      });
  }

  save(item: TodoVo) {
    item.isEdited = true;
    // 기존 데이터 저장
    // this.tempMap.set(item.todo_id, item);

    // deep copy
    this.tempMap.set(item.todo_id, {...item});
  }

  restore(todo: TodoVo) {
    todo.isEdited = false;

    const tempTodo = this.tempMap.get(todo.todo_id);
    todo.todo = tempTodo.todo;
  }
  modify(todo: TodoVo) {
    this.heroService.modifyTodo(todo)
      .subscribe(data=>{
        Object.assign(todo, data);
        // 일반템플릿으로 변경
        todo.isEdited = false;
      });
  }
  remove(todo: TodoVo) {
    if (confirm('삭제하시겠습니까?')) {
      this.heroService.removeTodo(todo.todo_id)
        .subscribe(data => {
          if (data.result === 0) {
            // 데이터에서 삭제
            // 1) index 찾기
            const index = this.todoList.findIndex(item => item.todo_id === todo.todo_id);

            // 2) splice 로 삭제하기
            this.todoList.splice(index, 1);

            // 삭제 메시지 보여주기
          }
        });
    }
  }
}
