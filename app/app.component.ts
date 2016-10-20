import {Component} from '@angular/core';

@Component({
    selector: 'todo-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css']
})
export class AppComponent {
    todos:string[];
    constructor() {
        this.todos = [];
        let lenthArray=localStorage.getItem("SizeArray")
        for (let i = 0; i < lenthArray; i++) {
            this.todos.push(localStorage.getItem(String(i)));
        }     
    }
    addTodo(P1: HTMLInputElement,P2: HTMLInputElement){
        let sP=P1.value+" "+P2.value
        //console.log('Добавление в адресную книгу: '+sP1+" "+sP2);
        this.todos.unshift(sP);
        P1.value=""
        P2.value=""
        try{
            localStorage.setItem(String(++(this.todos.length)),sP)
        }
        catch(e){
                    if (e==QUOTA_EXCEEDED_ERR){
                        alert('Превышен размер адресной книги');
                    }
                    else localStorage.setItem("SizeArray",String(this.todos.length))
        }
    }
    delTodo(todo: any){
        alert("Последний в списке контакт "+todo.value+" будет удалён")
        todo=null
        localStorage.removeItem(String(this.todos.length))
        localStorage.setItem("SizeArray",String(this.todos.length))
    }

}