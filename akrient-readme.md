# Akrient - AI-Powered Legal Drafting Platform

## 🚀 Quick Start Guide

### Prerequisites
- Node.js (version 16 or higher)
- npm (comes with Node.js)
- Git

### Step 1: Set Up Your Project

1. **Create a new folder on your computer** called `akrient`

2. **Open Terminal/Command Prompt** and navigate to your folder:
   ```bash
   cd path/to/akrient
   ```

3. **Initialize your project**:
   ```bash
   npm init -y
   ```

### Step 2: Install Dependencies

Copy and paste this command to install all required packages:
```bash
npm install react react-dom react-router-dom axios react-hook-form lucide-react @radix-ui/react-select @radix-ui/react-checkbox @radix-ui/react-dialog @radix-ui/react-tabs @radix-ui/react-toast
```

Then install development dependencies:
```bash
npm install -D vite @vitejs/plugin-react tailwindcss postcss autoprefixer
```

### Step 3: Set Up Tailwind CSS

Run this command to initialize Tailwind:
```bash
npx tailwindcss init -p
```

### Step 4: Create Project Structure

Create the following folder structure:
```
akrient/
├── src/
│   ├── components/
│   │   └── Navbar.jsx
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── DashboardPage.jsx
│   │   ├── QuestionnaireStep.jsx
│   │   ├── TermSheetUpload.jsx
│   │   ├── DocumentEditor.jsx
│   │   └── SigningHub.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── .gitignore
├── .env.example
└── README.md
```

### Step 5: Copy All Files

Copy each file I created above into the appropriate location in your project structure.

### Step 6: Set Up Environment Variables

1. Create a `.env` file in your root directory
2. Copy the contents from `.env.example`
3. Add your OpenAI API key:
   ```
   VITE_OPENAI_API_KEY=your_actual_openai_api_key_here
   ```

### Step 7: Run the Application

Start the development server:
```bash
npm run dev
```

Your application will open at `http://localhost:3000`

## 📁 Project Structure Explained

- **src/pages/** - Main page components
  - `HomePage.jsx` - Landing page
  - `DashboardPage.jsx` - Project management dashboard
  - `QuestionnaireStep.jsx` - M&A questionnaire form
  - `TermSheetUpload.jsx` - Term sheet upload and processing
  - `DocumentEditor.jsx` - Document editing with clause library
  - `SigningHub.jsx` - Document signing and review

- **src/components/** - Reusable components
  - `Navbar.jsx` - Navigation bar

## 🔧 Deployment to Render

### Step 1: Push to GitHub

1. Initialize git in your project:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. Create a new repository on GitHub and push your code:
   ```bash
   git remote add origin https://github.com/yourusername/akrient.git
   git push -u origin main
   ```

### Step 2: Deploy on Render

1. Go to [render.com](https://render.com)
2. Click "New +" → "Static Site"
3. Connect your GitHub repository
4. Configure:
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `dist`
5. Click "Create Static Site"

### Step 3: Connect Your Domain

1. In Render, go to your site settings
2. Add custom domain: `www.akrient.ai`
3. Update your GoDaddy DNS settings with Render's provided values

## 🎯 Next Steps

1. **Integrate OpenAI API** for document processing
2. **Set up Azure services** for document storage and processing
3. **Add authentication** for user management
4. **Implement real document generation** logic
5. **Add database** for storing projects and documents

## 📚 Features Overview

### Current Features
- ✅ Complete UI/UX for all major workflows
- ✅ M&A questionnaire with dynamic form
- ✅ Term sheet upload interface
- ✅ Document editor with clause library
- ✅ Signing hub with collaboration features
- ✅ Project dashboard

### Upcoming Features
- 🔄 AI-powered document generation
- 🔄 Real-time collaboration
- 🔄 Document version control
- 🔄 Integration with legal databases
- 🔄 Advanced analytics

## 🆘 Troubleshooting

### Common Issues

1. **"Module not found" error**
   - Make sure you're in the right directory
   - Run `npm install` again

2. **Port already in use**
   - Change the port in `vite.config.js`

3. **Blank page**
   - Check browser console for errors
   - Make sure all files are in correct folders

## 📧 Support

For questions about the code, feel free to ask! This is a foundation you can build upon for your YC application.

## 🎉 Congratulations!

You now have a working prototype of Akrient! This demonstrates:
- Your vision for the product
- Technical implementation capability
- User interface design
- Complete user workflow

Good luck with your YC application! 🚀