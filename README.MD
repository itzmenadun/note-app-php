# Easy Notes

A simple note-taking app built with React, PHP (Leaf3), and MySQL.

## App Info

**Easy Notes**

-   **Frontend**: Inertia.js + React + Vite + Tailwind CSS
-   **Backend**: PHP powered by the Leaf framework
-   **Database**: MySQL

## Installation

### Prerequisites

Ensure you have Composer and Node.js installed on your system. If not, you can install them using the following links:

-   [Get Composer](https://getcomposer.org/download/)
-   [Install Node.js](https://nodejs.org/en/download/package-manager)

### Steps

1. **Clone the Repository**

    ```bash
    git clone https://github.com/itzmenadun/note-app-php.git
    cd note-app-php
    ```

2. **Install Backend Dependencies**

```bash
composer install
```

3. **Install Frontend Dependencies**

```bash
npm install
```

### Configuration

**Linux or WSL**

To start the PHP server, run:

```bash
php -S localhost:5500
```

**Frontend Development Server**

To start the PHP server, run:

```bash
npm run dev
```

### Database Setup

1. Create a MySQL database for the project name-testleaf.

2. Import the SQL file using phpMyAdmin or the MySQL command line:

-   phpMyAdmin: Import the testleaf.sql file through the phpMyAdmin interface.
-   Command Line:

```bash
mysql -u root -p  < testleaf.sql
```

### Database Setup

Once the servers are running, you can access the application at

http://localhost:5500.

#### Thank you for using Easy Notes!
