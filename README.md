# SeaApp - אתר תדמית לחברת פיתוח אפליקציות

אתר תדמית מודרני המציג את הפרויקטים והשירותים של חברת פיתוח אפליקציות, בנוי עם React + TypeScript + Vite + Tailwind CSS.

## טכנולוגיות

- **React 18** - ספריית UI מובילה
- **TypeScript** - טיפוסים סטטיים לקוד בטוח יותר
- **Vite** - כלי build מהיר ומודרני
- **Tailwind CSS** - framework CSS לעיצוב מהיר ורספונסיבי
- **RTL Support** - תמיכה מלאה בעברית וכיוון כתיבה מימין לשמאל

## תכונות

- ✅ עיצוב מודרני ונקי
- ✅ רספונסיביות מלאה (מובייל, טאבלט, דסקטופ)
- ✅ תמיכה מלאה ב-RTL (עברית)
- ✅ מערכת Tabs לתצוגת פרויקטים
- ✅ קומפוננטות מודולריות וניתנות לשימוש חוזר
- ✅ טיפוסי TypeScript מלאים

## התקנה והרצה

### התקנת Dependencies

```bash
npm install
```

### הרצה במצב פיתוח

```bash
npm run dev
```

האתר יהיה זמין בכתובת: `http://localhost:5173`

### בניה לפרודקשן

```bash
npm run build
```

הקבצים המובנים יהיו בתיקיית `dist/`

### תצוגה מקדימה של הבנייה

```bash
npm run preview
```

## מבנה הפרויקט

```
src/
├── components/
│   ├── Layout/
│   │   ├── MainLayout.tsx    # Layout ראשי
│   │   ├── Header.tsx         # Header עם ניווט
│   │   └── Footer.tsx         # Footer
│   ├── common/
│   │   ├── Hero.tsx           # קומפוננטת Hero
│   │   ├── Section.tsx        # קומפוננטת Section גנרית
│   │   ├── Tag.tsx            # תגיות לטכנולוגיות
│   │   └── StatsGrid.tsx      # Grid לסטטיסטיקות
│   ├── ui/
│   │   └── TabNavigation.tsx  # קומפוננטת Tabs
│   └── projects/
│       ├── ProjectsTabs.tsx       # ניהול Tabs של פרויקטים
│       ├── ProjectDetails.tsx     # קומפוננטה גנרית לפרויקט
│       └── GreenbrushProject.tsx  # פרויקט Greenbrush
├── styles/
│   └── global.css             # Tailwind + סטיילים גלובליים
├── App.tsx                    # קומפוננטה ראשית
├── main.tsx                   # נקודת כניסה
└── vite-env.d.ts             # הגדרות TypeScript

```

## הוספת פרויקטים חדשים

להוספת פרויקט חדש:

1. צור קומפוננטה חדשה בתיקיית `src/components/projects/`
2. הוסף את הפרויקט למערך `projects` בקובץ `ProjectsTabs.tsx`

דוגמה:

```typescript
{
  id: 'my-project',
  name: 'הפרויקט שלי',
  shortDescription: 'תיאור קצר',
  component: MyProjectComponent,
}
```

## התאמה אישית

### צבעים

ניתן לשנות את צבעי העיצוב בקובץ `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // הגדר את הגוונים שלך כאן
  }
}
```

### סטיילים גלובליים

עריכת סטיילים בסיסיים בקובץ `src/styles/global.css`

## רישיון

© 2024 כל הזכויות שמורות
