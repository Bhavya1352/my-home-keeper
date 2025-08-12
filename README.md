# Home Maintenance Tracker 🏠

A delightful and responsive web application designed to help homeowners stay on top of their maintenance tasks. Keep your home in perfect condition with customizable categories, smart scheduling, and an engaging user experience.

![Home Maintenance Tracker] https://my-home-keeper.vercel.app/

## ✨ Features

### 🎯 Core Functionality
- **Task Management**: Create, edit, and organize home maintenance tasks
- **Smart Scheduling**: Set due dates and recurring schedules (daily, weekly, monthly, yearly)
- **Customizable Categories**: Organize tasks by room, system, or custom categories
- **Progress Tracking**: Visual completion bars and achievement badges
- **Color-coded Urgency**: Tasks automatically color-coded based on urgency levels

### 🎨 User Experience
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Drag & Drop**: Intuitive task reordering and organization
- **Quick-Add Options**: Rapidly create new tasks with smart defaults
- **Visual Themes**: Multiple themes to personalize your experience
- **Personalized Dashboard**: Custom profile and home name settings

### 🚀 Enhanced Features
- **Achievement System**: Earn badges for completing maintenance milestones
- **Daily Tips**: Optional maintenance tips to keep you informed
- **Friendly Language**: Encouraging and supportive user interface
- **Icon Library**: Visual icons for easy task identification
- **Data Persistence**: Your data is safely stored and synced

## 🛠️ Tech Stack

- **Frontend**: React 18+ with modern hooks
- **Styling**: CSS3 with responsive design principles
- **Routing**: React Router for seamless navigation
- **State Management**: React Context API and local state
- **Data Storage**: LocalStorage with optional Firebase integration
- **Build Tool**: Create React App or Vite

## 📦 Installation

### Prerequisites
- Node.js (v16.0.0 or higher)
- npm or yarn package manager

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/Bhavya1352/my-home-keeper.git
   cd my-home-keeper
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ``

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:

```env
# Optional Firebase Configuration
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id

# App Configuration
REACT_APP_DEFAULT_THEME=light
REACT_APP_ENABLE_TIPS=true
```

### Storage Options

**LocalStorage (Default)**
- Data stored locally in browser
- No setup required
- Works offline

**Firebase (Optional)**
- Cloud storage and sync
- Requires Firebase project setup
- Multi-device synchronization

## 📁 Project Structure

```
home-maintenance-tracker/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Dashboard/
│   │   ├── TaskList/
│   │   ├── TaskForm/
│   │   ├── Profile/
│   │   └── common/
│   ├── contexts/
│   │   ├── TaskContext.js
│   │   └── ThemeContext.js
│   ├── hooks/
│   │   ├── useLocalStorage.js
│   │   └── useFirebase.js
│   ├── utils/
│   │   ├── dateHelpers.js
│   │   └── taskHelpers.js
│   ├── styles/
│   │   ├── global.css
│   │   └── themes.css
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

## 🎯 Usage

### Creating Your First Task
1. Click the "Add Task" button on your dashboard
2. Enter task details (name, category, due date)
3. Set recurrence if needed (optional)
4. Save and watch it appear in your task list!

### Managing Categories
- Create custom categories for different areas of your home
- Use predefined categories like "HVAC", "Plumbing", "Exterior"
- Color-code categories for quick visual identification

### Tracking Progress
- Mark tasks as complete to earn progress points
- Unlock achievement badges for consistency
- View your completion statistics on the dashboard

## 🌟 Features in Detail

### Smart Scheduling
```javascript
// Example recurring task configurations
const recurringTasks = {
  airFilter: { interval: 'monthly', day: 1 },
  gutterCleaning: { interval: 'biannual', months: [4, 10] },
  hvacService: { interval: 'annual', month: 3 }
}
```

### Achievement System
- **First Steps**: Complete your first task
- **Week Warrior**: Complete 7 tasks in one week
- **Monthly Master**: Complete all monthly tasks
- **Annual Achiever**: Stay consistent for a full year

## 🔄 Development

### Available Scripts

```bash
npm start          # Start development server
npm test           # Run test suite
npm run build      # Build for production
npm run lint       # Run ESLint
npm run deploy     # Deploy to hosting platform
```

### Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🐛 Troubleshooting

### Common Issues

**Tasks not saving?**
- Check browser LocalStorage permissions
- Verify Firebase configuration if using cloud storage

**App not responsive?**
- Clear browser cache and refresh
- Check console for JavaScript errors

**Missing icons?**
- Ensure all dependencies are installed
- Check network connection for CDN resources

## 📈 Roadmap

- [ ] Mobile app companion
- [ ] Smart home integration (IoT sensors)
- [ ] Contractor recommendations
- [ ] Photo documentation for tasks
- [ ] Weather-based task suggestions
- [ ] Community maintenance tips
- [ ] Cost tracking and budget

**Happy Home Maintaining!** 🏠✨

*Keep your home in perfect condition, one task at a time.*

