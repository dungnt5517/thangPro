
import { LandingPageData } from './types';

export const landingPageData: LandingPageData = {
  "config": {
    "theme": {
      "primary": "#0F172A", // Royal Blue
      "secondary": "#D4AF37", // Gold
      "text_dark": "#1A202C",
      "bg_light": "#F8FAFC"
    },
    "seo": {
      "title": "THANGPRO - Dịch Vụ Vệ Sinh Chuẩn 5 Sao Thanh Hóa",
      "desc": "Trải nghiệm không gian sống đẳng cấp với dịch vụ vệ sinh chuyên nghiệp. Cam kết sạch 100%, quy trình chuẩn resort."
    }
  },
  "content": [
    {
      "id": "hero",
      "type": "hero_banner",
      "data": {
        "headline": "Đẳng Cấp Sống Sang Trong Từ Không Gian Sạch",
        "subheadline": "Dịch vụ vệ sinh cao cấp số 1 Thanh Hóa. Chúng tôi không chỉ dọn dẹp, chúng tôi kiến tạo lại sự tinh tế cho ngôi nhà bạn.",
        "cta_primary": "Nhận Tư Vấn Chuyên Sâu",
        "cta_secondary": "0975.306.998",
        "media": {
          "type": "image",
          "src": "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop",
          "placeholder_src": "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop",
          "alt": "Luxury Interior Living Room"
        }
      }
    },
    {
      "id": "pain_points",
      "type": "grid_3_col",
      "data": {
        "headline": "Tại Sao Chọn Dịch Vụ 5 Sao?",
        "cards": [
          {
            "icon": "fa-shield-virus",
            "title": "An Toàn Tuyệt Đối",
            "desc": "Sử dụng hóa chất hữu cơ nhập khẩu (3M, Ecolab), an toàn cho trẻ sơ sinh và thú cưng."
          },
          {
            "icon": "fa-gem",
            "title": "Tiêu Chuẩn Resort",
            "desc": "Quy trình cleaning tỉ mỉ từng chi tiết, từ khe cửa đến bề mặt đá Marble cao cấp."
          },
          {
            "icon": "fa-user-tie",
            "title": "Đội Ngũ Chuyên Nghiệp",
            "desc": "Nhân viên được đào tạo bài bản, đồng phục chỉnh tề, thái độ tận tâm."
          }
        ]
      }
    },
    {
      "id": "process",
      "type": "process_steps",
      "data": {
        "headline": "Quy Trình Tinh Gọn & Hiệu Quả",
        "subheadline": "Trải nghiệm dịch vụ không chạm, mọi thứ được xử lý hoàn hảo.",
        "steps": [
          {
            "step": "01",
            "title": "Khảo Sát Miễn Phí",
            "desc": "Chuyên gia đến tận nơi đánh giá hiện trạng và tư vấn giải pháp tối ưu.",
            "image": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop"
          },
          {
            "step": "02",
            "title": "Thi Công Chuyên Sâu",
            "desc": "Sử dụng máy móc hiện đại và hóa chất chuyên dụng để làm sạch sâu.",
            "image": "https://images.unsplash.com/photo-1581578731117-104f2a41272c?q=80&w=800&auto=format&fit=crop"
          },
          {
            "step": "03",
            "title": "Khử Khuẩn & Tạo Mùi",
            "desc": "Phun khử khuẩn Nano bạc và tạo hương thơm tự nhiên sang trọng.",
            "image": "https://images.unsplash.com/photo-1585435557343-3b092031a831?q=80&w=800&auto=format&fit=crop"
          },
          {
            "step": "04",
            "title": "Nghiệm Thu & Hài Lòng",
            "desc": "Gia chủ kiểm tra tỉ mỉ. Chỉ thanh toán khi hoàn toàn hài lòng 100%.",
            "image": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=800&auto=format&fit=crop"
          }
        ]
      }
    },
    {
      "id": "services",
      "type": "service_list",
      "data": {
        "headline": "Giải Pháp Vệ Sinh Toàn Diện",
        "subheadline": "Chăm sóc từng ngóc ngách căn hộ của bạn",
        "items": [
          {
            "title": "Spa Sofa & Nệm Cao Cấp",
            "price": "Công nghệ Hơi Nước Nóng",
            "features": ["Diệt khuẩn 99% bằng hơi nước", "Bảo dưỡng da/nỉ Sofa", "Sấy khô nhanh trong 2h"],
            "media": {
              "src": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop",
              "placeholder_src": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop"
            }
          },
          {
            "title": "Vệ Sinh Sau Xây Dựng",
            "price": "Tẩy Sạch 100% Vết Bẩn",
            "features": ["Hút bụi công nghiệp", "Đánh bóng sàn đá/gỗ", "Làm sạch kính mặt ngoài"],
            "media": {
              "src": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop",
              "placeholder_src": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop"
            }
          },
          {
            "title": "Tổng Vệ Sinh Định Kỳ",
            "price": "Chăm Sóc Nhà Toàn Diện",
            "features": ["Vệ sinh chi tiết Toilet/Bếp", "Sắp xếp nội thất gọn gàng", "Lau kính & Khung cửa"],
            "media": {
              "src": "https://images.unsplash.com/photo-1584622050111-993a426fbf0a?q=80&w=800&auto=format&fit=crop",
              "placeholder_src": "https://images.unsplash.com/photo-1584622050111-993a426fbf0a?q=80&w=800&auto=format&fit=crop"
            }
          }
        ]
      }
    },
    {
      "id": "social_proof",
      "type": "before_after_slider",
      "data": {
        "headline": "Hiệu Quả Thực Tế",
        "description": "Sự thay đổi ngoạn mục. Chúng tôi biến 'Cũ' thành 'Mới', biến 'Bẩn' thành 'Sáng Bóng'.",
        "before_image": {
          "src": "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop",
          "placeholder_src": "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop",
          "label": "Hiện Trạng Cũ"
        },
        "after_image": {
          "src": "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop",
          "placeholder_src": "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop",
          "label": "Sau Xử Lý (ThangPro)"
        }
      }
    },
    {
      "id": "reviews",
      "type": "testimonial_cards",
      "data": {
        "headline": "Sự Hài Lòng Của Khách Hàng Tinh Hoa",
        "reviews": [
          {
            "name": "Ms. Ngọc Lan",
            "info": "Cư dân Vinhomes Star City",
            "text": "Tôi rất kỹ tính trong việc vệ sinh sàn gỗ, nhưng ThangPro đã làm tôi bất ngờ. Nhân viên chuyên nghiệp, máy móc sạch sẽ, không gây ồn ào.",
            "avatar_placeholder": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop"
          },
          {
            "name": "Mr. Minh Tuấn",
            "info": "CEO, Chuỗi Cafe Local",
            "text": "Đã sử dụng dịch vụ giặt ghế định kỳ cho chuỗi quán cafe. Ghế sạch thơm, khô nhanh, không ảnh hưởng đến việc kinh doanh của quán.",
            "avatar_placeholder": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
          }
        ]
      }
    },
    {
      "id": "offer_cta",
      "type": "countdown_offer",
      "data": {
        "headline": "Ưu Đãi Đặc Quyền Tháng Này",
        "subheadline": "Giảm 10% Cho Gói Tổng Vệ Sinh - Chỉ Dành Cho 20 Khách Hàng Sớm Nhất",
        "button_text": "Đặt Lịch Khảo Sát Ngay",
        "phone": "0975.306.998",
        "address": "55/118 Thành Thái, P.Hàm Rồng, TP.Thanh Hóa",
        "map_iframe_src": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59972.61233735746!2d105.7445989929443!3d19.808184007232983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3136f7fd1b35291d%3A0x51052d29132776c4!2zVHAuIFRoYW5oIEhfw6EsIFRoYW5oIEhfw6E!5e0!3m2!1svi!2s!4v1709654123456!5m2!1svi!2s"
      }
    }
  ]
};
