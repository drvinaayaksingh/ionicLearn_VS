# Learn Advanced Ionic with Dr. Vinaayak Singh

## Basic Setup

# Reactive Angular Course - README

## Step 1: Setup

### Ionic Version
To get started with the Ionic version of this course, clone the following repository:
```bash
git clone https://github.com/drvinaayaksingh/ionicLearn_VS.git
npm i --legacy-peer-deps
```

1. --legacy-peer-deps: ignore all peerDependencies when installing, in the style of npm version 4 through version 6.

2. --strict-peer-deps: fail and abort the install process for any conflicting peerDependencies when encountered. By default, npm will only crash for peerDependencies conflicts caused by the direct dependencies of the root project.

3. --force: will force npm to fetch remote resources even if a local copy exists on disk.


### Angular Version
Alternatively, for the Angular version, use:
```bash
git clone https://github.com/drvinaayaksingh/AngularCourse.git
```

### Node.js
Ensure you have Node.js version 18.19 or higher installed. To manage Node versions, install `nvm` for Windows:
[NVM for Windows](https://github.com/coreybutler/nvm-windows/releases/download/1.1.12/nvm-setup.exe)

Install and use the required Node version:
```bash
nvm install 18.19
nvm use 18.19
```

### Global Installations
To perform the setup from scratch, globally install the following tools:
```bash
npm install -g @ionic/cli native-run cordova-res
ionic --v
npm install -g @angular/cli@latest
ng --version
```

### Project Setup
Refer to the official Angular CLI update guide:
[Angular CLI Update](https://angular.dev/cli/update)

Check your Ionic version:
```bash
ionic --v
```

Follow the Ionic framework documentation for your first app:
[Ionic Framework: Your First App](https://ionicframework.com/docs/angular/your-first-app)

Create a new Ionic project:
```bash
ionic start adv-course tabs --type=angular --capacitor
```
When prompted, choose `NgModules` as this tutorial follows the `NgModules` approach.

Navigate to the project directory:
```bash
cd adv-course
```

Install the necessary Capacitor plugins:
```bash
npm install @capacitor/camera @capacitor/preferences @capacitor/filesystem
```

### PWA Elements
Some Capacitor plugins, including the Camera API, provide web-based functionality and UI via the Ionic PWA Elements library. Install it with:
```bash
npm install @ionic/pwa-elements
```

Next, import `@ionic/pwa-elements` by editing `src/main.ts`:
```typescript
import { defineCustomElements } from '@ionic/pwa-elements/loader';

// Call the element loader before the bootstrapModule/bootstrapApplication call
defineCustomElements(window);
```

### Running the Application
To run the server:
```bash
npm run server
```
Check the server at `localhost:9000/api/courses`.

For the UI, run:
```bash
npm run start
```
This command passes extra parameters to `ng serve` with a special proxy configuration.

Access the application at `localhost:4200`.


## Ionic HTML Tags/Components Cheat Sheet

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