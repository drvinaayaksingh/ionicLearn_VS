# Learn Advanced Ionic with Dr. Vinaayak Singh



### Ionic HTML Tags/Components Cheat Sheet

#### 1. **Basic Structure**
```html
<ion-app></ion-app>
<ion-header></ion-header>
<ion-content></ion-content>
<ion-footer></ion-footer>
```

#### 2. **Headers and Toolbars**
```html
<ion-header>
  <ion-toolbar>
    <ion-title>Title</ion-title>
    <ion-buttons slot="start">
      <ion-back-button></ion-back-button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>
```

#### 3. **Content and Lists**
```html
<ion-content>
  <ion-list>
    <ion-item>
      <ion-label>Item 1</ion-label>
    </ion-item>
    <ion-item>
      <ion-label>Item 2</ion-label>
    </ion-item>
  </ion-list>
</ion-content>
```

#### 4. **Buttons**
```html
<ion-button>Default</ion-button>
<ion-button color="primary">Primary</ion-button>
<ion-button color="secondary">Secondary</ion-button>
<ion-button color="danger">Danger</ion-button>
<ion-button fill="outline">Outline</ion-button>
<ion-button expand="full">Full Width</ion-button>
```

#### 5. **Inputs and Forms**
```html
<ion-item>
  <ion-label position="floating">Floating Label</ion-label>
  <ion-input></ion-input>
</ion-item>

<ion-item>
  <ion-label>Select</ion-label>
  <ion-select>
    <ion-select-option value="1">Option 1</ion-select-option>
    <ion-select-option value="2">Option 2</ion-select-option>
  </ion-select>
</ion-item>

<ion-item>
  <ion-label>Toggle</ion-label>
  <ion-toggle></ion-toggle>
</ion-item>

<ion-item>
  <ion-label>Checkbox</ion-label>
  <ion-checkbox></ion-checkbox>
</ion-item>

<ion-item>
  <ion-label position="floating">Textarea</ion-label>
  <ion-textarea></ion-textarea>
</ion-item>
```

#### 6. **Cards**
```html
<ion-card>
  <ion-card-header>
    <ion-card-title>Card Title</ion-card-title>
    <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
  </ion-card-header>
  <ion-card-content>
    This is card content.
  </ion-card-content>
</ion-card>
```

#### 7. **Grid Layout**
```html
<ion-grid>
  <ion-row>
    <ion-col size="6">Column 1</ion-col>
    <ion-col size="6">Column 2</ion-col>
  </ion-row>
  <ion-row>
    <ion-col size="4">Column 1</ion-col>
    <ion-col size="4">Column 2</ion-col>
    <ion-col size="4">Column 3</ion-col>
  </ion-row>
</ion-grid>
```

#### 8. **Modals**
```html
<ion-modal>
  <ng-template>
    <ion-header>
      <ion-toolbar>
        <ion-title>Modal Title</ion-title>
        <ion-buttons slot="end">
          <ion-button (click)="dismissModal()">Close</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      Modal Content
    </ion-content>
  </ng-template>
</ion-modal>
```

#### 9. **Tabs**
```html
<ion-tabs>
  <ion-tab-bar slot="bottom">
    <ion-tab-button tab="home">
      <ion-icon name="home"></ion-icon>
      <ion-label>Home</ion-label>
    </ion-tab-button>
    <ion-tab-button tab="settings">
      <ion-icon name="settings"></ion-icon>
      <ion-label>Settings</ion-label>
    </ion-tab-button>
  </ion-tab-bar>
</ion-tabs>
```

#### 10. **Slides**
```html
<ion-slides pager="true">
  <ion-slide>
    <h1>Slide 1</h1>
  </ion-slide>
  <ion-slide>
    <h1>Slide 2</h1>
  </ion-slide>
  <ion-slide>
    <h1>Slide 3</h1>
  </ion-slide>
</ion-slides>
```

#### 11. **Alerts**
```html
<ion-alert
  [header]="'Alert Header'"
  [subHeader]="'Alert SubHeader'"
  [message]="'This is an alert message.'"
  [buttons]="['OK']">
</ion-alert>
```

#### 12. **Loading Spinner**
```html
<ion-loading
  [message]="'Please wait...'"
  [duration]="2000">
</ion-loading>
```

#### 13. **Action Sheet**
```html
<ion-action-sheet
  [header]="'Actions'"
  [buttons]="[
    { text: 'Delete', role: 'destructive' },
    { text: 'Cancel', role: 'cancel' }
  ]">
</ion-action-sheet>
```

#### 14. **Popover**
```html
<ion-popover>
  <ng-template>
    <ion-list>
      <ion-item button (click)="action1()">Action 1</ion-item>
      <ion-item button (click)="action2()">Action 2</ion-item>
    </ion-list>
  </ng-template>
</ion-popover>
```

#### 15. **Icons**
```html
<ion-icon name="home"></ion-icon>
<ion-icon name="star"></ion-icon>
<ion-icon name="heart"></ion-icon>
```

#### 16. **Progress Indicators**
```html
<ion-progress-bar value="0.5"></ion-progress-bar>
<ion-spinner name="crescent"></ion-spinner>
```

