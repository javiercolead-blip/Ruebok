# 🚀 Quick Start: Analytics Setup (5 Minutes)

## Step 1: Get PostHog API Key (2 minutes)

1. Go to [posthog.com](https://posthog.com)
2. Sign up (free)
3. Copy your API key (starts with `phc_`)

## Step 2: Add to Vercel (2 minutes)

1. Go to [vercel.com](https://vercel.com) → Your Project → Settings → Environment Variables
2. Add these two variables:
   - **Name:** `VITE_POSTHOG_API_KEY`
   - **Value:** Your API key from step 1

   - **Name:** `VITE_POSTHOG_HOST`
   - **Value:** `https://us.i.posthog.com`

3. Click "Save"

## Step 3: Deploy (1 minute)

```bash
git push
```

That's it! Analytics are now tracking.

---

## 📊 View Your Data

**PostHog Dashboard:** [app.posthog.com](https://app.posthog.com)
- See traffic sources
- Watch session recordings
- Track conversions

---

## 🔗 Create Trackable Links

When you post on LinkedIn, Twitter, etc., use these URLs:

### LinkedIn:
```
https://www.ruebok.com?utm_source=linkedin&utm_medium=social&utm_campaign=launch
```

### Twitter/X:
```
https://www.ruebok.com?utm_source=twitter&utm_medium=social&utm_campaign=launch
```

### Reddit:
```
https://www.ruebok.com?utm_source=reddit&utm_medium=social&utm_campaign=launch
```

---

## ✅ Test It Works

1. Visit your website in incognito mode
2. Click around for 30 seconds
3. Go to PostHog → Activity
4. See your session appear!

---

## 🎯 What You'll See

- **Where founders come from:** LinkedIn, Twitter, Direct, etc.
- **Which posts work best:** UTM tracking shows you
- **User behavior:** What buttons they click, which pages they visit
- **Conversion funnel:** Landing page → Apply button → Form submit

---

## Optional: Google Analytics 4

If you want GA4 too:

1. Go to [analytics.google.com](https://analytics.google.com)
2. Create property
3. Copy your Measurement ID (G-XXXXXXXXXX)
4. Edit `index.html` and replace `G-XXXXXXXXXX` with your ID (appears twice)
5. Deploy

---

**Need the full guide?** See [ANALYTICS_SETUP.md](./ANALYTICS_SETUP.md)
