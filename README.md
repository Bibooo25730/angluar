### dAngular

- Angular有很多版本 最初是Angular.js 就是Angular一，它跟之后的版本差别非常大。所以有人问你会angular吗？你要问angular.js 还是 Angular。
- Angular是一个开发平台 。它能帮你更轻松构建Web应用。可以为开发者提升构建Web，手机，或桌面应用的能力。

### 面试高频题

1. AngularJs 和 Angular2.x，Angular4.x，Angular5.x的区别？

   AngularJs 可以看成是Angular1.x版本，与Angular2.x以后的版本相比差别非常大，从2.x版本开始支持TypeScript/JavaScript/Dart ，而不再是JavaScript。但是之后的版本都是向前兼容，差别不会太大。也就是说：理想情况下，4的程序是可以直接迁移到5的，只是会收到一些API废弃示，到6中才会彻底移除。同时，官方会在文档中给出详细的升级指南，帮助开发者升级。

2. 为什么没有Angular3.x?

   简单来说是因为路由模块比其他模块多发布过一次，当你使用core模块的2.o时，和它配套的router模块却是3.o的这很容易让开发人员困惑，所以没有跳过了3，让模块编号重新对齐。

### Angular的特性

- [ ] 跨平台 速度与性能 生成率 完整开发故事 <a href="https://angular.cn/features">特性</a>

### 环境搭建

- **TypeScript** 

  - TS是JS类型的超集，它可以编译纯JS（开源的）
- TS的特性：类型，类，注解，模块导入，语言工具包（比如，解构）
  - 类型：有助于代码编写，因为它可以在编译期预防BUG
  - 有助与代码的阅读，因为它能清晰地表明你的意图
  - Angular本身就是TypeScript写的，所以开发ng项目一般都采用Typescript语法编写，当然也可以使用ES5 API，但是不建议。（我JS红宝书和你不知道的JS还没看完，现在就开始TS了的🤣）

### 全局安装

```clike
npm install -g @angular/cli
```

 ### 创建新项目

```
ng new my-app
```

1. cd到目录

2. ng serve --open

3. 它的端口是 4200

4. ```
   ng generate component xyz -生成组件  简写 ng gc xyz
   ```

### 我们是这样写 Angular 应用的

- 用 angular 扩展语法编写HTML模板；
- 用 组件类管理这些模板；
- 用服务添加应用逻辑，用模块打包发布组件与服务；
- 然后，我们通过引导根模块来启动该应用；

angular 架构中核心概率有：模块，组件，模块，元数据，数据绑定，指令，服务，依赖注入；

### 模块

angular 应用是模块化的，并且 angular 有自己的模块系统，每个 angular 应用至少有一个模块（根模块） 习惯上命名 AppModule；

angular 模块（无论是根模块还是特性模块）都是一个带有@NgModule 装饰器的类；

#### NGModule

装饰器函数，它接收描述模块属性的元数据对象。

- [ ] declarations - 声明本模块中拥有的视图类；
- [ ] exports - declarations的子集，可用于其他模板的组件模块。
- [ ] imports - 本模块声明的组件模板需要用到的类所在的其他模块。
- [ ] providers - 服务的创建者，并加入到全局服务列表中，可应用与任何部分
- [ ] bootstrap - 指定应用的主视图（称为根组件）；只有根模块才能设置bootstrap属性；

### 模板

模式以HTML形式存在 通过自带的模板定义组件视图

### 元数据

通过装饰器来描述一些信息

### 数据绑定

值绑定，属性绑定，事件绑定，双向绑定；

### Vs-code(Angular)的插件

Angular 10 Snippets - TypeScript, Html, Angular Material, ngRx, RxJS & Flex Layout

1. <u>ng-component</u> 快捷生成代码块
2. 逐步更新中 ----

### 指令

- [ ] *ngIf：不是通过css隐藏DOM，会把元素通过从DOM中物理删除；

- [ ] *ngFor: 循环遍历一个数组或者对象； 

  ```
  <li *ngFor="let item of array; let i=index; let odd=odd; trackBy: trackById" >{{item.name}}--{{i}}--{{odd}}</li>
  ```

   trackBy可以跟ID or index 解决数据更新DOM重新渲染增加了trackBy**自定义返回跟踪结果，以比对上次的跟踪结果，如果不一样，那么就刷新变化的页面实例（减少不必要的dom刷新而带来性能的提升）。** 可以拿子组件方法和数据;

- [ ] [ngSwitch] 条件判断；

**样式**

```
<p [style.color] = "'red'">HH</p>
```

```
<h1 [style.fontSize.px] = "'20'">LALA</h1>
```

```
<span [ngStyle]="{'color':'green' }">lv</span> 也可以传个对象
```

```
<p [class.orange] ="true">有</p> 比如点赞动画案例
```

[ngClass] 判断一个对象 ="{'box':true,'bg':true}"

**ngNonBindable** 转义转符



## 数据绑定

### 属性绑定

[]  img [src] = "imgUrl"

### 事件绑定

() button (click)="onSave($event)"

### 双向绑定

[()]  ngModel 需要在根目录引入 **FormsModule**

```
import { FormsModule} from "@angular/forms"; app.module.ts imports 再引入   原理：属性绑定加事件一个绑定
```

## 自定义指令

angular 核心 {Component,EventEmitter，Output} from '@angular/core'；

子组件就可以触发父组件的数据 当然传递数据也可以

```
<app-my-text1 (myclick)="handleConut()" ></app-my-text1>  
```

```
 @Output() myclick = new EventEmitter();
```

```
handleConut() {
    this.myclick.emit()
  }
```

###  父传子

在子组件 angular 核心 添加Input @Input 

### 子传父

emit(值) 事件接收，要使用$event @Output （别名）

