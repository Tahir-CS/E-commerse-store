# Supabase Setup Guide for ShopEase E-commerce Store

## Prerequisites
- Node.js installed
- Supabase account (free at supabase.com)

## Step 1: Create Supabase Project

1. Go to [supabase.com](https://supabase.com) and sign up/login
2. Click "New Project"
3. Choose your organization
4. Enter project details:
   - Name: `shopease-ecommerce`
   - Database Password: (create a strong password)
   - Region: Choose closest to your users
5. Click "Create new project"

## Step 2: Get Project Credentials

1. Once your project is created, go to **Settings > API**
2. Copy your:
   - Project URL
   - `anon` public key

## Step 3: Configure Environment Variables

1. Update your `.env.local` file with your Supabase credentials:

```env
# Replace with your actual Supabase project credentials
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

## Step 4: Set Up Database Schema

1. In your Supabase dashboard, go to **SQL Editor**
2. Copy and paste the contents of `supabase-schema.sql`
3. Click "Run" to create all tables, policies, and functions

## Step 5: Insert Sample Products

1. In the SQL Editor, copy and paste the contents of `supabase-products.sql`
2. Click "Run" to insert sample products

## Step 6: Configure Authentication

1. Go to **Authentication > Settings**
2. Configure the following:

### Site URL
- Set to: `http://localhost:5173` (for development)
- For production, use your actual domain

### Email Auth
- Enable "Enable email confirmations" if you want email verification
- Customize email templates as needed

### OAuth Providers (Optional)
To enable Google login:
1. Go to **Authentication > Providers**
2. Enable Google provider
3. Add your Google OAuth credentials:
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select existing
   - Enable Google+ API
   - Create OAuth 2.0 credentials
   - Add authorized redirect URIs:
     - `https://your-project-id.supabase.co/auth/v1/callback`
   - Copy Client ID and Client Secret to Supabase

## Step 7: Set Up Row Level Security (RLS)

The schema file already includes RLS policies, but here's what they do:

- **Products**: Everyone can read, only authenticated users can modify
- **Cart Items**: Users can only access their own cart items
- **Orders**: Users can only access their own orders
- **User Profiles**: Users can only access their own profile

## Step 8: Test the Integration

1. Start your development server:
```bash
npm run dev
```

2. Test the following features:
   - **Sign up**: Create a new account
   - **Sign in**: Login with existing account
   - **Products**: View products loaded from Supabase
   - **Cart**: Add items to cart (persisted to database)
   - **Profile**: User authentication state

## Step 9: Database Management

### View Data
- Go to **Table Editor** in Supabase dashboard
- View and edit data in all tables

### Monitor Usage
- Go to **Settings > Usage** to monitor:
  - Database size
  - API requests
  - Storage usage
  - Authentication users

## Step 10: Production Deployment

### Environment Variables for Production
Update your production environment with:
```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

### Security Considerations
1. **RLS Policies**: Ensure all tables have proper RLS policies
2. **API Keys**: Never expose service role key in frontend
3. **CORS**: Configure allowed origins in Supabase dashboard
4. **SSL**: Always use HTTPS in production

## Troubleshooting

### Common Issues

1. **"Invalid API key"**
   - Check your environment variables
   - Ensure you're using the `anon` key, not the service role key

2. **"Row Level Security policy violation"**
   - Make sure user is authenticated
   - Check RLS policies in database

3. **"Cannot connect to Supabase"**
   - Verify project URL is correct
   - Check if project is paused (free tier limitation)

4. **Products not loading**
   - Ensure `supabase-products.sql` was executed
   - Check browser console for errors

### Getting Help
- Supabase Documentation: [supabase.com/docs](https://supabase.com/docs)
- Community Discord: [discord.supabase.com](https://discord.supabase.com)
- GitHub Issues: [github.com/supabase/supabase](https://github.com/supabase/supabase)

## Next Steps

With Supabase set up, you can now add:
1. **Payment Integration**: Stripe/PayPal for checkout
2. **Order Management**: Track order status and history
3. **Admin Dashboard**: Manage products and orders
4. **Email Notifications**: Order confirmations and updates
5. **Advanced Features**: Search, filtering, recommendations
6. **Real-time Features**: Live inventory updates, chat support

Your e-commerce store now has a complete backend infrastructure! 🚀
