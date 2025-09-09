# WhisperFeed

A modern, privacy-focused social platform that enables anonymous sharing and authentic conversations in a secure environment.

## 🚀 Features

- 🔒 **Secure Authentication** - Built with NextAuth.js for secure user authentication
- 🎨 **Modern UI** - Clean, responsive design with Tailwind CSS and Radix UI
- ✨ **Animated Backgrounds** - Engaging visual experience with smooth animations
- 🔔 **Toast Notifications** - User-friendly feedback system
- 🛡️ **Protected Routes** - Secure access control for authenticated users
- 📱 **Mobile-First** - Fully responsive design that works on all devices
- ⚡ **Fast & Optimized** - Built with Next.js 13+ for optimal performance

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with [Radix UI](https://www.radix-ui.com/)
- **Authentication**: [NextAuth.js](https://next-auth.js.org/)
- **State Management**: React Context API
- **Form Handling**: React Hook Form
- **Icons**: [Lucide Icons](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Type Safety**: TypeScript
- **Package Manager**: pnpm

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and pnpm installed
- Git for version control

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Sam06002/WhisperFeedTest2.git
   cd WhisperFeedTest2
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add the following:
   ```env
   NEXTAUTH_SECRET=your-secret-here
   NEXTAUTH_URL=http://localhost:3000
   ```

4. Start the development server:
   ```bash
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎯 Usage

### Authentication
- The app uses a simple email/password authentication system
- For development, you can use any email (no verification required)
- Passwords must be at least 6 characters long

### Development Workflow

- Run the development server:
  ```bash
  pnpm dev
  ```

- Lint your code:
  ```bash
  pnpm lint
  ```

- Build for production:
  ```bash
  pnpm build
  ```

- Start production server:
  ```bash
  pnpm start
  ```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add some feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request

### Code Style
- Follow the existing code style
- Use TypeScript for type safety
- Keep components small and focused
- Write meaningful commit messages
- Run linter before committing

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Lucide Icons](https://lucide.dev/)
