# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Path4HCPs is a React-based web application built for healthcare professionals, providing science-based information about the melanocortin-4 receptor pathway. This is an AI Studio app deployed to the web.

## Development Commands

- **Install dependencies**: `npm install`
- **Start development server**: `npm run dev` (runs on port 3000)
- **Build for production**: `npm run build`
- **Preview production build**: `npm preview`

## Environment Setup

The app requires a `GEMINI_API_KEY` environment variable set in `.env.local` for AI functionality.

## Architecture

### Tech Stack
- **Framework**: React 19.2.0 with TypeScript
- **Build Tool**: Vite 6.2.0
- **Styling**: Tailwind CSS (via CDN)
- **Icons**: Lucide React
- **Animations**: Lottie React
- **Font**: Jost (Google Fonts)

### Project Structure
- `index.tsx` - Main entry point with React root mounting
- `App.tsx` - Main application component that composes all sections
- `components/` - All React components organized by feature:
  - `Header.tsx` - Navigation with responsive mobile menu
  - `Hero.tsx` - Hero section with gradient background
  - `PathwayInteractive.tsx` - Interactive pathway visualization
  - `InsightCards.tsx` - Scientific insight cards
  - `CommunityBanner.tsx` - Community engagement section  
  - `ResourcesSection.tsx` - Educational resources
  - `NewsletterSection.tsx` - Newsletter signup
  - `Footer.tsx` - Site footer
  - Animation components: `BrainFlowAnimation.tsx`, `GeneticAnimation.tsx`, `SignalingAnimation.tsx`, `BrainVisual.tsx`

### Key Implementation Details

The app uses a hybrid approach with both local dependencies and CDN imports via import maps in `index.html`. Components are styled with Tailwind CSS classes and follow a consistent teal/lime color scheme.

The application is structured as a single-page layout with all sections rendered in sequence through the main App component. Components use modern React patterns including hooks for state management.

### File Organization

Components are self-contained with no shared utilities or services directory. All external dependencies are managed through npm or CDN imports. Static assets are expected in `/images/` and `/lottiefiles/` directories.