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
