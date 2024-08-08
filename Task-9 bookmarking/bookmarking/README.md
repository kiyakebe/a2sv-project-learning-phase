
# Authentication and Email Verification

This repository contains an authentication system with email verification built using Next.js.

## Features

- **Email Verification Form**: Allows users to verify their email by entering an OTP code sent to their email.
- **Authentication System**: Provides email/password authentication and Google OAuth using NextAuth.js.
## Installation and Setup

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git https://github.com/kiyakebe/a2sv-project-learning-phase.git
   cd "Task-8 user-authentication/user_authentication"
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env.local` file to store your environment variables:

   ```bash
   touch .env.local
   ```

   Add the following variables:

   ```env
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

## Demo Screenshot

1. Landing page
![App Screenshot](https://github.com/kiyakebe/a2sv-project-learning-phase/blob/main/Task-8%20user-authentication/demo%20images/demo-1.png)

2. Signup Page
![App Screenshot](https://github.com/kiyakebe/a2sv-project-learning-phase/blob/main/Task-8%20user-authentication/demo%20images/demo-2.png)

3. Login Page
![App Screenshot](https://github.com/kiyakebe/a2sv-project-learning-phase/blob/main/Task-8%20user-authentication/demo%20images/demo-3.png)

4. Form Validation
![App Screenshot](https://github.com/kiyakebe/a2sv-project-learning-phase/blob/main/Task-8%20user-authentication/demo%20images/demo-4.png)

5. OTP verification
![App Screenshot](https://github.com/kiyakebe/a2sv-project-learning-phase/blob/main/Task-8%20user-authentication/demo%20images/demo-5.png)

6. Authenticated Page
![App Screenshot](https://github.com/kiyakebe/a2sv-project-learning-phase/blob/main/Task-8%20user-authentication/demo%20images/demo-6.png)