#### 17. **Toast**
```html
<ion-toast
  [message]="'This is a toast message.'"
  [duration]="2000">
</ion-toast>
```

#### 18. **Badges and Chips**
```html
<ion-badge color="secondary">99+</ion-badge>

<ion-chip>
  <ion-label>Default</ion-label>
</ion-chip>
<ion-chip color="primary">
  <ion-label>Primary</ion-label>
</ion-chip>
```



**Callback Hell**: 

Imagine you're cooking a complicated meal. You start by boiling water. While the water boils, you need to chop vegetables, marinate meat, and prepare the sauce. Each task depends on the previous one being completed. But you can only do one thing at a time, and you must wait for each step to finish before moving on to the next. This can make your cooking process slow and hard to follow.

In programming, **callback hell** is a similar situation. When you have multiple tasks that depend on each other, you might end up writing code that looks like this:

```javascript
boilWater(function() {
  chopVegetables(function() {
    marinateMeat(function() {
      prepareSauce(function() {
        console.log('Dinner is ready!');
      });
    });
  });
});
```

Each task (callback) is nested inside the previous one, making the code difficult to read and maintain. Just like cooking a meal step-by-step without any help, managing these callbacks can become a tangled mess.

### Why is it a Problem?

1. **Difficult to Read**: The nested structure is hard to follow, like trying to read a recipe with steps hidden inside other steps.
2. **Hard to Maintain**: Making changes or fixing bugs in such code is challenging because you have to carefully trace through all the nested callbacks.
3. **Error Handling**: Managing errors becomes complicated since each step needs its own error handling, and it’s easy to miss something.

### How to Avoid Callback Hell

To avoid callback hell, modern programming languages offer solutions like **Promises** and **async/await**. These tools allow you to write code in a more linear and readable fashion, like following a well-organized recipe:

Using **Promises**:
```javascript
boilWater()
  .then(chopVegetables)
  .then(marinateMeat)
  .then(prepareSauce)
  .then(() => console.log('Dinner is ready!'))
  .catch(error => console.error(error));
```

Using **async/await**:
```javascript
async function prepareDinner() {
  try {
    await boilWater();
    await chopVegetables();
    await marinateMeat();
    await prepareSauce();
    console.log('Dinner is ready!');
  } catch (error) {
    console.error(error);
  }
}

prepareDinner();
```

Both methods make the code cleaner and easier to understand, just like having a clear, step-by-step recipe for cooking a meal.

## Meaning of terminology

In an Angular or Ionic project, the `@NgModule` decorator is used to define a module, which is a fundamental building block of the application. The `app.module.ts` file is the root module of your application, and it contains metadata about the module. Here’s a simplified explanation of the main properties in the `@NgModule` decorator:

### Declarations

- **What it is**: This is where you declare the components, directives, and pipes that belong to this module.
- **Why it's important**: Only the declared components, directives, and pipes can be used within this module unless they are exported by another module that this module imports.
- **Example**:
  ```typescript
  @NgModule({
    declarations: [
      AppComponent,
      HomePage,
      CoursesCardListComponent,
      // other components
    ],
  })
  ```

### Providers

- **What it is**: This is where you register services and other dependencies that you want to be available application-wide (or module-wide).
- **Why it's important**: Services listed here are created once (singleton) and shared throughout the application. They provide the dependency injection mechanism.
- **Example**:
  ```typescript
  @NgModule({
    providers: [
      CourseService,
      // other services
    ],
  })
  ```

### Bootstrap

- **What it is**: This property specifies the root component that Angular should bootstrap when it starts the application.
- **Why it's important**: The application starts by creating and inserting this root component into the `index.html` host web page.
- **Example**:
  ```typescript
  @NgModule({
    bootstrap: [AppComponent]
  })
  ```

### Schemas

- **What it is**: This property is used to specify a list of schemas that declare the allowed HTML elements and properties.
- **Why it's important**: This can be useful if you are using custom elements or elements from libraries that Angular doesn't recognize. For instance, when using Web Components.
- **Example**:
  ```typescript
  @NgModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
  })
  ```

### Putting It All Together

Here’s how a typical `app.module.ts` might look:

```typescript
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePage } from './pages/home/home.page';
import { CoursesCardListComponent } from './components/courses-card-list/courses-card-list.component';
import { CourseService } from './services/course.service';

@NgModule({
  declarations: [
    AppComponent,        // Declaring the root component
    HomePage,            // Declaring a page component
    CoursesCardListComponent // Declaring another component
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(), // Importing Ionic module
    AppRoutingModule       // Importing the app routing module
  ],
  providers: [
    CourseService          // Providing the course service
  ],
  bootstrap: [
    AppComponent           // Bootstrapping the root component
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA // Allowing custom elements
  ]
})
export class AppModule { }
```

### Summary

- **Declarations**: Declare components, directives, and pipes that belong to this module.
- **Providers**: Register services and other dependencies to be used throughout the application.
- **Bootstrap**: Specify the root component that Angular should bootstrap at startup.
- **Schemas**: Declare allowed HTML elements and properties, useful for custom elements and non-Angular elements.