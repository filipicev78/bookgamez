# Bookgamez

## Source of truth

This repository is the project plan and the codebase.

Hard rule: if the code direction changes, update this file in the same change or before the next commit. The plan must stay synced to the code.

Default rule: choose the simplest path that delivers a usable MVP.

Decision rule: consult the user before important design decisions, especially one-way-door decisions that are hard to reverse later.

Execution rule: the agent should do everything it reasonably can on its own, and only ask the user to step in when blocked by a decision, permission, credential, or external dependency.

## Vision

Bookgamez is a very small browser app for tracking books and writing short reviews.

The MVP should let one user:

- see a reading shelf
- add a book review
- rate a book
- search or filter their books
- keep data in the browser with local persistence

This should work without accounts, servers, or paid services.

## Product principles

- Start static and local-first.
- No backend in MVP.
- No auth in MVP.
- No external database in MVP.
- No AI features in MVP.
- No social features in MVP.
- Every feature must justify its complexity.

## MVP scope

The MVP includes:

- a shelf view showing saved books
- a form to add a book title, author, rating, status, and short review
- simple search by title or author
- basic filters such as `to read`, `reading`, and `finished`
- localStorage persistence
- lightweight seed data or empty-state guidance

The MVP does not include:

- user accounts
- cloud sync
- recommendations
- likes, follows, comments, or sharing
- image upload
- mobile apps

## Suggested stack

Use the simplest web stack possible:

- `index.html`
- `styles.css`
- `app.js`

If that becomes too limiting, the next step up is a very small frontend framework. Do not move there unless the plain browser version is clearly slowing delivery.

## Build plan

Commit 1: create the repo scaffold

- add `README.md`
- add `index.html`
- add `styles.css`
- add `app.js`
- render a plain shell of the app

Commit 2: implement shelf rendering

- define the in-memory book model
- render a list of books to the page
- include title, author, rating, status, and review preview

Commit 3: add review creation

- build the add-book/add-review form
- validate required fields
- append new items to local state

Commit 4: add browser persistence

- save the shelf to `localStorage`
- load saved data on startup
- keep a safe fallback when storage is empty or invalid

Commit 5: add search and filters

- search by title and author
- filter by reading status
- keep the UI simple and obvious

Commit 6: improve empty states and polish

- add helpful copy for first use
- tighten layout and spacing
- verify mobile usability at a basic level

Commit 7: MVP cleanup

- remove dead code
- simplify naming
- confirm the README still matches the product

## Working agreement for future changes

When making a product decision, do one of these:

1. If it fits this plan, build it.
2. If it changes scope or direction, update this file first.
3. If it is an important design decision, ask the user before committing to it.
4. If it is a one-way-door decision, stop and get user confirmation first.
5. If it adds major complexity, challenge it before building.

When doing implementation work:

1. Do the work directly whenever the next step is clear.
2. Only pull in the user when a real blocker exists.
3. When blocked, say exactly what is needed from the user.

## Definition of done for MVP

The MVP is done when a user can open the app in a browser, add books, write reviews, rate them, search them, filter them, refresh the page, and still keep their data locally.
