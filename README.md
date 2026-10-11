# PocketLog

An offline-first personal notes application built with React, Node.js, Express, and MongoDB.

## Project Goals

- Create, edit, delete, and search notes.
- Store notes locally for offline access.
- Support guest usage without requiring account creation.
- Synchronize notes with a server when users sign in and connectivity is available.
- Support secure account-based access across devices.

## Technology Stack

Component	        Technology
Frontend	        React + Vite
Backend	            Node.js + Express
Server database	    MongoDB
Browser database	IndexedDB
Package manager	    npm
Repository structure	npm workspaces

## Repository Structure

`apps/
  api/       Backend API
  web/       Frontend application
packages/
  shared/    Shared code and utilities`

## Getting Started

### Prerequisites

- Node.js
- npm
- Git

### Install dependencies

`npm install`

## Development commands

Start the frontend:

`npm run dev:web
`
Start the backend:

`npm run dev:api
`
The application entry points and their required dependencies will be added during implementation.

## Architecture

PocketLog uses IndexedDB for local browser persistence and MongoDB for server-side storage. Synchronization between local and server data will be implemented in a later development phase.

## Development Status

Currently in the repository setup phase.

Note: The development commands are documented for the intended application. They will become runnable as the frontend and backend are implemented.