### 模板引用变量（#var）

相对与ID 通常用来引用模板中的某个 DOM 元素

#是缩写，全写是ref-var

### 安全导航符 ？.

由于 angulrar 需要预编译 用来保护值或者状态处与初始化 null undefined ，{{people?.name}} 保护视图渲染器，让它免于失败。

### 自定义指令

ng-dr 创建code

```
import { Directive,ElementRef,HostListener } from '@angular/core';HostListener 监听事件
```

### 表单

以前我们需要操作DOM来获取输入的数据然后正则或者其他验证输入最后提交。 angular 给我们提供了这些问题的解决方案

- 表单控件（FormControl） 封装了表单的输入，并提供了一些可供操纵的对象。
- 验证器（validator）让我们能以自己喜欢的任何方式验证表单输入。
- 观察者 (observer) 让我们能够监听表单的变化，并作出相应的回应。

### 双向绑定 （className）

![20220319233012319](C:\Users\Niko'C'\Desktop\20220319233012319.jpg)



### 模板驱动表单校验（异步）

设置双向绑定,设置#var = 双向绑定的数据

```
<input type="text" #phone="ngModel" required [(ngModel)]="name" minlength="4">

<p>valid {{phone.valid}}</p>
<p>dirty {{phone.dirty}}</p>
<p>touched {{phone.touched}}</p>
<p>errors {{phone.errors | json }}</p>
```

我发现 使用 change angular反应太慢了

### 表单验证

```
<form (ngSubmit)="onSubmit($event)">
    <input  type="text" 
    name="name"
     maxlength="4"
     #inpus="ngModel"
     [(ngModel)] = "name"
     required
    >
    <button type="submit" [disabled]="!inpus.valid">Submit</button>
</form>      要使用ngSubmit 要设置name属性
```



### 响应式表单(同步)

他是将绑定的数据放在内存中作处理。angular 有内置的验证，也可以自己写

需要将 **ReactiveFormsModule** 添加到根模块中

```
import { FormsModule,ReactiveFormsModule} from "@angular/forms";
```

```
import { FormGroup, FormControl，Validators } from "@angular/forms"  Validators 验证规则
```

**当我使用响应式表单的时候发生的错误**

`core.mjs:6485 ERROR Error: Cannot find control with name: 'name'`

解决不了先放在这里了；功能正常



### ViewChild

可以拿到子组件的里面的数据

#### 样式

```
@import url(路径) 导入样式
```

组件的样式不受外部影响;

**封装样式**

```
import { Component,ViewEncapsulation} from '@angular/core';
```

```
@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss'],
  encapsulation:ViewEncapsulation.None
})
```

当前组件样式影响全局样式

````
@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss'],
  encapsulation:ViewEncapsulation.Emulated
})
````

不影响全局样式

### :host 选择器

设置宿主（可以理解成组件的外壳）

```
:host(.active){
     border: 1px solid red;
}
```

宿主父是否有class italic 则改变样式

```
:host-context(.italic) p{
    font-style: italic;
}
```

### angular 生命周期

<img src='https://static001.infoq.cn/resource/image/da/b3/daf5c2b1a9dde1ab19c5ee07caccd3b3.jpg'>

### ng-content

规定投影的位置，类似Vue的slot 但是是在组件标签里面放个组件。

### 管道

数据流向 (有点类型与Vue的过滤 |  可以传变量或者函数)

```
  birthday = new Date(2002, 10, 8);  <span>我的生日是 {{birthday | date:'YYYY--MM-dd'}}</span>
```

### 自定义管道

```
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'myword' })
export class MywordPie implements PipeTransform{
    transform(value: any, ...args: any[]) {
        args = ['时间'];
        return value + '' + args[0] 
    }
}
```

需要在根模块引用

### 服务

我们规定的数据类型

```
export class User{
    name: String | undefined;
    age: number | undefined;
}
```

```
import { Injectable } from "@angular/core"; 
import { User } from "../server/user";

@Injectable()
export class UserListService{
    users: User[] = [
        { name: 'alin', age: 19 },
        { name: 'Bibo', age: 20 },
        { name: 'elie', age: 21 }
    ];
    // 返回 
    getUser():User[] {
        return this.users;
    }
}
```

#### 全局导入

导出 UserListService 到根模块 

providers 里面

使用

```
import { Component, OnInit } from '@angular/core';
import { UserListService } from "../server/user_server"
import {User} from "../server/user"
@Component({
  selector: 'app-my-server',
  templateUrl: './my-server.component.html',
  styleUrls: ['./my-server.component.scss']
})
export class ServerComponent implements OnInit {
  //  通过构造器注入
  constructor(private userServerDate:UserListService) { }
  uses : User[] = []
  ngOnInit(): void {
    this.uses = this.userServerDate.getUser();
  }

}

```

这个是 MVC 吗？有点像后端

### 局部注入

```
@Component({
  selector: 'app-my-server',
  templateUrl: './my-server.component.html',
  styleUrls: ['./my-server.component.scss'],
  providers:[]
})
```

### HTTPClient 库

Vue 和 React 都没有封装 ajax angluar封装了自己的ajax

==引入==

`import { HttpClientModule } from "@angular/common/http";`

```
 imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
```

```
import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpErrorResponse} from "@angular/common/http"
@Component({
  selector: 'app-my-http',
  templateUrl: './my-http.component.html',
  styleUrls: ['./my-http.component.scss']
})
export class MyHttpComponent implements OnInit {

  constructor(private http:HttpClient) { }
  resulets: any;
  ngOnInit(): void {
    this.http.get('http://112.213.125.75:3001/api/home/bananer').subscribe(data => {
      console.log(data)
        this.resulets = data
      })
  }
}
```



