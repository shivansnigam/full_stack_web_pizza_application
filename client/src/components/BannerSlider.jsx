import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const BannerSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    fade: true,
  };

  const banners = [
    { img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop', alt: 'Delicious Pizza' },
    { img: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=2070&auto=format&fit=crop', alt: 'Hot & Fresh Pizza' },
    { img: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?q=80&w=2070&auto=format&fit=crop', alt: 'Cheesy Pizza Delight' },
    { img: 'https://images.unsplash.com/photo-1613564834361-9436948817d1?q=80&w=1943&auto=format&fit=crop', alt: 'Tasty Pizza' },
    { img: 'https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?q=80&w=1976&auto=format&fit=crop', alt: 'Classic Pizza' },
    { img: 'https://images.unsplash.com/photo-1555072956-7758afb20e8f?q=80&w=1974&auto=format&fit=crop', alt: 'Mouthwatering Pizza' }
  ];

  const handleExploreClick = (bannerAlt) => {
    const button = document.createElement('div');
    button.className = 'explore-animation';
    button.textContent = `🎯 Exploring: ${bannerAlt}`;
    document.body.appendChild(button);

    const emojis = ['🍕', '🔥', '🎉', '😋', '🍽️', '🥳'];
    emojis.forEach((emoji, index) => {
      setTimeout(() => {
        const spark = document.createElement('div');
        spark.className = 'emoji-spark';
        spark.textContent = emoji;
        spark.style.left = `${Math.random() * 100}vw`;
        spark.style.top = `${Math.random() * 100}vh`;
        document.body.appendChild(spark);

        setTimeout(() => {
          spark.remove();
        }, 1500);
      }, index * 300);
    });

    setTimeout(() => {
      button.remove();
    }, 3000);
  };

  return (
    <div className="banner-slider container-fluid px-0 mt-2">
      <Slider {...settings}>
        {banners.map((banner, index) => (
          <div key={index} className="w-100 position-relative">
            <img 
              src={banner.img} 
              alt={banner.alt}
              className="w-100 rounded banner-image"
              style={{
                height: '200px',
                objectFit: 'cover',
                transition: 'transform 0.5s ease'
              }}
            />
            <div className="banner-text">
              <h3>{banner.alt}</h3>
              <button className="explore-btn" onClick={() => handleExploreClick(banner.alt)}>Explore Now</button>
            </div>
          </div>
        ))}
      </Slider>

      <style>
        {`
          @media (min-width: 768px) {
            .banner-slider img {
              height: 300px !important;
            }
          }

          @media (min-width: 992px) {
            .banner-slider img {
              height: 400px !important;
            }
          }

          html, body {
            margin: 0;
            padding: 0;
            overflow-x: hidden;
          }

          .banner-slider .slick-list {
            margin: 0 -10px;
          }

          .banner-image:hover {
            transform: scale(1.05);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
          }

          .banner-text {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: #fff;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
            font-size: 1.5rem;
            text-align: center;
            animation: fadeIn 2s ease;
          }

          .explore-btn {
            margin-top: 10px;
            padding: 0.3rem 0.6rem;
            border: none;
            border-radius: 5px;
            background: linear-gradient(135deg, #ff7e5f, #feb47b);
            color: #fff;
            cursor: pointer;
            transition: transform 0.3s;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
            animation: pulse 2s infinite;
            font-size: 0.85rem;
          }

          .explore-btn:hover {
            transform: scale(1.2) rotate(7deg);
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @keyframes pulse {
            0% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.1);
            }
            100% {
              transform: scale(1);
            }
          }

          .explore-animation {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            padding: 12px 25px;
            background: rgba(0, 0, 0, 0.7);
            color: #fff;
            font-size: 1rem;
            border-radius: 10px;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
            animation: bounce 3s ease forwards;
            z-index: 9999;
          }

          @keyframes bounce {
            0% {
              transform: translate(-50%, -50%) scale(0.5);
              opacity: 0;
            }
            50% {
              transform: translate(-50%, -50%) scale(1.3);
              opacity: 1;
            }
            100% {
              transform: translate(-50%, -200%) scale(0.5);
              opacity: 0;
            }
          }

          .emoji-spark {
            position: fixed;
            font-size: 2rem;
            animation: floatUp 1.5s ease-out;
            pointer-events: none;
            z-index: 9999;
          }

          @keyframes floatUp {
            from {
              transform: translateY(0);
              opacity: 1;
            }
            to {
              transform: translateY(-100px);
              opacity: 0;
            }
          }
        `}
      </style>
    </div>
  );
};

export default BannerSlider;
