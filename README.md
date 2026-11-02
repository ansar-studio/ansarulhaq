# Ansarulhaq Mubarez | انصارالحق مبارز: personal site

سایت شخصی دوزبانه (فارسی/انگلیسی)، بدون سرور و بدون پایگاه داده، آماده انتشار رایگان روی GitHub Pages یا Cloudflare Pages.

A bilingual (Persian/English) static portfolio. No server, no database, no build step.

## ساختار / Structure

```
index.html            صفحه اصلی / home
works.html            همه نمونه‌کارهای گرافیک (قاب‌ها و دسته‌ها) / all design works
project.html          صفحه پروژه (آدرس: project.html#p1) / project page
course.html           صفحه نمونه دوره (آدرس: course.html#k1) / sample course page
auth.html             ورود و ثبت‌نام (نیاز به Supabase) / sign in
presskit.html         کیت رسانه‌ای برای جشنواره‌ها / press kit
privacy.html          حریم خصوصی و حقوق / privacy and rights
404.html              صفحه پیدا نشد / not found
tools/set-domain.sh   جایگزینی دامنه در همه فایل‌ها / one-command domain swap
data/content.js       همه محتوا، لینک‌ها، پروژه‌ها و گواهی‌ها / ALL content lives here
assets/css/style.css  ظاهر / styles
assets/js/app.js      رفتار / behaviour
assets/img/           آیکون و تصاویر / icons and images
assets/work/          نمونه‌کارهای گرافیک (webp، کوچک و بزرگ) / design works
assets/certs/         تصویر مدارک c1..c44 / certificate images
downloads/            فایل‌های دانلودی (رزومه، عکس...) / downloadable files
```

## تغییر محتوا / Editing content

فقط `data/content.js` را ویرایش کن:

- لینک‌ها: برای مخفی‌کردن، `show:false` بگذار.
- پروژه و گواهی: وقتی واقعی و تأییدشد، `sample:true` را به `sample:false` تغییر بده تا برچسب «نمونه» برداشته شود.
- ویدیو: فقط شناسه یوتیوب (بخش بعد از `v=`) را در `youtube` بگذار.
- گواهی: `verifyUrl` را برابر صفحه تأیید رسمی صادرکننده بگذار.
- جوایز: وقتی `laurels` خالی نباشد، بخش جوایز خودکار ظاهر می‌شود.
- هیچ رمز یا کلید محرمانه‌ای در این فایل نگذار. همه‌چیز آن عمومی است.

## اجرا روی کامپیوتر / Run locally

```bash
cd site
python3 -m http.server 8000
# open http://localhost:8000
```

(فایل‌ها را مستقیم با دابل‌کلیک باز نکن؛ از سرور محلی استفاده کن.)

## Git و GitHub

```bash
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/ansarulhaqmubarez/YOUR-REPO.git
git push -u origin main
```

مخزن را اول **Private** بساز. هر مرحله تأییدشده را در یک commit جدا ذخیره کن.

## انتشار رایگان / Free hosting

**GitHub Pages:** مخزن، Settings، Pages، Source: `main` و پوشه `/ (root)`.
**Cloudflare Pages:** اتصال مخزن، بدون دستور build، پوشه خروجی `/`.

## دامنه / Domain (اختیاری)

۱. دامنه را بخر (حدود ۱۰ دلار در سال).
۲. در تنظیمات Pages همان دامنه را وارد کن.
۳. در پنل دامنه رکوردهای DNS را همان‌طور که GitHub یا Cloudflare نشان می‌دهد بساز.
۴. HTTPS را در همان تنظیمات روشن کن.

## قبل از انتشار عمومی / Before going public

- [ ] دامنه واقعی را با یک دستور بگذار: `bash tools/set-domain.sh https://دامنه-تو` (index، صفحه‌ها، sitemap، robots و content.js را یکجا عوض می‌کند).
- [ ] تصویر `assets/img/og.png` (۱۲۰۰×۶۳۰) را برای پیش‌نمایش لینک بساز یا جایگزین کن.
- [ ] محتوای نمونه را با محتوای واقعی عوض کن و `sample` را `false` کن.
- [ ] یک سرویس فرم (Formspree، Web3Forms و مانند آن) بساز و آدرس عمومی‌اش را در `formEndpoint` بگذار. تا آن موقع فرم چیزی ارسال نمی‌کند و این را به بازدیدکننده می‌گوید.
- [ ] `contactEmail` را فقط اگر می‌خواهی ایمیل عمومی باشد پر کن.
- [ ] مجوز موسیقی، فونت، تصویر و اجازه مشتری‌ها را بررسی کن.
- [ ] متن `privacy.html` را بخوان و اگر آمار یا خبرنامه اضافه کردی به‌روز کن.
- [ ] رمز دومرحله‌ای (2FA) را روی ایمیل، GitHub و دامنه روشن کن.
- [ ] سایت را روی یک گوشی واقعی با اینترنت معمولی خودت امتحان کن.

## نکته‌های فنی / Notes

- فونت‌ها (فرهنگ برای فارسی و انگلیسی با لایسنس خریداری‌شده؛ وزیرمتن جایگزین و JetBrains Mono برای تایم‌کد با مجوز OFL؛ کد لایسنس را در assets/fonts/FontLicense.txt بنویس) داخل `assets/fonts` هستند و به سرویس بیرونی وصل نمی‌شوند.
- **حالت سبک** برای اینترنت کند، صرفه‌جویی داده و گوشی‌های ضعیف خودکار روشن می‌شود.
- محتوا با جاوااسکریپت ساخته می‌شود. گوگل آن را می‌خواند، اما پیش‌نمایش لینک در شبکه‌ها فقط تگ‌های `<head>` را می‌بیند.
- صفحه پروژه از `#` در آدرس استفاده می‌کند. برای آدرس‌های تمیزتر بعداً می‌توان به یک سازنده سایت ایستا (مثل Astro) رفت.

## Pages added later (all static, no build)
| Page | What it is | Data |
|---|---|---|
| about.html, services.html | About and services | `education`, `experience`, `languages` in data/content.js |
| library.html | Study library (third-party links, labelled) | `library` |
| directory.html | All items: search, filters, load more | built from everything below |
| timeline.html | Dated items by year | items with `year` or `date` |
| notes.html | Today-I-learned, articles, checklists | `notes` |
| activity.html | Events, community, open source, mentoring | `activity` |
| toolkit.html | Tools, CV link, booking, live stats | `skills`, `cvTools`, `booking` |

Add a real entry by copying the shape written above `activity:` in data/content.js. Stats count only items whose status is real. Testimonials show only with `consent:true`.

## Security headers and speed
- `_headers` carries a Content-Security-Policy and cache rules for Netlify or Cloudflare Pages (GitHub Pages ignores it). Tested: no violations on all pages. If you add a new outside service (analytics, another form host), add its address to `connect-src` there.
- `sw.js` makes the site work offline and installable (https only). Network first, so updates show immediately.
- Measured with Lighthouse on mobile settings (slow network): home 82 performance and 100 accessibility; all items page 96 and 100; layout shift about 0.
