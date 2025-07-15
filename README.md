# QBO Agent - QuickBooks Online AI Chat Interface

A modern web application that provides an intelligent chat interface for interacting with QuickBooks Online (QBO) data through natural language queries. The application acts as a bridge between users and QuickBooks API, leveraging AI to interpret user requests and generate appropriate API calls.

## 🚀 Project Overview

The QBO Agent is a sophisticated chat-based application that allows users to query QuickBooks Online financial data using natural language. The system interprets user requests, converts them into appropriate QBO API calls, and presents the results in a user-friendly format.

### Key Features

- **Natural Language Processing**: Understands user queries in plain English
- **Multi-Report Support**: Handles various QBO reports (P&L, Balance Sheet, Cash Flow, etc.)
- **Intelligent Date Parsing**: Supports relative date expressions like "last quarter", "this month"
- **Real-time Communication**: Webhook-based messaging system
- **Modern UI**: Clean, responsive chat interface
- **Firebase Integration**: Hosted on Firebase App Hosting

## 🏗️ Architecture

The application follows a multi-tier architecture:

1. **Frontend**: Next.js chat interface
2. **AI Processing**: n8n workflow with OpenAI integration
3. **API Integration**: QuickBooks Online API
4. **Hosting**: Firebase App Hosting

### Workflow Process

1. User sends a message through the chat interface
2. Message is forwarded to n8n webhook
3. AI agent processes the request and identifies QBO actions
4. System generates appropriate API calls to QuickBooks
5. Results are formatted and returned to the user

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Radix UI** - Accessible component primitives
- **React Hook Form** - Form state management
- **Zod** - Schema validation

### AI & Processing
- **Google Genkit** - AI application framework
- **Google AI (Gemini)** - Language model integration
- **OpenAI GPT-4** - Natural language processing
- **n8n** - Workflow automation platform

### Backend Services
- **QuickBooks Online API** - Financial data access
- **Firebase** - Hosting and infrastructure
- **Webhook Integration** - Real-time communication

### Development Tools
- **ESLint** - Code linting
- **TypeScript Compiler** - Type checking
- **Turbopack** - Fast bundler for development

## 📋 Core Components

### Chat Interface (`src/components/chat-view.tsx`)
- Real-time messaging interface
- Webhook communication handling
- Loading states and error management
- Message display with user/bot distinction

### AI Integration (`src/ai/genkit.ts`)
- Google Genkit configuration
- Gemini 2.0 Flash model integration
- AI processing pipeline

### n8n Workflow (`Generic_QBO_Chat_AI.json`)
- Multi-stage AI processing
- QBO API endpoint generation
- Response formatting and presentation

## 🎯 Supported QBO Operations

### Reports
- **ProfitAndLoss** (P&L, PL, pnl)
- **BalanceSheet** (BS, B/S)
- **CashFlow** (CF)
- **TrialBalance** (TB)
- **GeneralLedger** (GL)
- **TransactionList**

### Data Entities
- **Customers** - Customer management
- **Vendors** - Vendor information
- **Accounts** - Chart of accounts
- **Invoices** - Invoice operations
- **Bills** - Bill management
- **Payments** - Payment tracking

### Date Range Support
- Relative dates: "this month", "last quarter", "year to date"
- Absolute dates: Specific date ranges
- Automatic date calculation based on current date

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- QuickBooks Online Developer Account
- Firebase Account
- OpenAI API Key

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd qbo-agent
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
NEXT_PUBLIC_WEBHOOK_URL=<your-webhook-url>
GOOGLE_AI_API_KEY=<your-google-ai-key>
```

4. Configure QuickBooks OAuth2 credentials in n8n

5. Start the development server
```bash
npm run dev
```

The application will be available at `http://localhost:9002`

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript compiler
- `npm run genkit:dev` - Start Genkit development server
- `npm run genkit:watch` - Start Genkit with watch mode

## 🔧 Configuration

### Firebase Hosting (`apphosting.yaml`)
```yaml
runConfig:
  maxInstances: 1
```

### n8n Workflow Setup
1. Import `Generic_QBO_Chat_AI.json` into n8n
2. Configure QuickBooks OAuth2 credentials
3. Set up OpenAI API connection
4. Deploy webhook endpoint

## 📝 Usage Examples

### Natural Language Queries
- "Show me the P&L for last quarter"
- "Get the balance sheet for this month in USD"
- "List all invoices for customer ABC Corp"
- "Show cash flow for Q1 2024"

### Multi-Request Queries
- "Give me both P&L and Balance Sheet for last quarter"
- "Show me invoices and payments for this month"

## 🎨 UI/UX Features

### Design System
- **Primary Color**: Slate blue (#778DA9)
- **Background**: Light gray (#E0E1DD)
- **Accent**: Vivid orange (#E29578)
- **Typography**: Inter font family
- **Icons**: Lucide React icons

### Accessibility
- ARIA labels for screen readers
- Keyboard navigation support
- Color contrast compliance
- Focus management

## 🔒 Security Considerations

- Environment variable protection
- OAuth2 secure authentication
- API key management
- Input validation and sanitization

## 📊 Performance Features

- Turbopack for fast development builds
- Code splitting and lazy loading
- Optimized bundle size
- Real-time updates without page refresh

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is private and proprietary.

## 📞 Support

For support and questions, please refer to the project documentation or contact the development team.

---

*This project integrates multiple cutting-edge technologies to provide a seamless AI-powered interface for QuickBooks Online data management.*