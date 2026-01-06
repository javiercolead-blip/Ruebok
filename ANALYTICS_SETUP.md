# Analytics Setup Guide for Ruebok

This guide will help you set up PostHog and Google Analytics 4 to track where your founders are coming from.

## 🎯 What You'll Track

Both analytics platforms will automatically track:
- **Traffic Sources**: LinkedIn, Twitter/X, Direct, Google, etc.
- **UTM Parameters**: Campaign tracking from your marketing links
- **Page Views**: Which pages users visit
- **Referrers**: Exact websites that sent traffic to you
- **User Behavior**: Clicks, form submissions, button clicks
- **Geographic Data**: Where users are located
- **Device Info**: Mobile vs Desktop, browsers, etc.

---

## 📊 Option 1: PostHog (RECOMMENDED)

PostHog is more powerful for product analytics and shows you exactly where users come from.

### Step 1: Create PostHog Account

1. Go to [https://posthog.com](https://posthog.com)
2. Click "Get Started - Free"
3. Sign up with your email
4. Choose **US Cloud** or **EU Cloud** based on your preference

### Step 2: Get Your API Key

1. After signing up, you'll see your **Project API Key**
2. Copy this key (it looks like: `phc_xxxxxxxxxxxxxxxxxxxxx`)
3. Note your **Host URL** (usually `https://us.i.posthog.com` for US or `https://eu.i.posthog.com` for EU)

### Step 3: Configure Your Environment

1. Create a file named `.env.local` in your project root
2. Add these lines:

```bash
VITE_POSTHOG_API_KEY=phc_your_actual_api_key_here
VITE_POSTHOG_HOST=https://us.i.posthog.com
```

3. **IMPORTANT**: Never commit `.env.local` to git (it's already in .gitignore)

### Step 4: Deploy

1. Add the environment variables to Vercel:
   - Go to your Vercel project dashboard
   - Click "Settings" → "Environment Variables"
   - Add `VITE_POSTHOG_API_KEY` with your API key
   - Add `VITE_POSTHOG_HOST` with `https://us.i.posthog.com`
   - Click "Save"

2. Redeploy your site (it will automatically use the new variables)

### Step 5: View Your Analytics

1. Log into [PostHog Dashboard](https://app.posthog.com)
2. Click "Insights" to create custom reports
3. Key reports to create:
   - **Traffic Sources**: Go to Insights → Create → Select "Referrer" or "Initial Referrer"
   - **UTM Campaigns**: Filter by `utm_source`, `utm_medium`, `utm_campaign`
   - **Funnels**: Track from landing page → Apply button click
   - **Session Recordings**: Watch actual user sessions (optional)

---

## 📈 Option 2: Google Analytics 4

GA4 is familiar and integrates with Google Ads.

### Step 1: Create GA4 Property

1. Go to [Google Analytics](https://analytics.google.com)
2. Click "Admin" (bottom left)
3. Click "Create Property"
4. Name it "Ruebok" and set timezone/currency
5. Click "Next" → Choose "Web"
6. Enter your website URL: `https://www.ruebok.com`
7. Click "Create Stream"

### Step 2: Get Your Measurement ID

1. After creating the stream, you'll see a **Measurement ID** (format: `G-XXXXXXXXXX`)
2. Copy this ID

### Step 3: Update Your Website

1. Open `index.html` in your project
2. Find these two lines (lines 11 and 16):
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   ```
   and
   ```javascript
   gtag('config', 'G-XXXXXXXXXX', {
   ```

3. Replace **both** instances of `G-XXXXXXXXXX` with your actual Measurement ID

### Step 4: View Your Analytics

1. Log into [Google Analytics](https://analytics.google.com)
2. Select your Ruebok property
3. View reports:
   - **Traffic Sources**: Reports → Acquisition → Traffic Acquisition
   - **Realtime**: See visitors right now
   - **Engagement**: Which pages are most popular
   - **Conversions**: Set up goals for "Apply" button clicks

---

## 🔗 Creating Trackable Links for Your Posts

When you share links on LinkedIn, Twitter, etc., add UTM parameters to track exactly where traffic comes from:

### Format:
```
https://www.ruebok.com?utm_source=SOURCE&utm_medium=MEDIUM&utm_campaign=CAMPAIGN
```

### Examples:

**LinkedIn Post:**
```
https://www.ruebok.com?utm_source=linkedin&utm_medium=social&utm_campaign=launch_post
```

**Twitter/X Post:**
```
https://www.ruebok.com?utm_source=twitter&utm_medium=social&utm_campaign=launch_post
```

**Email Signature:**
```
https://www.ruebok.com?utm_source=email&utm_medium=signature&utm_campaign=personal
```

**Reddit Comment:**
```
https://www.ruebok.com?utm_source=reddit&utm_medium=social&utm_campaign=community
```

### UTM Parameter Meanings:
- **utm_source**: Where the traffic comes from (linkedin, twitter, google, direct)
- **utm_medium**: Type of traffic (social, email, cpc, organic)
- **utm_campaign**: Specific campaign name (launch_post, week1, cohort2)

---

## 📊 What You'll See in Your Dashboard

### Traffic Sources Breakdown:

1. **Direct Traffic**
   - Users typing www.ruebok.com directly
   - Clicking unmarked links
   - Referrer: (direct)

2. **Social Media**
   - LinkedIn: Referrer contains "linkedin.com"
   - Twitter: Referrer contains "t.co" or "twitter.com"
   - UTM source: "linkedin", "twitter", etc.

3. **Referrals**
   - Other websites linking to you
   - Shows exact domain that sent traffic

4. **Search Engines**
   - Google, Bing, etc.
   - Referrer contains "google.com"

5. **Email**
   - Clicks from email newsletters
   - UTM medium: "email"

---

## 🎯 Key Metrics to Track

### 1. Acquisition (Where they come from)
- Top traffic sources
- Social media breakdown
- Referrers

### 2. Engagement (What they do)
- Most visited pages
- Time on site
- Button clicks (Apply button especially!)

### 3. Conversions (Your goals)
- Apply form submissions
- Email sign-ups
- Resource downloads

---

## 🚀 Testing Your Setup

### Test PostHog:
1. Visit your website in an incognito window
2. Click around for 30 seconds
3. Log into PostHog dashboard
4. Go to "Activity" → You should see your session appear within 1-2 minutes

### Test Google Analytics:
1. Visit your website
2. Log into GA4
3. Go to "Realtime" report
4. You should see "1 user in the last 30 minutes"

---

## 🔥 Pro Tips

1. **Create a Dashboard**: Set up a dashboard in PostHog showing:
   - Traffic sources (LinkedIn vs Twitter vs Direct)
   - Top performing pages
   - Conversion funnel (Landing → Apply)

2. **Set Up Alerts**: Get notified when:
   - Traffic spikes (viral post!)
   - New high-value referrer
   - Conversion goals met

3. **Weekly Review**: Every Monday, check:
   - Which traffic source sent the most qualified leads?
   - Which posts/campaigns performed best?
   - What's your conversion rate from visitor → application?

4. **A/B Testing**: Use PostHog's feature flags to test:
   - Different hero headlines
   - Different CTA button copy
   - Different layouts

---

## ❓ Troubleshooting

**Not seeing data in PostHog?**
- Check that `.env.local` has correct API key
- Make sure you redeployed after adding environment variables
- Wait 2-3 minutes for data to appear

**Not seeing data in GA4?**
- Verify Measurement ID is correct in `index.html`
- Check that you replaced BOTH instances
- Use browser dev tools to check for errors (F12 → Console)

**UTM parameters not showing?**
- Make sure you're using the full URL with ?utm_source=...
- Check that parameters are lowercase
- Verify no spaces in the URL

---

## 📞 Need Help?

- PostHog Docs: https://posthog.com/docs
- GA4 Help: https://support.google.com/analytics
- UTM Builder: https://ga-dev-tools.google/campaign-url-builder/

---

**Ready to deploy?** Commit your changes and push to production!
