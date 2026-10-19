# QuickStack

QuickStack is an initial web application foundation for coordinating room reservations and shared materials. It uses Node.js and Express to serve a responsive, vanilla JavaScript interface.

## Requirements

- Node.js 18 or newer
- npm

## Run locally

```sh
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000). Set the `PORT` environment variable to use a different port.

The server also exposes `GET /api/health` for a basic health check. The dashboard currently uses sample data; persistence, authentication, and reservation workflows are not implemented yet.

## Roles

- **Solicitante:** check availability and create, edit, or cancel reservations.
- **Responsable:** review special requests, validate teacher allocation, and track material checkout and return.
- **Administrador:** manage rooms, teachers, materials, users, blocks, and maintenance periods.
