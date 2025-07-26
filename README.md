# Furniture Website - Next.js E-Commerce Platform

This is a modern, scalable, and feature-rich e-commerce web application for a furniture store, built with Next.js and TypeScript. The project was developed as part of my internship task, focusing on implementing best practices for web development, including a service-oriented architecture, efficient data handling for large catalogs, and a seamless user experience.

## Key Features

- **Service-Oriented Architecture**: Features a dedicated Application/Business Logic layer for clean separation of concerns, enhancing scalability and maintainability.
- **Big Data Ready Catalog**: Demonstrates handling of large datasets with a `BigDataGenerator` service and efficient filtering, sorting, and pagination for over 1,500 products.
- **Global Shopping Cart**: A persistent shopping cart managed with React's Context API and `localStorage` ensures that user selections are saved across sessions.
- **Detailed Product Pages**: Each product has a dedicated page with detailed descriptions, specifications, and image galleries.
- **Responsive Design**: A mobile-first, fully responsive UI built with Tailwind CSS ensures a great user experience on all devices.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) 14+ (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **State Management**: [React Context API](https://react.dev/learn/passing-data-deeply-with-context)
- **Linting & Formatting**: ESLint & Prettier

## Project Structure Overview

The project follows a feature-oriented structure, enhanced by Next.js route groups:

```
src/app/
├── (auth)/           # Authentication pages (Login, Register)
│   ├── login/
│   └── register/
├── (main)/           # Core application pages (Home, About Us)
│   ├── home/
│   └── about-us/
├── shop/             # E-commerce section (Product Listing, Cart, Billings)
│   ├── cart/
│   └── billings/
├── product/          # Dynamic product detail pages
│   └── [id]/
├── components/       # Reusable components (Navigator, Footer, ProductCard)
├── context/          # Global state management (CartContext)
├── services/         # Business logic and data services (ProductService)
└── utils/            # Utility functions (BigDataGenerator)
└── hooks/            # Custom hooks
```

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have Node.js (version 18.x or higher) and npm installed on your machine.

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/gustiwdr/furniture-website.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd furniture-website
    ```
3.  Install NPM packages:
    ```bash
    npm install
    ```

### Running the Development Server

Execute the following command to start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. The page will auto-update as you edit the files.

## Available Scripts

In the project directory, you can run:

- `npm run dev`: Runs the app in development mode.
- `npm run build`: Builds the app for production.
- `npm run start`: Starts a production server.
- `npm run lint`: Runs the linter to check for code quality issues.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
