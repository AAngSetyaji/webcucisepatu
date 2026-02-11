<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="scroll-smooth">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="Hugo Shoes and Care, Jasa Cuci Sepatu No. 1 di Jogja & Sleman. Laundry sepatu express, bersih, wangi, dan bergaransi. Spesialis Deep Cleaning, Repaint, & Unyellowing.">
        <meta name="keywords" content="cuci sepatu jogja, laundry sepatu jogja, cuci sepatu sleman, laundry sepatu terbaik jogja, cuci sepatu terdekat, hugo shoes and care, cuci sepatu mahasiswa, repaint sepatu jogja, unyellowing sepatu jogja">
        <meta name="author" content="Hugo Shoes and Care">

        <title>Hugo Shoes and Care - Cuci Sepatu Jogja & Sleman</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
        
        <style>
            body { font-family: 'Outfit', sans-serif; }
            .floating-btn {
                transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            }
            .floating-btn:hover {
                transform: translateY(-5px) scale(1.05);
            }
        </style>

        <!-- Schema.org Structured Data for Local SEO -->
        <script type="application/ld+json">
        {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Hugo Shoes and Care",
          "image": "{{ asset('images/logo.png') }}", 
          "logo": "{{ asset('images/logo.png') }}",
          "description": "Jasa cuci sepatu dan laundry sepatu terbaik no. 1 di Jogja dan Sleman. Melayani deep cleaning, fast cleaning, repaint, dan unyellowing dengan hasil premium.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Jl. Palagan Tentara Pelajar Km 6,5, Sariharjo",
            "addressLocality": "Ngaglik",
            "addressRegion": "Sleman, DI Yogyakarta",
            "postalCode": "55581",
            "addressCountry": "ID"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": -7.726587,
            "longitude": 110.370597
          },
          "url": "{{ url('/') }}",
          "telephone": "+6285711733334",
          "priceRange": "$$",
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
              ],
              "opens": "09:00",
              "closes": "21:00"
            }
          ],
          "sameAs": [
            "https://www.instagram.com/hugoshoescare/"
          ]
        }
        </script>

        <!-- Scripts -->
        @viteReactRefresh
        @vite(['resources/css/app.css', 'resources/js/app.jsx'])
    </head>
    <body class="antialiased">
        <div id="app"></div>
    </body>
</html>
