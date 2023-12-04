# Form Creator

This project is a form generator and manager developed in Next.js using Clerk for authentication. It also utilizes Prisma for database management and Vercel for storage.

## How to run the project

1. Clone the repository:
  ```bash
  git clone https://github.com/your-username/form-creator.git
  ```

2. Install the dependencies:
  ```bash
  cd form-creator
  npm install
  ```

3. Configure the environment variables:
  - Create a `.env.local` file in the root of the project.
  - Add the following environment variables to the `.env.local` file:
    ```plaintext
    NEXT_PUBLIC_CLERK_FRONTEND_API_URL=https://api.clerk.dev
    NEXT_PUBLIC_CLERK_SIGN_IN_URL=https://app.clerk.dev/sign-in
    NEXT_PUBLIC_CLERK_SIGN_OUT_URL=https://app.clerk.dev/sign-out
    NEXT_PUBLIC_CLERK_API_URL=http://localhost:3001
    ```

4. Configure Prisma:
  - Create a `.env` file in the root of the project.
  - Add the following environment variables to the `.env` file:
    ```plaintext
    DATABASE_URL=postgresql://user:password@localhost:5432/database
    ```

5. Migrate the database:
  ```bash
  npx prisma migrate dev
  ```

6. Start the development server:
  ```bash
  npm run dev
  ```

7. Access the project in the browser:
  [http://localhost:3000](http://localhost:3000)

## Clerk Documentation

For more information about Clerk, please refer to the [official documentation](https://docs.clerk.dev/).

Author: EmersonAlves019
