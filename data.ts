import { LandingPageData } from './types';

export const landingPageData: LandingPageData = {
  "config": {
    "theme": {
      "primary": "#0066CC",
      "secondary": "#FFD700",
      "text_dark": "#1A202C",
      "bg_light": "#F7FAFC"
    },
    "seo": {
      "title": "THANGPRO - Vệ Sinh Công Nghiệp Số 1 Thanh Hóa",
      "desc": "Dịch vụ vệ sinh nhà ở, giặt sofa, dọn nhà sau xây dựng uy tín. Hotline: 0975306998"
    }
  },
  "content": [
    {
      "id": "hero",
      "type": "hero_banner",
      "data": {
        "headline": "Nhà Sạch Bong Kin Kít - Chuẩn 5 Sao Mà Không Cần Động Tay",
        "subheadline": "Dịch vụ vệ sinh trọn gói số 1 Thanh Hóa. Trả lại không gian sống trong lành chỉ sau 3 giờ.",
        "cta_primary": "Nhận Báo Giá Ưu Đãi",
        "cta_secondary": "Gọi Ngay: 0975.306.998",
        "media": {
          "type": "image",
          "src": "https://images.unsplash.com/photo-1581578731117-104f2a41272c?q=80&w=1920&auto=format&fit=crop",
          "placeholder_src": "https://images.unsplash.com/photo-1581578731117-104f2a41272c?q=80&w=1920&auto=format&fit=crop",
          "alt": "Phòng khách sạch đẹp chuẩn 5 sao"
        }
      }
    },
    {
      "id": "pain_points",
      "type": "grid_3_col",
      "data": {
        "headline": "Đừng Để Nhà Bẩn Làm Bạn Stress!",
        "cards": [
          {
            "icon": "fa-cloud-rain",
            "title": "Nồm Ẩm Gây Mốc",
            "desc": "Sofa, Đệm bốc mùi hôi, là ổ vi khuẩn gây bệnh hô hấp cho bé."
          },
          {
            "icon": "fa-hard-hat",
            "title": "Ám Ảnh Nhà Mới",
            "desc": "Vết sơn, xi măng, bụi thạch cao bám chặt sàn. Tự lau 10 lần vẫn sạn."
          },
          {
            "icon": "fa-battery-empty",
            "title": "Kiệt Sức Cuối Tuần",
            "desc": "Thay vì nghỉ ngơi, bạn phải đánh vật với đống hỗn độn cả ngày."
          }
        ]
      }
    },
    {
      "id": "services",
      "type": "service_list",
      "data": {
        "headline": "Gói Dịch Vụ Được Chọn Nhiều Nhất",
        "items": [
          {
            "title": "Giặt Sofa - Nệm - Rèm",
            "price": "Từ 250K/bộ",
            "features": ["Công nghệ hơi nước nóng", "Diệt khuẩn 99%", "Khô ngay trong ngày"],
            "media": {
              "src": "https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?q=80&w=800&auto=format&fit=crop",
              "placeholder_src": "https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?q=80&w=800&auto=format&fit=crop"
            }
          },
          {
            "title": "Vệ Sinh Sau Xây Dựng",
            "price": "Khảo sát báo giá",
            "features": ["Máy chà sàn công nghiệp", "Hút bụi công suất lớn", "Tẩy sạch sơn/xi măng"],
            "media": {
              "src": "https://images.unsplash.com/photo-1505798577917-a65157d3320a?q=80&w=800&auto=format&fit=crop",
              "placeholder_src": "https://images.unsplash.com/photo-1505798577917-a65157d3320a?q=80&w=800&auto=format&fit=crop"
            }
          },
          {
            "title": "Tổng Vệ Sinh Định Kỳ",
            "price": "Theo giờ / Trọn gói",
            "features": ["Lau kính, sàn, toilet", "Dọn dẹp sắp xếp đồ đạc", "Nhân viên thạo việc"],
            "media": {
              "src": "https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?q=80&w=800&auto=format&fit=crop",
              "placeholder_src": "https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?q=80&w=800&auto=format&fit=crop"
            }
          }
        ]
      }
    },
    {
      "id": "social_proof",
      "type": "before_after_slider",
      "data": {
        "headline": "Người Thật Việc Thật - Kết Quả Chứng Minh",
        "description": "Kéo thanh trượt để xem sự khác biệt trước và sau khi ThangPro thi công.",
        "before_image": {
          "src": "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1600&auto=format&fit=crop",
          "placeholder_src": "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1600&auto=format&fit=crop",
          "label": "Trước khi dọn"
        },
        "after_image": {
          "src": "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1600&auto=format&fit=crop",
          "placeholder_src": "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1600&auto=format&fit=crop",
          "label": "Sau khi ThangPro xử lý"
        }
      }
    },
    {
      "id": "reviews",
      "type": "testimonial_cards",
      "data": {
        "headline": "Khách Hàng Thanh Hóa Nói Gì?",
        "reviews": [
          {
            "name": "Chị Lan",
            "info": "Vinhomes Star City",
            "text": "Mới nhận nhà bụi kinh khủng, may mà gọi đội ThangPro. Các bạn làm kỹ, tẩy sạch hết vết sơn trên sàn gỗ. 10 điểm!",
            "avatar_placeholder": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop"
          },
          {
            "name": "Anh Tuấn",
            "info": "Cafe đường Lê Hoàn",
            "text": "Ghế sofa quán mình bị đổ cafe ố vàng, tưởng phải vứt đi. Thế mà các bạn giặt xong nhìn như mới. Giá lại hợp lý.",
            "avatar_placeholder": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
          }
        ]
      }
    },
    {
      "id": "offer_cta",
      "type": "countdown_offer",
      "data": {
        "headline": "Ưu Đãi 10% Cho 20 Khách Hàng Đầu Tiên",
        "subheadline": "Cam kết: Không Sạch - Không Nhận Tiền",
        "button_text": "Đăng Ký Nhận Ưu Đãi Ngay",
        "phone": "0975.306.998",
        "address": "55/118 Thành Thái, P.Hàm Rồng, TP.Thanh Hóa",
        "map_iframe_src": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59972.61233735746!2d105.7445989929443!3d19.808184007232983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3136f7fd1b35291d%3A0x51052d29132776c4!2zVHAuIFRoYW5oIEhfw6EsIFRoYW5oIEhfw6E!5e0!3m2!1svi!2s!4v1709654123456!5m2!1svi!2s"
      }
    }
  ]
};